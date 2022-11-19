const menuBotao = document.querySelector(".cabecalho__menu")
const menu = document.querySelector(".menu-lateral")

menuBotao.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo")
})