// assets/js/main.js
(() => {
  'use strict';

  // Zabezpieczenie przed console manipulation
  if (typeof console !== 'undefined') {
    const warningStyle = 'color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);';
    const messageStyle = 'color: red; font-size: 16px; font-weight: bold; background: yellow; padding: 10px; border-radius: 5px;';
    console.log('%cSTOP!', warningStyle);
    console.log('%c⚠️ UWAGA! To jest funkcja przeglądarki przeznaczona dla programistów. Jeśli ktoś powiedział ci, żebyś tutaj coś wkleił, to prawdopodobnie próbuje cię oszukać i ukraść Twoje dane! NIE WKLEJAJ TUTAJ ŻADNEGO KODU!', messageStyle);
  }

  // Zabezpieczenie przed osadzaniem w iframe
  try {
    if (window.self !== window.top) {
      window.top.location.href = window.self.location.href;
    }
  } catch (e) {
    // Ignoruj błędy SecurityError w środowiskach z ograniczeniami CORS
    console.warn('Iframe protection blocked by security policy');
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
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = 'Wysyłanie...';
      btn.disabled = true;
      // Po submit strona przeładuje się (redirect do /success.html)
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 8000);
    });
  });

  // Walidacja formularza w czasie rzeczywistym
  document.querySelectorAll('form').forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Funkcja sprawdzająca czy formularz jest poprawny
    const validateForm = () => {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        const value = field.value.trim();
        
        // Sprawdź czy pole jest wypełnione
        if (!value) {
          isValid = false;
          return;
        }
        
        // Sprawdź checkbox zgody
        if (field.type === 'checkbox' && !field.checked) {
          isValid = false;
          return;
        }
        
        // Sprawdź na niebezpieczne znaki
        if (/<script|javascript:|data:|vbscript:|on\w+\s*=/i.test(value)) {
          isValid = false;
          return;
        }
      });
      
      // Aktualizuj stan przycisku
      if (submitBtn) {
        submitBtn.disabled = !isValid;
        submitBtn.style.opacity = isValid ? '1' : '0.6';
      }
      
      return isValid;
    };
    
    // Waliduj przy każdej zmianie
    form.addEventListener('input', validateForm);
    form.addEventListener('change', validateForm);
    
    // Początkowa walidacja
    validateForm();
  });

  // Zabezpieczenie przed XSS w URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.forEach((value, key) => {
    if (/<script|javascript:|data:|vbscript:|on\w+\s*=|eval\(|expression\(/i.test(value)) {
      console.warn('Potencjalnie niebezpieczny parametr URL wykryty:', key, value);
      // Przekieruj na czystą stronę dla bezpieczeństwa
      if (window.location.search) {
        window.location.href = window.location.pathname;
      }
    }
  });

  // Monitoring prób manipulacji DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) { // Element node
          // Sprawdź czy dodany element zawiera potencjalnie niebezpieczne atrybuty lub zawartość
          if (node.hasAttribute && (
            node.hasAttribute('onload') ||
            node.hasAttribute('onerror') ||
            node.hasAttribute('onclick') ||
            node.hasAttribute('onmouseover') ||
            node.hasAttribute('onfocus') ||
            /on\w+/.test(node.outerHTML)
          )) {
            console.warn('Wykryto potencjalnie niebezpieczny element:', node);
            // Usuń niebezpieczny element
            if (node.parentNode) {
              node.parentNode.removeChild(node);
            }
          }
          
          // Sprawdź zawartość tekstową na niebezpieczne skrypty
          if (node.innerHTML && /<script|javascript:|vbscript:/i.test(node.innerHTML)) {
            console.warn('Wykryto potencjalnie niebezpieczną zawartość:', node);
            if (node.parentNode) {
              node.parentNode.removeChild(node);
            }
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Dodatkowe zabezpieczenie przed manipulacją formularza
  const originalFormAction = document.querySelector('form')?.action;
  setInterval(() => {
    const form = document.querySelector('form');
    if (form && form.action !== originalFormAction && form.action !== '/success.html') {
      console.warn('Wykryto próbę zmiany akcji formularza!');
      form.action = '/success.html';
    }
  }, 1000);

  // Śledzenie wysłania formularza
  document.getElementById('contactForm').addEventListener('submit', function() {
    fbq('track', 'Contact');
  });
// Śledzenie kliknięć w CTA
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    fbq('track', 'InitiateCheckout');
  });
});

// Śledzenie czasu spędzonego na stronie
setTimeout(() => {
  fbq('track', 'ViewContent', {
    content_name: 'Homepage',
    content_category: 'AI Services'
  });
}, 30000); // Po 30 sekundach
  // Zabezpieczenie przed clickjacking
  if (window.self !== window.top) {
    document.body.style.display = 'none';
    alert('Ta strona nie może być wyświetlana w ramce z powodów bezpieczeństwa.');
  }

  // FAQ toggle functionality
  window.toggleFaq = function(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  };

  // Smooth scroll animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in animations to elements
  document.querySelectorAll('.service-card, .benefit-item, .testimonial-card, .faq-item, .package-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Enhanced form validation with better UX
  document.querySelectorAll('input, textarea, select').forEach(field => {
    const formGroup = field.closest('.form-group');
    
    field.addEventListener('focus', () => {
      formGroup?.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
      formGroup?.classList.remove('focused');
      if (field.value) {
        formGroup?.classList.add('filled');
      } else {
        formGroup?.classList.remove('filled');
      }
    });

    // Real-time validation feedback
    field.addEventListener('input', () => {
      const isValid = field.checkValidity();
      formGroup?.classList.toggle('valid', isValid && field.value);
      formGroup?.classList.toggle('invalid', !isValid && field.value);
    });
  });

  // Add loading animation to CTA buttons
  document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        const originalText = button.textContent;
        button.innerHTML = '<span class="loading-spinner"></span> Ładowanie...';
        
        setTimeout(() => {
          button.classList.remove('loading');
          button.innerHTML = originalText;
        }, 2000);
      }
    });
  });
})();
