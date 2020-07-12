// запасная ссылка на картинку
const defaultImg =
  "https://cdn2.iconfinder.com/data/icons/device-smart-phone/100/device-mobile-unknown-512.png";


  // генерируем рандом число и буквы
  
function generateUniqueId() {
  const random = Math.ceil(Math.random() * 1000000).toString(36);
  const currentTime = Date.now().toString(36);
  return random + currentTime;
}


const buyDevicesObject = localStorage.getItem("buyDevicesObject")
  ? JSON.parse(localStorage.getItem("buyDevicesObject"))
  : {};
// JSON.parse(localStorage.getItem("buyDevicesObject"))
const buyDevices = Object.keys(buyDevicesObject);
buyCounter.innerText = buyDevices.reduce(
  (x, key) => x + buyDevicesObject[key],
  0
);

console.log(buyDevicesObject[564])
// console.log(Object.keys(buyDevicesObject))

// объект с данными 

const phones = [
  {
    name: "phone001",
    price: (Math.random() * 10).toFixed(2),
    url: "https://static.thenounproject.com/png/56382-200.png",
    // id: generateUniqueId()
    id: 564
  },
  {
    name: "phone2",
    price: (Math.random() * 10).toFixed(2),
    url: "https://static.thenounproject.com/png/65780-200.png",
    // id: generateUniqueId()
    id: 586
  },
  {
    name: "phone41",
    price: (Math.random() * 10).toFixed(2),
    id: 6457
    // id: generateUniqueId()
  },
  {
    name: "phone511",
    price: (Math.random() * 10).toFixed(2),
    id: 5402
    // id: generateUniqueId()
  },
  {
    name: "phone23",
    price: (Math.random() * 10).toFixed(2),
    url: "https://static.thenounproject.com/png/4894-200.png",
    id: 234
    // id: generateUniqueId()
  },
  {
    name: "phone12",
    price: (Math.random() * 10).toFixed(2),
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVLsLFzq9hS1yoINQPXazgRRuOvS3NRPDgMV2zGo1bjuLU36r",
    id: 654
    // id: generateUniqueId()
  }
];

// находим блок .phone-list в который закидаем карточки
const list = document.querySelector(".phone-list");
let cards = "";
// перебираем объект phones и закидываем в переменную let cards = "" в виде строки
phones.forEach(e => {
  cards += `
  <div class="phone-card">
    <img src="${e.url ? e.url : defaultImg}" alt="icon">
    <h3>${e.name}</h3>
    <button data-id='${e.id}' onclick="addToCart('${e.id}')">Buy: $${e.price}</button>
  </div>`;
});
list.innerHTML = cards;





function addToCart(id){
  console.log(id)

  const button = document.querySelector(`[data-id="${id}"]`);
  button.setAttribute("disabled", "disabled");
  setTimeout(() => button.removeAttribute("disabled"), 3000);

  // console.log(buyDevicesObject[id])
  if(buyDevicesObject[id]){
    buyDevicesObject[id]++
  }else{
    buyDevicesObject[id] = 1
  }

  const buyDevices = Object.keys(buyDevicesObject);
  buyCounter.innerText = buyDevices.reduce(
    (x, key) => x + buyDevicesObject[key],
    0
);

localStorage.setItem('buyDevicesObject', JSON.stringify(buyDevicesObject))


}

function toggle(e) {

  e.stopPropagation();
  const modal = document.querySelector(".modal-window");

  switch (modal.style.display) {
    case 'flex':
      modal.style.display = 'none';
      break
    case 'none':
      modal.style.display = 'flex';
  }
}

document.querySelector(".modal-window").onclick = toggle;
document.querySelector(".close").onclick = toggle;
document.querySelector(".content").onclick = e => e.stopPropagation();
document.querySelector('.clearButton').onclick = e => e.stopPropagation();
document.querySelector(".cart").onclick = function (event) {
  toggle(event);
}

// localStorage.clear()
