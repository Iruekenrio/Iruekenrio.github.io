let x = 'x'
let o = 'o'
var turn = 1
let buttonTurn = document.querySelector('.nextTurn')
let playGround = document.querySelector('.gameBox')
let topArr = [[0,0,0],[0,0,0],[0,0,0]]

let total = {
    x: 0,
    o: 0,
    getStorage() {
        var parsedWinner = JSON.parse(localStorage.getItem('winner'))
        if(parsedWinner) {
            this.x = parsedWinner.x
            this.o = parsedWinner.o
        }else{
            // this.x = 0
            // this.o = 0
            console.log('локал пустой')
        }
        // var parsedWinner = JSON.parse(localStorage.getItem('winner'))
        
    }
}
total.getStorage()

function whatTurn(counter) {
    if(counter == 0){
        turn = 1
        return o
    }
    if(counter == 1){
        turn = 0
        return x
    }
}
function getAtributeDataId(item, letter) {
    if(item <= 3){
        topArr[0][item - 1] = letter
    } else if(item <= 6 && item > 3){
        console.log(item,'ewt')
        topArr[1][item - 4] = letter
    } else if(item <= 9 && item > 6){
        topArr[2][item - 7] = letter
    }
    console.log(topArr)
}

function winnerChek() {
    let winner;
    if(topArr[0][0] == topArr[0][1] && topArr[0][0] == topArr[0][2] && topArr[0][0] !== 0){
        winner = topArr[0][0]
    } else if (topArr[0][0] == topArr[1][0] && topArr[0][0] == topArr[2][0] && topArr[0][0] !== 0) {
        winner = topArr[0][0]
    } else if (topArr[0][1] == topArr[1][1] && topArr[0][1] == topArr[2][1] && topArr[0][1] !== 0) {
        winner = topArr[0][1]
    } else if (topArr[0][2] == topArr[1][2] && topArr[0][2] == topArr[2][2] && topArr[0][2] !== 0) {
        winner = topArr[0][2]
    } else if (topArr[0][0] == topArr[1][0] && topArr[0][0] == topArr[2][0] && topArr[0][0] !== 0) {
        winner = topArr[0][0]
    } else if (topArr[1][0] == topArr[1][1] && topArr[1][0] == topArr[1][2] && topArr[1][0] !== 0) {
        winner = topArr[1][0]
    } else if (topArr[2][0] == topArr[2][1] && topArr[2][0] == topArr[2][2] && topArr[2][0] !== 0) {
        winner = topArr[2][0]
    } else if (topArr[0][0] == topArr[1][1] && topArr[0][0] == topArr[2][2] && topArr[0][0] !== 0) {
        winner = topArr[0][0]
    } else if (topArr[2][0] == topArr[1][1] && topArr[2][0] == topArr[0][2] && topArr[2][0] !== 0) {
        winner = topArr[2][0]
    }
    if (winner !== undefined) {
        winner == 'x' ? total.x = total.x + 1 : total.o = total.o + 1
        console.log(total)
        localStorage.setItem('winner', JSON.stringify(total))
        total.getStorage()
        showTotal()
        
        turn = 6
        buttonTurn.setAttribute('disabled',true)
    }    
}

function clickEr(clickTarget) {
    clickTarget.addEventListener('click', function rr(ev){
        if(ev.target !== clickTarget && turn!==6){
            if(ev.target.innerText !== 'x' && ev.target.innerText !== 'o'){
                // let turned = whatTurn(turn)
                ev.target.innerText = x
                getAtributeDataId(ev.target.getAttribute('data-id'),x)
                winnerChek()
                clickTarget.removeEventListener('click',rr)
                function clickTurn() {
                    buttonTurn.addEventListener('click', function rr() {
                        enemyBrain(ev.target)
                        winnerChek()
                        if(turn == 5){
                        } else {
                            clickEr(playGround)
                            buttonTurn.removeEventListener('click',rr)
                            // buttonTurn.setAttribute('disabled',true)
                            
                        }
                    })
                }
                clickTurn()
                
            }    
        }
    })
}
clickEr(playGround)
// buttonTurn.addEventListener('click', function () {
//     setTimeout(() => {
//         buttonTurn.removeAttribute('disabled')
//         console.log('asdasdadsasdasd')
//     }, 1000);
// })

