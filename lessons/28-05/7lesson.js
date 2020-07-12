//  let arr = document.querySelectorAll('[type = checkbox]')
//  console.log(arr)
//  let y = Array.from(arr)
//  let res = y.filter(function(item, index){
//     return index % 2 !== 0;
//  })

//  res.map((item) => item.setAttribute('checked', 'true'))
//  console.log(y)
//  console.log(res)


// function sayHello(name, age){
//     console.log(`Hi ${name}, your age is ${age}`)
// }
// let timer = setTimeout(sayHello, 1000, "Boba", "23")

// console.log(timer)

// clearTimeout(timer)

// console.log(timer)

// setInterval(sayHello, 1000, 'Boba', '23');

// let timer = setInterval(() => console.log('Hi'), 1000)

// setTimeout(() => clearInterval(timer), 3000)

// clearInterval(timer, 3000)

// sayHello('Elon', '35')
// let header = document.createElement('header');
// let div = document.createElement('div');
// header.innerHTML = 'header';
// div.textContent = 'DIV';


// document.body.prepend(header)
// header.prepend(div)

// добавить

// header.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// header.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')
// header.insertAdjacentHTML('beforeend', '<p>beforeend</p>')
// header.insertAdjacentHTML('afterend', '<p>afterend</p>')

// Element.remove

// setTimeout(() => header.remove(), 3000)

// function changeHeader(){
//     header.replaceWith(div)
// }
// setTimeout(changeHeader, 3000);

// header.style.backgroundColor = 'red';

// setTimeout(() => {
//     header.style.backgroundColor = 'green'
// }, 3000)

// header.style.cssText += `
// color: blue;
// margin: 15px;
// `

// header.style.marginTop = '20px'


// setTimeout(() => {
//    console.log(getComputedStyle(header).marginTop)
// }, 3000)

// let header = document.createElement('header');
// let main = document.createElement('main');
// let footer = document.createElement('footer');
// let li = document.createElement('li');
// let ul = document.createElement('ul');
// let classes = ['Home', 'About', 'Contact'];

// setTimeout(() => {
//     document.body.prepend(header);
    
//     header.insertAdjacentHTML('afterbegin', '<ul class="list"></ul>')
//     let i = 0;
//     while(i < 3){
//         document.querySelector('header ul').insertAdjacentHTML('afterbegin', '<li class="list-item"></li>')
//         // classes.map((item) => {
//         //     li.textContent == item
//         //     console.log(item)
//         // })

//         i++
//     }
// }, 1000)


// setTimeout(() => {
//     document.body.append(main)
// }, 2000)


// setTimeout(() => {
//     document.body.append(footer)
// }, 3000)




// про вариант

// let header = document.createElement("header");
// let list = document.createElement("ul");
// list.classList.add("list");
// let listItems = ["Home", "About", "Contacts"];
// let sectionInfo = ["About", "Contacts"];

// setTimeout(() => {
//   document.body.prepend(header);
//   header.prepend(list);
//   listItems.map(item => {
//     let li = document.createElement("li");
//     li.classList.add("list-item");
//     list.append(li);
//     li.innerHTML = item;
//   })
// }, 1000);

// setTimeout(() => {
//   header.insertAdjacentHTML("afterend", "<main></main>");
//   let main = document.querySelector("main");
//   sectionInfo.map(item => {
//     let section = document.createElement("section");
//     main.append(section);
//     section.innerHTML = item;
//     section.classList.add(`${item.toLowerCase()}`);
//   })

// }, 2000);

// setTimeout(() => {
//   let main = document.querySelector("main");
//   main.insertAdjacentHTML("afterend", "<footer></footer>");
//   let footer = document.querySelector("footer");
//   footer.innerHTML = "FOOTER";
// }, 3000);



// let date = new Date();
// console.log(date.getDay)
// console.log(date.getHours)
// console.log(date.getMinutes)
// console.log(date.getSeconds)

// function formatDate(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     if (hours < 10) hours = `0${hours}`;
//     if (minutes < 10) hours = `0${minutes}`;
//     if (seconds < 10) hours = `0${seconds}`;
//     return `0${hours} : 0${minutes} : 0${seconds}`
// }

// let date = formatDate(new Date())
// console.log(date)


// function formatDate(date) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     if (hours < 10) hours = `0${hours}`;
//     if (minutes < 10) minutes = `0${minutes}`;
//     if (seconds < 10) seconds = `0${seconds}`;
//     return `${hours} : ${minutes} : ${seconds}`
//   }
// let date = formatDate(new Date());
  
// console.log(date);

// let mas = [1, 3, 5, -8, -10, 5];
// let mur = [];
// mas.forEach(function(item, index){
//     mur.push(item + 1);
//   // console.log(item)
//   console.log(index)
// })
// console.log()

// mas.filter((item) => (item < 0) ? mur.push(item) : 0)
// mas.filter(function(item){
//     item < 0 ? mur.push(item) : 0;
// })
// mas.map(function(item, index){
//      return item + 1;
//   // console.log(item)
//   // console.log(index)
// })

// console.log(mas.map(function(item, index){
//      return item + '';
//      // console.log(item)
//      // console.log(index)
// }))

