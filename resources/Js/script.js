window.addEventListener("scroll", function() {
    const scrollButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 100) { // Show button after scrolling down 100px
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});
