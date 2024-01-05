const storedFirstname = localStorage.getItem('firstname');
const storedLastname = localStorage.getItem('lastname');
// if (storedFirstname && storedLastname) {
  document.getElementById('frstnm').textContent = `${storedFirstname}`;
  document.getElementById('lstnm').textContent = `${storedLastname}`;
// }


function addToCart1(){
  let kidsProduct1 = document.getElementById('kids-product1').value;

  kidsProduct1 = false;

  sessionStorage.setItem('kidsProduct1', true)
}

function addToCart2(){
  let kidsProduct2 = document.getElementById('kids-product2').value;

  kidsProduct2 = false;

  sessionStorage.setItem('kidsProduct2', true)
}

function addToCart3(){
  let kidsProduct3 = document.getElementById('kids-product3').value;

  kidsProduct3 = false;

  sessionStorage.setItem('kidsProduct3', true)
}
function addToCart4(){
  let kidsProduct4 = document.getElementById('kids-product4').value;

  kidsProduct4 = false;

  sessionStorage.setItem('kidsProduct4', true)
}

function addToCart5(){
  let kidsProduct5 = document.getElementById('kids-product5').value;

  kidsProduct5 = false;

  sessionStorage.setItem('kidsProduct5', true)
}

function addToCart6(){
  let kidsProduct6 = document.getElementById('kids-product6').value;

  kidsProduct6 = false;

  sessionStorage.setItem('kidsProduct6', true)
}
function addToCart7(){
  let kidsProduct7 = document.getElementById('kids-product7').value;

  kidsProduct7 = false;

  sessionStorage.setItem('kidsProduct7', true)
}