// let i  = prompt('Hi', '');
// if (i > 0) alert(`${i}`)
// else if (i < 0) alert('-1')
// else alert(0)
// let table = document.createElement("table");
// let tr = document.createElement("tr");
// let th = document.createElement("th");
// console.log(table)
// console.log(tr)
// console.log(th)
// function tab (stroke, stb){
//     document.body.append(table)
//     // let wow = document.getElementsByTagName('table')
//     for(let i = 0; i < stroke; i++){
//         let tr = document.createElement("tr");
        
//         for(let i = 0; i < stb; i++){
//             let th = document.createElement("th");
//             tr.append(th)
//         }
//         table.append(tr)
//     }
    
// }
// tab(5,3)
// console.log(tab(5))
// document.getElementsByTagName('table')
// console.log(document.getElementsByTagName('table'))

// // setTimeout(table, 1000, 3, 5)
// // console.log()
// let div = document.querySelector('div');
// div.onclick = function(){
//     console.log('div')
// }
// let p = document.querySelector('p');
// p.addEventListener('click', function (){
//     console.log('p')
// })
// p.addEventListener('contextmenu', function (e){
//     e.preventDefault();
//     console.log('p - 2')
//     console.log(e)
// })
// // p.addEventListener('mousemove', function (){
//     console.log('p - 2')
// })

// for(let elem of document.querySelectorAll('*')){
//     elem.addEvenListener('click', e => console.log(`Погружение ${elem.tagName}`), true)
//     elem.addEvenListener('click', e => console.log(`Всплытие ${elem.tagName}`))
// }

// container.onclick = function (e){
//     // console.log(e)
//     // console.log(e.target)
//     console.log(this)
//     // if(e.target.className != 'remove-button') return;
//     // let card = e.target.closest('.card');
//     // console.log(card);
//     // card.remove()
// }

// let button = document.querySelectorAll('button')
// for(let elem of document.querySelectorAll('button')){
//     elem.addEventListener('click', e => {
//         document.body.style.backgroundColor = 'red'
//     });
// }

// console.log(button);
// button.onclick = function (e){
//     document.body.style.backgroundColor='red';
// }
// .style.backgroundColor = 'red'

let input = document.querySelector('input');
let list = document.querySelector('#list');
input.addEventListener('keypress', function (e){
    if(e.key == 'Enter'){
        let li = document.createElement("li");
        let task = document.createElement('span');
        // console.log(e);
        task.innerHTML = this.value;
        li.append(task);
        task.addEventListener('dblclick', function(){
            newInput = document.createElement('input');
            li.prepend(newInput);
            // let plHolder = task.value
            // newInput.innerHTML += task.innerHTML;
            // console.log(newInput.value)
            // newInput.setAttribute('placeholder', `${task.innerHtml}`)
            // newInput.setAttribute('placeholder', `${newInput.value}`)
            newInput.addEventListener('keypress', function (e){
                if(e.key == 'Enter'){
                    // console.log(this)                
                    task.innerHTML = this.value;
                    newInput.remove()
                }
            })
            
        })

        let remove = document.createElement('span')
        remove.classList.add('remove')
        remove.innerHTML = ('remove')
        li.append(remove)
        remove.addEventListener('click', function(){
            li.remove()
        })
        
        let mark = document.createElement('span')
        mark.classList.add('mark')
        mark.innerHTML = ('mark')
        li.append(mark)
        mark.addEventListener('click', function(){
            console.log(this)
            this.classList.add('done')
        })

        list.append(li)

        input.value = "";


    }
})




// let table = document.createElement("table");
// let tr = document.createElement("tr");
// let td = document.createElement("td");

// console.log(tr)
// console.log(td)
function tab (stroke, stb){
    let table = document.createElement("table");
    document.body.append(table)
    for(let i = 0; i < stroke; i++){
        let tr = document.createElement("tr");
        tr.classList.add('box')
        for(let i = 0; i < stb; i++){
            let td = document.createElement("td");
            tr.append(td)
            td.classList.add('box')
        }
        table.append(tr)
    }
    
}
tab(5,5)
let table = document.querySelector('table');
let tr = document.querySelector('tr');
let td = document.querySelectorAll('td');
let box = document.querySelectorAll('box')
// box.style.width = '100px';
// console.log(document.querySelectorAll('td')[2])
// console.log(document.querySelectorAll('td'))
// document.querySelectorAll('td')[2].classList.add('red')

function randomBackground () {
    let arr = Array.from(document.querySelectorAll('td'))
    let redBack = []
    console.log(redBack)
    for(let i = 0; i < arr.length; i++){
        console.log(i)
        function getRandom(){
            return Math.random();
        }
        if(getRandom() >= 0.5){
            document.querySelectorAll('td')[i].classList.add('red')
            redBack.push(i)

        }else if(getRandom() <= 0.5){
            0
        }
    }
    let summ = document.createElement('div');
    document.body.append(summ)
    summ.innerHTML = `процент закрашеных: ${(redBack.length * 100) / arr.length}%`
    // alert(`процент закрашеных: ${(redBack.length * 100) / arr.length}%`)
}

randomBackground()




// let t = document.querySelectorAll('.red')
// console.log(t)
// console.log(document.querySelectorAll('.red'))
