// script.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const skillsSection = document.getElementById('skills');

    // Scroll to the skills section when the header is clicked
    header.addEventListener('click', function() {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
