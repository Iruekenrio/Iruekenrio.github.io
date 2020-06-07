
// Задание 1

let userNumber = +prompt("Задание 1. Введите число", "");

let mass = [];
let container;

for (let container = userNumber; container >= 0; container--){
    mass.unshift(-container);
    console.log (container);
}
console.log (mass);
alert(mass);


// // Задача 2

// // let num1 = +prompt("Задание 2. Далее введите число в каждом окне. Число 1");
// // let num2 = +prompt("Число 2");
// // let num3 = +prompt("Число 3");
// // let num4 = +prompt("Число 4");
// // let num5 = +prompt("Число 5");
// // let num6 = +prompt("Число 6");
// // let num7 = +prompt("Число 7");
// // let num8 = +prompt("Число 8");
// // let num9 = +prompt("Число 9");
// // let num10 = +prompt("Число 10");

// // let mass2 = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];



let quest2 = +prompt("Задание 2. Введите число");
let mass2 = [];
while (quest2 != null && quest2 != "" && mass2.length != 10){
    mass2.push(quest2);
    quest2 = +prompt("Введите число");
}

let leg = mass2.length;
let theAmount = 0;
let helper = 0;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper >= 0){
        theAmount =  theAmount + helper;
    }
}
alert(`Сумма ${theAmount}`);

let diff = 0;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper != NaN){
        diff = diff - (-helper);
        
    }
}
alert(`Разность ${diff}`);

let average = 0;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper != NaN){
        average = average + helper;
        
    }
}
alert(`Cреднее ${(average) / leg}`);


let max = -Infinity;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper >= max){
        max = helper;        
    }
}
alert(`Максимальное ${max}`);


let min = Infinity;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper <= min){
        min = helper;        
    }
}
alert(`Минимальное ${min}`);


let negativeNum = [];
let positiveNum = [];
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper >= 0){
        positiveNum.push(helper);        
    }else 
        negativeNum.push(helper);
}
alert(`Положительных ${positiveNum.length}, Отрицательных ${negativeNum.length}`);

let evenNum = [];
let oddNum = [];
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper%2 == 0){
        evenNum.push(helper);        
    }else 
        oddNum.push(helper);
}
alert(`Четные ${evenNum.length}, Нечетные ${oddNum.length}`);

// задание 3


let quest3 = +prompt("Задание 3. Введите число");
let mass3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let len = mass3.length;

switch (quest3){
    case 1:
        alert(`${mass3[0]} + ${mass3[1]}`);
        break;
    case 2:
        alert(`${mass3[1]} + ${mass3[1]}`);
        break;
    case 3:   
        alert(`${mass3[1]} + ${mass3[2]}`);
        break;
    case 4:
        alert(`${mass3[2]} + ${mass3[2]}`);
        break;
    case 5:
        alert(`${mass3[3]} + ${mass3[2]}`);
        break;
    case 6:
        alert(`${mass3[3]} + ${mass3[3]}`);
        break;
    case 7:
        alert(`${mass3[4]} + ${mass3[3]}`);
        break;
    case 8:
        alert(`${mass3[4]} + ${mass3[4]}`);
        break;
    case 9:
        alert(`${mass3[4]} + ${mass3[5]}`);
        break;
    case 10:
        alert(`${mass3[5]} + ${mass3[5]}`);
        break;
    case 11:
        alert(`${mass3[2]} + ${mass3[9]}`);
        break;
    case 12:
        alert(`${mass3[3]} + ${mass3[9]}`);
        break;
    case 13:
        alert(`${mass3[4]} + ${mass3[9]}`);
        break;
    case 14:
        alert(`${mass3[7]} + ${mass3[7]}`);
        break;
    case 15:
        alert(`${mass3[8]} + ${mass3[7]}`);
        break;
    case 16:
        alert(`${mass3[8]} + ${mass3[8]}`);
        break;
    case 17:
        alert(`${mass3[8]} + ${mass3[9]}`);
        break;
    case 18:
        alert(`${mass3[9]} + ${mass3[9]}`);
        break;
    default:
        alert("Ошибка");
                                                                
}


// задание 4

let noth = " ";
let star = "*";
let mass4 = [];
let lon = mass4.length;
for (i = 0; i <= 10; i++){
    if (i <= 5){
        mass4.push("*");
    } else {
        mass4.shift("*");
    }
    console.log(mass4);
}








