document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const header = section.querySelector("h2");
        header.style.cursor = "pointer";
        
        header.addEventListener("click", () => {
            const content = section.querySelectorAll("p, ul");
            content.forEach(element => {
                element.style.display = element.style.display === "none" ? "block" : "none";
            });
        });
    });
});
