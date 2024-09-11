// Function to toggle visibility for any section
function toggleSection(sectionId, buttonText) {
    var _a;
    var section = document.getElementById(sectionId);
    var button = document.createElement("button");
    button.textContent = "Show ".concat(buttonText);
    button.addEventListener("click", function () {
        if (section) {
            section.style.display = "block";
            button.style.display = "none";
        }
    });
    if (section) {
        section.style.display = "none";
        (_a = section.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(button, section);
    }
}
// Initialize toggle buttons for each section
window.addEventListener("DOMContentLoaded", function () {
    toggleSection("skills-section", "Skills");
    toggleSection("courses-section", "Courses");
    toggleSection("language-section", "Languages");
});
