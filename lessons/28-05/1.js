


// console.log("Дарова"); 

// alert("Привет");
// confirm("Heeelllllooooo");  ok cancel
// prompt("Test", "");  ok cancel input

// "js динамически типизированный язык"

// let tempWidth;
// tempWidth = 12;

// let tempHeight = 15;

// console.log(tempHeight, tempWidth);

// tempHeight = tempWidth;
// console.log(tempHeight);

// let a = 12, b = "String";
// Infinity -Infinity NaN
// console.log("asdf"/1);

// let bigInt = 123213234523512355235235123514n

//  string
// let name = "Boba"

// let str = "Hi"
// let str2 = 'Hello'
// let str3 = `Hi ${name}, ${20 + 1}years`

// console.log(str);
// console.log(str2);
// console.log(str3);

// boolean bool
// let checkboxChecked = true;
// let radioChecked = false;

// null , underfined
// let a = null;
// let b;
// console.log(a, b)

// object, symbol

// let ob = {
//     name: "Boba"
// }
// typeof ob
// typeof (ob)
// console.log (typeof 12);
// console.log (typeof 12n);
// console.log (typeof true);
// console.log (typeof "Hello");
// console.log (typeof undefined);

// console.log (typeof null);
// console.log (typeof function(){});

// console.log(`My name is ${name}`)
// let name = "Boba";
// унарный оператор
// let d = -2;

// бинарный оператор
// let g = a + 4;

// let c = "My name is" + " " + "Boba";
// console.log(3%2);

// let i = 0;

// Инкремент
// console.log("post",i++); 1.операция 2. +1
// console.log("pref",++i); 1. +1 2.Операция


// Декримент
// i--
// --i
// console.log("post",i--);
// console.log(i);
// console.log("pref",--i);

// a += b      a = a + b
// a -= b      a = a - b
// a *= b      a = a * b
// a /= b      a = a / b
// a %= b      a = a % b

// let message = "Hi";
// message += " Boba";

// let q = "2", f = 2;
// console.log(q == f); 
// console.log(q === f); строгое равенство
// console.log(q < f);
// console.log(q <= f);
// console.log(q >= f);
// console.log(q == f);
// console.log(q != f);



// console.log(1 + "2");
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log("3" * "8");
// console.log("px" + 1 + 14);
// console.log(1 + 14 + "px");

// console.log("42" - 1 + 14);
// console.log("42px" - 1 + 14);
// console.log(null + 1);
// console.log(undefined + 1);

// let value = true;
// console.log(typeof value);
// value = String(value);
// console.log(typeof value);
// console.log(value);

// let value = "123asd";
// console.log(typeof value);
// value = +value;
// value = Number (value);
// console.log(typeof value);
// console.log(value);

// let value = "0";
// console.log(typeof value);
// value = Boolean (value);
// console.log(typeof value);
// console.log(value);



// 02-06-2020


// let a = 3, h = 8;
// let s = a * h / 2;
// console.log(s);

// let k = 3, n = 4, angle = 45;

// let radian = Math.PI * angle / 180;

// let sinA = Math.sin(radian);

// let s = k * n * sinA / 2;

// console.log(Math.floor(s));
// console.log(Math.ceil(s));
// console.log(Math.round(s));

// console.log(Math.round(s) * 100) / 100;

// Math.floor к большему
// Math.ceil к меньшему
// Math.round до ближайшего целого числа


// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];

// let a = 3, b = 4, c = 5;

// let p = (a + b + c) / 2;

// let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// console.log(s.toFixed(2));

// let a = +process.argv[2];
// let b = +process.argv[3];
// let c = +process.argv[4];
// let d = +process.argv[5];

// let i = a > 0 && b > 0 && c > 0 && d > 0;
// let n = a == b && b == c && c == d;
// console.log(i && n);
// let a = -3;
// if (a > 0) console.log("test");

// if (a > 0) {
//     console.log(a);
//     console.log(a > 0);
// }else{
//     console.log("a меньше 0");
// }

