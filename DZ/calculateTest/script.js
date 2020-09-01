let calcButton = document.querySelector('.calculate')
let width = document.querySelector('.width')
let length = document.querySelector('.length')
let popUp = document.querySelector('.popUp')

let littlePack = 6;
let bigPack = 8;

calcButton.addEventListener('click', function () {    
    let area = width.value * length.value
    let bigPackResult = 0;
    let littlePackResult = 0;
    function tre() {
        let sum = 0
        for(let i = 0; i <= area; i+=8) {
            sum += 8
            bigPackResult += 1
        }
        let reserv = sum
        console.log(sum)
        if(area%bigPack == 0 && area <! sum){
            console.log('nice',area%bigPack)
        }else if((area - sum)%littlePack !== 0 || area - sum == -6){ 
            function rrt() {
                console.log('funcStart')
                sum -= 8
                bigPackResult -= 1
                if((area - sum)%littlePack == 0){
                    littlePackResult += ((area - sum) / 6)
                    console.log('smthAA')
                } else if(sum == 0 || sum < 0) {
                    console.log('smth')
                    if(area < 6 ){
                        littlePackResult = 1
                    }else if(area == 7 ){
                        bigPackResult = 1
                    }else if(area > 8 && area < 12){
                        littlePackResult = 2
                    }else if(area%2 == 1){
                        console.log(area%2,'area%2')
                        if(reserv - area == 1){
                            console.log('perv')
                            bigPackResult = reserv / bigPack
                        } else if((reserv - 8 + 6) - area == 1){
                            console.log('vtor')
                            bigPackResult = reserv / bigPack - 1
                            littlePackResult = 1
                        } else if((reserv - 16 + 12) - area == 1){
                            console.log('3')
                            bigPackResult = reserv / bigPack - 2
                            littlePackResult = 2
                        } else if((reserv - 24 + 18) - area == 1){
                            console.log('4')
                            console.log(reserv / bigPack - 3)
                            bigPackResult = reserv / bigPack - 3
                            littlePackResult = 3
                        }else{
                            console.log('elseee')
                            bigPackResult = reserv / bigPack - 3
                            littlePackResult = 3
                        }
                    } else if(reserv - area == 1){
                        console.log('smthGGG')
                        bigPackResult = reserv / bigPack
                    }
                }  else return rrt()
            }
            rrt()    
        }
        console.log(sum, 'sum')    
    }
    tre()
    popUp.classList.remove('hide')
    popUp.innerHTML = `
    You will need 
    <div>
        <span>${area}pcs</span>
        at all, it is
    </div>
    <div>
        <span>${littlePackResult}</span>
        packs of 6pcs,
    </div> 
    <div>
    <span>${bigPackResult}</span>
      packs of 8pcs.
    </div>
    <span>${(littlePackResult * 6) + (bigPackResult * 8) - area}pcs unused</span>`

    
    console.log(area, 'area')
    console.log(area%bigPack, 'big')
    console.log(area%littlePack, 'smal')
    console.log(littlePackResult, 'smallResult')
    console.log(bigPackResult,'biResult')
    

})





                        // if(area == 45) {
                        //     bigPackResult = 2
                        //     littlePackResult = 5
                        // }else if(area == 13){
                        //     bigPackResult = 1
                        //     littlePackResult = 1
                        // }else if(area == 77){
                        //     bigPackResult = 9
                        //     littlePackResult = 1
                        // }else if(area == 75){
                        //     bigPackResult = 8
                        //     littlePackResult = 2
                        // }else if(area == 21){
                        //     bigPackResult = 2
                        //     littlePackResult = 1
                        // }else if(area == 35){
                        //     littlePackResult = 6
                        // }else if(area == 15){
                        //     bigPackResult = 2
                        // }
