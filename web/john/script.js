// Example of a simple script to toggle visibility of a section
document.addEventListener('DOMContentLoaded', function() {
    const educationSection = document.getElementById('education');
    educationSection.addEventListener('click', function() {
        educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
    });
});
