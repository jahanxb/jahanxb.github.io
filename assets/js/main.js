/* Main JS — Jahanzeb Khan Academic Site */
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.mobile-nav-toggle');
  var body = document.body;
  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('mobile-nav-active');
      this.querySelector('i').classList.toggle('bx-menu');
      this.querySelector('i').classList.toggle('bx-x');
    });
  }

  // Close sidebar on overlay click (mobile)
  document.addEventListener('click', function (e) {
    if (body.classList.contains('mobile-nav-active')) {
      if (!e.target.closest('#header') && !e.target.closest('.mobile-nav-toggle')) {
        body.classList.remove('mobile-nav-active');
        if (toggle) {
          toggle.querySelector('i').classList.add('bx-menu');
          toggle.querySelector('i').classList.remove('bx-x');
        }
      }
    }
  });

  // Back to top
  var backTop = document.querySelector('.back-to-top');
  if (backTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backTop.style.display = 'flex';
      } else {
        backTop.style.display = 'none';
      }
    });
    backTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active nav on scroll
  var sections = document.querySelectorAll('section[id], div[id="hero"]');
  var navLinks = document.querySelectorAll('.nav-menu a');

  function setActiveNav() {
    var scrollPos = window.scrollY + 80;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        navLinks.forEach(function (link) {
          link.parentElement.classList.remove('active');
          if (link.getAttribute('href') === '#' + sec.id) {
            link.parentElement.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // Typed.js
  if (typeof Typed !== 'undefined') {
    var typedEl = document.querySelector('.typed');
    if (typedEl) {
      var items = typedEl.getAttribute('data-typed-items');
      new Typed('.typed', {
        strings: items ? items.split(',') : ['Adversarial ML Researcher', 'Ph.D. Candidate, CS', 'Security of Connected Vehicles'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
      });
    }
  }

  // AOS init
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true });
  }

})();
