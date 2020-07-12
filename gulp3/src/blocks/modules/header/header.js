let header = document.querySelector('.header')
let burgerButton = document.querySelector('.header .burg')
let burgerButtonActive = document.querySelector('.header .burg-active')
burgerButton.addEventListener('click', function(){
    header.classList.toggle('active')
})
burgerButtonActive.addEventListener('click', function(){
    header.classList.toggle('active')
})
// $('menu').css('backgroundColor', 'grey')
$(window).scroll(function(){
    // console.log($(window).scrollTop())
    if($(window).scrollTop() > 0){
        $(header).addClass('headerBack')
    }
    if($(window).scrollTop() == 0){
        $(header).removeClass('headerBack')
    }
})