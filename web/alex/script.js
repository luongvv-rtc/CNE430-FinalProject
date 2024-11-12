// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections to add expand/collapse functionality
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        // Add a "clickable" cursor and event listener to each section heading (h2)
        const header = section.querySelector("h2");
        header.style.cursor = "pointer";

        // Set up a click event listener to toggle visibility of section content
        header.addEventListener("click", () => {
            // Toggle visibility of each child element (e.g., paragraphs, lists) within the section
            const content = section.querySelectorAll("p, ul, div");
            content.forEach(element => {
                // Switch between displaying and hiding each content element
                element.style.display = element.style.display === "none" ? "block" : "none";
            });

            // Optionally, toggle the arrow symbol on the header to indicate open/close state
            if (header.textContent.endsWith("▼")) {
                header.textContent = header.textContent.replace("▼", "▲");
            } else {
                header.textContent += " ▼";
            }
        });

        // Initially collapse all sections except the first (optional)
        if (section !== sections[0]) {
            const content = section.querySelectorAll("p, ul, div");
            content.forEach(element => {
                element.style.display = "none";
            });
            header.textContent += " ▼"; // Add down arrow to collapsed sections
        }
    });
});
