let heroes = [
    {
        id: 1,
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description: 'he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton"s destruction...',
        superpowers: '​solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...',
        catch_phrase: 'Look, up in the sky, it\'s a bird, it\'s a plane, it\'s Superman!',
        images: ['https://img.pngio.com/superman-png-images-free-download-super-man-png-489_693.png',
        'https://toppng.com/uploads/preview/superman-png-11553961752ksjxpsmr87.png',
        'https://img.pngio.com/download-free-png-image-superman-one-million-dc-comicspng-superman-comic-png-868_1278.png',
        'https://cdn.onebauer.media/one/empire-tmdb/films/1924/images/nS0rEXPbkHI449SF6R4WUQvTVxE.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
        'https://img.cinemablend.com/filter:scale/quill/4/d/e/b/2/d/4deb2de33a1cf426c743aaeb91b2012cf6dcfd11.jpg?mw=600']
    },
    {
        id: 2,
        nickname: 'Batman',
        real_name: 'Bruce Wayne',
        origin_description: 'Batman\'s secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. Batman originated from an incident in Bruce\'s childhood',
        superpowers: 'Super Strength And Durability Via Super Pills, X-RAY VISION, FLIGHT, SUPERHUMAN AGILITY',
        catch_phrase: 'GDE DETONATOR!!1!',
        images: ['https://www.pngkit.com/png/full/2-26259_batman-dc-batman-returns-hot-toys-deluxe-action.png',
        'https://www.uokpl.rs/fpng/d/1-17499_christian-bale-batman.png',
        'https://www.pngkit.com/png/detail/83-837702_batman-collectible-stickers-album-batman-the-dark-knight.png',
        'https://www.vhv.rs/dpng/d/222-2229694_batman-png-dark-knight-transparent-png.png',
        'https://i.pinimg.com/originals/2d/ec/90/2dec901d38abb334e3de0b5cd043cdba.png']
    },
    {
        id: 3,
        nickname: 'Spiderman',
        real_name: 'Peter Parker',
        origin_description: 'Spider-Man has had a large range of supporting characters introduced in the comics that are essential in the issues and storylines that star him. After his parents died, Peter Parker was raised by his loving aunt, May Parker, and his uncle and father figure, Ben Parker. After Uncle Ben is murdered by a burglar, Aunt May is virtually Peter\'s only family, and she and Peter are very close.',
        superpowers: 'Genius intellect, Proficient scientist and inventor, Superhuman strength, speed, durability, agility, stamina, reflexes/reactions, coordination, balance and endurance.',
        catch_phrase: 'This is my gift, my curse. Who am I? I\'m Spiderman',
        images: ['https://www.clipartmax.com/png/middle/4-46731_spiderman-clipart-free-spiderman-png.png',
        'https://library.kissclipart.com/20180903/erw/kissclipart-spiderman-png-clipart-spider-man-clip-art-2d410e603d3eca69.jpg',
        'https://i.pinimg.com/originals/56/91/ce/5691ceb43198d6b9a1c699e7d721c868.jpg',
        'https://www.nicepng.com/png/detail/969-9695041_free-png-download-spiderman-clipart-png-photo-png.png',
        'https://wrhsstampede.com/wp-content/uploads/2018/09/2871C414-4FD6-4498-8F19-288F55E54C70.png']
    },
    {
        id: 4,
        nickname: 'Hulk',
        real_name: 'Bruce Banner',
        origin_description: 'The original Hulk was shown as grey and average in intelligence who roamed aimlessly and became annoyed at "puny" humans who took him for a dangerous monster',
        superpowers: '​Incredible superhuman strength, durability, and healing factor, Becomes more powerful as anger increases.',
        catch_phrase: 'Don\'t make me angry.',
        images: ['https://www.imgworlds.com/wp-content/themes/IMG2019/img/phase3/welcome/hulk.png',
        'https://vignette.wikia.nocookie.net/monster/images/1/15/The-HUlk-artwork915.jpg/revision/latest?cb=20170523184003',
        'https://clipartstation.com/wp-content/uploads/2017/11/hulk-clipart-1.jpg',
        'https://pngimage.net/wp-content/uploads/2018/06/hulk-vetor-png-4.png',
        'https://w0.pngwave.com/png/117/808/hulk-png-clip-art.png']
    },
    {
        id: 5,
        nickname: 'Ironman',
        real_name: 'Tony Stark',
        origin_description: 'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping.',
        superpowers: 'Powered armor suit: Superhuman strength and durability (when using his armor) Supersonic flight. Energy repulsor and missile projection. Regenerative life support.',
        catch_phrase: 'Genius, billionaire, playboy, philanthropist',
        images: ['https://img.pngio.com/iron-man-comic-png-110-images-in-collection-page-1-iron-man-comic-png-500_750.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTthGhGiDByUfMAdOSiTD79VlECmPewdWkonuOVahZVDg&usqp=CAU&ec=45699843',
        'https://www.seekpng.com/png/detail/3-34747_comics-iron-man-png.png',
        'https://i.pinimg.com/originals/fb/da/46/fbda462174ab55067f8acd597ea85351.jpg',
        'https://playsector.ru/images/img/2020/05/13/playsectorru_20200513124422.jpg']
    },
    // {
    //     id: 6,
    //     nickname: 'AFHASJAFJ',
    //     real_name: 'Tony Stark',
    //     origin_description: 'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping.',
    //     superpowers: 'Powered armor suit: Superhuman strength and durability (when using his armor) Supersonic flight. Energy repulsor and missile projection. Regenerative life support.',
    //     catch_phrase: 'Genius, billionaire, playboy, philanthropist',
    //     images: ['https://img.pngio.com/iron-man-comic-png-110-images-in-collection-page-1-iron-man-comic-png-500_750.jpg',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTthGhGiDByUfMAdOSiTD79VlECmPewdWkonuOVahZVDg&usqp=CAU&ec=45699843',
    //     'https://www.seekpng.com/png/detail/3-34747_comics-iron-man-png.png',
    //     'https://i.pinimg.com/originals/fb/da/46/fbda462174ab55067f8acd597ea85351.jpg',
    //     'https://playsector.ru/images/img/2020/05/13/playsectorru_20200513124422.jpg']
    // }
]

