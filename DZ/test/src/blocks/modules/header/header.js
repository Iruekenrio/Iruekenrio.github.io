let emailReg = /.+@.+\..{1,3}/i
let userReg = /^[A-z0-9]{2,}$/
let passReg = /[A-z0-9]{6,10}/
let emailInput = document.getElementById('emailInput')
let userInput = document.getElementById('userInput')
let userPass = document.getElementById('userPass')
emailInput.addEventListener('keydown', function () {
    setTimeout(() => {
        checkEmail()
    }, 800);
})
userInput.addEventListener('keydown', function () {
    setTimeout(() => {
        checkUser()
    }, 800);
})
userPass.addEventListener('keydown', function () {
    setTimeout(() => {
        checkPass()
    }, 800);
})
function checkEmail() {
    if(emailReg.test(emailInput.value) !== true){
        document.querySelector('.validEmail').classList.remove('show')
        document.querySelector('.notValidEmail').classList.add('show')
    }else if (emailReg.test(emailInput.value)) {
        document.querySelector('.notValidEmail').classList.remove('show')
        document.querySelector('.validEmail').classList.add('show')
    }
}
function checkUser() {
    if(userReg.test(userInput.value) !== true){
        document.querySelector('.validUser').classList.remove('show')
        document.querySelector('.notValidUser').classList.add('show')
    }else if (userReg.test(userInput.value)) {
        document.querySelector('.notValidUser').classList.remove('show')
        document.querySelector('.validUser').classList.add('show')
    }
}
function checkPass() {
    if(passReg.test(userPass.value) !== true){
        document.querySelector('.validPass').classList.remove('show')
        document.querySelector('.notValidPass').classList.add('show')
    }else if (passReg.test(userPass.value)) {
        document.querySelector('.notValidPass').classList.remove('show')
        document.querySelector('.validPass').classList.add('show')
    }
}

let register = document.querySelector('.submitRegister')
let login = document.querySelector('.submitLogin')
let registerForm = document.getElementById('registerForm')
let loginForm = document.getElementById('loginForm')
register.addEventListener('click', function (ev) {
    ev.preventDefault()
    if(emailReg.test(emailInput.value) && userReg.test(userInput.value) && passReg.test(userPass.value)){
        registerForm.submit()
    }else {    
        checkEmail()
        checkPass()
        checkUser()
    }
})
let loginUserName = document.querySelector('.loginUserName')
let loginPassword = document.querySelector('.loginPassword')

login.addEventListener('click', function (ev) {
    ev.preventDefault()
    console.log(loginUserName.value.length)
    if(loginUserName.value.length >=6 && loginPassword.value.length >=6){
        console.log('done')
        loginForm.submit()
    }else {
        loginUserName.placeholder="Invalid User Name" 
        loginPassword.placeholder="Invalid Password"   
        console.log('test')
    }
})


let  logButtoun = document.querySelector('.login-register')
let contentBlock = document.querySelector('.login-register__window')
logButtoun.addEventListener('click', function (ev) {
    ev.stopPropagation()
    contentBlock.classList.toggle('hide')
    document.querySelector('.header').addEventListener('click', function (ev) {
        if(ev.target !== document.querySelector('.header')){
            
        } else contentBlock.classList.add('hide')
        // contentBlock.classList.add('hide')
        // console.log(ev.target.childNodes)
    })
})

// form.submit()


