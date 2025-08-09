// assets/js/main.js
(() => {
  'use strict';

  // Smooth scroll dla wszystkich linków z kotwicą (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Privacy modal (otwieranie/zamykanie)
  const privacyModal = document.getElementById('privacyModal');
  const openPrivacyLinks = document.querySelectorAll('[data-open-privacy-modal]');
  const closeButtons = document.querySelectorAll('[data-close-privacy-modal]');

  const openPrivacyModal = () => { if (privacyModal) privacyModal.style.display = 'block'; };
  const closePrivacyModal = () => { if (privacyModal) privacyModal.style.display = 'none'; };

  openPrivacyLinks.forEach(el => el.addEventListener('click', e => { e.preventDefault(); openPrivacyModal(); }));
  closeButtons.forEach(el => el.addEventListener('click', closePrivacyModal));
  window.addEventListener('click', e => { if (e.target === privacyModal) closePrivacyModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePrivacyModal(); });

  // Stan ładowania dla przycisków submit (nie blokujemy POST do Netlify!)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = 'Wysyłanie...';
      btn.disabled = true;
      // Po submit strona przeładuje się (redirect do /success.html)
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 8000);
    });
  });
})();
