
let body = document.querySelector('body')
let div = document.createElement('div')
let list = document.querySelector('ul')
function getButtons(tag){
    tag.classList.add('buttons')
    body.append(div)
    div.insertAdjacentHTML('afterbegin', '<input type="button" value="+" class="plus">')
    div.insertAdjacentHTML('afterbegin', '<input type="button" value="-" class="minus">')
    div.insertAdjacentHTML('afterbegin', '<input type="button" value="next" class="next">')
    div.insertAdjacentHTML('afterbegin', '<input type="button" value="prev" class="prev">')
}
getButtons(div)

function formatDate(date) {
  var hh = date.getHours();
  if (hh < 10) hh = "0" + hh;
  var mm = date.getMinutes();
  if (mm < 10) mm = "0" + mm;
  var ss = date.getSeconds();
  if (ss < 10) ss = "0" + ss;
  return hh + ":" + mm + ":" + ss;
}

let sum = 0;
let sum2 = 0;

function test (){
    let ul = document.createElement('ul');
    body.append(ul)
    document.querySelector('.plus').addEventListener('click', function(){
     let li = document.createElement('li')
     li.innerHTML = formatDate(new Date())
     ul.append(li)

     let arr = Array.from(document.querySelectorAll('li'))
    if(document.querySelectorAll('li') && arr.length > 0){
      for(let i = 0; i < arr.length;i++){
        arr[i].classList.remove('border')
        sum = 0;
        sum2 = 0;
      }
      arr[0].classList.add('border')
    }
    // console.log('test')
    })
    document.querySelector('.minus').addEventListener('click', function(){
      if (document.querySelector('li:last-child')){
      document.querySelector('li:last-child').remove()
      // console.log('test2')
      }
      let arr = Array.from(document.querySelectorAll('li'))
      if(document.querySelectorAll('li') && arr.length > 0){
        for(let i = 0; i < arr.length;i++){
          arr[i].classList.remove('border')
          sum = 0;
          sum2 = 0;
        }
        arr[0].classList.add('border')
      }
      
    })
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

function border(){
  let list = document.querySelector('ul')
  li = list.querySelectorAll("li");
  li[sum].classList.add("border");
  console.log(li)
  console.log(sum, 'border')
}
// next.onclick = function next() {
//   let list = document.querySelector('ul')
//   li = list.querySelectorAll("li");
//   // console.log(sum)
//   if(li.length > 0){
//     if(sum<li.length-1){       
//       li[sum].classList.remove("border");
//      sum++;
//      li[sum].classList.add("border");
//      // console.log(sum, '++') 
//      // console.log(li[sum], 'li') 
//    }else{
//      li[sum].classList.remove("border");
//      // console.log(sum, 'asd') 
//       sum = 0;
//       border();
//    }
//   }

// }

// prev.onclick = function prev(){
//   let list = document.querySelector('ul')
//   li = list.querySelectorAll("li");
//   if(li.length > 0){
//     if(sum !==0){
//       li[sum].classList.remove("border");
//       sum--;
//       li[sum].classList.add("border");
//   }else{
//       li[sum].classList.remove("border");
//       console.log(li.length-1)
//       sum = li.length-1;
//       border();
//   }
//   }
 
// }


function nextButton(){
    document.querySelector('.next').addEventListener('click', function(){
    let arr = Array.from(document.querySelectorAll('li'))
    if(document.querySelectorAll('li') && arr.length > 0){
      for(let i = 0; i < arr.length;i++){
        arr[i].classList.remove('border')
      }
      if(sum<arr.length - 1){
        sum++
        arr[sum].classList.add('border')
        // console.log(sum)
        
      }else{
        arr[sum].classList.remove('border') 
        sum = 0
        arr[sum].classList.add('border')
        // border()
      }
      
      // if(sum == arr.length){
      //   sum = 0
      // }
    }
  })
  document.querySelector('.prev').addEventListener('click', function(){
    let arr = Array.from(document.querySelectorAll('li'))
    if(document.querySelectorAll('li') && arr.length > 0){
      for(let i = 0; i < arr.length;i++){
        arr[i].classList.remove('border')
      }
      if(sum !== 0){
        sum--
        arr[sum].classList.add('border')
      }else{
        arr[sum].classList.remove('border')
        sum = arr.length - 1
        arr[sum].classList.add('border')
      }
      
    }
  })
}


nextButton()
test()





// Дальнейший код это слезы и боль, останется на память


// function backChange (){
  
//   // console.log(sum)
//   document.querySelector('.next').addEventListener('click', function(){
   
//     let arr = Array.from(document.querySelectorAll('li'))
//     if(document.querySelectorAll('li') && arr.length > 0){
//       arr[sum].classList.add('border')
//       sum++
//       console.log(sum)
//       if(sum == arr.length && arr.length > 0){
//         sum = 0
//         // console.log(sum, 'sum next')
//       }
//     }


//     // удаляющая копия



//     if(arr.length > 1){
//       console.log(sum2 > 0, 'sum2 next')
//       if(sum2 > 0){
//         let helper = sum2 - 1
//         arr[helper].classList.add('border')
//         if(sum2 == arr.length && arr.length > 1){
//           sum2 = 0
//         }
//       }
//       sum2++
//     }
//   })
//   document.querySelector('.prev').addEventListener('click', function(){
//     let arr = Array.from(document.querySelectorAll('li'))
//     // let helper = sum -1
//     // console.log(sum, 'sum prev')
//     // if(document.querySelectorAll('li') && arr.length > 0){
//     //   arr[sum].classList.add('border')
      
//     //   if(sum <= 0 && arr.length > 0){
//     //     sum = arr.length
//     //   }
//     //   sum--
//     // }
//         // призрачная копия
//     if(arr.length > 1){
      
//       // sum2 = arr.length
//       // console.log(sum2, 'sum2')
//       if(sum2 > 0){
//         console.log(sum2, 'sum2')
        
//         // let pom = arr.length - helper2
//         // console.log(pom, 'pom')
//         arr[sum2].classList.toggle('border')
//         // sum2 = arr.length
//         if(sum2 == 0 && arr.length > 1){
//           sum2 = arr.length
          
//         }
//       }
//       sum2--
//     }
   
//   })
// }


// backChange()





// console.log(wot > 0)
let input = document.querySelector('input')
let tesst = document.querySelector('.test')

input.addEventListener('click', function(){
  console.log('qwe2')
  tesst.classList.toggle('test')
})