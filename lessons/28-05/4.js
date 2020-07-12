// let user = {
//     name: 'Pavel',
//     age: 26,
//     'Styding js': true,
//     'Likes winter': false,
//     games: ['wow', 'hots'],
//     sayHello: function(){
//         console.log('Hello')
//     }
// }

// console.log(user);
// console.log(user.name);
// user.sayHello();


// array.forEach(element => {

// });


// arr.forEach((item, index, arr) =>{ })

// let arr = [1, 8, 5, 10, 25];

// arr.forEach((item, i, array) =>{
//     console.log(`${i} = ${item}`);
//     // console.log('index', index);
//     // console.log('array', array);
// })

// let arr = [0, 2, null, false, 'Boba', NaN]

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(false));
// console.log(arr.includes('Boba'));
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));


// let user = [{
//     id: 1,
//     name: 'Boba',
// },
// {
//     id: 2,
//     name: 'Pavel'
// },
// {
//     id: 3,
//     name: 'DIMON!'
// },
// {
//     id: 4,
//     name: 'limon!'
// }
// ]

// // user.find((item) => item.id == 1)
// console.log(user.find((item) => item.id == 2))
// console.log(user.findIndex((item) => item.id == 2))
// console.log(user.find((item) => item.id < 3 ))
// console.log(user.filter((item) => item.id < 3 ))



// let names = ['Pavel', 'Boba','Pavel', 'Taras','Petya', 'Ivan']
// let arr = names.map (item =>item.length);
//  console.log(arr);
 

// console.log(names);
// console.log(newArr);

// let num  = [1, 5, 0, 18, 15, 2]
// let arr = num.sort((a, b) => a - b);
// console.log(arr);
// console.log(arr.reverse())


// let names = ['Pavel', 'Boba','Pavel', 'Taras','Petya', 'Ivan'];
// console.log(names)
// let ttt = names.join(' ');
// console.log(ttt);
// let nnn = ttt.split(' ');
// console.log(nnn);

// let u = "background-color"
// function camelcase(param){
//     let arr = param.split("-");
//     let arr2 = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
//     let newStr = arr2.join("")

//     return newStr
// }

// function camelcase(param){
//    return param.split("-").map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");
// }


// console.log(camelcase("background-color"));

// let arr = [5, 3, 8, 1];
// function filterNum(arr, min, max){
//     return arr.filter(item => item >=min && item <= max)
// }
// let h = filterNum(arr, 1, 4);
// console.log(h)


// let arr = [1, 2, 3, 4, 5,];
// let y = arr.reduce((sum, current) => sum + current);


// console.log(y)


// let arr = [15, 8, 9, 10, 47];
// let result = arr.reduce(function(sum, item){
//     console.log(item)
//     return sum = item + 2;
// },0 )

// console.log(result)


// let arr = [];
// // Array.isArray()
// console.log(Array.isArray([]))
// console.log(Array.isArray({}))


// 1 добавление / удаление 
// push shift unshift pop concat  slice splice

// 2 поиск элементов
// find indexOf includes findindexof filter

// 3 перебор
// forEach

// 4 преобразование
// map sort reverse split/join reduce
