// // Задание 1
// обьявляю переменную и задаю ей значение, которое введет пользователь
let userNumber = +prompt("Задание 1. Введите число", "");
// создал пустой масив
let mass = [];
// создал дополнительную переменную
let container;
// задал переменной container значение userNumber, тоесть container будет иметь число которое введет ползователь.
// Пока container больше или равен нулю производить такую операцию (container = container - 1)
for (let container = userNumber; container >= 0; container--){
// в кажддом цикле пока container не будет равен 0 я добавляю в массив значение с помощью unshift.
// это значение будет равнятся -container
    mass.unshift(-container);
    console.log (container);
}
// с помощью alert вывожу содержимое массива на экран браузера
console.log (mass);
alert(mass);


// // // Задача 2

// также как и в первой задаче задаю переменную quest2 которая будет равна введеному пользователем числу
let quest2 = +prompt("Задание 2. Введите число");
// создаю пустой масив с которым дальше буду работать
let mass2 = [];
// while -выполнять операцию до тех пор пока quest2 не равняется null или quest2 не равняется пустой строке ""
// или длинна масива mass2.length не равняется 10. Например в случае когда длинна массива станет 10, то while остановится
while (quest2 != null && quest2 != "" && mass2.length != 10){
    // в каждом цикле пока работает while добавляю в массив число которое вводит пользователь
    mass2.push(quest2);
    // в конце каждого цикла с помощью prompt выдаю еще одно окошко с полем ввода числа, чтобы дальше заполнять массив, пока его длинна не будет равна 10
    quest2 = +prompt("Введите число");
}

// в дальнейших вычислениях я буду ссылатся на массив mass2 который будет уже содержать в себе до 10 введенный пользователем чисел
// он будит выглядить например вот так: mass2 = [1,3,6,20,3,7,8,5,1,0] смотря какие числа введет пользователь

// задаю переменную leg и даю ей значение равное длинне массива mass2
// задаю переменню theAmount в которую я буду класть сумму чисел и выводить на экран
// задаю дополнительную переменню helper для помощи в вычислениях далее
let leg = mass2.length;
let theAmount = 0;
let helper = 0;
// задаю цикл for в котором задаю локальную переменную i=0. Пока i меньше leg (длинны масива mass2) проводим операцию i = i + 1
for (i = 0; i < leg; i++){
// задаю переменной helper значение рамное mass2[i] то есть каждый цикл значение i будет менятся от 0 до 10
// таким образом на первом цикле будет так helper = mass2[0], что означает что мы обращаемся к первому числу массива mass2,
// например если у нас в массиве будут эти числа mass2 = [1,3,6,20,3,7,8,5,1,0] то mass2[0] это обращщение к цифре 1, первой в массиве
// второй цикл будет таким helper = mass2[1]; это обращение к цифре 3
// третий таким helper = mass2[2]; это обращение к цифре 6 и тд.

// В итоге с помощью for  я переберу все числа которые ввел пользователь в массив mass2 и с этими числаами я провожу вычисления

    helper = mass2[i];
    if (helper >= 0){
        // если helper больше или равен 0 то я произвожу сумму
        // переменная theAmount на данный момент равна 0 к ней я прибавляю helper
        theAmount =  theAmount + helper;
        // в итоге если масив для примера у меня будет таким mass2 = [1,3,6,20,3,7,8,5,1,0]
        // то в первом цикле это будет выглядет так: theAmount =  0 + 1;
        // во втором вот так theAmount =  1 + 3;
        // третьем так: theAmount =  4 + 6;
    }
    // Итого с помощью for я перебираю масив а helper задаю число из масива и приплюсовую это число
    // к theAmount каждый цикл. В конце концов theAmount накапливает в себе все числа массива mass2
}

alert(`Сумма ${theAmount}`);
// c помощью alert вывожу на экран сумму

// в дальнейших вычислениях разности деления и умножения я также использовал mass2
// вот код как я высчитывал среднее значение
let average = 0;
for (i = 0; i < leg; i++){
    helper = mass2[i];
    if (helper != NaN){
        average = average + helper;
        
    }
}
// я просто также высчитал сумму чисел и вконце в alert разделил на количество этих чисел, тоесть на длинну масива
alert(`Cреднее ${(average) / leg}`);