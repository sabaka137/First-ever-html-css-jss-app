let gif = document.querySelectorAll('.account__gif')
let card = document.querySelectorAll('.account__main__card')
let img = document.querySelectorAll('.account__img')
let gifNode = document.querySelectorAll('.main__card__img')

for(let q = 0;q<card.length;q++){
    card[q].addEventListener('mouseover', function(){
        img[q].style.zIndex = '1'
        gif[q].style.zIndex = '4'
        gif[q].style.visibility = 'visible'
    
    
    })
}

for(let q = 0;q<card.length;q++){
    card[q].addEventListener('mouseout', function(){
        img[q].style.zIndex = '2'
        gif[q].style.zIndex = '1'
        gif[q].style.visibility = 'hidden'
   
        
     
        
    })
}