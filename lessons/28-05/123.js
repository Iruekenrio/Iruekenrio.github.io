// // console.log(console.log(1) || 2 || console.log(3));

// // console.log(1 && null && 2)
// // let a = 12;

// // if (!(a >= 10 && a <= 30)) {
// //   console.log(a)
// // }

// // if (a < 10 || a > 30) {
// //   console.log(a)
// // }

// // (a && b) || (b && c)

// // let user = prompt("Ваш логин?", "");
// // alert(user);
// // if (user == "admin") {
// //   let pass = prompt("Ваш password?", "");
// //   if (pass == 123) {
// //     alert("Вход разрешен");
// //   } else if (pass == '' || pass == null) {
// //     alert("Отменено");
// //   } else {
// //     alert("Пароль неверен");
// //   }
// // } else if (user == '' || user == null) {
// //   alert("Отменено");
// // } else {
// //   alert("Вход запрещен");
// // }

// let age = prompt("Ваш возраст?", "");

// if (age < 6) {
//   alert("Привет, Малыш!");
// } else if (age < 18) {
//   let gender = prompt("Ваш пол?", "");
//   if (gender == "муж") {
//     let hobby = prompt("Ваше хобби?", "");
//     if (hobby == "компьютерные игры") {
//       alert("Предлагаем игру")
//     } else {
//       alert("Нам нечего вам предложить")
//     }

//   } else if (gender == "жен") {
//     let hobby = prompt("Ваше хобби?", "");
//     if (hobby == "книги") {
//       alert("Предлагаем книги")
//     } else {
//       alert("Нам нечего вам предложить")
//     }
//   } else {
//     alert("Какой интересный пол!")
//   }

// } else if (age < 60) {
//   let gender = prompt("Ваш пол?", "");
//   if (gender == "муж") {

//     let hobby = prompt("Ваше хобби?", "");

//     if (hobby == "футбол") {
//       alert("Предлагаем мяч")

//     } else if (hobby == "теннис") {
//       alert("Предлагаем ракетку")

//     } else {
//       alert("Нам нечего вам предложить")
//     }

//   } else if (gender == "жен") {

//     let hobby = prompt("Ваше хобби?", "");
//     if (hobby == "вязание") {
//       alert("Предлагаем спицы")
//     } else if (hobby == "рисование") {
//       alert("Предлагаем краски")
//     } else {
//       alert("Нам нечего вам предложить")
//     }
//   } else {
//     alert("Какой интересный пол!")
//   }
// } else {
//   alert("Какой интересный возраст!")
// }




// console.log(arr[3])

// console.log(arr.length)
// arr[999]
// arr[1000] = "Name";

// arr.length = 2;
// console.log(arr);
// console.log(arr.length);

// arr.length = 4;

// console.log(arr);
// console.log(arr.length);

// let arr2 = new Array("fgj");
// console.log(arr2);
// console.log(arr2.length);

// arr.push(5);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// let arr3 = arr;
// console.log(arr3);
// arr3.push("Java Script");
// console.log(arr3);
// console.log(arr);



// let arr = [1, "JS", 3, true];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let numbers = [2, 5, 85, 94, 44, 1];

// for (let number of numbers) {
//   console.log(number);
// }

// for (let key in numbers) {
//   console.log(key);
// }

// let names = ["Boba", "Nick", "John", "Garry"];

// "Mike" добавить
// "Boba" удалить
// в середину вставить "Boba"

// names.push("Mike");
// names.shift();
// names[Math.floor(names.length / 2)] = "Boba";
// console.log(names);

// let a = +process.argv[2];
// let b = +process.argv[3];
// let operation = process.argv[4];

// switch (operation) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     (b == 0) ? console.log("Вы пытаетесь разделить на ноль") : console.log(a / b)
//     break;
//   case "%":
//     console.log(a % b);
//     break;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = +process.argv[2];
// let mess = [], num;

// for (let i = 0; i < arr.length; i++) {
//   // switch (true) {
//   //   case a % arr[i] == 0:
//   //     num = arr[i];
//   //     mess.push(num);
//   // }

//   if (a % arr[i] == 0) {
//     num = arr[i];
//     mess.push(num);
//   }
// }
// console.log("Число кратно:", mess);


let lines = 7;
let str = " ", star = "*";

for (let i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}