let showHero = document.querySelector('.showHero')

step = 5;

function heroList(item) {
    console.log(item)
    for (let i = step - 5; i < step; i++) {
        if (item[i]) {
            let heroItems = document.createElement('div')
            heroItems.classList.add('hero')
            let img = document.createElement('img')
            heroItems.append(img)
            heroItems.innerHTML = `<p class="heroName">${item[i].nickname}</p>
            <img src="${item[i].images[0]}" alt="" data-id="${item[i].id}">`
            showHero.append(heroItems)
            // console.log(item[i].id)
        }
            
    }
}
heroList(heroes)

let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')

nextBtn.addEventListener('click', function () {
    // console.log(heroes.length)
    // console.log(step)
    // console.log()
    if (heroes.length > step) {
        step += 5
        showHero.innerHTML = ''
        heroList(heroes)

    }
    
})
prevBtn.addEventListener('click', function () {
    if (step !== 5) {
        step -= 5
        showHero.innerHTML = ''
        heroList(heroes)

    }    
})

// more about hero

let infoAboutHero = document.querySelector('.info')
let heror = document.querySelectorAll('.hero')
// console.log(hero)
function shoeHeroList() {
    if (heror.length > 1) {
        function rr() {
            return document.querySelectorAll('.hero')
        }
        let hero = rr()
        showHero.addEventListener('click', function (ev) {
            // ev.preventDefault()
            let heroId = ev.target.getAttribute('data-id')
            let neededObj
            
            console.log(heroId)
            console.log(hero.length)
            console.log(hero)
    
            for (let i = 0; i < heroes.length; i++) {
                if (heroId == heroes[i].id) {
                    console.log(heroes[i].id)
                    console.log(heroes[i])
                    neededObj = heroes[i]
                }    
            }
            console.log(neededObj)
            setCurrentIdUl(neededObj.id - 1)
            // console.log(hero.length)
            // console.log(neededObj)
            let imgBlock = document.createElement('div')
            imgBlock.setAttribute("data-id", `${neededObj.id - 1}`)
            imgBlock.classList.add('imageToDrag')
            for (let i = 0; i < neededObj.images.length; i++) {
                let img = document.createElement('img')
                img.src = neededObj.images[i]
                imgBlock.append(img)
            }
            console.log(imgBlock, 'hihihihiih')
            // neededObj.images
            // console.log(neededObj)
            // // console.log(ev.target.getAttribute('data-id'))
            infoAboutHero.innerHTML = `
            <div>NICKNAME:</div>
            <li data-id="0"> ${neededObj.nickname} <button  data-id="0" class="editBtn">edit</button></li>
            <div>REAL NAME:</div>
            <li data-id="1"> ${neededObj.real_name} <button  data-id="1" class="editBtn">edit</button></li>
            <div>ORIGIN DESCRIPTION:</div>
            <li data-id="2"> ${neededObj.origin_description} <button data-id="2" class="editBtn">edit</button></li>
            <div>SUPERPOWERS:</div>
            <li data-id="3"> ${neededObj.superpowers} <button data-id="3" class="editBtn">edit</button></li>
            <div>CATCH PHRASE:</div>
            <li data-id="4"> ${neededObj.catch_phrase} <button  data-id="4" class="editBtn">edit</button></li>
            <label for="addImg">Insert url to add a picture and press enter</label>
            <input type="text" id="addImg"></input>
            
            
            `
            // <h2>DELETE HERO</h2>
            // <button class="deleteBtn">DELETE</button>
            let deleteArea = document.createElement('div')
            deleteArea.classList.add('deleteArea')
            deleteArea.innerHTML = '<p>Drop image here to delete</p>'
    
            infoAboutHero.append(deleteArea)
            infoAboutHero.append(imgBlock)
            console.log(ev.target)
            dragDeleter(imgBlock)
            addImg(neededObj.id - 1, imgBlock)
            // console.log(heroes[3].images)
            listEdit()
            // deleteHero()
        })
    }
}
shoeHeroList()

