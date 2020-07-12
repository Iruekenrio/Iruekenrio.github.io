let contactName = document.querySelector('.contactUs__name-animation')
let inputName = document.querySelector('.contactUs-input-name')
let contactPhone = document.querySelector('.contactUs__phone-animation')
let inputPhone = document.querySelector('.contactUs-input-phone')
let contactMessage= document.querySelector('.contactUs__message-animation')
let inputMessage = document.querySelector('.contactUs-input-message')


function inputMagic (clickItem, hiddenItem){
    clickItem.addEventListener('click', function(){
        hiddenItem.classList.remove('displayNone')
        clickItem.removeAttribute('value')
    })
}

inputMagic(inputName, contactName)
inputMagic(inputPhone, contactPhone)
inputMagic(inputMessage, contactMessage)
