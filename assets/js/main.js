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

  // Hero orbit animation — 3 rings
  var orbitEl = document.querySelector('.hero-orbit');
  if (orbitEl) {
    var rings = [
      { items: orbitEl.querySelectorAll('.ho-i'), r: 22, period: 30,  dir:  1 },
      { items: orbitEl.querySelectorAll('.ho-m'), r: 37, period: 50,  dir: -1 },
      { items: orbitEl.querySelectorAll('.ho-o'), r: 52, period: 72,  dir:  1 }
    ];
    var t0 = null;
    var TAU = 2 * Math.PI;
    function vmin() { return Math.min(window.innerWidth, window.innerHeight) / 100; }
    function orbitStep(ts) {
      if (!t0) t0 = ts;
      var secs = (ts - t0) / 1000;
      var vm = vmin();
      rings.forEach(function(ring) {
        var r = ring.r * vm;
        var n = ring.items.length;
        for (var i = 0; i < n; i++) {
          var a = ring.dir * (secs / ring.period) * TAU + (i / n) * TAU;
          ring.items[i].style.transform =
            'translate(' + (Math.cos(a) * r).toFixed(1) + 'px,' +
                           (Math.sin(a) * r).toFixed(1) + 'px)';
        }
      });
      requestAnimationFrame(orbitStep);
    }
    requestAnimationFrame(orbitStep);
  }

})();
