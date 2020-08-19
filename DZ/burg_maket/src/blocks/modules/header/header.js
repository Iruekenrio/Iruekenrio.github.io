
let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
let scrolled = (windowScroll / documentHeight) * 100
let dotsItems = document.querySelectorAll('.navDots__item')


if(scrolled >= 11){
    dotsItems[0].classList.remove('activeDot')
}

function scrollCheck (it){
    if (it < 7){
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[0].classList.add('activeDot')
    } else if (it >= 7 && it < 20) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[1].classList.add('activeDot')  
    } else if (it >= 20 && it < 34){
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[2].classList.add('activeDot')
    } else if (it >= 34 && it < 51) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[3].classList.add('activeDot')
    } else if (it >= 51 && it < 64) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[4].classList.add('activeDot')
    } else if (it >= 64 && it < 78) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[5].classList.add('activeDot')
    } else if (it >= 78 && it < 92) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[6].classList.add('activeDot')
    } else if (it >= 92) {
        dotsItems.forEach((it) => {it.classList.remove('activeDot')})
        dotsItems[7].classList.add('activeDot')    
    }
    // console.log(it)
}
let heightForDots = documentHeight
// console.log(heightForDots)
let srolledPercent = (window.scrollY / heightForDots) * 100;
window.addEventListener('resize', function(){
    heightForDots = document.documentElement.scrollHeight - document.documentElement.clientHeight
    console.log('test resize')
    console.log(heightForDots)
})

window.addEventListener('scroll', function() {
        srolledPercent = (window.scrollY / heightForDots) * 100
        scrollCheck(srolledPercent)
        console.log('test1') 
});


dotsItems.forEach(function(item){
    item.addEventListener('click', function(){
        neddedBlock = item.getAttribute('data-id').slice(3)
        let userScreen = document.documentElement.clientHeight
        window.scrollTo(0, neddedBlock * userScreen)
        console.log(item.getAttribute('data-id').slice(3))
    })
})

let openBurgButton = document.querySelector('.openBurg');
let closeBurgButton = document.querySelector('.closeBurg');
let hiddenMenu = document.querySelector('.hidden__menu')


openBurgButton.addEventListener('click', function(){
    hiddenMenu.classList.add('activeHidden')
    closeBurgButton.classList.add('activeHidden')
    openBurgButton.classList.remove('activeHidden')
})
closeBurgButton.addEventListener('click', function(){
    hiddenMenu.classList.remove('activeHidden')
    closeBurgButton.classList.remove('activeHidden')
    openBurgButton.classList.add('activeHidden')
})
