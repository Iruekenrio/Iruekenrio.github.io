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
        topArr[1][item - 4] = letter
    } else if(item <= 9 && item > 6){
        topArr[2][item - 7] = letter
    }
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
        turn = 5    
    }    
}

function clickEr(clickTarget) {
    clickTarget.addEventListener('click', function rr(ev){
        if(ev.target !== clickTarget){
            if(ev.target.innerText !== 'x' && ev.target.innerText !== 'o'){
                let turned = whatTurn(turn)
                ev.target.innerText = turned
                getAtributeDataId(ev.target.getAttribute('data-id'),turned)
                winnerChek()
                clickTarget.removeEventListener('click',rr)
                function clickTurn() {
                    buttonTurn.addEventListener('click', function rr() {
                        if(turn == 5){
                        } else {
                            clickEr(playGround)
                            if(turn == 1){
                                document.querySelector('.turn p').innerText = x
                            } else if(turn == 0) {
                                document.querySelector('.turn p').innerText = o
                            }
                            buttonTurn.removeEventListener('click',rr)
                        }
                    })
                }
                clickTurn()
            }    
        }
    })
}
clickEr(playGround)

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




