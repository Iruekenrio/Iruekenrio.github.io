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
        if(Math.random() >= 0.5){
            document.querySelectorAll('td')[i].classList.add('red')
            redBack.push(i)
        }
    }
    let summ = document.createElement('div');
    document.body.append(summ)
    summ.innerHTML = `процент закрашеных: ${(redBack.length * 100) / arr.length}%`
}

randomBackground()




