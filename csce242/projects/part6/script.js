const burger = document.getElementById("toggle-nav");
burger.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}