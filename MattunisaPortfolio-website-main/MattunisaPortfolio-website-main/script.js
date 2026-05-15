/* Nav scroll shadow + active link highlight */
const header = document.getElementById('site-header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    highlightNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
  });
  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${current}` || href === `index.html#${current}`);
  });
}

/* Intersection Observer — fade-up on scroll */
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

/* Hero staggered entrance */
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.bio-eyebrow, .bio h1, .bio .tagline, .hero-stats, .hero-btns, .bio-right');
  items.forEach((el, i) => {
    el.style.cssText = `opacity:0; transform:translateY(22px); transition: opacity 0.65s ease ${i * 0.11}s, transform 0.65s ease ${i * 0.11}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }));
  });
});

/* Smooth scroll for internal anchors */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});