let draggedItem
function dragDeleter(imgBlock) {
    let deleteItems = imgBlock.querySelectorAll('img')
    let deleteArea = document.querySelector('.deleteArea')
    // console.log(imgBlock.getAttribute('data-id'), 'target')
    deleteArea.addEventListener('dragover', function (ev) {
        ev.preventDefault()
    })
    console.log(deleteItems[0])
    deleteArea.addEventListener('drop', function (ev) {
        dataId = imgBlock.getAttribute('data-id')
        // heroes[dataId].images = []
        console.log(draggedItem)
        // addDragToImages()
        if(draggedItem) {
            draggedItem.remove()
        }
        deleteItems = imgBlock.querySelectorAll('img')
        rerightArray(deleteItems, dataId)
    })
    // console.log(heroes[3].images)
    // let draggedItem
    function addDragToImages() {
        for (let i = 0; i < deleteItems.length; i++) {
            deleteItems[i].addEventListener("dragstart", function(event) {
                draggedItem = event.target
                console.log(' STARRRRT')
            })
            deleteItems[i].addEventListener("dragend", function(event) {
                draggedItem = undefined
                // console.log(draggedItem)
            })
        }
    }
    addDragToImages()    
}

function rerightArray(arrToAdd, id) {
    heroes[id].images = []
    // console.log(arrToAdd)
    for (let i = 0; i < arrToAdd.length; i++) {
        heroes[dataId].images.push(arrToAdd[i].src)  
          
    }
}
function addImg(id, imBlock) {
    let addInput = document.getElementById('addImg')
    console.log(addInput)
    addInput.addEventListener('keypress', function (ev) {
        if(ev.key === 'Enter') {
            let reg = /http/
            if(ev.target.value.match(reg)) {
                heroes[id].images.push(ev.target.value)
                let img = document.createElement('img')
                img.src = ev.target.value
                // img.addEventListener('')
                document.querySelector('.imageToDrag').append(img)
                ev.target.value = ""
                // console.log('enterrr', heroes[id])
                // console.log(heroes[id].images)
                dragDeleter(imBlock)
            }
            
        }
        
    })
}

