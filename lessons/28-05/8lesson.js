// let input = document.querySelector('input');
// let list = document.querySelector('#list');
// input.addEventListener('keypress', function (e){
//     if(e.key == 'Enter'){
//         let li = document.createElement("li");
//         let task = document.createElement('span');
//         // console.log(e);
//         task.innerHTML = this.value;
//         li.append(task);
//         task.addEventListener('dblclick', function(){
//             newInput = document.createElement('input');
//             let text = this.innerHTML;
//             newInput.value = text;
//             this.innerHTML = "";
//             li.prepend(newInput);
//             // let plHolder = task.value
//             // newInput.innerHTML += task.innerHTML;
//             // console.log(newInput.value)
//             // newInput.setAttribute('placeholder', `${task.innerHtml}`)
//             // newInput.setAttribute('placeholder', `${newInput.value}`)
//             newInput.addEventListener('keypress', function (e){
//                 if(e.key == 'Enter'){
//                     // console.log(this)                
//                     task.innerHTML = this.value;
//                     newInput.remove()
//                 }
//             })
            
//         })

//         let remove = document.createElement('span')
//         remove.classList.add('remove')
//         remove.innerHTML = ('remove')
//         li.append(remove)
//         remove.addEventListener('click', function(){
//             li.remove()
//         })
        
//         let mark = document.createElement('span')
//         mark.classList.add('mark')
//         mark.innerHTML = ('mark')
//         li.append(mark)
//         mark.addEventListener('click', function(){
//             console.log(this)
//             li.classList.add('done')
//         })

//         list.append(li)

//         input.value = "";


//     }
// })




// // let table = document.createElement("table");
// // let tr = document.createElement("tr");
// // let td = document.createElement("td");

// // console.log(tr)
// // console.log(td)
// function tab (stroke, stb){
//     let table = document.createElement("table");
//     document.body.append(table)
//     for(let i = 0; i < stroke; i++){
//         let tr = document.createElement("tr");
//         tr.classList.add('box')
//         for(let i = 0; i < stb; i++){
//             let td = document.createElement("td");
//             tr.append(td)
//             td.classList.add('box')
//         }
//         table.append(tr)
//     }
// }
// tab(5,5)
// let table = document.querySelector('table');
// let tr = document.querySelector('tr');
// let td = document.querySelectorAll('td');
// let box = document.querySelectorAll('box')
// // box.style.width = '100px';
// // console.log(document.querySelectorAll('td')[2])
// // console.log(document.querySelectorAll('td'))
// // document.querySelectorAll('td')[2].classList.add('red')
// function randomBackground () {
//     let arr = Array.from(document.querySelectorAll('td'))
//     let redBack = []
//     let letter = 'qwertyyuuiookgsakdakdsajcmzkd'
//     for(let i = 0; i < arr.length; i++){
//         if(Math.round(Math.random()) == 0){
//             document.querySelectorAll('td')[i].classList.add('red')
//             redBack.push(i)
//         }else 
//             // td.innerHTML = letter.substr(Math.round(Math.random()), i)
//             for(let j = 0; j < 5; j++){
//                 document.querySelectorAll('td')[i].innerHTML += `${letter[Math.round(Math.random() * (letter.length - 1))]}`;
//                 // console.log(j)
//                 // console.log(letter[Math.round(Math.random() * letter.length)])
//                 // console.log(Math.round(Math.random() * letter.length))
//                 // console.log(letter[0])
//             }
            
           
        
//     }
//     let summ = document.createElement('div');
//     document.body.append(summ)
//     summ.innerHTML = `процент закрашеных: ${(redBack.length * 100) / arr.length}%`
// }

// randomBackground()

// // заготовка для рандома
// // console.log(Math.random().toString(36).slice(-5));





let newList = document.createElement("ul");

function formatDate(date) {
  var hh = date.getHours();
  if (hh < 10) hh = "0" + hh;
  var mm = date.getMinutes();
  if (mm < 10) mm = "0" + mm;
  var ss = date.getSeconds();
  if (ss < 10) ss = "0" + ss;
  return hh + ":" + mm + ":" + ss;
}
// formatDate()
document.body.appendChild(newList);
let timer = setInterval(() => {
  let date = formatDate(new Date());
  let newLi = document.createElement("li");
  newLi.innerHTML = `${date}`;
  newList.append(newLi);
//   document.querySelector('li').style.listStyle="*"
//   console.log(wow)
}, 100);

setTimeout(() => clearInterval(timer), 1000);

// // let li = document.querySelector('li')
// // console.log(document.querySelector('li'))

// function timeShift(){
//     let y = Array.from(document.querySelectorAll('li'));
//     y.forEach((item, i) => {
//         item.style.listStyle="none"
//         item.prepend('*')
//         item.innerHTML += `- ${i + 1}`
//         item.insertAdjacentHTML('beforeend', '<span>Hi<span>')
        
//     })
       
    

    // console.log(i)
    // document.querySelector('li').style.listStyle="*"
// }
// timeShift()

// setTimeout(timeShift, 2000);
// setTimeout(() => document.querySelector('li').style.listStyle="*", 1000);
// let i = Array.from(setTimeout(() => document.querySelectorAll('li'), 2000));

// console.log($('#list'))

// $('<div>').appendTo('body')
// $('<div/>').appendTo('body')
// $('<div>123</div>').appendTo('body')


// // $('.item').hide();
// // $('.item').show();
// $('.item').css('background-color', 'red');
// $('.item').animate({'marginLeft': '+=200px'}, 500);


// console.log($('.item').text())
// console.log($('.item').html())
// console.log($('#list').attr('id'))
// console.log($('#list').data('id'))

// // $('.about').text('dasdas')

// $('li').each(function (index, item){
//     // $(item).html(index);
//     $(this).append(index);
//     // console.log(this)
//     // console.log(item)

// })
// $('li:nth-child(2)').css('background-color', 'green')
// $('span').parent().css('color', 'rgb(219, 125, 219)')
// $('span').parent().parent().addClass('done')
// // $('.item').text() = 'asdasd';
// // rgb(219, 125, 219)
// $("a[href ^= 'https://']").attr('target', '_blanck')
// $('input').each(function(){
//     $elem = $(this)
//     $elem.attr('placeholder', $elem.val()).removeAttr('value')
// })

// console.log($(':checkbox:checked').length)
// console.log($(':radio').length)
// console.log($(':text').length)

// let sum = 0;
// $('div').height(function(index, value){
//     sum += value;
// })
// console.log(sum)


// $list = $('#list');
// $list.html($list.children().get().reverse())
// $('input:first-child').on('click', function(){
//     $(this).nextAll().eq(2).remove()
// })


// $(document).ready(function() {
//     if($('.list').length > 0){
//       $('.list').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//       });
//     }
// });
