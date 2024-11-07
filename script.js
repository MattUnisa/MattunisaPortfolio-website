// Function to add a fade-in effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // If the section is in the viewport
        if (sectionTop < viewportHeight - 150) {
            section.classList.add('visible');
        }
    });
});

// Adding fade-in effect to CSS
document.styleSheets[0].insertRule(`
    section {
        opacity: 0;
        transition: opacity 1s ease-out;
}
`, 0);

document.styleSheets[0].insertRule(`
    section.visible {
        opacity: 1;
    }
`, 0);

// Optional: Smooth scrolling on project hover to highlight active project
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