function showTotal() {
    document.querySelector('.x').innerText = total.x
    document.querySelector('.o').innerText = total.o
    console.log('show')
}
showTotal()

document.querySelector('.clearButton').addEventListener('click', function () {
    localStorage.clear()
    total.x = 0
    total.o = 0
    showTotal()
})













// ИИ мозги

var tumbler = 0;
var boxesForAI = Array.from(document.querySelectorAll('.cell'))
let targetReg = /(x0x|xx0|0xx)/
let winCondReg = /(o0o|oo0|0oo)/
let doneArea = /o/
function enemyBrain() {
    // console.log(winCondition())
    winCondition()
    if(tumbler == 0){
        console.log(tumbler,'tumb')
        dontLooseLogic()
    }
}



function helperVertical(row1, row2, row3, item) {
    for(let i = 0; i < 3; i++){
        if(topArr[i][item] == 0){
            if(i == 0){
                boxesForAI[row1-1].innerText = o
                getAtributeDataId(row1, o)   
            }else if(i == 1){
                boxesForAI[row2-1].innerText = o
                getAtributeDataId(row2, o)   
            }else if(i == 2){
                boxesForAI[row3-1].innerText = o
                getAtributeDataId(row3, o)   
            }     
        }
    }
}

function helperHorizont(it1,it2,it3, row) {
    for(let i = 0; i < 3; i++){
        if(topArr[row][i] == 0){
            console.log(topArr[row][i], 'toparrQQ')
            if(topArr[row][0] == 0){
                boxesForAI[it1].innerText = o
                getAtributeDataId((i+1), o)
            } else if(topArr[row][1] == 0){
                boxesForAI[it2].innerText = o
                getAtributeDataId((i+1), o)
            } else if(topArr[row][2] == 0){
                boxesForAI[it3].innerText = o
                getAtributeDataId((i+1), o)
            }   
        }
    }
}

function randomChoice(min, max) {
    let tre = Math.ceil(Math.random() * (max - min) + min) 
    if(tre == 5){
        return randomChoice(min, max)
    } else return tre
    
}



// console.log(randomChoice(0, 2))

