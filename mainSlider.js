let slidesMain = document.querySelectorAll('.main__slide')
let sliderLineMain = document.querySelector('.main__slider__line')
let j = 0;
let widthMain
let slideText1 = document.querySelectorAll('.main__slide1')
let slideText2 = document.querySelectorAll('.main__slide2')
let slideButton = document.querySelectorAll('.header__button')
let stopwatch = document.querySelectorAll('.stopwatch__line__bg')
let stopwatchLine = document.querySelectorAll('.stopwatch__line')
let timer = setInterval(init,7000)
let topScroll = document.querySelector('.header')
let footerScroll = document.querySelector('.footer__scroll')

function init(){
    widthMain = document.querySelector('.main__slide').offsetWidth
    sliderLineMain.style.width = widthMain * slidesMain.length
    test()
    testOp()
    sliderRoll()

}
window.addEventListener('resize',init)
init()

function sliderRoll(){
    sliderLineMain.style.transform = 'translate(-'+widthMain * j + 'px)'
    j++;
    if(j>=slidesMain.length){
     j = 0
    }  
 

}

function test(){
for(let k = 0;k<slidesMain.length;k++){
    stopwatch[k].style.transition = 'none'
    slidesMain[k].style.opacity = '0'
    slideText1[k].style.marginLeft = '600' + 'px'
    slideText2[k].style.marginLeft = '500' + 'px'
    slideButton[k].style.marginLeft = '400' + 'px'
    stopwatch[k].style.transform = 'translate(0px,-70px)'

}
}

function testOp(){
    for(let p = 0;p<slidesMain.length;p++){
        slidesMain[j].style.opacity = '1'
        slideText1[j].style.marginLeft = '0' + 'px'
        slideText2[j].style.marginLeft = '0' + 'px'
        slideButton[j].style.marginLeft = '0' + 'px'
        stopwatch[j].style.transition = 'all ease-out 7s'
        stopwatch[j].style.transform = 'translate(0px,0px)'
    }
}


for(let f = 0;f<stopwatchLine.length;f++){
 stopwatchLine[f].addEventListener('click',function(){
    j = f 
    k = f
    clearInterval(init,7000)
    test()
    testOp()
    sliderRoll()
 })
}


footerScroll.addEventListener('click',function(){
    topScroll.scrollIntoView()
})





