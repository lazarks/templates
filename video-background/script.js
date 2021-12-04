const toggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

toggle.addEventListener("click", () => {
    let icon = toggle.querySelector("i");
    toggle.classList.toggle("active");
    showcase.classList.toggle("active");

    if (toggle.classList.contains("active")) {
        icon.classList = "fas fa-times";
    } else {
        icon.classList = "fas fa-bars";
    }
});
