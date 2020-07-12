// // задача 1
let rrr = [1, 2, 3, 4, 5];
let rrr2 = rrr.splice(1, 3);

console.log('Задача 1', rrr2);

// // задача 2
let www = [1, 2, 3, 4, 5];
www.splice(1, 5, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
console.log('Задача 2', www);

// // задача 3
let eee = [1, 2, 3, 4, 5];
let eee2 = eee.slice(0, 3);

console.log('Задача 3', eee2);

// // задача 4
let aaa = ['a', 'b','c','e','s','j','x'];
let sss = ['d','a','c','v','a'];
let ddd =['w','f','c','a','f','a'];
let fff = ['j','v','a','c','e'];


function owl (arr1, arr2, arr3, arr4){
    // let sum = arr1.slice(0) + arr2.slice(0) + arr3.slice(0) + arr4.slice(0);
    let sum = arr1.concat(arr2, arr3, arr4);
    let w;
    let bop = [];
    for (let i = 0; i < sum.length; i++){
        w = sum[i]
        if (bop[w]){
            bop[w] += 1;
        }else bop[w] = 1;
    }
    return bop;
}


console.log('Задача 4', owl(aaa, sss, ddd, fff));


// задача 5
let names = ["Boba", "Tolik", "Ivan", "Marina"];

function nAme (arr){
    let y = arr.length;
    let hi = [];
    let t;
    for(let i = 0; i < y; i++){
        hi.push('Hi ' + arr[i])
    }
    return hi;6
}
console.log('Задача 5', nAme(names));


// задача 6
let poem = "У дуб зелёный на дубе ; \n Златая цепь том лукоморья : \n И днём и ночью по цепи кругом \n Всё ходит кот учёный ; \n Идёт - песнь заводит направо \n Налево - сказку говорит. \n Там чудеса: там леший бродит, \n Русалка на ветвях сидит;"
console.log(poem);

function preo (str, separ){
    m = str.split(separ);
    for(let i = 0; i < m.length; i++){
        if (m[i] === '\n'){
            m.splice(i, 1);
        }
    }
    return m;
}
let j = " ";
let goP = preo(poem, j);

let mas1 = goP.slice(0, 6);
let mas2 = goP.slice(6, 11);
let mas3 = goP.slice(11, 18);
let mas4 = goP.slice(18, 23);
let mas5 = goP.slice(23, 28);
let mas6 = goP.slice(28, 32);
let mas7 = goP.slice(32, 37);
let mas8 = goP.slice(37, 43);

let cut1 = mas1.splice(3, 2); 
// на дубе
let cut2 = mas2.splice(3, 1); 
// лукоморья
let cut3 = mas3.splice(4, 3); 
// по цепи кругом
let cut4 = mas4.splice(2, 3); 
// кот ученый
let cut5 = mas5.splice(4, 1)
// направо

mas1.splice(1, 0, cut2[0]);
mas2.splice(2, 0, cut1[0], cut1[1]);
mas3.splice(4, 0, cut4[0], cut4[1]);
mas4.splice(3, 0, cut3[0], cut3[1], cut3[2]);
mas5.splice(1, 0, cut5[0]);
console.log(mas1);
console.log(mas2);
console.log(mas3);
console.log(mas4);
console.log(mas5);
console.log(mas6);
console.log(mas7);
console.log(mas8);
// let bob = mas1 + '\n' + mas2 + '\n' + mas3  + '\n' + mas4  + '\n' + mas5  + '\n' + mas6 + '\n' + mas7 + '\n' + mas8;
let bob = mas1.concat(mas2, mas3, mas4, mas5, mas6, mas7, mas8);
let o = bob.join(' ');
console.log(o);
