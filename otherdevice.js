let button = document.querySelector('.burger__button')
let burgerMenu = document.querySelector('.burger__block')
button.addEventListener('click',function(){
    button.classList.toggle('burger__button__active')
    burgerMenu.classList.toggle('burger__block__active')
})