const buttonMenu = document.querySelector('.cabecalho-menu')
const leftMenu = document.querySelector('.menu-lateral')

buttonMenu.addEventListener('click', ()=> {
    leftMenu.classList.toggle('menu-lateral--active')
})