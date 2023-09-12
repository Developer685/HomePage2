{
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const table = document.querySelector(".js-table");

    const welcome = () => {
        console.log("Hello Developer");
    }
    const onChangeBackgroundClick = () => {

        button.classList.toggle("darkMode");
        table.classList.toggle("darkMode");
        body.classList.toggle("darkMode");

        button.classList.toggle("lightMode");
        table.classList.toggle("lightMode");
        body.classList.toggle("lightMode");

        if (button.classList.contains("lightMode")) {
            button.innerText = "Zmień na ciemny motyw";
        }
        else if (button.classList.contains("darkMode")) {
            button.innerText = "Zmień na jasny motyw";
        }
    }



    const init = () => {
     
        button.addEventListener("click", onChangeBackgroundClick);
        welcome();
        onChangeBackgroundClick();
    }
    
    init();

}