// let age = +process.argv[2];
// if (age > 18){
//     console.log("Добро пожаловать!");
// }else if (age == 18){
//     console.log("Добро пожаловать! Вам есть 18!");
// }else {
//     console.log("Нет доступа");
// }

// Тернарный оператор

// let result = условие ? true : false

// let access = age >= 18 ? console.log("Добро пожаловать!") : console.log("Нет доступа");

// if (a > 18 && name == "Boba"){
//     if(name == "Boba"){

//     }
// }

// let message = (age < 5) ? "Hi, baby" : (age < 18) ? "Hello" : (age < 100) ? "Hi, man (woman)" : "Ooooops";
// console.log(message);



// if (age < 5){
//     console.log("Hi baby");
// }else if (age < 18){
//     console.log("Hello");    
// }else if (age < 100){
//     console.log("Hi man");
// }else{
//     console.log("Oooooops");
// }

// let temp = (a + b < 100) ? "yes" : "no";

// switch(x){
//     case 'value':
//         console.log("value 1") x === value1
//         break
//     case 'value2':
//         console.log("value 2")
//     default:
//         console.log("value 2")

// }


// let a = 5 + 2;
// ===
// switch(a){
//     case 0:
//         console.log("мало");
//         break;
//     case 2:
//         console.log("найс");
//         break;
//     case 5:
//     case 7:
//         console.log("очень много");
//         break;
//     default:
//         console.log("дефолтное значение");
                
// }

// let day = "Понедельник";
// switch(day){
//     case "Понедельник":
//     case "Вторник":
//     case "Среда":
//     case "Четверг":
//     case "Пятница":
//         console.log("Будний день");
//         break
//     case "Суббота":
//     case "Воскресенье":
//         console.log("Выходной день");
//         break
                        
// }


// if (day = "Понедельник"){
//     console.log("Будний день");
// }else if(day = "Вторник"){
//     console.log("Будний день");
// }else if(day = "Среда"){
//     console.log("Будний день");
// }else if(day = "Четверг"){
//     console.log("Будний день");
// }else if(day = "Пятница"){
//     console.log("Будний день");
// }else if(day = "Суббота"){
//     console.log("Выходной день");
// }else (day = "Воскресенье") 
//     console.log("Выходной день");

// let day = 'СБ';
// if (day == 'ПН' || 'ВТ' || 'СР' || 'ЧТ'|| 'ПТ'){
//    console.log('Будний день');
// }else if(day == 'СБ' || 'ВС'){
//    console.log('Выходной день');
// }    
// let day = "Суббота";

// if day == "Понедельник" || day == "Вторник" || day == "Среда" || day == "Четверг" || day == "Пятница" {
//     console.log("Будний день");
// } else {
//     console.log("Выходной день");
// }

// console.log("Выходной день");
// console.log("Выходной день");
// console.log("Выходной день");
// console.log("Выходной день");
// console.log("Выходной день");
    
// while (условие){
//     действие
// }
// let i = 3;

// while (i){
//     console.log(i);
//     i--;
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;

// }while(i == 3);


// for(начало; условие; шаг){
//     действие
// }
// let i = 0;
// for(i = 0; i < 3; i++){
//     console.log("for",i);
// }
// console.log("global", i);

// let s = 0;
// while(true){
//     let value = +prompt("Введите число", '');
//     if(!value) break;
//     s = value;
// }
// console.log(s);

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     console.log(i);
// }


// циклы
// while
// do...while
// for


// let i = 0;
// while(++i < 5) console.log("i",i);

// let j = 0;
// while(j++ < 5) console.log("j",j);

// for(let i = 0; i < 5; ++i){
//     console.log("i", i);
// }

// for(let j = 0; j < 5; j++){
//     console.log("j", j);
// }

// let i = 6;
// while(i < 12){
//     console.log("HI", i);
//     i++
// }

// for(let i = 6; i < 12; i++){
//     console.log("HI", i);
// }

for(let p = 0; p < 13; p++){
    console.log(`Number ${p}`)
}

