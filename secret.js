/* ============================================================
   Secret Easter Egg System — Config & Dialogues
   Exclusively tailored for María / Angélica / Ángel
   Featuring Nico's white dog ("la perrita") and witty banter
   ============================================================ */

const SECRET_CONFIG = {
  // Strict matching targets & aliases (includes creator test aliases)
  allowedNames: ['maria', 'angelica', 'angel', 'nico', 'nicolas', 'prueba','ange'],
  aliases: ['maria angelica', 'angelica maria', 'angie', 'mari', 'mary', 'nicolas ortiz', 'nico ortiz','ange'],

  // Sequence of witty, elegant, non-repeating interventions
  // Default duration extended to 22-25 seconds with pause-on-hover & mobile-friendly reading
  interventions: [
    // 1. Initial activation on name input (Adaptada a su perrita cómplice)
    {
      id: 'guau_initial',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Tu perrita cómplice 🐾',
      badge: 'Guau guau ✨',
      text: 'Como tu perrita, yo digo "guau" todo el día por cualquier cosa... pero he notado que Nico dice «guauuu» cada vez que te ve. Y créeme, él no suele perder la compostura tan fácil.',
      duration: 23000
    },
    // 2. Smile observation
    {
      id: 'smile_observation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'Tu confidente 🐾',
      badge: 'Nota confidencial',
      text: 'Conozco tu sonrisa mejor que nadie, pero al parecer Nico la tiene súper estudiada. Me confesó en secreto que tiene muy buen gusto. No le digas que te lo conté.',
      duration: 22000
    },
    // 3. Basketball banter
    {
      id: 'basketball_banter',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Arbitraje perruno',
      text: 'He visto cómo juegan basket... y aunque sigas fallando canastas, noto que él siempre quiere guardarte los rebotes y seguir jugando contigo. Para lo competitivo que es, eso es mucho decir.',
      duration: 23000
    },
    // 4. Developer observation
    {
      id: 'developer_note',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Secreto de pasillo 💻',
      badge: 'Línea directa',
      text: 'Soy una perrita y no entiendo de código, pero escuché a Nico decir que ciertas sonrisas tuyas lo dejan procesando información más tiempo del normal. Ups, lo delaté.',
      duration: 22000
    },
    // 5. Dog translation
    {
      id: 'dog_translation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Traducción canina 🐾',
      badge: 'Canal exclusivo',
      text: 'Traducción de mi último ladrido: "Nico pausó sus proyectos importantes solo para programarte esto". Como tu guardiana, apruebo este nivel de atención hacia ti.',
      duration: 22000
    },
    // 6. Behind the scenes
    {
      id: 'behind_scenes',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-right',
      sender: 'Tu espía favorita 🐾',
      badge: 'Chisme perruno',
      text: '¿Un secreto entre nosotras? Nico probó que todo esto quedara perfecto como veinte veces. Él dice que es "control de calidad", yo digo que quería impresionarte.',
      duration: 22000
    },
    // 7. Form companion
    {
      id: 'form_companion',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Voz del aquelarre 🔮',
      badge: 'Intuición canina',
      text: 'Puedes darle todas las vueltas que quieras a las preguntas del formulario... pero como tu perrita de confianza, te digo que la respuesta de con quién la pasarás mejor es obvia.',
      duration: 23000
    },
    // 8. The real reason
    {
      id: 'real_reason',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Nota cómplice 🐾',
      badge: 'Entre tú y yo',
      text: 'Él finge que esto es solo una invitación casual... pero entre tú y yo, sé que armó todo esto para que te des un respiro de tanta universidad y disfrutemos la noche. Y yo lo apruebo. 🐾😏',
      duration: 24000
    },
    // 9. Free throw stats
    {
      id: 'freethrow_stats',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Marcador en vivo',
      text: 'Estadística no oficial: tu porcentaje de tiros libres sigue en duda, pero la efectividad de Nico para convencerte de soltar los cuadernos y desestresarte es de un sólido 100%. 🏀📚',
      duration: 23000
    },
    // 10. Code inspection
    {
      id: 'code_inspection',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'Alerta de tu mascota 💻',
      badge: 'Inspección',
      text: 'Alerta perruna: He detectado que alguien le puso demasiada atención a los detalles de esta página solo para verte sonreír. Las pruebas hablan por sí solas.',
      duration: 23000
    },
    // 11. Costume compliment
    {
      id: 'costume_compliment',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Moda canina 🐾',
      badge: 'Visto bueno',
      text: 'Para mí siempre te ves hermosa, pero trata de no verte *demasiado* bien con tu disfraz o Nico se va a quedar mirándote y perderá su famosa compostura.',
      duration: 23000
    },
    // 12. Closing complicity
    {
      id: 'closing_complicity',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Tu perrita fiel 🐾',
      badge: 'Pacto secreto',
      text: 'Si te preguntas por qué sé tanto... es porque los perros notamos cuando alguien mira a nuestra humana de una forma especial. Sigue respondiendo, que Nico me cae demasiado bien para ti. 🐾✨',
      duration: 24000
    }
  ],

  // Special card in Phase 5 summary
  summaryCard: {
    avatar: 'assets/disfraces/img_secretas/lobocara.png',
    badge: '🐾 MENSAJE CONFIDENCIAL & CÓMPLICE ✨',
    title: 'Aprobado por el control de calidad canino...',
    text: '«No te hagas la desentendida. Sé que estos días andas a mil con la universidad, pero entre los partidos de basket, esas sonrisas tuyas y Halloween, esta noche la reservamos los dos para desconectarnos. Tu perrita ya me dio el visto bueno, así que el primer brindis va por mi cuenta... y el resto de la noche lo decidimos en la cancha o en la fiesta. 🐾🏀🖤 — Nico»',
    whatsappNote: '🐺 *P.D. de Nico:* Tienes a tu propia mascota conspirando a mi favor para sacarte de los libros. Esta noche es nuestra, no te me escapas. 😏🏀✨'
  }
};

