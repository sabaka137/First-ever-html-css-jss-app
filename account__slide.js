let slide = document.querySelector('.account__services__slide')
let mainSlide = document.querySelector('.account__services')




mainSlide.addEventListener('mouseover',function(){
slide.style.transform = 'translate(0px,0px)'
})


mainSlide.addEventListener('mouseout',function(){
    slide.style.transform = 'translate(0px,400px)'
    })
        
        
    

