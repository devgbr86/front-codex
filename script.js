/* ═══════════════════════════════════════════════════════
   script.js — FrontBooks Landing Page
   Comportamentos: AOS init, smooth scroll, hover effects
════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. INICIALIZA AOS ── */
  AOS.init({
    once: true,
    offset: 80,
    easing: 'ease-out',
    duration: 700
  });

  /* ── 2. NAVBAR — adiciona sombra ao rolar ── */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.style.borderBottomColor = 'rgba(255, 102, 0, 0.6)';
      navbar.style.boxShadow = '0 2px 24px rgba(255, 102, 0, 0.1)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255, 102, 0, 0.35)';
      navbar.style.boxShadow = 'none';
    }
  });

  /* ── 3. SMOOTH SCROLL para âncoras internas ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      const navH = navbar ? navbar.offsetHeight : 64;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── 4. EFEITO GLOW nos botões ao hover ── */
  document.querySelectorAll('.btn-primary').forEach(function (btn) {
    btn.addEventListener('mouseenter', function () {
      this.style.textShadow = '0 0 8px rgba(255, 102, 0, 0.8)';
    });
    btn.addEventListener('mouseleave', function () {
      this.style.textShadow = '';
    });
  });

  /* ── 5. HOVER nos capítulos do sumário ── */
  document.querySelectorAll('.summary-chapter').forEach(function (ch) {
    ch.addEventListener('mouseenter', function () {
      const num = this.querySelector('.chapter-num');
      if (num) num.style.opacity = '1';
    });
    ch.addEventListener('mouseleave', function () {
      const num = this.querySelector('.chapter-num');
      if (num) num.style.opacity = '';
    });
  });

});