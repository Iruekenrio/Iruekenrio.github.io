// let  arr = [1,2,3,4,5];

// arr.push[6];
// console.log('push', arr);
// arr.pop();
// console.log('pop', arr);
// arr.unshift(0);
// console.log('unshift', arr);
// arr.shift(0);

// delete arr[2];
// console.log('delete', arr);

// arr.splice(0, 3, 7, 9);
// console.log('splice', arr);

// let arr2 = arr.slice(1, 3);
// console.log('arr2', arr2);
// console.log('slice', arr);

// arr[0] = 333;
// console.log('prosto zadal', arr);


// let qwerty = ['Hi', 'Boba', 'I', 'Like', 'Js'];
// qwerty.splice(0, 3);
// console.log('qwerty' ,qwerty);
// К О Ж З Г С Ф

// let zv = ['Г', 'З', 'К'];
// zv.splice(1, 2,'C', 'Ф');
// zv.splice(0, 0,'К', 'О', 'Ж', 'З');

// console.log(zv);

// concat



// let  arr = [1,2,3,4,5];
// let  arr2 = [6,7,8];

// let arr3 = arr.concat(arr2, 9, [10, 12])

// console.log('concat', arr3);
// console.log('concat', arr);

// let str = 'My name \t is Boba';
// let str = 'My name \n is Boba';
// let str = 'My name \\ is Boba';
// let str = 'My name \' \' is Boba';
// console.log(str);

// let str = 'My name is Boba';
// console.log(str.length);
// console.log(str[11]);

// str[11] = 'V'; так не работает, с масивом можно а со строкой нет
// console.log(str[11]);
// for(let i of str){
//     console.log(i)
// }
// let str2 = 'Hello' + ' ' + str[4];
// console.log(str2)

// console.log(str.toUpperCase);
// console.log(str.toLowerCase);
// let str2 = str.toLowerCase();
// str3 = str2[0].toUpperCase();
// // str2[0].toUpperCase;

// console.log(str);
// console.log(str2);








// str.indexOf(substr, pos)  если нет то выдает -1
// str.includes(substr, pos) ---> отдает true или false
// str.startWith(substr)
// str.endsWith(substr)

// let str = ("My name is Boba, username : Qwerty");
// console.log(str.indexOf("name", 0));
// console.log(str.includes("name"));
// console.log(str.lastIndexOf("name"));
// console.log(str.startsWith("My"));
// console.log(str.endsWith("name"));

// str.slice (start, [end]) от старт до энд, но не включая; может включать отрицательные значения
// substring (start, [end]) между старт  и энд
// substr (start, length) старт и длинна на сколько

let str = ("Mynameis Boba, username : Qwerty");
console.log(str.slice(0, 5));
console.log(str.substring(2, 6));
console.log(str.substr(2, 6));
// отрицательные
console.log(str.slice(-4,-1));
console.log(str.substr(-6, 4));
// let str2 = str.trim()
// console.log(str[0]);
// console.log(str2);
// console.log(str2.repeat(2));
console.log(str)

// function str3(str){

   
//     let rrr = str.toLowerCase();
//     console.log(rrr);
//     return rrr.includes("xxx");

//     // if (str.includes("xXx")){
//     //     console.log(str);
//     // }else if(str.includes("xxx")){
//     //     return 'True';
//     //     console.log(str);
//     // }else if(str.includes("Xxx")){
//     //     return 'True';
//     // }
// }

// console.log(str3('qweqwjejqw xxX'));
// console.log(str3("qweqwe"));


// function ret(str, maxLenght){
//     return (str.length > maxLenght) ? str.slice(0, maxLenght - 1) + '...' : str

// }
// console.log(ret('qweqwqwdadsad', 5));


// let str = (" My name is Boba, username : Qwerty, name");
// let target = 'name';

// let pos = 0;
// while(true){
//     console.log('Pos', pos)
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1)break;
//     console.log('foundPos', foundPos)
//     pos = foundPos + 1;
// }


// console.log('a' > 'A');
// console.log('a'.codePointAt(0));
// console.log('A'.codePointAt(0));

// 'a'.localeCompare('A');
// negative str < str2;
// positive str < str2;



// let mF = (str) => {
//     let loW = str.toLowerCase();
//     return loW.includes("xxx");
// }
// console.log(mF('asdasd Xxx'));



// let ggg = (age) => console.log((age > 18) ? true : false);
// ggg(19)


