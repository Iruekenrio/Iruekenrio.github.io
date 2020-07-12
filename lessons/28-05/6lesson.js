// let name = 'Boba';
// function lob(){
//     console.log(name)
// }
// name  = 'Tolik'
// lob();


// function lom(){
//     // let name = 'Boba'
//     return function(){
//         // let name = 'Mary'
//         console.log(name)
//     }
// }
// let name = 'Petr';
// let work = lom();
// work();

// function owl(){
//     let shooters = [];
//     let i = 0;
//     while (i<10){
//         let j = i;
//         let shooter = function(){
//             console.log(j);
//         }
//         shooters.push(shooter);
//         i++
//     }
//     return shooters;
// }
// let owly = owl();
// // console.log(owly) 
// owly[0]()
// owly[1]()
// owly[2]()


// замыкание - функция возвращающая функцию

// function say(){
//     console.log('hi')
// }
// function sayName(name){

// }


// let name = '<span>Boba</span>';
// div1.innerHTML += name;
// div2.textContent += name

// div2.outerHTML = '<p>Hello World</p>'

// let checkbox = document.querySelector('.input-checkbox')
// // console.log(checkbox.hasAttribute('checked'));
// // console.log(checkbox.removeAttribute('checked'));
// console.log(checkbox.hasAttribute('type'));
// console.log(checkbox.getAttribute('type'));
// checkbox.setAttribute('type', 'password');
// let item = '<input />';


// let target = document.querySelector('.divik');
// console.log(target)
// target.innerHTML += item;

// let span = document.querySelector('span')
// console.log(span.id)

// console.log(span.id)
// console.log(span.dataset.name)
// console.log(span.dataset.age)

// span.classList.add('contact')
// console.log(span.classList.remove('contact'))

// let pom = document.querySelectorAll('[data-order-state="New"]');
// console.log(pom);
// let mas = Array.from(pom);
// console.log(mas);
// let sum = mas.forEach(function(a){
//     let b = a.setAttribute('data-order-state', 'Canceled')
//     return b
     
// })
// console.log(sum)

// let sum = document.querySelector('.active')
// console.log(sum)

// function magic (){
//     sum.nextElementSibling.classList.add('active');
//     sum.classList.remove('active')

// }

// magic();
let arr = Array.from(document.querySelectorAll('.order'));
arr.map((item)=>{
    if (item.classList.contains('active')){
        
        item.nextElementSibling.classList.add('active');
        item.classList.remove('active');
    }
})



console.log(arr)



// 'data-order-state="New"', 'data-order-state="Canceled"'