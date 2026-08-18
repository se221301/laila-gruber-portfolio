document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href') === '#') e.preventDefault();
  });
});
