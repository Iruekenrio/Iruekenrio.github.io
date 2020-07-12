
// const t = [1, 2, 3];


// // console.log(t.split())
// console.log(t.join(' '))

// let y = t.join(' ');
// console.log(typeof y)
// console.log(typeof t)


// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const flat = data.reduce((total, amount, index) => {
//     console.log('prev', total);
//     console.log('amount', amount);
//     console.log('index', index);
//     return total.concat(amount);
// })
// console.log(flat);

// let data = [
// {
//     a:'happy',
//     b:'robin',
//     c:['orange', 'black']
// },
// {
//     a:'tired',
//     b:'panther',
//     c:['gray', 'white', 'red']
// },
// {
//     a:'sad',
//     b:'goldfish',
//     c:['violet', 'green']
// }
// ]

// let p = function(arr1){
//     let t = arr1.reduce(function(prev, item){
//         // prev += item;
//         console.log(item.c)
//         console.log('prev', prev)
//         item.c.forEach((color) => prev.push(color))
        
//     }, [])
//     return t
// }

// console.log(p(data))
// console.log()



// let prise = [18.56, 16.7, 12.83];

// let neW = prise.map(function(item){
//    item = item + item * 0.15;
//    return item;
// })
// console.log(neW)

// // console.log()
// for (let node of document.body.childNodes){
//     console.log(node)
// }
// let arr = Array.from(document.body.childNodes);
// console.log(arr)

// let list = document.getElementById("list");
// console.log(list);
// let name = document.getElementsByName('input')
// let arr = Array.from(name)
// arr.map(() => console.log('test'))
// let className = document.getElementsByClassName('blog')
// console.log(className)
// let tag = document.getElementsByTagName('input')
// console.log(tag)


// let selector = document.querySelector('section.blog')
// console.log(selector)
// let selectorAll = document.querySelectorAll('section.blog')
// console.log(Array.isArray (selectorAll))



// let ch1 = document.querySelector('div .input-text')
// console.log(ch1);

// let ch2 = document.querySelectorAll('input')
// console.log(ch2);

// let ch3 = document.getElementsByClassName('input-text')
// console.log(ch3);

// let ch4 = document.getElementsByName('input')
// console.log(ch4);

// let ch5 = document.getElementById('last')
// console.log(ch5);

// let ch6 = document.getElementsByTagName('input')
// console.log(ch6);

// let ch7 = document.querySelector('[type = 'email']')
// console.log(ch7);