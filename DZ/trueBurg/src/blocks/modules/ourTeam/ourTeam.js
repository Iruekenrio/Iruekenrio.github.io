let hiddenItem = document.querySelectorAll('.hidden-item')
let listButton = document.querySelectorAll('.peple-list__item')


listButton.forEach (function(item){
item.addEventListener('click', function(){
    listButton.forEach (function(it) {
        it.querySelector('.hidden-item').classList.remove('animation-famous')
        it.querySelector('.fa-caret-down').classList.add('active-arrow')
        it.querySelector('.fa-caret-up').classList.remove('active-arrow')
    })
item.querySelector('.hidden-item').classList.toggle('animation-famous')
item.querySelector('.fa-caret-down').classList.toggle('active-arrow')
item.querySelector('.fa-caret-up').classList.toggle('active-arrow')

})
})