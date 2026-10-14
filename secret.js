/* ============================================================
   Secret Easter Egg System — Config & Dialogues
   Exclusively tailored for María / Angélica / Ángel
   Featuring Nico's white dog ("la perrita") and witty banter
   ============================================================ */

const SECRET_CONFIG = {
  // Strict matching targets & aliases (includes creator test aliases)
  allowedNames: ['maria', 'angelica', 'angel', 'nico', 'nicolas', 'prueba'],
  aliases: ['maria angelica', 'angelica maria', 'angie', 'mari', 'mary', 'nicolas ortiz', 'nico ortiz'],

  // Sequence of witty, elegant, non-repeating interventions
  // Default duration extended to 22-25 seconds with pause-on-hover & mobile-friendly reading
  interventions: [
    // 0. Special Creator Mode Intervention (when Nico tests the page)
    {
      id: 'nico_creator_check',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Tu perrita blanca 🐾',
      badge: 'Modo Creador 💻',
      text: '¡Epa mi humano Nico! Modo secreto verificado y activo en mobile. Recuerda que para María / Angélica se activan todos los secretos románticos y la carta confidencial final. 😉✨',
      duration: 22000
    },
    // 1. Initial activation on name input
    {
      id: 'guau_initial',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'La perrita de Nico 🐾',
      badge: 'Guau guau ✨',
      text: 'Yo solo digo guau todo el día cuando veo algo... pero mi humano Nico dice «guauuu» cada vez que te ve a ti. Y créeme que no suele perder la compostura tan fácil.',
      duration: 23000
    },
    // 2. Smile observation
    {
      id: 'smile_observation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Nota confidencial',
      text: 'Nico siempre me habla de tu sonrisa... y viéndote bien, tengo que admitir que tiene muy buen gusto. No le digas que te lo conté.',
      duration: 22000
    },
    // 3. Basketball banter
    {
      id: 'basketball_banter',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Arbitraje no oficial',
      text: 'Aunque sigas fallando canastas, al menos consigues que alguien siempre quiera volver a jugar contigo y guardarte todos los rebotes.',
      duration: 23000
    },
    // 4. Developer observation
    {
      id: 'developer_note',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Nota del desarrollador 💻',
      badge: 'Línea de código oculta',
      text: 'Todavía no encuentro una explicación técnica para que ciertas sonrisas se queden dando vueltas en mi cabeza más tiempo del razonable.',
      duration: 22000
    },
    // 5. Dog translation
    {
      id: 'dog_translation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Traducción canina 🐾',
      badge: 'Canal exclusivo',
      text: 'Guau, guauuu. El departamento canino informa que el creador de esta página acaba de perder el hilo de lo que estaba haciendo solo por pensar en ti.',
      duration: 22000
    },
    // 6. Behind the scenes
    {
      id: 'behind_scenes',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Secreto de código',
      text: '¿Un secreto entre nosotras? Nico estuvo probando esta página como veinte veces solo para asegurarse de que a ti te pareciera perfecta.',
      duration: 22000
    },
    // 7. Form companion
    {
      id: 'form_companion',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Voz del aquelarre 🔮',
      badge: 'Intuición canina',
      text: 'Puedes dudar todo lo que quieras con las preguntas del formulario... pero sobre con quién vas a ir, me parece que la respuesta ya está bastante clara.',
      duration: 23000
    },
    // 8. The real reason
    {
      id: 'real_reason',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Nota de Nico 🖤',
      badge: 'Sin filtros',
      text: 'Mi humano finge que esto es solo una invitación casual de Halloween... pero entre tú y yo, los dos sabemos quién era la única invitada que de verdad le importaba.',
      duration: 24000
    },
    // 9. Free throw stats
    {
      id: 'freethrow_stats',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Marcador en vivo',
      text: 'Estadística no oficial: tu porcentaje de tiros libres sigue en duda, pero las ganas de Nico de invitarte a salir tienen un 100% de efectividad.',
      duration: 23000
    },
    // 10. Code inspection
    {
      id: 'code_inspection',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'Alerta del sistema 💻',
      badge: 'Inspección',
      text: 'Alerta: se ha detectado una sobredosis de atención al detalle en esta pantalla. El autor niega cualquier acusación, pero las evidencias hablan solas.',
      duration: 23000
    },
    // 11. Costume compliment
    {
      id: 'costume_compliment',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'La perrita de Nico 🐾',
      badge: 'Moda canina',
      text: 'Si me preguntas a mí, cualquier disfraz te va a quedar increíble... aunque Nico probablemente se quede mirándote sin saber qué decir.',
      duration: 23000
    },
    // 12. Closing complicity
    {
      id: 'closing_complicity',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Pacto secreto',
      text: 'Si te preguntas por qué esta perrita blanca sabe tanto... es porque Nico no para de hablar de ti. Sigue respondiendo, que me caes demasiado bien.',
      duration: 24000
    }
  ],

  // Special card in Phase 5 summary
  summaryCard: {
    avatar: 'assets/disfraces/img_secretas/lobocara.png',
    badge: '🐾 CARTA CONFIDENCIAL DE NICO & SU PERRITA ✨',
    title: 'Para quien inspiró más líneas de código de las necesarias…',
    text: '«No te hagas la desentendida. Entre partidos de basket, sonrisas que desvían la atención y planes de Halloween, esta noche la reservamos los dos. El primer brindis va por mi cuenta... y el resto de la noche lo decidimos en la cancha o en la fiesta. 🐾🏀🖤 — Nico»',
    whatsappNote: '🐺 *P.D. de Nico:* Entre partidos de basket y sonrisas que desvían la atención, esta noche la reservamos los dos. No te me escapas. 😏🏀✨'
  }
};

