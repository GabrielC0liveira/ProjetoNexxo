const botaoMenu = document.querySelector(".MenuHamburguer");
const menu = document.querySelector("#MenuNavegacao");

if (botaoMenu && menu) {

    const icone = botaoMenu.querySelector("i");

    function alternarMenu(aberto) {
        menu.classList.toggle("MenuAberto", aberto);

        botaoMenu.setAttribute("aria-expanded", aberto);

        icone.classList.toggle("fa-bars", !aberto);
        icone.classList.toggle("fa-xmark", aberto);
    }

    botaoMenu.addEventListener("click", function () {
        const aberto = menu.classList.contains("MenuAberto");

        alternarMenu(!aberto);
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            alternarMenu(false);
        }
    });

}