let dragEl = document.querySelectorAll('.draggable')
let dropBox = document.querySelector('.droppable')

let coordX;
let coordY;

let current;

dragEl.forEach( function (item) {
    item.draggable = true
    function move (){
        item.addEventListener('mousedown', function(e) {
            console.log('dragstart')
            coordX = e.offsetX
            coordY = e.offsetY
            console.log(this, 'THIS')
            console.log(e.clientX)
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            console.log(elemBelow)
            let droppableBelow = elemBelow.closest('.droppable')
            console.log(droppableBelow, "adasdas")
            current = this
        })
    }
    move() 

    function drop (){
        dropBox.addEventListener('drop', function(e){
            current.style.position = 'absolute'
            current.style.top = (e.pageY - coordY) + 'px';
            current.style.left = (e.pageX - coordX) + 'px';
            console.log(this, 'this')
            console.log(e.target,'target')
            console.log(current,'current') 
        })
    }
    drop()
}) 



 dropBox.addEventListener('dragenter', function (e) {
    dropBox.style.backgroundColor = 'orange';
     console.log('entered')
 })
 dropBox.addEventListener('dragleave', function (e){
     dropBox.style.backgroundColor = 'white'
 })


dropBox.addEventListener('dragover', function(e){
    e.preventDefault()
})




// var dragObject = {};

// document.onmousedown = function(e) {

//   if (e.which != 1) { // если клик правой кнопкой мыши
//     return; // то он не запускает перенос
    
//   }

//   var elem = e.target.closest('.draggable');
// //   console.log(elem)

//   if (!elem) return; // не нашли, клик вне draggable-объекта

//   // запомнить переносимый объект
//   dragObject.elem = elem;

//   // запомнить координаты, с которых начат перенос объекта
//   dragObject.downX = e.pageX;
//   dragObject.downY = e.pageY;
// //   console.log(dragObject)
// }

// document.onmousemove = function(e) {
//     if (!dragObject.elem) return; // элемент не зажат
  
//     if (!dragObject.avatar) { // элемент нажат, но пока не начали его двигать
//     //   ...начать перенос, присвоить dragObject.avatar = переносимый элемент
//     }
//     console.log(dragObject.avatar, 'avatar')
//     // ...отобразить перенос элемента...
// }