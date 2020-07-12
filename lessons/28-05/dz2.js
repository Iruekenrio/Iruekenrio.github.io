// задача 1
// решение 1 (личное)
let arr = ['one', 'two', 'one', 'three', 'one', 'two', 'four', 'five',]

let myFunc = (arr) => {
    let newArr = [];
    arr.filter(function (a){
        if (!newArr[a]){
            newArr[a] = 1;
        }
    })

    return newArr;
}


// решение 2 (более подходящее из тырнета)
console.log(myFunc(arr));

function onlyUnique(current, index, arr) { 
    return arr.indexOf(current) === index;
}

var a = ['a', 'asd', 'a', 'asd', '1'];
var unique = a.filter( onlyUnique );
console.log(unique);

// задача 2/3
let user1 = {
	name: "Boba",
	age: 23,
	isAdmin: true
}

let user2 = {
	name: "Ivan",
	age: 28,
	isAdmin: false
}
let user3 = {
	name: "Mary",
	age: 20,
	isAdmin: true
}

let arr2 = [user1 , user2, user3];


let ager = function(arrr){
        // let summAge = 0;
        let summAge = arrr.reduce(function(prevV, item){
           prevV += item.age;
           console.log(prevV)
           return prevV;
            
            console.log(item.age)
            
        },0)
        // console.log(summAge)
        // for(let i = 0; i < arr.length; i++){
        //     summAge = summAge + arr[i].age;
        // }
        
    
    return Math.round(summAge / arrr.length);
      
    }

console.log("Средний возраст", ager(arr2));

let admins = function(arr){
    let adm = [];
    arr.filter(function(item){
       item.isAdmin == true ? adm.push(item.name) : adm;   
    })
    return adm;
}
console.log("Admins", admins(arr2));



// задача 4
let tom = process.argv[2];
// console.log(tom);
let strFun = function(string){
    let arr3 = [];    
    for(let i = 0; i < string.length; i++){
        
        if(!string[i] + string[i + 1] % 2 == 1){
            arr3.push(string[i] + ':')
        } else arr3.push(string[i])
    }
    let j = arr3.join('')
    return j;
    
}
console.log(strFun(tom));