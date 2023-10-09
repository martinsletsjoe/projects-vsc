function categoryToggle(){
    document.addEventListener("DOMContentLoaded", function () {
        const toggleHeader = document.querySelector(".toggle-header");
        const toggleContent = document.querySelector(".toggle-content");
    
        toggleHeader.addEventListener("click", function () {
            if (toggleContent.style.display === "none" || toggleContent.style.display === "") {
                toggleContent.style.display = "block";
            } else {
                toggleContent.style.display = "none";
            }
        });
    });
    
}