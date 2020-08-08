let inputs = document.querySelector('.userData').querySelectorAll('input')
let clearButton = document.querySelector('.clear')
let textAr = document.querySelector('textarea')
let dontCall = document.getElementById('dontCall')
let howPays = document.getElementsByName('pay')
console.log(dontCall)
clearButton.addEventListener('click', function(){
    inputs.forEach(function(item){
        item.value = ""
    })
    textAr.value = ""
    dontCall.checked = false
    howPays.forEach((i)=>{i.checked = false})
    console.log('test')
})

