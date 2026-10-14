/* ============================================
   App — Main initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  initLang();
  
  // Update lang button text
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.querySelector('span').textContent = currentLang === 'es' ? 'EN' : 'ES';
  }

  // Initialize modules
  Ghost.init();
  Audio.init();
  BgCanvas.init();
  if (window.SecretEngine) window.SecretEngine.init();
  Engine.init();

  // Show ghost after a delay on first visit
  if (Engine.currentPhase === 1) {
    setTimeout(() => {
      Ghost.enterFrom('bottom-right');
      Ghost.setState('neutral');
    }, 3000);
  }

  // Handle visibility change (pause/resume animations)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      BgCanvas.destroy();
    } else {
      if (!document.body.classList.contains('reduce-motion')) {
        BgCanvas.animate();
      }
    }
  });

  console.log('🎃 Halloween 2026 — ¿Te atreves a venir?');
  console.log('👻 Developed with love and a little bit of terror.');
});
