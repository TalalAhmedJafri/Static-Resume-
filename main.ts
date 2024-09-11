// Function to toggle visibility for any section
function toggleSection(sectionId: string, buttonText: string) {
    const section = document.getElementById(sectionId);
    const button = document.createElement("button");
    button.textContent = `Show ${buttonText}`;
    
    button.addEventListener("click", () => {
        if (section) {
            section.style.display = "block";
            button.style.display = "none";
        }
    });

    if (section) {
        section.style.display = "none";
        section.parentNode?.insertBefore(button, section);
    }
}

// Initialize toggle buttons for each section
window.addEventListener("DOMContentLoaded", () => {
    toggleSection("skills-section", "Skills");
    toggleSection("courses-section", "Courses");
    toggleSection("language-section", "Languages");
});