function dontLooseLogic() {
    // [[-,-,-],
    // [-,o,-],
    // [-,-,x]]
    // console.log(evTarget)
    // console.log('testAi',topArr[1][1])
    if(topArr[1][1] == 0 && topArr[1][1].innerText !== x && topArr[1][1].innerText !== o){
        boxesForAI[4].innerText = o
        getAtributeDataId(5, o) 
    } else if (targetReg.test(topArr[0][0]+topArr[0][1]+topArr[0][2]) && !doneArea.test(topArr[0][0]+topArr[0][1]+topArr[0][2])){
        // [[x,x,-],
        // [-,-,-],
        // [-,-,-]]
        console .log('1xx-')
        for(let i = 0; i < 3; i++){
            if(topArr[0][i] == 0){
                boxesForAI[i].innerText = o
                getAtributeDataId((i+1), o)    
            }
        }
    }else if (targetReg.test(topArr[0][0]+topArr[1][0]+topArr[2][0]) && !doneArea.test(topArr[0][0]+topArr[1][0]+topArr[2][0])){
        // [[x,-,-],
        // [x,-,-],
        // [-,-,-]]
        console .log('2xx-')
        helperVertical(1, 4, 7,0)
    }else if (targetReg.test(topArr[0][1]+topArr[1][1]+topArr[2][1]) && !doneArea.test(topArr[0][1]+topArr[1][1]+topArr[2][1])){
        // [[-,x,-],
        // [-,x,-],
        // [-,-,-]]
        console .log('3xx-')
        helperVertical(2, 5, 8, 1)
    }else if (targetReg.test(topArr[0][2]+topArr[1][2]+topArr[2][2]) && !doneArea.test(topArr[0][2]+topArr[1][2]+topArr[2][2])){
        // [[-,-,x],
        // [-,-,x],
        // [-,-,-]]
        console .log('4xx-')
        helperVertical(3, 6, 9, 2)
    }else if (targetReg.test(topArr[1][0]+topArr[1][1]+topArr[1][2]) && !doneArea.test(topArr[1][0]+topArr[1][1]+topArr[1][2])){
        // [[-,-,-],
        // [-,x,x],
        // [-,-,-]]
        console .log('5xx-')
        if(topArr[1][0] == 0){
            boxesForAI[3].innerText = o
            getAtributeDataId((4), o)
        } else if(topArr[1][1] == 0){
            boxesForAI[4].innerText = o
            getAtributeDataId((5), o)
        } else if(topArr[1][2] == 0){
            boxesForAI[5].innerText = o
            getAtributeDataId((6), o)
        }  
        // helperHorizont(3,4,5,1)    
    }else if (targetReg.test(topArr[2][0]+topArr[2][1]+topArr[2][2]) && !doneArea.test(topArr[2][0]+topArr[2][1]+topArr[2][2])){
        // [[-,-,-],
        // [-,-,-],
        // [-,x,x]]
        console .log('6xx-')   // проблема в vertical вероятно
        if(topArr[2][0] == 0){
            boxesForAI[6].innerText = o
            getAtributeDataId((7), o)
        } else if(topArr[2][1] == 0){
            boxesForAI[7].innerText = o
            getAtributeDataId((8), o)
        } else if(topArr[2][2] == 0){
            boxesForAI[8].innerText = o
            getAtributeDataId((9), o)
        }  
        // helperHorizont(6,7,8,2)    
    } else if (targetReg.test(topArr[0][0]+topArr[1][1]+topArr[2][2]) && !doneArea.test(topArr[0][0]+topArr[1][1]+topArr[2][2])){
        // [[-,-,-],
        // [-,x,-],
        // [-,-,x]]
        console .log('7xx-')
        if(topArr[0][0] == 0){
            boxesForAI[0].innerText = o
            getAtributeDataId(1, o) 
        } else if(topArr[1][1] == 0){
            boxesForAI[4].innerText = o
            getAtributeDataId(5, o) 
        } else if(topArr[2][2] == 0){
            boxesForAI[8].innerText = o
            getAtributeDataId(9, o) 
        }    
    } else if (targetReg.test(topArr[0][2]+topArr[1][1]+topArr[2][0]) && !doneArea.test(topArr[0][2]+topArr[1][1]+topArr[2][0])){
        // [[-,-,-],
        // [-,x,-],
        // [x,-,-]]
        console .log('8xx-')
        if(topArr[0][2] == 0){
            boxesForAI[2].innerText = o
            getAtributeDataId(3, o) 
        } else if(topArr[1][1] == 0){
            boxesForAI[4].innerText = o
            getAtributeDataId(5, o) 
        } else if(topArr[2][0] == 0){
            boxesForAI[6].innerText = o
            getAtributeDataId(7, o) 
        }    
    } else if(tumbler !== 1){
        let randRow = randomChoice(1, 9)
        console.log(randRow, 'radomRov')
        function mustToGetRandom() {
            if(boxesForAI[randRow-1].innerText == o || boxesForAI[randRow-1].innerText == x) {
                randRow = randomChoice(1, 9)
                console.log(randRow,'new rand')
                return mustToGetRandom()
            }else return
        }
        mustToGetRandom()
        
        function r(it, it2) {
            if(it == it2 && boxesForAI[it-1].innerText !== x && boxesForAI[it-1].innerText !== o){
                boxesForAI[it-1].innerText = o
                getAtributeDataId(it2, o) 
            } 
        }
        r(randRow, 1)
        r(randRow, 2)
        r(randRow, 3)
        r(randRow, 4)
        r(randRow, 5)
        r(randRow, 6)
        r(randRow, 7)
        r(randRow, 8)
        r(randRow, 9)  

         
    }
}

