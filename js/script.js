const botaoMenu = document.querySelector(".MenuHamburguer");
const menu = document.querySelector("#MenuNavegacao");
const fecharMenu = document.querySelector(".FecharMenu");

if (botaoMenu && menu && fecharMenu) {

    function alternarMenu(aberto) {
        menu.classList.toggle("MenuAberto", aberto);
        botaoMenu.setAttribute("aria-expanded", aberto);
    }

    botaoMenu.addEventListener("click", function () {
        alternarMenu(true);
    });

    fecharMenu.addEventListener("click", function () {
        alternarMenu(false);
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            alternarMenu(false);
        }
    });


}