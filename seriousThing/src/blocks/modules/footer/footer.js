let toursButton = document.querySelector('.tours-button')
toursButton.addEventListener('click', function(){
    document.querySelector('.button-hide').classList.toggle('active')
    document.querySelector('.button-show').classList.toggle('active')
    document.querySelector('.footer__item-hidden').classList.toggle('active-items')
    let yr =  Array.from(document.querySelectorAll('.footer__item-hidden-item'))
    yr.forEach((item) => {item.classList.toggle('animation-tours')}) 
})