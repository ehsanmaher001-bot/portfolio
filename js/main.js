/**
 * ============================================================================
 * MAIN APPLICATION SCRIPT — EHSAN MAHER PORTFOLIO
 * ============================================================================
 * Coordinates theme switching, dynamic rendering from data.js,
 * custom cursor physics, modal viewer, and interactive components.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DUAL VISUAL MOODS (LIGHT / DARK THEME MANAGER)
  // ==========================================================================
  const THEME_STORAGE_KEY = 'ehsan_maher_portfolio_theme';
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-label');
  const themeIconSlot = document.getElementById('theme-icon-slot');

  const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"/></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeToggleBtn && themeLabel && themeIconSlot) {
      if (theme === 'dark') {
        themeLabel.textContent = 'LIGHT';
        themeIconSlot.innerHTML = sunIcon;
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mood');
      } else {
        themeLabel.textContent = 'DARK';
        themeIconSlot.innerHTML = moonIcon;
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mood');
      }
    }
  }

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // ==========================================================================
  // 2. CUSTOM EDITORIAL CURSOR
  // ==========================================================================
  const cursorDot = document.getElementById('custom-cursor-dot');
  const cursorFollower = document.getElementById('custom-cursor-follower');

  if (cursorDot && cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateFollower);
    }
    requestAnimationFrame(animateFollower);

    // Interactive Hover Listeners
    function attachCursorInteractions() {
      const interactives = document.querySelectorAll('a, button, .interactive-hover, .skill-tag-pill, .cert-card');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });

      const projectCards = document.querySelectorAll('.project-item');
      projectCards.forEach((card) => {
        card.addEventListener('mouseenter', () => document.body.classList.add('cursor-view'));
        card.addEventListener('mouseleave', () => document.body.classList.remove('cursor-view'));
      });
    }
    attachCursorInteractions();
  }

  // ==========================================================================
  // 3. WORD-BY-WORD HERO TEXT REVEAL
  // ==========================================================================
  function triggerHeroReveal() {
    const revealItems = document.querySelectorAll('.hero-section .word-reveal-item');
    revealItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('revealed');
      }, index * 90 + 120);
    });
  }
  // Fire entrance smoothly
  setTimeout(triggerHeroReveal, 100);

  // ==========================================================================
  // ROTATING DISCIPLINES ANIMATION (Word-by-word reveal, hold, smooth fade, loop)
  // ==========================================================================
  const rotatingDisciplinesTrack = document.getElementById('hero-disciplines-track');
  const disciplinesList = [
    'Packaging Design',
    'Graphic Design',
    'Motion Graphic',
    'Branding',
    'Pre Press'
  ];

  if (rotatingDisciplinesTrack) {
    let currentDisciplineIndex = 0;
    let activeTimeouts = [];

    function clearTrackTimeouts() {
      activeTimeouts.forEach((id) => clearTimeout(id));
      activeTimeouts = [];
    }

    function scheduleTimeout(fn, delay) {
      const id = setTimeout(fn, delay);
      activeTimeouts.push(id);
      return id;
    }

    function playDiscipline(phrase) {
      if (!rotatingDisciplinesTrack) return;
      clearTrackTimeouts();

      // Reset track state
      rotatingDisciplinesTrack.classList.remove('is-exiting');
      rotatingDisciplinesTrack.innerHTML = '';

      const words = phrase.trim().split(/\s+/);
      const wordSpans = [];

      // Create span for each word
      words.forEach((word) => {
        const span = document.createElement('span');
        span.className = 'rotator-word';
        span.textContent = word;
        rotatingDisciplinesTrack.appendChild(span);
        wordSpans.push(span);
      });

      // 1. Reveal words word-by-word smoothly
      const wordStaggerDelay = 220;
      wordSpans.forEach((span, i) => {
        scheduleTimeout(() => {
          span.classList.add('is-revealed');
        }, 60 + i * wordStaggerDelay);
      });

      // Time when all words are revealed
      const revealCompleteTime = 60 + (wordSpans.length - 1) * wordStaggerDelay + 380;

      // 2. The complete phrase remains visible briefly
      const holdDuration = 1800;
      const exitStartTime = revealCompleteTime + holdDuration;

      // 3. The phrase then disappears smoothly
      scheduleTimeout(() => {
        rotatingDisciplinesTrack.classList.add('is-exiting');
      }, exitStartTime);

      // 4. Move to next phrase after exit transition
      const exitDuration = 350;
      const nextCycleTime = exitStartTime + exitDuration + 90;

      scheduleTimeout(() => {
        currentDisciplineIndex = (currentDisciplineIndex + 1) % disciplinesList.length;
        playDiscipline(disciplinesList[currentDisciplineIndex]);
      }, nextCycleTime);
    }

    // Start rotation
    playDiscipline(disciplinesList[0]);
  }

  // ==========================================================================
  // 4. SCROLL REVEAL & NAVIGATION SCROLLSPY
  // ==========================================================================
  const scrollElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-scale-in');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  scrollElements.forEach(el => scrollObserver.observe(el));

  // Section ScrollSpy for Nav Links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Menu Drawer
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');

  if (mobileNavToggle && mobileMenuDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileMenuDrawer.classList.toggle('open');
      mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenuDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.remove('open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // 5. DYNAMIC DATA POPULATION
  // ==========================================================================
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    // 5.1 Creative Disciplines Section (#41)
    const disciplinesContainer = document.getElementById('disciplines-container');
    if (disciplinesContainer && PORTFOLIO_DATA.disciplines) {
      disciplinesContainer.innerHTML = PORTFOLIO_DATA.disciplines.map(d => `
        <div class="discipline-item ${d.featured ? 'featured' : ''}" data-id="${d.id}">
          <div>
            <h3 class="discipline-name">${d.name}</h3>
          </div>
          <div class="discipline-meta">
            <span class="font-mono">${d.category}</span>
            <p class="discipline-desc-reveal">${d.description}</p>
          </div>
        </div>
      `).join('');
    }

    // 5.2 Education Timeline
    const educationContainer = document.getElementById('education-container');
    if (educationContainer && PORTFOLIO_DATA.education) {
      educationContainer.innerHTML = PORTFOLIO_DATA.education.map(e => `
        <div class="timeline-step reveal-fade-up is-visible">
          <div class="timeline-node-pin" aria-hidden="true"></div>
          <div class="timeline-content-card">
            <div class="crop-mark crop-tl"></div>
            <div class="crop-mark crop-br"></div>
            <div class="timeline-year-badge">${e.period}</div>
            <h3 class="timeline-institution">${e.institution}</h3>
            <h4 class="timeline-faculty">${e.faculty}</h4>
            <p class="timeline-desc">${e.department}</p>
          </div>
        </div>
      `).join('');
    }

    // 5.3 Interactive Skills Map & Software Suite
    const skillsContainer = document.getElementById('skills-tags-cluster');
    const softwareContainer = document.getElementById('software-tags-cluster');
    const inspectorContainer = document.getElementById('skill-detail-inspector');

    function renderSkillInspector(item) {
      if (!inspectorContainer) return;
      inspectorContainer.innerHTML = `
        <div class="crop-mark crop-tl"></div>
        <div class="crop-mark crop-tr"></div>
        <div class="crop-mark crop-bl"></div>
        <div class="crop-mark crop-br"></div>
        <div class="skill-inspector-header">
          <h3 class="skill-inspector-name">${item.name}</h3>
          <span class="skill-inspector-category">${item.category}</span>
        </div>
        <p class="skill-inspector-body">${item.summary}</p>
        <div class="skill-competencies-list">
          <div class="spec-label" style="margin-bottom: 0.5rem;">Core Competencies & Applications</div>
          ${item.competencies.map(c => `
            <div class="competency-item">${c}</div>
          `).join('')}
        </div>
      `;
    }

    if (skillsContainer && softwareContainer && PORTFOLIO_DATA.skills) {
      const allSkills = [
        ...PORTFOLIO_DATA.skills.disciplines,
        ...PORTFOLIO_DATA.skills.software
      ];

      // Initial active item
      renderSkillInspector(allSkills[0]);

      skillsContainer.innerHTML = PORTFOLIO_DATA.skills.disciplines.map((s, i) => `
        <button type="button" class="skill-tag-pill ${i === 0 ? 'active' : ''}" data-name="${s.name}">
          ${s.name}
        </button>
      `).join('');

      softwareContainer.innerHTML = PORTFOLIO_DATA.skills.software.map(s => `
        <button type="button" class="skill-tag-pill" data-name="${s.name}">
          ${s.name}
        </button>
      `).join('');

      document.querySelectorAll('.skill-tag-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.skill-tag-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const found = allSkills.find(item => item.name === btn.dataset.name);
          if (found) renderSkillInspector(found);
        });

        btn.addEventListener('mouseenter', () => {
          const found = allSkills.find(item => item.name === btn.dataset.name);
          if (found) renderSkillInspector(found);
        });
      });
    }

    // 5.4 Experiences Timeline
    const expContainer = document.getElementById('experience-container');
    if (expContainer && PORTFOLIO_DATA.experiences) {
      expContainer.innerHTML = PORTFOLIO_DATA.experiences.map(exp => `
        <div class="timeline-step reveal-fade-up is-visible">
          <div class="timeline-node-pin" aria-hidden="true"></div>
          <div class="timeline-content-card">
            <div class="crop-mark crop-tl"></div>
            <div class="crop-mark crop-br"></div>
            <div class="timeline-year-badge">${exp.period}</div>
            <h3 class="timeline-institution">${exp.organization}</h3>
            <h4 class="timeline-faculty">${exp.role}</h4>
            <p class="timeline-desc">${exp.description}</p>
          </div>
        </div>
      `).join('');
    }

    // 5.5 Offered Services (Six concise offerings)
    const servicesContainer = document.getElementById('services-container');

    function getServiceIcon(title) {
      const icons = {
        'Graphic Design': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4"/><path d="M8 12h8M8 16h6"/></svg>',
        'Packaging Design': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"/><path d="M12 4v16M4 8.5 12 13l8-4.5"/></svg>',
        'Branding': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v5m0 10v5m10-10h-5M7 12H2"/><path d="m15.5 8.5 4-4M4.5 19.5l4-4M15.5 15.5l4 4M4.5 4.5l4 4"/></svg>',
        'Print Design': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
        'Motion Graphics': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h10l4 7-4 7H5l4-7-4-7Z"/><path d="m10 9 5 3-5 3V9Z"/></svg>',
        'Logo Design': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.2 5.1L20 10l-5.8 1.9L12 17l-2.2-5.1L4 10l5.8-1.9L12 3Z"/><path d="M19 16v5M16.5 18.5h5"/></svg>'
      };
      return icons[title] || icons['Graphic Design'];
    }

    if (servicesContainer && PORTFOLIO_DATA.services) {
      servicesContainer.innerHTML = PORTFOLIO_DATA.services.map(srv => `
        <div class="service-card reveal-fade-up is-visible">
          <div class="crop-mark crop-tl"></div>
          <div class="crop-mark crop-br"></div>
          <div class="service-card-topline">
            <span class="service-icon">${getServiceIcon(srv.title)}</span>
            <div class="service-number">${srv.number} / ${PORTFOLIO_DATA.services.length}</div>
          </div>
          <div>
            <h3 class="service-title">${srv.title}</h3>
            <p class="service-desc">${srv.description}</p>
          </div>
        </div>
      `).join('');
    }

    // 5.6 Projects Showcase (Consistent project cards)
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && PORTFOLIO_DATA.projects) {
      projectsContainer.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
        <article class="project-card reveal-fade-up is-visible" id="project-${proj.id}">
          <div class="project-card-media" style="aspect-ratio: ${proj.aspectRatio};">
            <img src="${proj.image}" alt="${proj.title}" loading="eager" style="display: none; width: 100%; height: 100%; object-fit: ${proj.id === 'ganoubi' || proj.id === 'star' ? 'contain' : 'cover'}; object-position: center;" onload="this.style.display = 'block'; this.classList.add('is-loaded'); this.nextElementSibling.hidden = true;" onerror="if ('${proj.id}' === 'cherry-blossom-pop-up-candle' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/pop-up-gift.jpg.jpg'; } else if ('${proj.id}' === 'optical-illusion-acrylic-paint' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/optical-illusion.jpg.jpg'; } else if ('${proj.id}' === 'wasla-autism-support-app' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/wasla-uiux.jpg.jpg'; } else if ('${proj.id}' === 'because-every-second-matters' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/smart-safety-watch.jpg.png'; } else if ('${proj.id}' === 'ready-for-summer-glow' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/vacation-motion.jpg.png'; } else if ('${proj.id}' === 'ganoubi' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/projects/Ganoubi.jpeg'; } else { this.style.display = 'none'; this.nextElementSibling.hidden = false; }" />
            <div class="project-image-slot">
              <span class="project-placeholder-number">${String(idx + 1).padStart(2, '0')}</span>
              <span class="project-placeholder-label">Image slot · ${proj.image}</span>
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-card-meta">
              <span class="project-number">${proj.number}</span>
              <span class="project-category-badge">${proj.category}</span>
            </div>
            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-card-description">${proj.description}</p>
            <a href="${proj.behanceUrl}" target="_blank" rel="noopener noreferrer" class="project-cta-link">
              <span>View Project</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `).join('');
    }

    // 5.7 Achievements & Certificates Archive + Document Modal Viewer
    const certsContainer = document.getElementById('certs-container');
    const certModalBackdrop = document.getElementById('cert-modal-backdrop');
    const certModalContent = document.getElementById('cert-modal-content');
    const certModalClose = document.getElementById('cert-modal-close');

    function openCertModal(cert) {
      if (!certModalContent || !certModalBackdrop) return;
      certModalContent.innerHTML = `
        <div class="crop-mark crop-tl"></div>
        <div class="crop-mark crop-tr"></div>
        <div class="crop-mark crop-bl"></div>
        <div class="crop-mark crop-br"></div>
        
        <div style="margin-bottom: 1rem;">
          <span class="cert-hours-badge">${cert.duration}</span>
        </div>
        <h3 class="timeline-institution" style="font-size: var(--text-2xl);">${cert.issuer}</h3>
        <h4 class="cert-title" style="font-size: var(--text-lg);">${cert.title}</h4>
        <div class="spec-label" style="margin-bottom: 1.5rem;">${cert.subtitle} · ${cert.date}</div>

        <!-- High-resolution Certificate Placeholder Container -->
        <div class="cert-modal-doc-frame">
          <img src="${cert.image}" alt="${cert.title}" loading="eager" style="display: none; width: 100%; height: 100%; object-fit: contain; object-position: center;" onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none';" onerror="if ('${cert.id}' === 'cert-jetpack' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/certificates/jetpack-certificate.jpeg'; } else if ('${cert.id}' === 'cert-iti' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/certificates/iti-certificate.jpeg'; } else { this.style.display='none'; }" />
          <div class="cert-modal-placeholder-inner">
            <div class="reg-mark" style="top: 12px; left: 12px;">
              <svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6"/><line x1="10" y1="2" x2="10" y2="18"/><line x1="2" y1="10" x2="18" y2="10"/></svg>
            </div>
            <div class="font-mono" style="color: var(--accent-burgundy); font-weight: 700; margin-bottom: 0.5rem;">
              [ OFFICIAL DOCUMENT SCAN HOLDER ]
            </div>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); max-width: 480px;">
              Ready to display the verified document asset for <strong>${cert.issuer}</strong> (${cert.title}).
            </p>
            <div class="font-mono" style="margin-top: 1rem; font-size: 0.68rem; color: var(--text-tertiary);">
              FILE SLOT: ${cert.image}
            </div>
          </div>
        </div>

        <div style="margin-top: 1.5rem;">
          <div class="spec-label" style="margin-bottom: 0.75rem;">Curriculum Specifications & Verified Topics</div>
          <div class="skill-competencies-list">
            ${cert.topics.map(t => `<div class="competency-item">${t}</div>`).join('')}
          </div>
        </div>
      `;
      certModalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
      if (!certModalBackdrop) return;
      certModalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
    if (certModalBackdrop) {
      certModalBackdrop.addEventListener('click', (e) => {
        if (e.target === certModalBackdrop) closeCertModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModalBackdrop && certModalBackdrop.classList.contains('open')) {
        closeCertModal();
      }
    });

    if (certsContainer && PORTFOLIO_DATA.certificates) {
      certsContainer.innerHTML = PORTFOLIO_DATA.certificates.map(cert => `
        <div class="cert-card reveal-fade-up is-visible" data-id="${cert.id}">
          <div class="crop-mark crop-tl"></div>
          <div class="crop-mark crop-br"></div>
          <div>
            <div class="cert-header">
              <span class="cert-hours-badge">${cert.duration.split('·')[0]}</span>
              <span class="spec-label">${cert.date.includes('–') ? '2025' : 'CERTIFIED'}</span>
            </div>
            <div class="cert-image-frame">
              <img src="${cert.image}" alt="${cert.title}" loading="eager" style="display: none; width: 100%; height: 100%; object-fit: contain; object-position: center;" onload="this.style.display = 'block'; this.classList.add('is-loaded'); this.nextElementSibling.hidden = true;" onerror="if ('${cert.id}' === 'cert-jetpack' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/certificates/jetpack-certificate.jpeg'; } else if ('${cert.id}' === 'cert-iti' && !this.dataset.fallbackApplied) { this.dataset.fallbackApplied = 'true'; this.src = 'assets/certificates/iti-certificate.jpeg'; } else { this.style.display = 'none'; this.nextElementSibling.hidden = false; }" />
              <div class="cert-image-slot">Certificate image slot<br><span>${cert.image}</span></div>
            </div>
            <h3 class="cert-issuer">${cert.issuer}</h3>
            <h4 class="cert-title">${cert.title}</h4>
            ${cert.description ? `<p class="cert-description">${cert.description}</p>` : ''}
          </div>
          <div class="cert-card-cta">
            <span>View Certificate</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      `).join('');

      document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('click', () => {
          const certId = card.dataset.id;
          const certObj = PORTFOLIO_DATA.certificates.find(c => c.id === certId);
          if (certObj) openCertModal(certObj);
        });
      });
    }

    // 5.8 Feedback Section (Testimonials)
const feedbackQuoteSlot = document.getElementById('feedback-quote-slot');

if (feedbackQuoteSlot && PORTFOLIO_DATA.testimonials && PORTFOLIO_DATA.testimonials.length) {
  feedbackQuoteSlot.innerHTML = PORTFOLIO_DATA.testimonials.map(testimonial => `
    <div class="feedback-testimonial" style="margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid rgba(0,0,0,0.12);">
      <div class="quote-mark-dieline">“</div>
      <div class="feedback-quote-text">
        ${testimonial.text.split('\n\n').map(p => `<p style="margin-bottom: 1.2rem;">${p}</p>`).join('')}
      </div>
      <div class="feedback-author-block">
        <div>
          <div class="author-name">${testimonial.author}</div>
          <div class="author-role">${testimonial.role}</div>
        </div>
        <div class="author-stamp">${testimonial.stamp}</div>
      </div>
    </div>
  `).join('');
}
    // 5.9 Contact Links
    const contactLinksContainer = document.getElementById('contact-links-container');
    if (contactLinksContainer && PORTFOLIO_DATA.personalInfo && PORTFOLIO_DATA.personalInfo.contact) {
      const c = PORTFOLIO_DATA.personalInfo.contact;
      contactLinksContainer.innerHTML = `
        <a href="mailto:${c.email}" class="contact-pill-link">
          <span>EMAIL</span>
          <span aria-hidden="true">→</span>
        </a>
        <a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-pill-link">
          <span>LINKEDIN</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a href="${c.behance}" target="_blank" rel="noopener noreferrer" class="contact-pill-link">
          <span>BEHANCE</span>
          <span aria-hidden="true">↗</span>
        </a>
      `;
    }
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
