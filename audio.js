/* ============================================
   Audio — Ambient sounds & SFX
   ============================================ */

const Audio = {
  ctx: null,
  enabled: false,
  initialized: false,

  init() {
    const btn = document.getElementById('audio-toggle');
    btn?.addEventListener('click', () => {
      if (!this.initialized) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.initialized = true;
      }
      this.enabled = !this.enabled;
      btn.classList.toggle('active', this.enabled);
      btn.querySelector('.audio-icon').textContent = this.enabled ? '🔊' : '🔇';

      if (this.enabled) {
        this.playAmbient();
      }
    });
  },

  play(type) {
    if (!this.enabled || !this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;

      switch (type) {
        case 'ghost':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.4);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;

        case 'select':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523, now);
          osc.frequency.setValueAtTime(659, now + 0.08);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;

        case 'success':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523, now);
          osc.frequency.setValueAtTime(659, now + 0.1);
          osc.frequency.setValueAtTime(784, now + 0.2);
          osc.frequency.setValueAtTime(1047, now + 0.3);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;

        case 'reject':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(200, now);
          osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
          gain.gain.setValueAtTime(0.04, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
          osc.start(now);
          osc.stop(now + 0.4);
          break;

        case 'transition':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
          gain.gain.setValueAtTime(0.04, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
      }
    } catch (e) {
      // Silently fail if audio context has issues
    }
  },

  playAmbient() {
    if (!this.enabled || !this.ctx) return;

    // Create a subtle ambient wind/drone
    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(80, this.ctx.currentTime);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(82, this.ctx.currentTime); // Slight detuning for eerie effect

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, this.ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 2);

      osc1.start();
      osc2.start();

      // Store reference to stop later
      this._ambientOsc = [osc1, osc2];
      this._ambientGain = gain;
    } catch (e) {
      // Silently fail
    }
  },
};