function normalizeSecretName(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9\s]/g, ' ')    // remove punctuation/emojis/symbols
    .replace(/\s+/g, ' ')           // collapse extra whitespace
    .trim();
}

function isSecretMatch(rawName) {
  const clean = normalizeSecretName(rawName);
  if (!clean) return false;

  const validTokens = ['maria', 'angelica', 'angel', 'angie', 'ange', 'mari', 'mary', 'nico', 'nicolas', 'prueba'];

  // Direct exact matches with allowed names or aliases
  if (SECRET_CONFIG.allowedNames.map(normalizeSecretName).includes(clean)) return true;
  if (SECRET_CONFIG.aliases.map(normalizeSecretName).includes(clean)) return true;

  // Split clean input into words and check if ANY word matches or starts with a valid token
  const words = clean.split(' ').filter(Boolean);
  if (words.some((w) => validTokens.includes(w))) {
    return true;
  }

  // Combined continuous strings like 'mariangelica' or 'angelicamaria'
  const compact = clean.replace(/\s+/g, '');
  if (compact.includes('mariangelica') || compact.includes('angelicamaria')) {
    return true;
  }

  // Check if any full valid token is present as a standalone token or substring
  for (const token of validTokens) {
    if (token.length >= 4 && clean.includes(token)) return true;
    if (words.includes(token)) return true;
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
    // Reset any previous state on fresh load so cache doesn't lock secret active
    this.active = false;
    this.shownSet.clear();
    this.currentIndex = 0;
    document.body.classList.remove('secret-mode-active');

    this.setupListeners();

    // 1. Check URL parameters for immediate preview/test on mobile (?secret=1, ?easteregg=1, ?test=1)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('secret') || urlParams.has('easteregg') || urlParams.has('test')) {
        setTimeout(() => this.activate('María'), 500);
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

    // Show first message smoothly
    if (this.nextTimer) clearTimeout(this.nextTimer);
    this.nextTimer = setTimeout(() => {
      this.triggerNextIntervention();
    }, 600);

    if (window.Ghost) {
      window.Ghost.speak(`¡Atención en el aquelarre! La más esperada acaba de ingresar su nombre... 😏🐾`, 6000);
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
    if (senderEl) senderEl.textContent = item.sender || 'Me conoces...🐾';
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
