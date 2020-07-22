   
    document.querySelector('button').addEventListener('click', function (ev){
        let userAge = document.getElementsByName('childs_age')[0].value * 1;
        let userDate = document.getElementsByName('birth_date')[0].value
        console.log(userAge)
        console.log(userDate)
        let userMseconds = new Date(userDate).getTime()
        // console.log(userMseconds)
        var nowMseconds = new Date().getTime();
        // console.log(nowMseconds)
        let sumAge = -(userMseconds - nowMseconds) / (3600 * 24 * 1000 * 365);
        console.log(sumAge)
        if ( userAge > sumAge){
            alert('Несоответствие Child age больше чем Date of birth')
            ev.preventDefault()
            console.log('AA')
        } else if (userAge < Math.round(sumAge)){
            alert (' Несоответствие Child age меньше чем Date of birth')
            ev.preventDefault()
        } else if (!userDate || !userAge) {
            alert ('Введите все данные')
            ev.preventDefault()
        }
        console.log(userAge - sumAge)
    })



    // console.log(new Date(2015, 1, 29))
    // console.log(new Date(2020, 1, 29))
    

    // var now = new Date();
    // console.log(now)
    // console.log(Date.parse(now))
    // // console.log(now.getMilliseconds(1995, 05, 17))
    // const currentDate = now.getTime()
    // console.log(currentDate)
    // console.log(currentDate / (3600 * 24 * 1000 * 365))
    
    // let rrr = currentDate / (3600 * 24 * 1000 * 365)
    // console.log(currentDate)

    // let ja = currentDate.toString('yyyy MM dd');
    // console.log(ja)

    // ДЗ
    // сравнить соответствие вводимого возраста и даты рождения, если не совпадают то алерт
    
    // let userDate = document.querySelector('')
