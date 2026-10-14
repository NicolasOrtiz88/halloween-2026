/* ============================================================
   Secret Easter Egg System — Config & Dialogues
   Exclusively tailored for María / Angélica / Ángel
   Featuring Nico's white dog ("la perrita") and witty banter
   ============================================================ */

const SECRET_CONFIG = {
  // Strict matching targets & aliases
  allowedNames: ['maria', 'angelica', 'angel'],
  aliases: ['maria angelica', 'angelica maria', 'angie', 'mari'],

  // Sequence of 12 witty, elegant, non-repeating interventions
  interventions: [
    // 1. Initial activation on name input
    {
      id: 'guau_initial',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'La perrita de Nico 🐾',
      badge: 'Guau guau ✨',
      text: 'Yo solo digo guau todo el día cuando veo algo... pero mi humano Nico dice «guauuu» cada vez que te ve a ti. Y créeme que no suele perder la compostura tan fácil.',
      duration: 9500
    },
    // 2. Smile observation
    {
      id: 'smile_observation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Nota confidencial',
      text: 'Nico siempre me habla de tu sonrisa... y viéndote bien, tengo que admitir que tiene muy buen gusto. No le digas que te lo conté.',
      duration: 9000
    },
    // 3. Basketball banter
    {
      id: 'basketball_banter',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Arbitraje no oficial',
      text: 'Aunque sigas fallando canastas, al menos consigues que alguien siempre quiera volver a jugar contigo y guardarte todos los rebotes.',
      duration: 9500
    },
    // 4. Developer observation
    {
      id: 'developer_note',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Nota del desarrollador 💻',
      badge: 'Línea de código oculta',
      text: 'Todavía no encuentro una explicación técnica para que ciertas sonrisas se queden dando vueltas en mi cabeza más tiempo del razonable.',
      duration: 9000
    },
    // 5. Dog translation
    {
      id: 'dog_translation',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Traducción canina 🐾',
      badge: 'Canal exclusivo',
      text: 'Guau, guauuu. El departamento canino informa que el creador de esta página acaba de perder el hilo de lo que estaba haciendo solo por pensar en ti.',
      duration: 9000
    },
    // 6. Behind the scenes
    {
      id: 'behind_scenes',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Secreto de código',
      text: '¿Un secreto entre nosotras? Nico estuvo probando esta página como veinte veces solo para asegurarse de que a ti te pareciera perfecta.',
      duration: 9000
    },
    // 7. Form companion
    {
      id: 'form_companion',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-left',
      sender: 'Voz del aquelarre 🔮',
      badge: 'Intuición canina',
      text: 'Puedes dudar todo lo que quieras con las preguntas del formulario... pero sobre con quién vas a ir, me parece que la respuesta ya está bastante clara.',
      duration: 9000
    },
    // 8. The real reason
    {
      id: 'real_reason',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'Nota de Nico 🖤',
      badge: 'Sin filtros',
      text: 'Mi humano finge que esto es solo una invitación casual de Halloween... pero entre tú y yo, los dos sabemos quién era la única invitada que de verdad le importaba.',
      duration: 9500
    },
    // 9. Free throw stats
    {
      id: 'freethrow_stats',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'Estadística de la cancha 🏀',
      badge: 'Marcador en vivo',
      text: 'Estadística no oficial: tu porcentaje de tiros libres sigue en duda, pero las ganas de Nico de invitarte a salir tienen un 100% de efectividad.',
      duration: 9500
    },
    // 10. Code inspection
    {
      id: 'code_inspection',
      image: 'assets/disfraces/img_secretas/lobocara.png',
      position: 'peek-right',
      sender: 'Alerta del sistema 💻',
      badge: 'Inspección',
      text: 'Alerta: se ha detectado una sobredosis de atención al detalle en esta pantalla. El autor niega cualquier acusación, pero las evidencias hablan solas.',
      duration: 9000
    },
    // 11. Costume compliment
    {
      id: 'costume_compliment',
      image: 'assets/disfraces/img_secretas/loboparado.png',
      position: 'peek-left',
      sender: 'La perrita de Nico 🐾',
      badge: 'Moda canina',
      text: 'Si me preguntas a mí, cualquier disfraz te va a quedar increíble... aunque Nico probablemente se quede mirándote sin saber qué decir.',
      duration: 9000
    },
    // 12. Closing complicity
    {
      id: 'closing_complicity',
      image: 'assets/disfraces/img_secretas/lobo.png',
      position: 'peek-right',
      sender: 'La perrita de Nico 🐾',
      badge: 'Pacto secreto',
      text: 'Si te preguntas por qué esta perrita blanca sabe tanto... es porque Nico no para de hablar de ti. Sigue respondiendo, que me caes demasiado bien.',
      duration: 9500
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

  // Exact match with allowed names or aliases
  if (SECRET_CONFIG.allowedNames.includes(clean)) return true;
  if (SECRET_CONFIG.aliases.includes(clean)) return true;

  // Split into words to support e.g. "Maria Angelica", "Angelica Maria"
  // but strictly require that ALL words belong to valid name tokens
  const words = clean.split(/\s+/).filter(Boolean);
  const validTokens = ['maria', 'angelica', 'angel', 'angie', 'mari'];
  if (words.length > 0 && words.every((w) => validTokens.includes(w))) {
    return true;
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

  init() {
    this.setupListeners();
    // Check if previously unlocked in localStorage
    try {
      const saved = localStorage.getItem('halloween-2026');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.secretUnlocked) {
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

    // Minimized pill button click
    const pill = document.getElementById('peeking-dog-pill');
    if (pill) {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerNextIntervention();
      });
    }

    // Tapping the dog body directly closes/minimizes it as well
    const dogBody = document.getElementById('peeking-dog-body');
    if (dogBody) {
      dogBody.addEventListener('click', () => {
        this.hidePeekingDog(true);
      });
    }
  },

  onNameInput(value) {
    const matched = isSecretMatch(value);
    if (matched) {
      if (!this.active) {
        this.activate(value.trim());
      }
    } else {
      if (this.active) {
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

    // Show first message immediately
    setTimeout(() => {
      this.triggerNextIntervention();
    }, 450);

    if (window.Ghost) {
      window.Ghost.speak(`¡Atención en el aquelarre! La más esperada acaba de ingresar su nombre... 😏🐾`, 4500);
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

    // If currently visible, let user finish reading or close it
    if (this.isCurrentlyVisible) return;

    // Clear any pending timer and show next message with a short natural pause
    if (this.nextTimer) clearTimeout(this.nextTimer);
    this.nextTimer = setTimeout(() => {
      this.triggerNextIntervention();
    }, 800);
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

    if (!container || !stage || !imgEl || !textEl) return;

    // Set content
    imgEl.src = item.image;
    textEl.textContent = item.text;
    if (senderEl) senderEl.textContent = item.sender || 'La perrita de Nico 🐾';
    if (badgeEl) badgeEl.textContent = item.badge || 'Guau guau ✨';

    // Position class (peek-left or peek-right)
    stage.className = 'peeking-dog-stage ' + (item.position || 'peek-left');

    // Show container
    container.classList.remove('hidden');
    container.classList.remove('dog-exiting');
    container.classList.add('dog-entering');
    this.isCurrentlyVisible = true;

    // Auto dismiss after duration if user doesn't close it
    if (this.dismissTimer) clearTimeout(this.dismissTimer);
    if (item.duration > 0) {
      this.dismissTimer = setTimeout(() => {
        this.hidePeekingDog(false);
      }, item.duration);
    }
  },

  hidePeekingDog(userClosed = false) {
    const container = document.getElementById('peeking-dog-container');
    if (!container || container.classList.contains('hidden')) return;

    if (this.dismissTimer) clearTimeout(this.dismissTimer);
    this.isCurrentlyVisible = false;

    container.classList.remove('dog-entering');
    container.classList.add('dog-exiting');

    setTimeout(() => {
      container.classList.add('hidden');
      container.classList.remove('dog-exiting');

      // If user closed it, show minimized pill and schedule next message
      if (this.active) {
        const pill = document.getElementById('peeking-dog-pill');
        if (pill) pill.classList.remove('hidden');

        // Schedule next message after a comfortable pause (10-14 seconds)
        if (this.nextTimer) clearTimeout(this.nextTimer);
        this.nextTimer = setTimeout(() => {
          this.triggerNextIntervention();
        }, userClosed ? 12000 : 9000);
      }
    }, 380);
  }
};

window.SECRET_CONFIG = SECRET_CONFIG;
window.SecretEngine = SecretEngine;
window.isSecretMatch = isSecretMatch;
