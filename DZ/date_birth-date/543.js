   
    document.querySelector('button').addEventListener('click', function (ev){
        let userAge = document.getElementsByName('childs_age')[0].value * 1;
        let userDate = document.getElementsByName('birth_date')[0].value
        let userMseconds = new Date(userDate).getTime()
        var nowMseconds = new Date().getTime();
        let sumAge = -(userMseconds - nowMseconds) / (3600 * 24 * 1000 * 365);
        // console.log(sumAge)
        let dateToCheck = new Date().getFullYear()
        // console.log(dateToCheck)
        let oneDay = (1000 * 3600 * 24) / (3600 * 24 * 1000 * 365);
        // console.log(oneDay)
        if((dateToCheck % 400 == 0 || dateToCheck % 4 == 0) && dateToCheck % 100 !== 0){
            console.log('test')
            sumAge -= oneDay;
            // console.log(sumAge)
            if ( userAge > sumAge){
                alert('Несоответствие Child age больше чем Date of birth')
                ev.preventDefault()
            } else if (userAge < Math.round(sumAge)){
                alert (' Несоответствие Child age меньше чем Date of birth')
                ev.preventDefault()
            } else if (!userDate || !userAge) {
                alert ('Введите все данные')
                ev.preventDefault()
            }
        }
        if((dateToCheck || dateToCheck % 100 == 0) && dateToCheck % 400 !== 0 && dateToCheck % 4 !== 0){
            if ( userAge > sumAge){
                alert('Несоответствие Child age больше чем Date of birth')
                ev.preventDefault()
            } else if (userAge < Math.round(sumAge)){
                alert (' Несоответствие Child age меньше чем Date of birth')
                ev.preventDefault()
            } else if (!userDate || !userAge) {
                alert ('Введите все данные')
                ev.preventDefault()
            }
            // console.log('test 100')
        }
        
        // if ( userAge > sumAge){
        //     alert('Несоответствие Child age больше чем Date of birth')
        //     ev.preventDefault()
        //     console.log('AA')
        // } else if (userAge < Math.round(sumAge)){
        //     alert (' Несоответствие Child age меньше чем Date of birth')
        //     ev.preventDefault()
        // } else if (!userDate || !userAge) {
        //     alert ('Введите все данные')
        //     ev.preventDefault()
        // }
        // console.log(userAge - sumAge)
    })

    // let rr = 2016
    // let tt = new Date().getFullYear()
    // // console.log(tt)

    // if((rr % 400 == 0 || rr % 4 == 0) && rr % 100 !== 0){
    //     console.log('test')  
    // }
    // if((rr || rr % 100 == 0) && rr % 400 !== 0 && rr % 4 !== 0){
    //     console.log('test 100')
    // }
    // введи текущую дату  отними год и прибавь 1 день, форма отправится, но не должна ткк юзеру не исполнился полный год
    // в полу child age введи 1

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
