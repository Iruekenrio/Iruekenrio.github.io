// // localStorage.setItem('login', 'boba@gmail.com')

// // let login = localStorage.getItem('login')
// // console.log(login)

// // setTimeout(() => localStorage.removeItem('login'), 5000)
// // setTimeout(() => localStorage.clear('login'), 3000)


// // sessionStorage.setItem('password', '123')
// let user = {
//     name: '',
//     age: null,
//     admin: false
// }
// // localStorage.setItem('user', JSON.stringify(user))

// // localStorage.setItem('password', 123)

// // let savedUser = JSON.parse(localStorage.getItem('user'))
// // console.log(savedUser)


// // for(let i = 0; i < localStorage.length; i++){
// //     let key = localStorage.key(i);
// //     console.log(`${key} : ${localStorage.getItem(key)}`)
// // }

// // for(let key in localStorage){
// //     console.log(`${key} : ${localStorage.getItem(key)}`)
// // }

// // let keys = Object.keys(localStorage);
// // console.log(keys)
// // for(let key in keys){
// //     console.log(`${key}`)
// // }


// // let inputs = document.querySelectorAll('.qwe')
// // let button = document.querySelector('.click')

// // let nameU = document.querySelector('.name')
// // let ageU = document.querySelector('.age')
// // let adminU = document.querySelector('.admin')
// // // console.log(button)
// // button.addEventListener('click', function(e){

// //     e.preventDefault()
// //     user.name = nameU.value
// //     user.age = ageU.value
// //     user.admin = adminU.checked
// //     localStorage.setItem(`user`, JSON.stringify(user))
// //     let savedU = JSON.parse(localStorage.getItem('user'))
// //     console.log(savedU)

// //     // let value = Array.from(inputs)
// //     // // localStorage.setItem(`user`, JSON.stringify(`${y}`))
// //     // for(let i = 0; i < value.length;i++){
// //     //     console.log(value[i].value)
// //     //     let y = value[i].value
// //     //     localStorage.setItem(`user`, JSON.stringify(`${y}`))
// //     // }
// //     // console.log(typeof(savedU))
   
// // })






// //     let savedU = JSON.parse(localStorage.getItem('user'))
// //     console.log(savedU)
    
// //     nameU.value = savedU.name
// //     ageU.value = savedU.age
// //     adminU.value = savedU.admin
 
// const form = document.querySelector('form')
// const ul = document.querySelector('ul')
// const button = document.querySelector('button')
// const input = document.getElementById('item')


// // itemsArray ищем данные в локале если есть, если то itemsArray будет пусты массивом
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// let data = JSON.parse(localStorage.getItem('items'))

// const liMaker = text => {
//     const li = document.createElement('li')
//     li.textContent = text
//     ul.append(li)
// }
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     itemsArray.push(input.value)
//     localStorage.setItem('items', JSON.stringify(itemsArray))
//     liMaker(input.value)
//     input.value = ''
// })

// data.forEach(element => {
//     liMaker(element)
// })


// button.addEventListener('click', function(){
//     localStorage.clear()
//     while(ul.firstChild){
//         ul.removeChild(ul.firstChild)
//     }
// })

// function fizzBuzz (num) {
//     let fizz = 'fizz'
//     let buzz = 'buz'
//     let arr = []
//     arr.length = num
    
//     for(let i = 0; i <= num; i++) {
       
//         if (i%3 == 0 && i%5 == 0){
//             console.log(fizz + buzz, 'asdasd')    
//         }else if (i%5 == 0){
//             console.log('buzz')
//         } else if (i%3 == 0){
//             console.log('fizz')
//         } else console.log(i)
//     }   
// }

// fizzBuzz(15)

// let anozer = 'asdasdgsd'
// let roze = 'а роза упала на лапу азора'

// function checkPol (str) {
//      console.log(Array.from(str))
//     let arr = str.split(' ')
//     let strok = arr.join('')
//     // console.log(strok)
//     let rever = strok.split().reverse()
//     console.log(rever.join())
//     console.log(strok.split().join())

//     if (rever.join() == strok.split().join()) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }

// }
// checkPol(anozer)

// stre = 'aoieuvsw'

// function calcA (str){
//     let sum = 0
//     let glArr = ['a','o','i', 'e', 'u']
//     count = 0
    
//     for(let i = 0; i < str.length; i++) {
//         // console.log(str[i])

//         for(let y = 0; y < glArr.length; y++) {
//             console.log(glArr[y])

//             if (str[i] == glArr[y]) {
//                 sum++
//             }
            
//         }
        
//     }
//     for(let char of str.toLowerCase) {
//         if (glArr.includes(char)) {
//             count++
//         }
//     }
//     console.log(count)
//     console.log(sum)

// }
// calcA(stre)




// for (let i = 0; i < 10; i++) {

//         setTimeout(function () {
//             console.log(i);
//           }, 1000);    
        
// }

// let tre = function (item1) {
    
//     if (){
//         return function re (item2) {
//             console.log(item2 + item1)
//         }
//     } else return console.log(item1)
    
    
// }
// tre(1)(5)



// function f(a, b) {
//     if (b !== undefined) {
//       return a + b;
//     } else {
//     return function (b) {

//       return console.log(a + b);
//       }
//     }
//   }

  
// console.log()

function f(a, b) {
    if (b !== undefined) {
      return a + b;
    } else {
    return function (b) {
      return a + b;
      }
    }
  }
  f(1)(3)
  console.log(f(1))


//   задача f(a)(3)(e)(5)