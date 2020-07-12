
// // // Задание 1
// // обьявляю переменную и задаю ей значение, которое введет пользователь
// let userNumber = +prompt("Задание 1. Введите число", "");
// // создал пустой масив
// let mass = [];
// // создал дополнительную переменную
// let container;
// // задал переменной container значение userNumber, тоесть container будет иметь число которое введет ползователь.
// // Пока container больше или равен нулю производить такую операцию (container = container - 1)
// for (let container = userNumber; container >= 0; container--){
// // в кажддом цикле пока container не будет равен 0 я добавляю в массив значение с помощью unshift.
// // это значение будет равнятся -container
//     mass.unshift(-container);
//     console.log (container);
// }
// // с помощью alert вывожу содержимое массива на экран браузера
// console.log (mass);
// alert(mass);


// // // // Задача 2

// // также как и в первой задаче задаю переменную quest2 которая будет равна введеному пользователем числу
// let quest2 = +prompt("Задание 2. Введите число");
// // создаю пустой масив с которым дальше буду работать
// let mass2 = [];
// // while -выполнять операцию до тех пор пока quest2 не равняется null или quest2 не равняется пустой строке ""
// // или длинна масива mass2.length не равняется 10. Например в случае когда длинна массива станет 10, то while остановится
// while (quest2 != null && quest2 != "" && mass2.length != 10){
//     // в каждом цикле пока работает while добавляю в массив число которое вводит пользователь
//     mass2.push(quest2);
//     // в конце каждого цикла с помощью prompt выдаю еще одно окошко с полем ввода числа, чтобы дальше заполнять массив, пока его длинна не будет равна 10
//     quest2 = +prompt("Введите число");
// }

// // в дальнейших вычислениях я буду ссылатся на массив mass2 который будет уже содержать в себе до 10 введенный пользователем чисел
// // он будит выглядить например вот так: mass2 = [1,3,6,20,3,7,8,5,1,0] смотря какие числа введет пользователь

// // задаю переменную leg и даю ей значение равное длинне массива mass2
// // задаю переменню theAmount в которую я буду класть сумму чисел и выводить на экран
// // задаю дополнительную переменню helper для помощи в вычислениях далее
// let leg = mass2.length;
// let theAmount = 0;
// let helper = 0;
// // задаю цикл for в котором задаю локальную переменную i=0. Пока i меньше leg (длинны масива mass2) проводим операцию i = i + 1
// for (i = 0; i < leg; i++){
// // задаю переменной helper значение рамное mass2[i] то есть каждый цикл значение i будет менятся от 0 до 10
// // таким образом на первом цикле будет так helper = mass2[0], что означает что мы обращаемся к первому числу массива mass2,
// // например если у нас в массиве будут эти числа mass2 = [1,3,6,20,3,7,8,5,1,0] то mass2[0] это обращщение к цифре 1, первой в массиве
// // второй цикл будет таким helper = mass2[1]; это обращение к цифре 3
// // третий таким helper = mass2[2]; это обращение к цифре 6 и тд.

// // В итоге с помощью for  я переберу все числа которые ввел пользователь в массив mass2 и с этими числаами я провожу вычисления

//     helper = mass2[i];
//     if (helper >= 0){
//         // если helper больше или равен 0 то я произвожу сумму
//         // переменная theAmount на данный момент равна 0 к ней я прибавляю helper
//         theAmount =  theAmount + helper;
//         // в итоге если масив для примера у меня будет таким mass2 = [1,3,6,20,3,7,8,5,1,0]
//         // то в первом цикле это будет выглядет так: theAmount =  0 + 1;
//         // во втором вот так theAmount =  1 + 3;
//         // третьем так: theAmount =  4 + 6;
//     }
//     // Итого с помощью for я перебираю масив а helper задаю число из масива и приплюсовую это число
//     // к theAmount каждый цикл. В конце концов theAmount накапливает в себе все числа массива mass2
// }

// alert(`Сумма ${theAmount}`);
// // c помощью alert вывожу на экран сумму

