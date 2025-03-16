// Function to toggle the visibility of project details
function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);

    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}

// Function to close project details when clicking outside the box
document.addEventListener("click", function(event) {
    const clickableBoxes = document.querySelectorAll(".clickable-box");
    clickableBoxes.forEach(box => {
        if (!box.contains(event.target)) {
            const projectDetails = box.querySelector(".project-details");
            if (projectDetails) {
                projectDetails.style.display = "none";
            }
        }
    });
});