function winCondition() {
    if (winCondReg.test(topArr[0][0]+topArr[0][1]+topArr[0][2])){
        // [[x,x,-],
        // [-,-,-],
        // [-,-,-]]
        console .log('1xx-')
        for(let i = 0; i < 3; i++){
            if(topArr[0][i] == 0){
                boxesForAI[i].innerText = o
                getAtributeDataId((i+1), o)    
            }
        }
        tumbler = 1
 
    }else if (winCondReg.test(topArr[0][0]+topArr[1][0]+topArr[2][0])){
        // [[x,-,-],
        // [x,-,-],
        // [-,-,-]]
        console .log('2xx-')
        helperVertical(1, 4, 7,0)
        tumbler = 1

    }else if (winCondReg.test(topArr[0][1]+topArr[1][1]+topArr[2][1])){
        // [[-,x,-],
        // [-,x,-],
        // [-,-,-]]
        console .log('3xx-winner')
        helperVertical(2, 5, 8, 1)
        tumbler = 1

    }else if (winCondReg.test(topArr[0][2]+topArr[1][2]+topArr[2][2])){
        // [[-,-,x],
        // [-,-,x],
        // [-,-,-]]
        console .log('4xx-winner')
        helperVertical(3, 6, 9, 2)
        tumbler = 1

    }else if (winCondReg.test(topArr[1][0]+topArr[1][1]+topArr[1][2])){
        // [[-,-,-],
        // [-,x,x],
        // [-,-,-]]
        console .log('5xx-win')


                // console.log(topArr[1][i], 'toparrQQ')
                if(topArr[1][0] == 0){
                    boxesForAI[3].innerText = o
                    getAtributeDataId((4), o)
                } else if(topArr[1][1] == 0){
                    boxesForAI[4].innerText = o
                    getAtributeDataId((5), o)
                } else if(topArr[1][2] == 0){
                    boxesForAI[5].innerText = o
                    getAtributeDataId((6), o)
                }   
            
        
        // helperHorizont(3,4,5,1)
        tumbler = 1
 
    }else if (winCondReg.test(topArr[2][0]+topArr[2][1]+topArr[2][2])){
        // [[-,-,-],
        // [-,-,-],
        // [-,x,x]]
        console .log('6xx-win')
        if(topArr[2][0] == 0){
            boxesForAI[6].innerText = o
            getAtributeDataId((7), o)
        } else if(topArr[2][1] == 0){
            boxesForAI[7].innerText = o
            getAtributeDataId((8), o)
        } else if(topArr[2][2] == 0){
            boxesForAI[8].innerText = o
            getAtributeDataId((9), o)
        }  
        // helperHorizont(6,7,8,2) 
        tumbler = 1
 
    } else if (winCondReg.test(topArr[0][0]+topArr[1][1]+topArr[2][2])){
        // [[-,-,-],
        // [-,x,-],
        // [-,-,x]]
        console.log('8xx-win')
        if(topArr[0][0] == 0){
            boxesForAI[0].innerText = o
            getAtributeDataId(1, o) 
        } else if(topArr[1][1] == 0){
            boxesForAI[4].innerText = o
            getAtributeDataId(5, o) 
        } else if(topArr[2][2] == 0){
            boxesForAI[8].innerText = o
            getAtributeDataId(9, o) 
        }  
        tumbler = 1
 
    } else if (winCondReg.test(topArr[0][2]+topArr[1][1]+topArr[2][0])){
        // [[-,-,-],
        // [-,x,-],
        // [x,-,-]]
        console .log('7xx-win')
        if(topArr[0][2] == 0){
            boxesForAI[2].innerText = o
            getAtributeDataId(3, o) 
        } else if(topArr[1][1] == 0){
            boxesForAI[4].innerText = o
            getAtributeDataId(5, o) 
        } else if(topArr[2][0] == 0){
            boxesForAI[6].innerText = o
            getAtributeDataId(7, o) 
        } 
        tumbler = 1
 
    }
}