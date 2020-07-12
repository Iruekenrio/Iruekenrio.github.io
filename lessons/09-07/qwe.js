// localStorage.setItem('login', 'boba@gmail.com')

// let login = localStorage.getItem('login')
// console.log(login)

// setTimeout(() => localStorage.removeItem('login'), 5000)
// setTimeout(() => localStorage.clear('login'), 3000)


// sessionStorage.setItem('password', '123')
let user = {
    name: '',
    age: null,
    admin: false
}
// localStorage.setItem('user', JSON.stringify(user))

// localStorage.setItem('password', 123)

// let savedUser = JSON.parse(localStorage.getItem('user'))
// console.log(savedUser)


// for(let i = 0; i < localStorage.length; i++){
//     let key = localStorage.key(i);
//     console.log(`${key} : ${localStorage.getItem(key)}`)
// }

// for(let key in localStorage){
//     console.log(`${key} : ${localStorage.getItem(key)}`)
// }

// let keys = Object.keys(localStorage);
// console.log(keys)
// for(let key in keys){
//     console.log(`${key}`)
// }


// let inputs = document.querySelectorAll('.qwe')
// let button = document.querySelector('.click')

// let nameU = document.querySelector('.name')
// let ageU = document.querySelector('.age')
// let adminU = document.querySelector('.admin')
// // console.log(button)
// button.addEventListener('click', function(e){

//     e.preventDefault()
//     user.name = nameU.value
//     user.age = ageU.value
//     user.admin = adminU.checked
//     localStorage.setItem(`user`, JSON.stringify(user))
//     let savedU = JSON.parse(localStorage.getItem('user'))
//     console.log(savedU)

//     // let value = Array.from(inputs)
//     // // localStorage.setItem(`user`, JSON.stringify(`${y}`))
//     // for(let i = 0; i < value.length;i++){
//     //     console.log(value[i].value)
//     //     let y = value[i].value
//     //     localStorage.setItem(`user`, JSON.stringify(`${y}`))
//     // }
//     // console.log(typeof(savedU))
   
// })






//     let savedU = JSON.parse(localStorage.getItem('user'))
//     console.log(savedU)
    
//     nameU.value = savedU.name
//     ageU.value = savedU.age
//     adminU.value = savedU.admin
 
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')


// itemsArray ищем данные в локале если есть, если то itemsArray будет пусты массивом
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
let data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.append(li)
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    input.value = ''
})

data.forEach(element => {
    liMaker(element)
})


button.addEventListener('click', function(){
    localStorage.clear()
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
})
