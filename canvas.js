/* ============================================
   Canvas — Background particles, bats, stars
   ============================================ */

const BgCanvas = {
  canvas: null,
  ctx: null,
  particles: [],
  bats: [],
  stars: [],
  width: 0,
  height: 0,
  animationId: null,
  isReducedMotion: false,

  init() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Check reduced motion
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.isReducedMotion) {
      this.drawStatic();
      return;
    }

    this.createStars();
    this.createBats();
    this.createParticles();
    this.animate();
  },

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  },

  // === Stars ===
  createStars() {
    const count = Math.min(Math.floor(this.width * this.height / 8000), 120);
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 0.7, // Upper 70% of screen
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
  },

  drawStars(time) {
    this.stars.forEach((star) => {
      const alpha = star.alpha + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.2;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 240, ${Math.max(0.05, alpha)})`;
      this.ctx.fill();
    });
  },

  // === Bats ===
  createBats() {
    const count = Math.min(Math.floor(this.width / 200), 5);
    this.bats = [];
    for (let i = 0; i < count; i++) {
      this.bats.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 0.5 + this.height * 0.1,
        size: Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 0.5,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: Math.random() * 0.08 + 0.04,
      });
    }
  },

  drawBats(time) {
    this.bats.forEach((bat) => {
      // Update position
      bat.x += bat.speedX;
      bat.y += bat.speedY + Math.sin(time * 0.001 + bat.wingPhase) * 0.3;

      // Wrap around screen
      if (bat.x > this.width + 20) bat.x = -20;
      if (bat.x < -20) bat.x = this.width + 20;
      if (bat.y > this.height * 0.6) bat.speedY = -Math.abs(bat.speedY);
      if (bat.y < this.height * 0.05) bat.speedY = Math.abs(bat.speedY);

      // Draw bat
      const wingAngle = Math.sin(time * bat.wingSpeed + bat.wingPhase) * 0.6;
      const s = bat.size;

      this.ctx.save();
      this.ctx.translate(bat.x, bat.y);
      this.ctx.fillStyle = 'rgba(10, 0, 16, 0.8)';

      // Body
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, s * 0.3, s * 0.5, 0, 0, Math.PI * 2);
      this.ctx.fill();

      // Left wing
      this.ctx.save();
      this.ctx.rotate(wingAngle);
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(-s, -s * 0.8, -s * 1.5, 0);
      this.ctx.quadraticCurveTo(-s * 0.8, s * 0.2, 0, 0);
      this.ctx.fill();
      this.ctx.restore();

      // Right wing
      this.ctx.save();
      this.ctx.rotate(-wingAngle);
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(s, -s * 0.8, s * 1.5, 0);
      this.ctx.quadraticCurveTo(s * 0.8, s * 0.2, 0, 0);
      this.ctx.fill();
      this.ctx.restore();

      // Eyes
      this.ctx.fillStyle = 'rgba(255, 100, 50, 0.6)';
      this.ctx.beginPath();
      this.ctx.arc(-s * 0.12, -s * 0.15, s * 0.06, 0, Math.PI * 2);
      this.ctx.arc(s * 0.12, -s * 0.15, s * 0.06, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    });
  },

  // === Floating Particles ===
  createParticles() {
    const count = Math.min(Math.floor(this.width / 40), 30);
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.15 + 0.05,
        color: Math.random() > 0.5 ? '191, 127, 240' : '255, 179, 71', // purple or orange
      });
    }
  },

  drawParticles() {
    this.particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;

      // Reset when off screen
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      this.ctx.fill();
    });
  },

  // === Static drawing for reduced motion ===
  drawStatic() {
    if (!this.ctx) return;
    // Just draw stars without animation
    this.createStars();
    this.stars.forEach((star) => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 240, ${star.alpha})`;
      this.ctx.fill();
    });
  },

  // === Animation Loop ===
  animate() {
    if (document.body.classList.contains('reduce-motion')) {
      this.drawStatic();
      return;
    }

    const loop = (time) => {
      if (document.body.classList.contains('reduce-motion')) {
        this.drawStatic();
        return;
      }

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawStars(time);
      this.drawBats(time);
      this.drawParticles();
      this.animationId = requestAnimationFrame(loop);
    };

    this.animationId = requestAnimationFrame(loop);
  },

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },
};
