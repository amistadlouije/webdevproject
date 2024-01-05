const storedFirstname = localStorage.getItem('firstname');
const storedLastname = localStorage.getItem('lastname');
// if (storedFirstname && storedLastname) {
  document.getElementById('frstnm').textContent = `${storedFirstname}`;
  document.getElementById('lstnm').textContent = `${storedLastname}`;
// }


const storedProduct1 = sessionStorage.getItem('mensProduct1');
const storedProduct2 = sessionStorage.getItem('mensProduct2');
const storedProduct3 = sessionStorage.getItem('mensProduct3');
const storedProduct4 = sessionStorage.getItem('mensProduct4');
const storedProduct5 = sessionStorage.getItem('mensProduct5');
const storedProduct6 = sessionStorage.getItem('mensProduct6');
const storedProduct7 = sessionStorage.getItem('mensProduct7');
const storedProduct8 = sessionStorage.getItem('mensProduct8');
const storedProduct9 = sessionStorage.getItem('mensProduct9');

const storedProduct10 = sessionStorage.getItem('womensProduct1');
const storedProduct11 = sessionStorage.getItem('womensProduct2');
const storedProduct12 = sessionStorage.getItem('womensProduct3');
const storedProduct13 = sessionStorage.getItem('womensProduct4');
const storedProduct14 = sessionStorage.getItem('womensProduct5');
const storedProduct15 = sessionStorage.getItem('womensProduct6');
const storedProduct16 = sessionStorage.getItem('womensProduct7');
const storedProduct17 = sessionStorage.getItem('womensProduct8');
const storedProduct18 = sessionStorage.getItem('womensProduct9');

const storedProduct19 = sessionStorage.getItem('kidsProduct1');
const storedProduct20 = sessionStorage.getItem('kidsProduct2');
const storedProduct21 = sessionStorage.getItem('kidsProduct3');
const storedProduct22 = sessionStorage.getItem('kidsProduct4');
const storedProduct23 = sessionStorage.getItem('kidsProduct5');
const storedProduct24 = sessionStorage.getItem('kidsProduct6');
const storedProduct25 = sessionStorage.getItem('kidsProduct7');



if(storedProduct1){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.digi-shop.co.za/cdn/shop/products/image_7888e71e-bce3-4bd8-89a0-f7bc34e83b02.png?v=1682318156"><p>Nike Air Mag "Back To The Future"</p><p><span>Size:</span>US 9.5</p><p> ₱132,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct2){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/CW4555-013_720x.jpg?v=1699954727"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct3){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/373309-05_720x.jpg?v=1632905725"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct4){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/FB9658-200_720x.jpg?v=1701418157"><p>Nike Air Mag "Back To The Future"</p><p><span>Size:</span>US 9.5</p><p> ₱132,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct5){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/FV1807-807_720x.jpg?v=1630912450"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct6){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/A04330C-30C_720x.jpg?v=1674626107"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct7){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/VN0000SBWGR_720x.jpg?v=1670318893"><p>Nike Air Mag "Back To The Future"</p><p><span>Size:</span>US 9.5</p><p> ₱132,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct8){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://laced.imgix.net/products/659ae4f5-af19-4bda-860a-4516e2e5ab3b.jpg?auto=format&fit=crop&w=824"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct9){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GZ9258-258_720x.jpg?v=1635832241"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}

if(storedProduct10){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/DJ0292-101_720x.jpg?v=1663062094"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}

if(storedProduct11){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GV8719-719_720x.jpg?v=1664769611"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct12){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/DM7590-104_ac047e82-beca-4646-b7c0-b53982765d74_720x.jpg?v=1699954746"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct13){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/CW4554-201_720x.jpg?v=1694766304"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct14){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GV9542-542_720x.jpg?v=1664769614"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct15){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src=https://www.capital.com.ph/cdn/shop/products/CZ1055-118_720x.jpg?v=1665125145"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct16){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/CW4555-013_720x.jpg?v=1699954727"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct17){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/BBW550FB-301B_720x.jpg?v=1686906007"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct18){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/393140-01_720x.jpg?v=1693467212"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}

if(storedProduct19){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GY9211-211_720x.jpg?v=1662712013"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct20){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/EF6663-663_720x.jpg?v=1651476945"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct21){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GV8988-988_720x.jpg?v=1667544592"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct22){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.capital.com.ph/cdn/shop/products/GY9212-212_720x.jpg?v=1662712015"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct23){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://i.pinimg.com/originals/01/85/ac/0185aca6e9d009de77572e49dec4dc40.png"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct24){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://www.annameglio.com/img/schede/35810-burberry_sneakers_check_unisex_bimbo-5.jpg"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}
if(storedProduct25){
  const myCart = document.getElementById("my-cart");

  let mainDiv = document.createElement("div");

  mainDiv.classList.add("main")
  mainDiv.innerHTML = '<div class="cart-products"><img src="https://images.journeys.com/images/products/1_702504_FS_ALT1.JPG"><p>Nike Air MAX SC</p><p><span>Size:</span>US 9.5</p><p> ₱3,000</p>'

  myCart.appendChild(mainDiv);
}