function normalizeSecretName(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function isSecretMatch(rawName) {
  const clean = normalizeSecretName(rawName);
  if (!clean) return false;

  const validTokens = ['maria', 'angelica', 'angel', 'angie', 'mari', 'mary', 'nico', 'nicolas', 'prueba'];

  // Direct matches
  if (SECRET_CONFIG.allowedNames.includes(clean)) return true;
  if (SECRET_CONFIG.aliases.includes(clean)) return true;

  // Split into words and check if ANY word is in validTokens
  const words = clean.split(/[\s,._-]+/).filter(Boolean);
  if (words.some((w) => validTokens.includes(w))) {
    return true;
  }

  // Also check if any valid token is contained in the string
  for (const token of validTokens) {
    if (clean.includes(token)) return true;
  }

  return false;
}

const SecretEngine = {
  active: false,
  shownSet: new Set(),
  dismissTimer: null,
  nextTimer: null,
  currentIndex: 0,
  isCurrentlyVisible: false,
  isPaused: false,
  startTime: 0,
  timeRemaining: 0,
  currentDuration: 22000,
  lastShownItem: null,

  init() {
    this.setupListeners();

    // 1. Check URL parameters for immediate preview/test on mobile (?secret=1, ?easteregg=1, ?test=1)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('secret') || urlParams.has('easteregg') || urlParams.has('test')) {
        setTimeout(() => this.activate('María'), 500);
      }
    } catch (e) {}

    // 2. Check if previously unlocked or stored name in localStorage
    try {
      const saved = localStorage.getItem('halloween-2026');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.secretUnlocked || (state.answers?.name && isSecretMatch(state.answers.name))) {
          this.active = true;
          document.body.classList.add('secret-mode-active');
        }
      }
    } catch (e) {}
  },

  setupListeners() {
    // Close / minimize button click
    const closeBtn = document.getElementById('peeking-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.hidePeekingDog(true); // true = user closed it manually
      });
    }

    // Next secret button click inside speech card
    const nextBtn = document.getElementById('peeking-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerNextIntervention();
      });
    }

    // Minimized pill button click
    const pill = document.getElementById('peeking-dog-pill');
    if (pill) {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        // If an item was recently hidden, show it again; otherwise cycle next
        if (this.lastShownItem && !this.isCurrentlyVisible) {
          this.showPeekingDog(this.lastShownItem);
          pill.classList.add('hidden');
        } else {
          this.triggerNextIntervention();
        }
      });
    }

    // Tapping the dog body directly plays a playful wiggle animation (does NOT close the message)
    const dogBody = document.getElementById('peeking-dog-body');
    if (dogBody) {
      dogBody.addEventListener('click', (e) => {
        e.stopPropagation();
        dogBody.classList.remove('dog-wiggle');
        void dogBody.offsetWidth; // trigger reflow
        dogBody.classList.add('dog-wiggle');
        if (window.Audio) {
          window.Audio.play('select');
        }
      });
    }

    // Pause on hover or touch so the user can read at their own pace without rush
    const stage = document.getElementById('peeking-dog-stage');
    if (stage) {
      stage.addEventListener('mouseenter', () => this.pauseReading());
      stage.addEventListener('mouseleave', () => this.resumeReading());
      stage.addEventListener('touchstart', () => this.pauseReading(), { passive: true });
      stage.addEventListener('touchend', () => this.resumeReading(), { passive: true });
    }
  },

  pauseReading() {
    if (!this.isCurrentlyVisible || this.isPaused) return;
    this.isPaused = true;
    if (this.dismissTimer) clearTimeout(this.dismissTimer);

    // Calculate remaining duration
    const elapsed = Date.now() - this.startTime;
    this.timeRemaining = Math.max(10000, this.timeRemaining - elapsed);

    // Pause progress bar animation
    const progressBar = document.getElementById('peeking-reading-progress');
    if (progressBar) {
      progressBar.style.animationPlayState = 'paused';
    }

    // Visual pause hint update
    const pauseHint = document.getElementById('peeking-pause-hint');
    if (pauseHint) {
      pauseHint.textContent = '⏸️ Pausado para leer con calma';
      pauseHint.classList.add('paused-active');
    }
  },

  resumeReading() {
    if (!this.isCurrentlyVisible || !this.isPaused) return;
    this.isPaused = false;
    this.startTime = Date.now();

    // Resume progress bar animation
    const progressBar = document.getElementById('peeking-reading-progress');
    if (progressBar) {
      progressBar.style.animationPlayState = 'running';
    }

    // Restore hint
    const pauseHint = document.getElementById('peeking-pause-hint');
    if (pauseHint) {
      pauseHint.textContent = 'Pasa el cursor para pausar ⏳';
      pauseHint.classList.remove('paused-active');
    }

    // Guarantee at least 10 seconds after unpausing
    const waitTime = Math.max(10000, this.timeRemaining);
    this.startDismissTimer(waitTime);
  },

  startDismissTimer(ms) {
    if (this.dismissTimer) clearTimeout(this.dismissTimer);
    this.dismissTimer = setTimeout(() => {
      this.hidePeekingDog(false);
    }, ms);
  },

  onNameInput(value) {
    const matched = isSecretMatch(value);
    if (matched) {
      if (!this.active) {
        this.activate(value.trim());
      }
    } else {
      // Only deactivate if the input is completely erased
      // This prevents accidental deactivation while typing full names
      if (this.active && (!value || value.trim().length === 0)) {
        this.deactivate();
      }
    }
  },

  activate(matchedName) {
    this.active = true;
    this.shownSet.clear();
    this.currentIndex = 0;
    document.body.classList.add('secret-mode-active');

    if (window.Engine) {
      window.Engine.secretUnlocked = true;
      window.Engine.saveState();
    }

    const clean = normalizeSecretName(matchedName || '');
    const isNico = clean.includes('nico') || clean.includes('nicolas');

    // Show first message smoothly
    if (this.nextTimer) clearTimeout(this.nextTimer);
    this.nextTimer = setTimeout(() => {
      if (isNico) {
        this.triggerIntervention('nico_creator_check');
      } else {
        this.triggerNextIntervention();
      }
    }, 600);

    if (window.Ghost) {
      const ghostMsg = isNico
        ? `¡Atención aquelarre! El creador Nico está inspeccionando la dimensión paranormal... 💻🐾`
        : `¡Atención en el aquelarre! La más esperada acaba de ingresar su nombre... 😏🐾`;
      window.Ghost.speak(ghostMsg, 6000);
    }
  },

  deactivate() {
    this.active = false;
    this.hidePeekingDog(false);
    this.shownSet.clear();
    this.currentIndex = 0;
    if (this.nextTimer) clearTimeout(this.nextTimer);
    document.body.classList.remove('secret-mode-active');

    const pill = document.getElementById('peeking-dog-pill');
    if (pill) pill.classList.add('hidden');

    const loveCard = document.getElementById('secret-love-card');
    if (loveCard) loveCard.classList.add('hidden');

    if (window.Engine) {
      window.Engine.secretUnlocked = false;
      window.Engine.saveState();
    }
  },

  // Called when user progresses: answers question, clicks next, picks costume, etc.
  onUserProgress() {
    if (!this.active) return;

    // If currently visible, NEVER interrupt the user while reading
    if (this.isCurrentlyVisible) return;

    // Clear any pending timer and show next message with a natural, comfortable pause (2.5s)
    if (this.nextTimer) clearTimeout(this.nextTimer);
    this.nextTimer = setTimeout(() => {
      this.triggerNextIntervention();
    }, 2500);
  },

  // Trigger a specific intervention (e.g. from phase transitions) or the next in sequence
  triggerIntervention(targetId) {
    if (!this.active) return;

    let item = null;
    if (targetId) {
      if (targetId === 'phase3_costumes') {
        item = SECRET_CONFIG.interventions.find(i => i.id === 'costume_compliment');
      } else if (targetId === 'phase4_place') {
        item = SECRET_CONFIG.interventions.find(i => i.id === 'real_reason');
      } else {
        item = SECRET_CONFIG.interventions.find(i => i.id === targetId);
      }
    }

    if (item) {
      this.shownSet.add(item.id);
      this.showPeekingDog(item);
    } else {
      this.triggerNextIntervention();
    }
  },

  // Trigger the next unshown message in sequence
  triggerNextIntervention() {
    if (!this.active) return;

    // Hide minimized pill
    const pill = document.getElementById('peeking-dog-pill');
    if (pill) pill.classList.add('hidden');

    // Find next unshown intervention
    const available = SECRET_CONFIG.interventions.filter(item => !this.shownSet.has(item.id));

    if (available.length === 0) {
      // If all 12 have been shown, reset shownSet so they cycle again
      this.shownSet.clear();
    }

    const nextItem = available.length > 0 ? available[0] : SECRET_CONFIG.interventions[0];
    this.shownSet.add(nextItem.id);

    this.showPeekingDog(nextItem);
  },

  showPeekingDog(item) {
    const container = document.getElementById('peeking-dog-container');
    const stage = document.getElementById('peeking-dog-stage');
    const imgEl = document.getElementById('peeking-dog-img');
    const textEl = document.getElementById('peeking-message-text');
    const senderEl = document.getElementById('peeking-sender-name');
    const badgeEl = document.getElementById('peeking-badge-status');
    const progressBar = document.getElementById('peeking-reading-progress');
    const pauseHint = document.getElementById('peeking-pause-hint');

    if (!container || !stage || !imgEl || !textEl) return;

    this.lastShownItem = item;

    // Set content
    imgEl.src = item.image;
    textEl.textContent = item.text;
    if (senderEl) senderEl.textContent = item.sender || 'La perrita de Nico 🐾';
    if (badgeEl) badgeEl.textContent = item.badge || 'Guau guau ✨';
    if (pauseHint) {
      pauseHint.textContent = 'Pasa el cursor para pausar ⏳';
      pauseHint.classList.remove('paused-active');
    }

    // Position class (peek-left or peek-right)
    stage.className = 'peeking-dog-stage ' + (item.position || 'peek-left');

    // Show container
    container.classList.remove('hidden');
    container.classList.remove('dog-exiting');
    container.classList.add('dog-entering');
    this.isCurrentlyVisible = true;
    this.isPaused = false;

    // Calculate comfortable reading duration: at least 22s, adjusted for length
    const textLength = (item.text || '').length;
    const duration = Math.max(item.duration || 22000, 18000 + textLength * 50);
    this.currentDuration = duration;
    this.timeRemaining = duration;
    this.startTime = Date.now();

    // Start progress bar animation
    if (progressBar) {
      progressBar.style.animation = 'none';
      void progressBar.offsetWidth; // trigger reflow
      progressBar.style.animation = `readingProgress ${duration}ms linear forwards`;
      progressBar.style.animationPlayState = 'running';
    }

    // Start dismiss timer
    this.startDismissTimer(duration);
  },

  hidePeekingDog(userClosed = false) {
    const container = document.getElementById('peeking-dog-container');
    if (!container || container.classList.contains('hidden')) return;

    if (this.dismissTimer) clearTimeout(this.dismissTimer);
    this.isCurrentlyVisible = false;
    this.isPaused = false;

    container.classList.remove('dog-entering');
    container.classList.add('dog-exiting');

    setTimeout(() => {
      container.classList.add('hidden');
      container.classList.remove('dog-exiting');

      // If user closed it or it timed out, show minimized pill and schedule next message
      if (this.active) {
        const pill = document.getElementById('peeking-dog-pill');
        if (pill) pill.classList.remove('hidden');

        // Schedule next message after a comfortable pause (16-20 seconds)
        if (this.nextTimer) clearTimeout(this.nextTimer);
        this.nextTimer = setTimeout(() => {
          this.triggerNextIntervention();
        }, userClosed ? 18000 : 14000);
      }
    }, 380);
  }
};

window.SECRET_CONFIG = SECRET_CONFIG;
window.SecretEngine = SecretEngine;
window.isSecretMatch = isSecretMatch;
