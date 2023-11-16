let slides = document.querySelectorAll('.slide')
let sliderLine = document.querySelector('.slider__line')
let i = 0;
let width 

function initC(){
    width = document.querySelector('.slide').offsetWidth
    sliderLine.style.width = width * slides.length
    sliderRollC()
    i++;
    if(i>slides.length-1){
     i = 0
    }
}


window.addEventListener('resize',initC)
initC()


function sliderRollC(){
    sliderLine.style.transform = 'translate(-'+width * i + 'px)'
}

setInterval(initC,4000)




