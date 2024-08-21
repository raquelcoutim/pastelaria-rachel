let textbox = document.querySelector(".textbox");
let button = document.querySelector(".button");

function pesquisa() {
    textbox.value = '';
}

button.addEventListener('click', pesquisa);