function listEdit() {
    let editBtn = document.querySelectorAll('.editBtn')
    // let li = document.querySelectorAll('li')
    // let input = document.createElement('input')
    console.log(editBtn)
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', function() {
            editBtn[i].closest("li").innerHTML = `
            <input type="text" class="inputForEdit" data-id="${editBtn[i].getAttribute("data-id")}">`
            let inputForEdit = document.querySelectorAll('.inputForEdit')
            console.log(inputForEdit)
            for (let y = 0; y < inputForEdit.length; y++) {
                inputForEdit[y].addEventListener('keypress', function (ev) {
                    if(ev.key === 'Enter') {
                        let targetDataId = ev.target.getAttribute('data-id')
                        ev.target.closest('li').innerHTML = `
                        ${ev.target.value} <button data-id="${targetDataId}" class="editBtn">edit</button>`
                        console.log(targetDataId)
                        if(targetDataId == 0) {
                            let ulDataId = infoAboutHero.getAttribute('data-id')
                            heroes[ulDataId].nickname = `${ev.target.value}`
                        } else if(targetDataId == 1) {
                            let ulDataId = infoAboutHero.getAttribute('data-id')
                            heroes[ulDataId].real_name = `${ev.target.value}`
                        }  else if(targetDataId == 2) {
                            let ulDataId = infoAboutHero.getAttribute('data-id')
                            heroes[ulDataId].origin_description = `${ev.target.value}`
                        }  else if(targetDataId == 3) {
                            let ulDataId = infoAboutHero.getAttribute('data-id')
                            heroes[ulDataId].superpowers = `${ev.target.value}`
                        }  else if(targetDataId == 4) {
                            let ulDataId = infoAboutHero.getAttribute('data-id')
                            heroes[ulDataId].catch_phrase = `${ev.target.value}`
                        } 
                        console.log(heroes)
                        listEdit()
                    }
                })
            }
            console.log(editBtn[i].closest("li"))
        })
        
    }
}



function setCurrentIdUl(objId) {
    infoAboutHero.setAttribute('data-id', `${objId}`)
}



function addNewHero() {

    let reg = /http/
    let regForText = /.{1,}/gm
    let btn = document.querySelector('.btn')
    let nickname = document.querySelector('#nickname')
    let realName = document.querySelector('#real_name')
    let originDescription = document.querySelector('#origin_description')
    let superpowers = document.querySelector('#super_powers')
    let cathPhrase = document.querySelector('#catch_ghrase')
    let image = document.querySelector('#images')
    console.log(btn)
    btn.addEventListener('click', function (ev) {
        ev.preventDefault()
        console.log(nickname.value.match(regForText))
        console.log(cathPhrase)
        // console.log(heroes[heroes.length])
        if(nickname.value.match(regForText) && realName.value.match(regForText) && originDescription.value.match(regForText) && superpowers.value.match(regForText) && cathPhrase.value.match(regForText) && image.value.match(reg)) {
            heroes[heroes.length] = {
                id: heroes.length + 1,
                nickname: nickname.value,
                real_name: realName.value,
                origin_description: originDescription.value,
                superpowers: superpowers.value,
                catch_phrase: cathPhrase.value,
                images: [image.value]
            }
            let hero = document.querySelectorAll('.hero')
            console.log(hero.length)
            console.log(heroes[heroes.length])            
            if (hero.length < 5) {
                let heroItems = document.createElement('div')
                heroItems.classList.add('hero')
                let img = document.createElement('img')
                heroItems.append(img)
                heroItems.innerHTML = `<p class="heroName">${heroes[heroes.length-1].nickname}</p>
                <img src="${heroes[heroes.length-1].images[0]}" alt="" data-id="${heroes.length}">`
                showHero.append(heroItems)
            }    
        }
        
    })
    
}
addNewHero()

// function deleteHero() {
//     let deleteId = infoAboutHero.getAttribute('data-id')
//     console.log(deleteId)
//     let heroToDelete = document.querySelector('.deleteBtn')
//     heroToDelete.addEventListener('click', function () {
        
//         console.log(deleteId)
//         for (let i = 0; i < heroes.length; i++) {
//             console.log(deleteId)
//             console.log(heroes[i].id)
//             if(heroes[i].id == deleteId+1) {
//                 heroes.splice(i, 1)
//                 console.log(heroes)
//             }
            
//         }
//         // heroes.forEach((item, index) => {
//         //     console.log(item.id)
//         //     // console.log(heroes[deleteId])
//         //     if(item.id == heroes[deleteId].id) {
//         //         console.log(index)
//         //         console.log(heroes[deleteId].id)
//         //         heroes.splice(deleteId,1)
//         //         // console.log(heroes[index])
//         //     }
//         // });
//         // .splice(index, 1)
//         console.log(heroes)
//         // infoAboutHero
//     })
// }

