let imges = document.querySelectorAll('.imgFamous')
let shadowWall = document.querySelector('.shadowWall')
console.log()
imges.forEach(function(item){
    item.addEventListener("click", function(){
        let clickedData = item.dataset.id;
        let hiddenBlock = document.querySelector(`.${clickedData}`)
        hiddenBlock.classList.toggle('showed')
        shadowWall.classList.toggle('shadow-active')
        let closeButton = hiddenBlock.querySelector('.close')
        closeButton.addEventListener('click', function(){
            if(document.querySelector('.showed')){
                document.querySelector('.showed').classList.remove('showed')
                shadowWall.classList.remove('shadow-active')
                console.log('test button')
            }
        }) 
    })
})
shadowWall.addEventListener("click", () => {
    if(document.querySelector('.showed')){
        document.querySelector('.showed').classList.remove('showed')
        shadowWall.classList.remove('shadow-active')
    }
})
