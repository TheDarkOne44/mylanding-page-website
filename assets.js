// assets/js/main.js
(() => {
  'use strict';

  // Zabezpieczenie przed console manipulation
  if (typeof console !== 'undefined') {
    console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cTo jest funkcja przeglądarki przeznaczona dla programistów. Jeśli ktoś powiedział ci, żebyś tutaj coś wkleił, to prawdopodobnie próbuje cię oszukać.', 'color: red; font-size: 16px;');
  }

  // Zabezpieczenie przed otwieraniem w iframe
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  // Wyłączenie prawego przycisku myszy (opcjonalne - może być irytujące dla użytkowników)
  // document.addEventListener('contextmenu', e => e.preventDefault());

  // Zabezpieczenie przed kopiowaniem (opcjonalne)
  // document.addEventListener('selectstart', e => e.preventDefault());
  // document.addEventListener('dragstart', e => e.preventDefault());

  // Smooth scroll dla wszystkich linków z kotwicą (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      // Walidacja href
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
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
      // Walidacja formularza przed wysłaniem
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
        }
      });
      
      if (!isValid) return;
      
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = 'Wysyłanie...';
      btn.disabled = true;
      // Po submit strona przeładuje się (redirect do /success.html)
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 8000);
    });
  });

  // Zabezpieczenie przed XSS w URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.forEach((value, key) => {
    if (/<script|javascript:|data:|vbscript:/i.test(value)) {
      console.warn('Potencjalnie niebezpieczny parametr URL wykryty:', key, value);
      // Opcjonalnie: przekieruj na czystą stronę
      // window.location.href = window.location.pathname;
    }
  });

  // Monitoring prób manipulacji DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) { // Element node
          // Sprawdź czy dodany element zawiera potencjalnie niebezpieczne atrybuty
          if (node.hasAttribute && (
            node.hasAttribute('onload') ||
            node.hasAttribute('onerror') ||
            node.hasAttribute('onclick')
          )) {
            console.warn('Wykryto potencjalnie niebezpieczny element:', node);
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
