// Smooth scroll to sections when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation to the CTA button when hovered
const ctaButton = document.querySelector('.cta-btn');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.1)';
    ctaButton.style.boxShadow = '0 0 20px 5px #f39c12';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
    ctaButton.style.boxShadow = 'none';
});

// Display a dynamic welcome message in the hero section
const heroTitle = document.querySelector('.hero h1');
const welcomeMessages = [
    'Panther is Here to Stay!',
    'Welcome to the Panther Revolution!',
    'Join the Panther Meme Movement!'
];
heroTitle.textContent = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
