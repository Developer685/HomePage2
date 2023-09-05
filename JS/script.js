let button = document.querySelector(".js-button");

let body = document.querySelector(".js-body");
let table = document.querySelector(".js-table");

button.addEventListener("click", () => {
    button.classList.toggle("darkMode");
    table.classList.toggle("darkMode");
    body.classList.toggle("darkMode");
})
button.addEventListener("click", () => {
    button.classList.toggle("lightMode");
    table.classList.toggle("lightMode");
    body.classList.toggle("lightMode");
})

button.addEventListener("click", () => {
    if (button.classList.contains("lightMode")) {
        button.innerText = "Zmień na ciemny motyw";

    }
    else if (button.classList.contains("darkMode")) {
        button.innerText = "Zmień na jasny motyw";
    }
})


