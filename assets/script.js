(() => {
  const root = document.documentElement;
  const translationNodes = [...document.querySelectorAll('[data-fr]')];
  const ariaTranslationNodes = [...document.querySelectorAll('[data-fr-aria]')];
  const languageButtons = [...document.querySelectorAll('[data-lang]')];
  const cvLink = document.querySelector('[data-cv-link]');
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const archiveToggle = document.querySelector('.archive-toggle');
  const archive = document.querySelector('#work-archive');
  let lastDialogTrigger = null;

  translationNodes.forEach((node) => {
    node.dataset.en = node.innerHTML;
  });

  ariaTranslationNodes.forEach((node) => {
    node.dataset.enAria = node.getAttribute('aria-label') || '';
  });

  function readLanguage() {
    try {
      return localStorage.getItem('ayushi-language') === 'fr' ? 'fr' : 'en';
    } catch {
      return 'en';
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem('ayushi-language', language);
    } catch {
      // The site still works when storage is unavailable.
    }
  }

  function applyLanguage(language) {
    const isFrench = language === 'fr';
    root.lang = language;

    translationNodes.forEach((node) => {
      node.innerHTML = isFrench ? node.dataset.fr : node.dataset.en;
    });

    ariaTranslationNodes.forEach((node) => {
      node.setAttribute('aria-label', isFrench ? node.dataset.frAria : node.dataset.enAria);
    });

    languageButtons.forEach((button) => {
      button.setAttribute('aria-current', button.dataset.lang === language ? 'true' : 'false');
    });

    if (cvLink) {
      cvLink.href = isFrench ? 'assets/Ayushi_Joshi_CV_FR.pdf' : 'assets/Ayushi_Joshi_CV_EN.pdf';
    }

    storeLanguage(language);
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(readLanguage());

  function setMenu(open) {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    const icon = menuButton.querySelector('i');
    if (icon) icon.className = open ? 'ph ph-x' : 'ph ph-list';
  }

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  });

  archiveToggle?.addEventListener('click', () => {
    const expanded = archiveToggle.getAttribute('aria-expanded') === 'true';
    archiveToggle.setAttribute('aria-expanded', String(!expanded));
    if (archive) archive.hidden = expanded;
    if (!expanded) archive?.querySelector('a')?.focus({ preventScroll: true });
  });

  document.querySelectorAll('[data-case]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const dialog = document.getElementById(trigger.dataset.case);
      if (!(dialog instanceof HTMLDialogElement)) return;
      lastDialogTrigger = trigger;
      dialog.showModal();
      document.body.classList.add('dialog-open');
      dialog.querySelector('[data-close-dialog]')?.focus();
    });
  });

  document.querySelectorAll('.case-dialog').forEach((dialog) => {
    const closeDialog = () => {
      dialog.close();
      document.body.classList.remove('dialog-open');
      lastDialogTrigger?.focus();
    };

    dialog.querySelector('[data-close-dialog]')?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeDialog();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
    });
  });

  const revealNodes = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px' });
    revealNodes.forEach((node) => revealObserver.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('in-view'));
  }

  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]:not(.nav-cta)')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-20% 0px -70%' });
    sections.forEach((section) => navObserver.observe(section));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') setMenu(false);
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.querySelector('#contact-form');
  const contactFormNote = document.querySelector('#contact-form-note');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:Ayushi.joshi1975@gmail.com?subject=${subject}&body=${body}`;
    if (contactFormNote) contactFormNote.hidden = false;
  });
})();
