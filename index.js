const icon = document.querySelector('.icon')
const menu = document.querySelector('.menu')
const triangle = document.querySelector('.triangle')

icon.onclick = function (){
    menu.classList.toggle('open')
    triangle.classList.toggle('open')
}