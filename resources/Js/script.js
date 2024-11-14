window.addEventListener("scroll", function() {
    const scrollButton = document.getElementById("scroll-to-top");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight; // Calculate scroll percentage

    // Show the button when scrolled 100px down
    if (scrollTop > 100) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }

    // Calculate RGB values for color transition from light blue to green
    const startColor = { r: 173, g: 216, b: 230 }; // Light blue (#ADD8E6)
    const endColor = { r: 88, g: 132, b: 93 };     // Green (#58845D)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercent);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercent);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercent);

    // Apply the calculated color to the background of the button
    scrollButton.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
