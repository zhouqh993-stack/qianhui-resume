const tabs = document.querySelectorAll('.company-tab');
const panels = document.querySelectorAll('.experience-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target)?.classList.add('active');
  });
});

const menuButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMenu() {
  menuButton.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuButton.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

document.querySelectorAll('.masked-phone').forEach((element) => {
  element.textContent = '15851851787';
});
document.querySelectorAll('.masked-email').forEach((element) => {
  element.textContent = '15851851787@163.com';
});

// Use native symbols for deterministic icon rendering across deployment environments.
const iconSymbols = {
  arrow_downward: '↓', north_east: '↗', arrow_upward: '↑', auto_awesome: '✦',
  insights: '⌁', school: '◇', workspace_premium: '★', trophy: '★',
  query_stats: '↗', neurology: '⬡', account_tree: '⌘', database: '▦',
  groups: '◎', movie_edit: '◧', monitoring: '∿', translate: '文',
  emoji_events: '★', call: '☎', mail: '✉', location_on: '●',
  local_shipping: '→', hub: '⬡', conversion_path: '⌁', smart_toy: '◇',
  analytics: '↗', auto_fix_high: '✦'
};
document.querySelectorAll('.material-symbols-rounded').forEach((icon) => {
  const symbol = iconSymbols[icon.textContent.trim()];
  if (symbol) {
    icon.textContent = symbol;
    icon.classList.add('native-symbol');
  }
});
