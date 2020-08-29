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
        // console.log(sum)
        if(area%bigPack == 0 && area <! sum){
            console.log('nice',area%bigPack)
            // return
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
                    }else if(area > 8 && area < 12){
                        littlePackResult = 2
                    }else if(area > 12 && area < 16){
                        bigPackResult = 2
                    }else if(area%2 == 1){
                        console.log(area%2,'area%2')
                        if(area == 45) {
                            bigPackResult = 2
                            littlePackResult = 5
                        } else if(area == 35){
                            littlePackResult = 6
                        }else if(area == 15){
                            bigPackResult = 2
                        }else{
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
    <span>${littlePackResult}</span>
     packs of 6pcs, 
     <span>${bigPackResult}</span>
      packs of 8pcs.`

    
    console.log(area, 'area')
    console.log(area%bigPack, 'big')
    console.log(area%littlePack, 'smal')
    console.log(littlePackResult, 'smallResult')
    console.log(bigPackResult,'biResult')
    

})


// console.log(18%6)
// console.log(18%8)




// function getCombo() {
//     let sum = area;
//     console.log(sum)
//     // itemArea
//     if(area%bigPack == 0) {
//         console.log('bigPack win',area%bigPack)
//         bigPackResult = area / bigPack
//         return 
//     } else {
//         function rr() {
//             if(sum <= 0){
//                 console.log(sum)
//                 sum -= bigPack
//                 console.log(area%bigPack,'gbbg')
//                 console.log(area%littlePack, 'tltl')
//             } else rr()
//         }
//         rr()
//     }
    
// }
// getCombo()
// if(area < 6){
    //     littlePackResult = 1
    // }else if(area%bigPack == 0) {
    //     console.log('bigPack win',area%bigPack)
    //     bigPackResult = area / bigPack
    // } else if(area == 9){
    //     littlePackResult = 2
    //     // return
    // } else if (area%bigPack > area%littlePack) {
    //     console.log('smallPack win', area%littlePack)
    //     if(area%bigPack == 7) {
    //         console.log('chudo')
    //         bigPackResult = Math.ceil(area / area%bigPack)
    //     } else if(area%littlePack == 0){
    //         littlePackResult = area / littlePack
    //     } else {
    //         bigPackResult = Math.floor(area / bigPack)
    //         littlePackResult += 1
    //     }
    //     // littlePackResult = area / littlePack
    // } else if(area%bigPack == area%littlePack) {
    //     if(area%bigPack == 0 && 0 == area%littlePack) {
    //         bigPackResult = area / bigPack
            
    //     } else cheking(area)
        
    //     function cheking(areaItem) {
    //         let sum = 0
    //         if(sum <= areaItem){
               
    //         }
    //         console.log('YES')
    //     }
    //     console.log('ничья')
    // }