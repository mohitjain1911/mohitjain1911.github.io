// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (nav) nav.classList.remove('show');
    }
  });
});

// External links placeholders (set your real links here)
const linkedin = 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME';
const github = 'https://github.com/YOUR-GITHUB-USERNAME';
const linkedinEls = [document.getElementById('linkedin-link'), document.getElementById('cta-linkedin')].filter(Boolean);
const githubEls = [document.getElementById('github-link'), document.getElementById('cta-github')].filter(Boolean);
linkedinEls.forEach(el => el.setAttribute('href', linkedin));
githubEls.forEach(el => el.setAttribute('href', github));

// Active nav highlighting on scroll
const sectionIds = ['about','skills','experience','certs','projects','recommendations','contact'];
const navLinks = Array.from(document.querySelectorAll('#site-nav a')).filter(a => a.getAttribute('href').startsWith('#'));
const sectionMap = new Map(sectionIds.map(id => [id, document.getElementById(id)]));

const onScroll = () => {
  let current = null;
  sectionIds.forEach(id => {
    const el = sectionMap.get(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = id;
    }
  });
  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#','');
    if (href === current) link.classList.add('active'); else link.classList.remove('active');
  });
};
document.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const setTheme = (mode) => {
  document.documentElement.classList.toggle('light', mode === 'light');
  localStorage.setItem('theme', mode);
};
const initTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') setTheme(saved);
};
initTheme();
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
    setTheme(next);
  });
}

// Reveal on scroll
const revealables = Array.from(document.querySelectorAll('.section, .skill-card, .project-card, .exp-item, blockquote'));
revealables.forEach(el => el.classList.add('reveal'));
const reveal = () => {
  const viewH = window.innerHeight;
  revealables.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewH - 60) el.classList.add('show');
  });
};
window.addEventListener('scroll', reveal, { passive: true });
window.addEventListener('load', reveal);


