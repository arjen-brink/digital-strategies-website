// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
const menuLinks = document.querySelectorAll('.menu-links a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});