// Keep the footer year current.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Update the active navigation item while scrolling on the home page.
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = links
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

// Browsers can restore an older cached version of index.html when navigating
// back from a project page. Reload only when the page was restored from the
// back/forward cache so newly added sections (e.g. the career timeline) remain visible.
window.addEventListener('pageshow', event => {
  if (event.persisted) {
    window.location.reload();
  }
});
