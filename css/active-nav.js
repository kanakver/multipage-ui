// Highlight active nav link based on current page
const navLinks = document.querySelectorAll('nav a');
const current = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
}); 