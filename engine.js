/* ============================================
   Engine — Core game logic, localStorage,
   phase transitions, costume gallery, summary,
   persistent countdown & secret flirty wolf easter egg
   ============================================ */

const Engine = {
  currentPhase: 1,
  rejectionCount: 0,
  answers: {},
  questionIndex: { phase2: 0, phase4: 0 },
  halloweenDate: null,
  countdownInterval: null,
  secretUnlocked: false,
  wolfTimeout: null,

  init() {
    this.loadState();
    this.setupEventListeners();
    this.setHalloweenDate();
    this.startCountdown();
    this.updateCountdownVisibility(this.currentPhase);

    // If state has completed answers, resume at summary
    if (this.answers.name && (this.answers.selected_costume_title || this.answers.place)) {
      this.goToPhase(5);
    }
  },

  // === State Management ===
  saveState() {
    const state = {
      answers: this.answers,
      rejectionCount: this.rejectionCount,
      currentPhase: this.currentPhase,
      halloweenDate: this.halloweenDate?.toISOString() || null,
      secretUnlocked: this.secretUnlocked,
    };
    try {
      localStorage.setItem('halloween-2026', JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save state to localStorage:', e);
    }
  },

  loadState() {
    try {
      const saved = localStorage.getItem('halloween-2026');
      if (saved) {
        const state = JSON.parse(saved);
        this.answers = state.answers || {};
        this.rejectionCount = state.rejectionCount || 0;
        this.secretUnlocked = !!state.secretUnlocked;
        if (state.halloweenDate) {
          this.halloweenDate = new Date(state.halloweenDate);
        }
      }
    } catch (e) {
      console.warn('Could not load saved state:', e);
    }
  },

  clearState() {
    this.answers = {};
    this.rejectionCount = 0;
    this.currentPhase = 1;
    this.questionIndex = { phase2: 0, phase4: 0 };
    this.secretUnlocked = false;
    document.body.classList.remove('secret-mode-active');
    this.hideWolfWhisper();
    localStorage.removeItem('halloween-2026');
  },

  setHalloweenDate() {
    if (!this.halloweenDate) {
      this.halloweenDate = new Date(2026, 9, 31, 20, 0, 0); // Oct 31, 2026
    }
  },

  // === Event Listeners ===
  setupEventListeners() {
    // Phase 1 buttons
    document.getElementById('btn-yes')?.addEventListener('click', () => this.acceptInvitation());
    document.getElementById('btn-no')?.addEventListener('click', (e) => this.rejectInvitation(e));

    // Puppy modal buttons
    document.getElementById('puppy-close')?.addEventListener('click', () => this.hidePuppyModal());
    document.getElementById('puppy-backdrop')?.addEventListener('click', () => this.hidePuppyModal());
    document.getElementById('puppy-dismiss-btn')?.addEventListener('click', () => this.hidePuppyModal());
    document.getElementById('puppy-accept-btn')?.addEventListener('click', () => {
      this.hidePuppyModal();
      this.acceptInvitation();
    });

    // Wolf easter egg close button
    document.getElementById('wolf-dismiss-btn')?.addEventListener('click', () => {
      this.hideWolfWhisper();
    });

    // Phase 2 navigation
    document.getElementById('btn-prev')?.addEventListener('click', () => this.prevQuestion('phase2'));
    document.getElementById('btn-next')?.addEventListener('click', () => this.nextQuestion('phase2'));

    // Phase 3 navigation (Costumes)
    document.getElementById('btn-prev-2')?.addEventListener('click', () => {
      this.goToPhase(2);
      this.questionIndex.phase2 = getQuestions('phase2').length - 1;
      this.renderQuestion('phase2');
    });
    document.getElementById('btn-next-2')?.addEventListener('click', () => {
      this.goToPhase(4);
      this.questionIndex.phase4 = 0;
      this.renderQuestion('phase4');
    });

    // Phase 4 navigation (Night Plan & Place)
    document.getElementById('btn-prev-3')?.addEventListener('click', () => this.prevQuestion('phase4'));
    document.getElementById('btn-next-3')?.addEventListener('click', () => {
      const questions = getQuestions('phase4');
      const idx = this.questionIndex.phase4;
      if (idx >= questions.length - 1) {
        this.finishQuestionnaire();
      } else {
        this.nextQuestion('phase4');
      }
    });

    // Phase 5 actions
    document.getElementById('btn-copy')?.addEventListener('click', () => this.copySummary());
    document.getElementById('btn-restart')?.addEventListener('click', () => this.restart());
    // Removed group costume generator

    // When clicking WhatsApp group link, auto copy summary to clipboard
    document.getElementById('btn-whatsapp')?.addEventListener('click', () => {
      const text = this.buildSummaryText();
      navigator.clipboard?.writeText(text).then(() => {
        this.showToast('📋 ¡Expediente copiado! Al entrar al grupo dale "Pegar" para debatir.');
      });
    });

    // Language toggle
    document.getElementById('lang-toggle')?.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setLang(newLang);
      const span = document.getElementById('lang-toggle')?.querySelector('span');
      if (span) span.textContent = newLang === 'es' ? 'EN' : 'ES';

      if (this.currentPhase === 2) this.renderQuestion('phase2');
      if (this.currentPhase === 3) this.renderCostumeGallery();
      if (this.currentPhase === 4) this.renderQuestion('phase4');
      if (this.currentPhase === 5) this.renderSummary();
    });

    // Motion toggle
    document.getElementById('motion-toggle')?.addEventListener('click', () => {
      document.body.classList.toggle('reduce-motion');
      const isReduced = document.body.classList.contains('reduce-motion');
      localStorage.setItem('halloween-reduce-motion', isReduced);
    });

    if (localStorage.getItem('halloween-reduce-motion') === 'true') {
      document.body.classList.add('reduce-motion');
    }
  },

  // === Secret Detection Logic (María / Angélica / Ángel) ===
  checkSecretName(name) {
    if (!name || typeof name !== 'string') return false;
    const clean = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const keywords = ['maria', 'angelica', 'angel', 'angie', 'mari', 'mary'];
    return keywords.some((k) => clean.includes(k));
  },

  unlockSecretMode(targetName) {
    this.secretUnlocked = true;
    this.saveState();

    document.body.classList.add('secret-mode-active');
    Audio?.play('success');

    // Show initial wolf entrance with loboparado.png
    setTimeout(() => {
      this.showWolfWhisper(
        `Vaya, vaya... así que eres tú, ${targetName}... 😏🐺 Ya te tenía en la mira para esta noche y créeme que no te me vas a escapar. 🐾🔥`,
        'assets/disfraces/img_secretas/loboparado.png',
        7000
      );
    }, 400);

    Ghost.speak(`¡Atención en el aquelarre! La más deseada acaba de ingresar su nombre... 😏🖤`, 5000);
  },

  showWolfWhisper(text, imgSrc = 'assets/disfraces/img_secretas/loboparado.png', duration = 6000) {
    const overlay = document.getElementById('secret-wolf-overlay');
    const quoteEl = document.getElementById('wolf-quote-text');
    const avatarEl = document.getElementById('wolf-avatar-img');
    if (!overlay || !quoteEl) return;

    if (avatarEl) avatarEl.src = imgSrc;
    quoteEl.textContent = text;

    overlay.classList.remove('hidden');
    overlay.classList.add('wolf-entering');

    if (this.wolfTimeout) clearTimeout(this.wolfTimeout);
    if (duration > 0) {
      this.wolfTimeout = setTimeout(() => {
        this.hideWolfWhisper();
      }, duration);
    }
  },

  hideWolfWhisper() {
    const overlay = document.getElementById('secret-wolf-overlay');
    if (!overlay) return;
    overlay.classList.remove('wolf-entering');
    overlay.classList.add('wolf-exiting');
    setTimeout(() => {
      overlay.classList.add('hidden');
      overlay.classList.remove('wolf-exiting');
    }, 400);
  },

  // === Persistent Countdown Visibility ===
  updateCountdownVisibility(phase = this.currentPhase) {
    const bar = document.getElementById('persistent-countdown');
    if (!bar) return;
    if (phase === 1) {
      bar.classList.add('hidden');
      bar.style.display = 'none';
    } else {
      bar.classList.remove('hidden');
      bar.style.display = 'flex';
    }
  },

  // === Phase 1: Invitation & Puppy Reaction ===
  acceptInvitation() {
    this.hidePuppyModal();
    const wasRejected = this.rejectionCount > 0;
    Ghost.reactToAccept(wasRejected);
    Audio?.play('success');

    setTimeout(() => {
      this.goToPhase(2);
      Ghost.welcome();
      this.renderQuestion('phase2');
    }, 2200);
  },

  rejectInvitation(e) {
    this.rejectionCount++;
    this.saveState();

    const counter = document.getElementById('rejection-counter');
    const countEl = document.getElementById('reject-count');
    counter?.classList.remove('hidden');
    if (countEl) countEl.textContent = this.rejectionCount;

    // Escaping button animation
    const btn = e?.currentTarget;
    if (btn && this.rejectionCount <= 5) {
      this.escapeButton(btn);
    }

    Ghost.reactToRejection(this.rejectionCount);

    document.getElementById('phase-1')?.classList.add('shake');
    setTimeout(() => {
      document.getElementById('phase-1')?.classList.remove('shake');
    }, 500);

    Audio?.play('reject');

    // Show puppy meme modal
    setTimeout(() => {
      this.showPuppyModal('rejection');
    }, 1200);
  },

  escapeButton(btn) {
    btn.classList.add('btn-escaping');
    const maxOffset = window.innerWidth < 480 ? 30 : 60;
    const randomX = (Math.random() - 0.5) * maxOffset;
    const randomY = (Math.random() - 0.5) * 20;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    setTimeout(() => {
      btn.style.transform = '';
      btn.classList.remove('btn-escaping');
    }, 2000);
  },

  // === Puppy Meme Modal ===
  showPuppyModal(context = 'rejection') {
    const modal = document.getElementById('puppy-modal');
    const titleEl = document.getElementById('puppy-title');
    const textEl = document.getElementById('puppy-text');
    const acceptBtn = document.getElementById('puppy-accept-btn');
    if (!modal) return;

    if (context === 'rejection') {
      if (titleEl) titleEl.textContent = '¿CÓMO QUE NO VAS A IR? 🥺🐾';
      if (textEl) {
        textEl.textContent = 'Toy chiquito y me dio amsiedad... ¿Vas a dejar a este perrito solo en Halloween? ¡No seas aguafiestas y ven a parchar con nosotros!';
      }
      if (acceptBtn) acceptBtn.textContent = 'Bueno ya, ¡me convenciste! 🎉👻';
    } else {
      if (titleEl) titleEl.textContent = '🥺 "Toy chiquito no sé qué contestar..."';
      if (textEl) {
        textEl.textContent = '¡Tranqui, no te sientas presionado(a)! El lugar y los disfraces se terminarán de debatir y votar entre todos en el grupo de WhatsApp. ¡Escribe o elige lo primero que se te ocurra y dale a siguiente!';
      }
      if (acceptBtn) acceptBtn.textContent = '¡Entendido, continuemos! 🐾';
    }

    modal.classList.remove('hidden');
    Audio?.play('ghost');
  },

  hidePuppyModal() {
    const modal = document.getElementById('puppy-modal');
    modal?.classList.add('hidden');
  },

  // === Phase Transitions ===
  goToPhase(phase) {
    document.querySelectorAll('.phase').forEach((p) => {
      p.classList.remove('phase-active');
    });

    const target = document.getElementById(`phase-${phase}`);
    if (target) {
      setTimeout(() => {
        target.classList.add('phase-active');
      }, 250);
    }

    this.currentPhase = phase;
    this.updateCountdownVisibility(phase);
    this.saveState();

    if (phase === 3) {
      this.renderCostumeGallery();
      Ghost.enterFrom('center-right');
      Ghost.speak('¡Laboratorio de Disfraces! Elige una idea o el combo de conejitas con zanahorias 🐰🥕', 7000);

      if (this.secretUnlocked || window.SecretEngine?.active) {
        setTimeout(() => {
          window.SecretEngine?.triggerIntervention('phase3_costumes');
        }, 1200);
      }
    } else if (phase === 4) {
      this.renderQuestion('phase4');
      Ghost.enterFrom('bottom-left');
      Ghost.speak('¡Ahora lo importante! ¿A dónde propones ir para debatir en el grupo? 📍🍻', 6500);

      if (this.secretUnlocked || window.SecretEngine?.active) {
        setTimeout(() => {
          window.SecretEngine?.triggerIntervention('phase4_place');
        }, 1200);
      }
    } else if (phase === 5) {
      this.renderSummary();
      this.startCountdown();
      // Group costume generator removed
      this.generateSecretCard();
      Ghost.enterFrom('bottom-right');
      Ghost.setState('happy');
    }
  },

  // === Phase 2 & 4 Questionnaire Engine ===
  renderQuestion(phase) {
    this.updateCountdownVisibility(phase === 'phase2' ? 2 : 4);
    const questions = getQuestions(phase);
    const idx = this.questionIndex[phase];
    const q = questions[idx];
    if (!q) return;

    const containerId = phase === 'phase2' ? 'question-container' : 'plan-container';
    const container = document.getElementById(containerId);
    if (!container) return;

    // Update progress
    const progressFillId = phase === 'phase2' ? 'progress-fill' : 'progress-fill-3';
    const progressTextId = phase === 'phase2' ? 'progress-text' : 'progress-text-3';
    const fill = document.getElementById(progressFillId);
    const text = document.getElementById(progressTextId);
    if (fill) fill.style.width = `${((idx + 1) / questions.length) * 100}%`;
    if (text) text.textContent = `${idx + 1} / ${questions.length}`;

    // Update nav buttons
    const prevId = phase === 'phase2' ? 'btn-prev' : 'btn-prev-3';
    const nextId = phase === 'phase2' ? 'btn-next' : 'btn-next-3';
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    if (prevBtn) prevBtn.disabled = idx === 0;

    if (nextBtn) {
      if (phase === 'phase2' && idx === questions.length - 1) {
        nextBtn.textContent = 'Ver Ideas de Disfraces 🎭 →';
      } else if (phase === 'phase4' && idx === questions.length - 1) {
        nextBtn.textContent = 'Ver mi expediente final 📜 →';
      } else {
        nextBtn.textContent = t('next');
      }
    }

    // Build question HTML
    let html = `
      <div class="question-slide" id="q-slide">
        <div class="question-emoji">${q.emoji}</div>
        <h2 class="question-title">${q.title}</h2>
        <p class="question-subtitle">${q.subtitle}</p>
    `;

    if (q.type === 'options') {
      html += '<div class="options-grid">';
      q.options.forEach((opt) => {
        const selected = this.answers[q.storageKey] === opt.value ? 'selected' : '';
        html += `<button class="option-btn ${selected}" data-value="${opt.value}" data-id="${opt.id}" data-key="${q.storageKey}" data-qid="${q.id}" data-puppy="${opt.triggerPuppy ? 'true' : 'false'}">${opt.text}</button>`;
      });
      html += '</div>';

      // Inline puppy banner container
      const isPuppyChosen = this.answers[q.storageKey]?.includes('Necesita ideas') || this.answers[q.storageKey]?.includes('Toy chiquito');
      html += `
        <div id="puppy-inline-banner" class="puppy-inline-card ${isPuppyChosen ? '' : 'hidden'}">
          <img src="assets/disfraces/no_response.jpg" alt="Perrito confundido" class="puppy-mini-img" />
          <div class="puppy-inline-text">
            <strong>🥺 "Toy chiquito no sé qué ponerme..."</strong>
            <span>¡Tranqui criatura! En el siguiente paso te preparamos el Laboratorio de Disfraces con fotos reales y frases para que solo tengas que elegir.</span>
          </div>
        </div>
      `;
    } else if (q.type === 'place_input') {
      const val = this.answers[q.storageKey] || '';
      html += `
        <div class="place-input-wrapper">
          <textarea id="place-input" class="text-input place-textarea" data-key="${q.storageKey}" placeholder="${q.placeholder}" rows="3">${val}</textarea>
          
          <div class="quick-tags-container">
            <span class="quick-tags-label">💡 Ideas rápidas de lugares (toca para agregar):</span>
            <div class="quick-tags-list">
              ${(q.quickTags || []).map((tag) => `<button type="button" class="quick-tag-chip" data-tag="${tag}">${tag}</button>`).join('')}
            </div>
          </div>
          
          <div class="puppy-hint-row">
            <button type="button" id="btn-puppy-hint" class="puppy-hint-btn">
              🥺 ¿No sabes qué lugar poner? (Toy chiquito)
            </button>
          </div>
        </div>
      `;
    } else if (q.type === 'text') {
      const value = this.answers[q.storageKey] || '';
      html += `<textarea class="text-input" id="name-input-field" data-key="${q.storageKey}" placeholder="${q.placeholder}" ${q.required ? 'required' : ''}>${value}</textarea>`;
    }

    html += '</div>';
    container.innerHTML = html;

    // Attach option click handlers
    container.querySelectorAll('.option-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const key = e.currentTarget.dataset.key;
        const value = e.currentTarget.dataset.value;
        const qid = e.currentTarget.dataset.qid;
        const optId = e.currentTarget.dataset.id;
        const isPuppy = e.currentTarget.dataset.puppy === 'true';

        this.answers[key] = value;
        this.saveState();

        container.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('selected'));
        e.currentTarget.classList.add('selected');

        const puppyBanner = document.getElementById('puppy-inline-banner');
        if (puppyBanner) {
          if (isPuppy) {
            puppyBanner.classList.remove('hidden');
          } else {
            puppyBanner.classList.add('hidden');
          }
        }

        Ghost.reactToAnswer(qid, optId);
        Audio?.play('select');

        // Secret progression on answering questions
        if (this.secretUnlocked || window.SecretEngine?.active) {
          window.SecretEngine?.onUserProgress();
        }
      });
    });

    // Attach place chips handlers
    container.querySelectorAll('.quick-tag-chip').forEach((chip) => {
      chip.addEventListener('click', (e) => {
        const tag = e.currentTarget.dataset.tag;
        const input = document.getElementById('place-input');
        if (input) {
          if (input.value.trim()) {
            input.value = `${input.value}, ${tag}`;
          } else {
            input.value = tag;
          }
          this.answers[q.storageKey] = input.value;
          this.saveState();
          Audio?.play('select');
        }
      });
    });

    // Attach puppy hint handler
    document.getElementById('btn-puppy-hint')?.addEventListener('click', () => {
      this.showPuppyModal('unsure');
    });

    // Attach text inputs handlers & Secret Name Checking (multi-event for mobile keyboard compatibility)
    container.querySelectorAll('.text-input').forEach((input) => {
      ['input', 'change', 'blur', 'keyup', 'paste'].forEach((evt) => {
        input.addEventListener(evt, (e) => {
          const key = e.target.dataset.key;
          const val = e.target.value;
          this.answers[key] = val;
          this.saveState();

          // Real-time check for María / Angélica / Ángel / Nico
          if (key === 'name' && window.SecretEngine) {
            window.SecretEngine.onNameInput(val);
          }
        });
      });
    });
  },

  nextQuestion(phase) {
    const questions = getQuestions(phase);
    const idx = this.questionIndex[phase];
    const q = questions[idx];

    // Check if name question matches secret in case input event was delayed on mobile
    if (this.answers.name && window.isSecretMatch && window.isSecretMatch(this.answers.name)) {
      this.secretUnlocked = true;
      if (window.SecretEngine && !window.SecretEngine.active) {
        window.SecretEngine.activate(this.answers.name);
      }
    }

    // Validate required fields
    if (q && q.type === 'text' && q.required) {
      if (!this.answers[q.storageKey]?.trim()) {
        const input = document.querySelector('.text-input');
        input?.classList.add('shake');
        setTimeout(() => input?.classList.remove('shake'), 500);
        return;
      }
    }

    const slide = document.getElementById('q-slide');
    if (slide) {
      slide.classList.add('slide-out');
      setTimeout(() => {
        if (idx < questions.length - 1) {
          this.questionIndex[phase]++;
          this.renderQuestion(phase);
        } else {
          if (phase === 'phase2') {
            this.goToPhase(3); // Go to Costume Gallery!
          }
        }
      }, 250);
    } else {
      if (idx < questions.length - 1) {
        this.questionIndex[phase]++;
        this.renderQuestion(phase);
      } else if (phase === 'phase2') {
        this.goToPhase(3);
      }
    }

    Audio?.play('transition');
    if (this.secretUnlocked || window.SecretEngine?.active) {
      window.SecretEngine?.onUserProgress();
    }
  },

  prevQuestion(phase) {
    if (this.questionIndex[phase] > 0) {
      this.questionIndex[phase]--;
      this.renderQuestion(phase);
      Audio?.play('transition');
    }
  },

  // === Phase 3: Laboratorio de Disfraces Gallery ===
  renderCostumeGallery() {
    this.updateCountdownVisibility(3);
    const gallery = document.getElementById('costume-gallery');
    if (!gallery) return;

    const ideas = getCostumeIdeas();
    const selectedId = this.answers.selected_costume_id || 'conejitas_zanahorias';

    let html = '';
    ideas.forEach((item) => {
      const isSelected = selectedId === item.id;
      const selectedClass = isSelected ? 'selected' : '';

      if (item.isCombo) {
        const role = this.answers.selected_costume_role || 'Combo Conejitas + Zanahorias 🐰🥕';
        html += `
          <div class="costume-card combo-card ${selectedClass}" data-id="${item.id}" data-title="${item.title}" data-phrase="${item.phrase}" data-image="${item.image1}">
            <div class="costume-badge combo-badge">${item.badge}</div>
            
            <div class="costume-dual-view">
              <div class="dual-half">
                <img src="${item.image1}" alt="${item.image1Label}" class="dual-img" onerror="this.src='assets/disfraces/no_response.jpg'" />
                <span class="dual-label">${item.image1Label}</span>
              </div>
              <div class="dual-vs">VS / MATCH</div>
              <div class="dual-half">
                <img src="${item.image2}" alt="${item.image2Label}" class="dual-img" onerror="this.src='assets/disfraces/no_response.jpg'" />
                <span class="dual-label">${item.image2Label}</span>
              </div>
            </div>

            <div class="costume-card-content">
              <div class="costume-tag">${item.tag}</div>
              <h3 class="costume-card-title">${item.title}</h3>
              <div class="costume-phrase">💬 "${item.phrase}"</div>
              <p class="costume-desc">${item.desc}</p>

              <div class="combo-roles-selector">
                <span class="combo-roles-label">¿Cuál sería tu rol en este combo?</span>
                <div class="combo-roles-options">
                  ${item.roles.map((r) => `
                    <label class="combo-role-pill ${role === r.val ? 'active' : ''}">
                      <input type="radio" name="combo_role" value="${r.val}" ${role === r.val ? 'checked' : ''} />
                      ${r.text}
                    </label>
                  `).join('')}
                </div>
              </div>

              <button type="button" class="btn btn-select-costume ${isSelected ? 'btn-selected' : ''}">
                ${isSelected ? '✅ ¡Idea Seleccionada!' : '🎯 Seleccionar esta propuesta'}
              </button>
            </div>
          </div>
        `;
      } else if (item.isCustom) {
        const customText = this.answers.custom_costume_text || '';
        html += `
          <div class="costume-card custom-card ${selectedClass}" data-id="${item.id}" data-title="${item.title}" data-phrase="${item.phrase}" data-image="">
            <div class="costume-badge">${item.badge}</div>
            <div class="custom-card-icon">💡✨</div>
            <div class="costume-card-content">
              <div class="costume-tag">${item.tag}</div>
              <h3 class="costume-card-title">${item.title}</h3>
              <p class="costume-desc">${item.desc}</p>
              
              <textarea id="custom-costume-input" class="text-input" placeholder="Escribe aquí tu disfraz soñado o idea loca…" rows="2">${customText}</textarea>
              
              <button type="button" class="btn btn-select-costume ${isSelected ? 'btn-selected' : ''}">
                ${isSelected ? '✅ ¡Idea Seleccionada!' : '🎯 Guardar mi propia idea'}
              </button>
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="costume-card ${selectedClass}" data-id="${item.id}" data-title="${item.title}" data-phrase="${item.phrase}" data-image="${item.image}">
            <div class="costume-badge">${item.badge}</div>
            <div class="costume-img-wrapper">
              <img src="${item.image}" alt="${item.title}" class="costume-img" loading="lazy" onerror="this.src='assets/disfraces/no_response.jpg'" />
            </div>
            <div class="costume-card-content">
              <div class="costume-tag">${item.tag}</div>
              <h3 class="costume-card-title">${item.title}</h3>
              <div class="costume-phrase">💬 "${item.phrase}"</div>
              <p class="costume-desc">${item.desc}</p>
              <button type="button" class="btn btn-select-costume ${isSelected ? 'btn-selected' : ''}">
                ${isSelected ? '✅ ¡Idea Seleccionada!' : '🎯 Seleccionar esta propuesta'}
              </button>
            </div>
          </div>
        `;
      }
    });

    gallery.innerHTML = html;

    // Attach card click handlers
    gallery.querySelectorAll('.costume-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

        const id = card.dataset.id;
        const title = card.dataset.title;
        const phrase = card.dataset.phrase;
        const image = card.dataset.image;

        this.answers.selected_costume_id = id;
        this.answers.selected_costume_title = title;
        this.answers.selected_costume_phrase = phrase;
        this.answers.selected_costume_image = image;

        if (id === 'conejitas_zanahorias') {
          const checkedRadio = card.querySelector('input[name="combo_role"]:checked');
          this.answers.selected_costume_role = checkedRadio ? checkedRadio.value : 'Combo Conejitas + Zanahorias 🐰🥕';
          Ghost.speak('¡JAJAJA "Las conejitas con su alimento"! 🐰🥕 ¡Ese match va a ser lo más comentado de la fiesta!', 5000);
        } else if (id === 'cervezas') {
          Ghost.speak('¡El Six-Pack de Corona! 🍻 ¡Si uno se cae a las 3 AM, se caen los 6 juntos!', 4500);
        } else if (id === 'scooby') {
          Ghost.speak('¡Misterio a la Orden! 🔎🐶 ¡Alguien tiene que vestirse de Scooby o de fantasma!', 4500);
        } else {
          Ghost.speak(`¡Excelente elección! "${title}" le va a dar toda la onda a la noche. 🎭`, 4000);
        }

        this.saveState();
        this.renderCostumeGallery();
        Audio?.play('select');
        if (this.secretUnlocked || window.SecretEngine?.active) {
          window.SecretEngine?.onUserProgress();
        }
      });
    });

    // Combo role radio change
    gallery.querySelectorAll('input[name="combo_role"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        this.answers.selected_costume_role = e.target.value;
        this.saveState();
        Audio?.play('select');
      });
    });

    // Custom costume input change
    const customInput = document.getElementById('custom-costume-input');
    customInput?.addEventListener('input', (e) => {
      this.answers.custom_costume_text = e.target.value;
      if (this.answers.selected_costume_id === 'otra_idea') {
        this.answers.selected_costume_title = e.target.value || 'Idea Personalizada';
      }
      this.saveState();
    });
  },

  finishQuestionnaire() {
    const textInput = document.querySelector('#plan-container .text-input');
    if (textInput) {
      this.answers[textInput.dataset.key] = textInput.value;
    }
    this.saveState();
    this.goToPhase(5);
    Audio?.play('success');
  },

  // === Summary Generation & WhatsApp Share ===
  renderSummary() {
    this.updateCountdownVisibility(5);
    const summaryText = this.buildSummaryText();
    const el = document.getElementById('summary-text');
    if (el) el.textContent = summaryText;

    // Secret flirty card if unlocked
    const secretCard = document.getElementById('secret-love-card');
    if (secretCard) {
      const hasSecretMatch = this.secretUnlocked || (this.answers.name && window.isSecretMatch && window.isSecretMatch(this.answers.name)) || window.SecretEngine?.active;
      if (hasSecretMatch) {
        this.secretUnlocked = true;
        secretCard.classList.remove('hidden');
        const customTarget = this.answers.name || 'hermosa';
        const pEl = document.getElementById('secret-love-text');
        if (pEl) {
          pEl.textContent = `"${customTarget}... No te hagas la inocente. Ya sabes quién te está mirando con otros ojos desde hace rato. Esta noche de Halloween no te me vas a escapar. El primer trago va por mi cuenta y el resto lo decidimos en la pista... o donde la oscuridad nos lleve. 😏🐺🖤"`;
        }
      } else {
        secretCard.classList.add('hidden');
      }
    }

    // Render chosen costume card preview
    const costumeCard = document.getElementById('summary-costume-card');
    if (costumeCard) {
      const cTitle = this.answers.selected_costume_title || 'Las Conejitas con su Alimento 🐰🥕';
      const cPhrase = this.answers.selected_costume_phrase || 'Las conejitas con su alimento: Ellas imponen la elegancia y ellos ponen los nutrientes.';
      const cImg = this.answers.selected_costume_image;
      const cRole = this.answers.selected_costume_role;

      costumeCard.classList.remove('hidden');
      costumeCard.innerHTML = `
        <div class="summary-costume-inner">
          ${(cImg && cImg.trim()) ? `<img src="${cImg}" alt="${cTitle}" class="summary-costume-thumb" onerror="this.src='assets/disfraces/no_response.jpg'" />` : '<div class="summary-costume-icon-fallback">🎭</div>'}
          <div class="summary-costume-details">
            <span class="summary-badge-pill">🎭 Tu propuesta de disfraz</span>
            <h4 class="summary-costume-h4">${cTitle}</h4>
            ${cRole ? `<p class="summary-costume-role"><strong>Rol elegido:</strong> ${cRole}</p>` : ''}
            <div class="summary-costume-quote">💬 "${cPhrase}"</div>
          </div>
        </div>
      `;
    }

    // Render place highlight card
    const placeCard = document.getElementById('summary-place-card');
    if (placeCard) {
      const place = this.answers.place?.trim() || 'A debatir con el grupo en WhatsApp';
      placeCard.classList.remove('hidden');
      placeCard.innerHTML = `
        <div class="summary-place-inner">
          <div class="place-icon-col">📍</div>
          <div class="place-text-col">
            <span class="place-sublabel">LUGAR PROPUESTO PARA EL DEBATE:</span>
            <div class="place-main-val">${place}</div>
            <span class="place-hint-small">🗳️ Se abrirá la votación en el grupo para ver si al parche le da la talla.</span>
          </div>
        </div>
      `;
    }

    // Direct WhatsApp share button
    const shareBtn = document.getElementById('btn-whatsapp-share');
    if (shareBtn) {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(summaryText)}`;
      shareBtn.setAttribute('href', waUrl);
    }
  },

  buildSummaryText() {
    const a = this.answers;
    const costumeName = a.selected_costume_title || a.costume || a.costume_status || 'Por definir';
    const costumeRole = a.selected_costume_role;
    const costumePhrase = a.selected_costume_phrase;
    const placeProposed = a.place?.trim() || 'A definir en votación con el grupo';

    const lines = [
      '🎃 *EXPEDIENTE DE HALLOWEEN 2026* 👻',
      '═══════════════════════════════',
      `👤 *Víctima:* ${a.name || 'Anónimo'}`,
      `🎭 *Disfraz elegido:* ${costumeName}${costumeRole ? ` (${costumeRole})` : ''}`,
    ];

    if (costumePhrase) {
      lines.push(`💬 _"${costumePhrase}"_`);
    }

    lines.push(
      `📍 *LUGAR QUE PROPONGO DEBATIR:* ${placeProposed}`,
      `👥 *Modalidad:* ${a.mode || 'Solo'}`,
      `🕐 *Disponibilidad:* ${a.availability || 'Toda la noche'}`,
      `💰 *Presupuesto:* ${a.budget || 'Normal'}`,
      `🚗 *Transporte:* ${a.transport || 'Lo resuelvo después'}`
    );

    if (this.secretUnlocked || window.SecretEngine?.active) {
      lines.push('🐺 *P.D. de Nico:* Entre partidos de basket y sonrisas que desvían la atención, esta noche la reservamos los dos. No te me escapas. 😏🏀✨');
    }

    lines.push(
      '═══════════════════════════════',
      '👉 *¿Qué opinan del lugar y del disfraz? ¡Se abre el debate en el grupo!* 🎃🍻'
    );

    return lines.join('\n');
  },

  copySummary() {
    const text = this.buildSummaryText();
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('📋 ¡Expediente copiado! Pégalo en el grupo para debatir.');
      Audio?.play('success');
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showToast('📋 ¡Expediente copiado!');
      Audio?.play('success');
    });
  },

  startCountdown() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    const update = () => {
      const now = new Date();
      const diff = this.halloweenDate - now;

      if (diff <= 0) {
        clearInterval(this.countdownInterval);
        const miniText = document.getElementById('mini-countdown-text');
        if (miniText) miniText.textContent = '¡LA PUERTA ESTÁ ABIERTA!';
        document.getElementById('countdown-days').textContent = '00';
        document.getElementById('countdown-hours').textContent = '00';
        document.getElementById('countdown-mins').textContent = '00';
        document.getElementById('countdown-secs').textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      // Update Top Persistent Mini Countdown
      const miniText = document.getElementById('mini-countdown-text');
      if (miniText) {
        miniText.textContent = `${days}d : ${String(hours).padStart(2, '0')}h : ${String(mins).padStart(2, '0')}m : ${String(secs).padStart(2, '0')}s`;
      }

      // Update Phase 5 Countdown Display
      const dEl = document.getElementById('countdown-days');
      const hEl = document.getElementById('countdown-hours');
      const mEl = document.getElementById('countdown-mins');
      const sEl = document.getElementById('countdown-secs');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(mins).padStart(2, '0');
      if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    };

    update();
    this.countdownInterval = setInterval(update, 1000);
  },

  generateCostumes() {
    const groups = getCostumeGroups();
    const container = document.getElementById('costume-suggestions');
    if (!container || !groups.length) return;

    const random = groups[Math.floor(Math.random() * groups.length)];
    let html = `
      <div class="costume-group-card">
        <h4 class="costume-theme">${random.theme}</h4>
        <p class="costume-theme-desc">${random.desc}</p>
        <ul class="costume-list">
          ${random.costumes.map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `;
    container.innerHTML = html;
  },

  generateSecretCard() {
    const badge = document.getElementById('secret-badge');
    const title = document.getElementById('secret-title');
    const desc = document.getElementById('secret-desc');

    const style = this.answers.style || '';
    const mode = this.answers.mode || '';

    let profile = 'secret_chaos';
    if (this.secretUnlocked) profile = 'secret_legend';
    else if (style.includes('Terror')) profile = 'secret_hunter';
    else if (style.includes('Creativo')) profile = 'secret_director';
    else if (mode.includes('Solo')) profile = 'secret_victim';
    else if (this.rejectionCount >= 3) profile = 'secret_chaos';
    else profile = 'secret_legend';

    const data = tObj(profile);
    if (badge) badge.textContent = data.title?.split(' ')[0] || '🔮';
    if (title) title.textContent = data.title || 'Iniciado de Halloween';
    if (desc) desc.textContent = data.desc || 'Listo para la noche más oscura.';
  },

  showToast(text) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = text;
    toast.classList.remove('hidden');
    toast.classList.add('visible');

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3500);
  },

  restart() {
    this.clearState();
    this.goToPhase(1);
    Ghost.hide();
    document.getElementById('rejection-counter')?.classList.add('hidden');
  },
};

window.Engine = Engine;
