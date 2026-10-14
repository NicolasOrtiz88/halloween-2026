/* ============================================
   Ghost Controller — Personality & Reactions
   ============================================ */

const Ghost = {
  el: null,
  speechEl: null,
  textEl: null,
  currentState: 'neutral',
  position: { x: 0, y: 0 },
  isVisible: false,

  init() {
    this.el = document.getElementById('ghost');
    this.speechEl = document.getElementById('ghost-speech');
    this.textEl = document.getElementById('ghost-text');
  },

  show(position = 'bottom-right') {
    if (!this.el) return;
    this.isVisible = true;

    // Position the ghost based on location
    const positions = {
      'bottom-right': { bottom: '15%', right: '5%', left: 'auto', top: 'auto' },
      'bottom-left': { bottom: '15%', left: '5%', right: 'auto', top: 'auto' },
      'top-right': { top: '15%', right: '5%', left: 'auto', bottom: 'auto' },
      'top-left': { top: '15%', left: '5%', right: 'auto', bottom: 'auto' },
      'center-left': { top: '40%', left: '3%', right: 'auto', bottom: 'auto' },
      'center-right': { top: '40%', right: '3%', left: 'auto', bottom: 'auto' },
    };

    const pos = positions[position] || positions['bottom-right'];
    Object.assign(this.el.style, pos);

    this.el.classList.remove('ghost-hidden');
    this.el.classList.add('ghost-visible');

    // Position speech bubble near ghost
    this._positionSpeech(position);
  },

  hide() {
    if (!this.el) return;
    this.isVisible = false;
    this.el.classList.remove('ghost-visible');
    this.el.classList.add('ghost-hidden');
    this.hideSpeech();
  },

  setState(state) {
    if (!this.el) return;
    this.el.querySelector('.ghost-body').className = 'ghost-body';
    if (state !== 'neutral') {
      this.el.querySelector('.ghost-body').classList.add(`ghost-${state}`);
    }
    this.currentState = state;
  },

  speak(text, duration = 6500) {
    if (!this.speechEl || !this.textEl) return;
    
    this.textEl.textContent = text;
    this.speechEl.classList.remove('ghost-speech-hidden');
    this.speechEl.classList.add('ghost-speech-visible');

    if (this._speechTimeout) clearTimeout(this._speechTimeout);
    if (duration > 0) {
      this._speechTimeout = setTimeout(() => this.hideSpeech(), duration);
    }
  },

  hideSpeech() {
    if (!this.speechEl) return;
    this.speechEl.classList.remove('ghost-speech-visible');
    this.speechEl.classList.add('ghost-speech-hidden');
  },

  _positionSpeech(ghostPos) {
    if (!this.speechEl) return;
    
    const speechPositions = {
      'bottom-right': { bottom: '35%', right: '2%', left: 'auto', top: 'auto' },
      'bottom-left': { bottom: '35%', left: '2%', right: 'auto', top: 'auto' },
      'top-right': { top: '8%', right: '2%', left: 'auto', bottom: 'auto' },
      'top-left': { top: '8%', left: '2%', right: 'auto', bottom: 'auto' },
      'center-left': { top: '28%', left: '2%', right: 'auto', bottom: 'auto' },
      'center-right': { top: '28%', right: '2%', left: 'auto', bottom: 'auto' },
    };

    const pos = speechPositions[ghostPos] || speechPositions['bottom-right'];
    Object.assign(this.speechEl.style, pos);
  },

  // Animated entrance from a random edge
  enterFrom(edge = 'random') {
    if (!this.el) return;
    const edges = ['bottom-right', 'bottom-left', 'center-left', 'center-right'];
    if (edge === 'random') {
      edge = edges[Math.floor(Math.random() * edges.length)];
    }
    this.show(edge);
  },

  // React to rejection
  reactToRejection(count) {
    const messages = t('ghost_reject');
    const idx = Math.min(count - 1, messages.length - 1);
    const message = messages[idx] || messages[messages.length - 1];

    // Vary ghost position and state
    const states = ['sad', 'surprised', 'laughing', 'sad', 'neutral', 'laughing', 'sad', 'surprised', 'sad', 'laughing'];
    const positions = ['bottom-right', 'bottom-left', 'center-right', 'center-left', 'bottom-right', 'center-left', 'bottom-left', 'center-right', 'bottom-right', 'bottom-left'];

    const state = states[idx] || 'sad';
    const pos = positions[idx] || 'bottom-right';

    this.enterFrom(pos);
    this.setState(state);
    
    setTimeout(() => {
      this.speak(message, 7000);
      Audio?.play('ghost');
    }, 400);
  },

  // React to acceptance
  reactToAccept(wasRejected = false) {
    const message = wasRejected ? t('ghost_accept_after_reject') : t('ghost_accept');
    this.enterFrom('bottom-right');
    this.setState('happy');
    setTimeout(() => {
      this.speak(message, 6500);
      Audio?.play('success');
    }, 300);
  },

  // Welcome to questionnaire
  welcome() {
    this.enterFrom('center-right');
    this.setState('neutral');
    setTimeout(() => {
      this.speak(t('ghost_welcome'), 6500);
    }, 500);
  },

  // React during questionnaire
  reactToAnswer(questionId, answerId) {
    // Contextual reactions to specific answers
    const reactions = {
      es: {
        'solo_group': {
          'solo': { state: 'surprised', msg: '¡Valiente! ¿Solo contra los fantasmas? 💪' },
          'pareja': { state: 'happy', msg: '¡Terrorífico en pareja! Qué romántico… o no. 😏' },
          'grupo': { state: 'laughing', msg: '¡El aquelarre crece! Cuantos más, mejor. 👻👻' },
        },
        'terror_style': {
          'terror': { state: 'happy', msg: '¡ASÍ SE HABLA! Terror del bueno. 🖤' },
          'funny': { state: 'laughing', msg: '¡Jajaja! El humor es la mejor arma contra los fantasmas. 😂' },
          'creative': { state: 'surprised', msg: 'Ohhh, creatividad pura. Me gusta. ✨' },
          'improvise': { state: 'neutral', msg: 'Improvisar… como el fantasma, que nunca tiene plan. 🤷' },
        },
        'budget': {
          'low': { state: 'neutral', msg: 'Con poco se pueden hacer cosas épicas. 👍' },
          'medium': { state: 'happy', msg: '¡Buen rango! Suficiente para pasarla genial. 🎉' },
          'high': { state: 'laughing', msg: '¡Lujo paranormal! El fantasma aprueba. 💎' },
          'whatever': { state: 'surprised', msg: 'Sin límites… el caos es inevitable. 😈' },
        },
      },
      en: {
        'solo_group': {
          'solo': { state: 'surprised', msg: 'Brave! Solo against the ghosts? 💪' },
          'pareja': { state: 'happy', msg: 'Spooky date! How romantic… or not. 😏' },
          'grupo': { state: 'laughing', msg: 'The coven grows! The more, the merrier. 👻👻' },
        },
        'terror_style': {
          'terror': { state: 'happy', msg: 'THAT\'S the spirit! Real terror. 🖤' },
          'funny': { state: 'laughing', msg: 'Hahaha! Humor is the best weapon against ghosts. 😂' },
          'creative': { state: 'surprised', msg: 'Ohhh, pure creativity. I like it. ✨' },
          'improvise': { state: 'neutral', msg: 'Improvise… like the ghost, who never has a plan. 🤷' },
        },
        'budget': {
          'low': { state: 'neutral', msg: 'You can do epic things with little. 👍' },
          'medium': { state: 'happy', msg: 'Nice range! Enough for a great time. 🎉' },
          'high': { state: 'laughing', msg: 'Paranormal luxury! The ghost approves. 💎' },
          'whatever': { state: 'surprised', msg: 'No limits… chaos is inevitable. 😈' },
        },
      },
    };

    const langReactions = reactions[currentLang] || reactions.es;
    const questionReactions = langReactions[questionId];
    if (questionReactions && questionReactions[answerId]) {
      const reaction = questionReactions[answerId];
      this.setState(reaction.state);
      this.speak(reaction.msg, 3500);
    }
  },
};
