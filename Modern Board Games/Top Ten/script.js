function toggleMenu() {
    var navbar = document.querySelector(".nav-buttons");
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}