// let diff = 0;
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper != NaN){
//         diff = diff - (-helper);
        
//     }
// }
// alert(`Разность ${diff}`);

// let average = 0;
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper != NaN){
//         average = average + helper;
        
//     }
// }
// alert(`Cреднее ${(average) / leg}`);


// let max = -Infinity;
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper >= max){
//         max = helper;        
//     }
// }
// alert(`Максимальное ${max}`);


// let min = Infinity;
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper <= min){
//         min = helper;        
//     }
// }
// alert(`Минимальное ${min}`);


// let negativeNum = [];
// let positiveNum = [];
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper >= 0){
//         positiveNum.push(helper);        
//     }else 
//         negativeNum.push(helper);
// }
// alert(`Положительных ${positiveNum.length}, Отрицательных ${negativeNum.length}`);

// let evenNum = [];
// let oddNum = [];
// for (i = 0; i < leg; i++){
//     helper = mass2[i];
//     if (helper%2 == 0){
//         evenNum.push(helper);        
//     }else 
//         oddNum.push(helper);
// }
// alert(`Четные ${evenNum.length}, Нечетные ${oddNum.length}`);

// // // задание 3


// let quest3 = +prompt("Задание 3. Введите число");
// let mass3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let len = mass3.length;

// switch (quest3){
//     case 1:
//         alert(`${mass3[0]} + ${mass3[1]}`);
//         break;
//     case 2:
//         alert(`${mass3[1]} + ${mass3[1]}`);
//         break;
//     case 3:   
//         alert(`${mass3[1]} + ${mass3[2]}`);
//         break;
//     case 4:
//         alert(`${mass3[2]} + ${mass3[2]}`);
//         break;
//     case 5:
//         alert(`${mass3[3]} + ${mass3[2]}`);
//         break;
//     case 6:
//         alert(`${mass3[3]} + ${mass3[3]}`);
//         break;
//     case 7:
//         alert(`${mass3[4]} + ${mass3[3]}`);
//         break;
//     case 8:
//         alert(`${mass3[4]} + ${mass3[4]}`);
//         break;
//     case 9:
//         alert(`${mass3[4]} + ${mass3[5]}`);
//         break;
//     case 10:
//         alert(`${mass3[5]} + ${mass3[5]}`);
//         break;
//     case 11:
//         alert(`${mass3[2]} + ${mass3[9]}`);
//         break;
//     case 12:
//         alert(`${mass3[3]} + ${mass3[9]}`);
//         break;
//     case 13:
//         alert(`${mass3[4]} + ${mass3[9]}`);
//         break;
//     case 14:
//         alert(`${mass3[7]} + ${mass3[7]}`);
//         break;
//     case 15:
//         alert(`${mass3[8]} + ${mass3[7]}`);
//         break;
//     case 16:
//         alert(`${mass3[8]} + ${mass3[8]}`);
//         break;
//     case 17:
//         alert(`${mass3[8]} + ${mass3[9]}`);
//         break;
//     case 18:
//         alert(`${mass3[9]} + ${mass3[9]}`);
//         break;
//     default:
//         alert("Ошибка");
                                                                
// }


// // // задание 4

// let noth = " ";
// let star = "*";
// let mass4 = [];
// let lon = mass4.length;
// for (i = 0; i <= 10; i++){
//     if (i <= 5){
//         mass4.push("*");
//     } else {
//         mass4.shift("*");
//     }
//     console.log(mass4);
// }

// let len = process.argv[2];
// let alt = process.argv[3];


// for(let i = 0; i < alt; i++){
//     let str = " ";
//     console.log(str);
//     if (i == 0 || i == alt - 1){
//         for (let j = 0; j < len; i++){
//             str += "-" + "-";
//         }
//     }else{
//         str += "|";

//         for(let k = 0; k < len - 1; k++){
//             if(k % 2 == 0){
//                 str += "_" + "#";
//             }else{
//                 str += "#" + "_";
//             }
//         }
//         str += "|";
//     }

//     console.log(str);
// }


// let len = 5;
// let alt = 7;

// for(let i = 0; i < len; i++){
//     console.log("len", i);
//     for(let j = 0; j < alt; j++){
//     console.log("alt", j);
//     }
// }


// function sayHello(){
//     console.log("Hello");
// }
// function sayBye(){
//     console.log("Bye");
// }


// let a = 2;
// if (a > 5){
//     sayHello();
// }else{
//     sayBye();
// }


// function sumFunc(a, b){
//     let sum = a + b;
//     return sum;

    
// }
// console.log(sumFunc(5, 7));


// let nameUser = process.argv[2];
// function funName(nameUser, phrase){
//     let name = `${phrase} ${nameUser}`;
//     return name;
// }
// console.log(funName());




// let getString = function(num, str){
//     let arr = [];
//     if(isNaN(num) && isNaN(str)){
//         console.log("Error");
//     }else if (isNaN(str)){
//         for(let i = 0; i < num -1; i++){
//             arr[i] = str;
//             arr.push(arr[i]);
//         }
//     }else{
//         for(let i = 0; i < str -1; i++){
//             arr[i] = num;
//             arr.push(arr[i]);
//         }
//     }
//     return arr;
// }
// console.log(getString(4, 4))


// function superF(num, min, max){
//     let mass = [];

//     for(let i = min; i <= max; i++){
//         if(i % num == 0){
//             mass.push[i];
//             console.log(num);
//         }
//     }
    
//     return mass;
// }

// console.log(superF(3, 3, 9));



// console.log(parseInt(Math.random() * 10));
// let min = 5; let max = 10;
// console.log(parseInt(Math.random() * (max - min) + min));

// function randomNumber (num1, num2){
//     let arr = [];

//     if(num1 && num2){
//         let min = 1; let max = 3;
//         let mod = Math.abs(num1) + Math.abs(num2);
//         for(let i = 0; i < mod; i++){
//             let temp = parseInt(Math.random() * (max - min) + min);
//             arr.push(temp);
//         }
//     }else if(num1 || num2){
//         let min = -num1||-num2;
//         let max = num1||num2;

//         for(let j = 0; j < max; j++){
//             let temp = parseInt(Math.random() * (max - min) + min); 
//             arr.push(temp);
//         }
//     }else{
//         let len = parseInt(Math.random() * (29 - 10) + 10);
//         for(let k = 0; k < len; k++){
//             let min = -1000;
//             let max = 1000;
            
//             let temp = parseInt(Math.random() * (max - min) + min); 
//             arr.push(temp);
            
//         }
//     }
//     return arr;
    
// }
// console.log(randomNumber())

// let arr= ["Hi", "Boba", "age", "number"];
// // начиная с первого элемента массива удалить 2 элемента
// console.log(arr);
// console.log(arr.splice(1, 3, "Hello", "Finish"));
// console.log(arr);

// console.log(arr.slice(1, 4));
// console.log(arr);

// let arr2 = arr.slice();
// console.log(arr);
// arr2.push("test");
// console.log(arr2);
// console.log(arr);


// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);
// let arr = [];

// for(let i = 0; i <= 9; i++){
//     let min = -3;
//     let max = 10;
//     let helper = parseInt(Math.random() * (max - min) + min);
//     arr.push(helper);
//     // console.log(helper);
// }
// let leg = arr.length;
// console.log(arr);

// function evenOrNot(num){
    
//     if (num % 2 == 0){
//         return 0;
//     }else if(num % 2 == 1)
//         return 1;
// }
// let even = 0;
// let odd = 0;
// for(let i = 0; i <= leg; i++ ){
//     massNum = arr[i];
//     if(evenOrNot(massNum) == 0){
//         even++;
//     }else if(evenOrNot(massNum) == 1){
//         odd++;
//     }
// }
// console.log(even, 'Четные');
// console.log(odd, 'Нечетные');
// // console.log(evenOrNot(2));

// let num = 1;
// function name(num){
//     console.log(num);
// }
// name();
// name(5);


