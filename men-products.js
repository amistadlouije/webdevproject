const storedFirstname = localStorage.getItem('firstname');
const storedLastname = localStorage.getItem('lastname');
// if (storedFirstname && storedLastname) {
  document.getElementById('frstnm').textContent = `${storedFirstname}`;
  document.getElementById('lstnm').textContent = `${storedLastname}`;
// }


function addToCart1(){
  let mensProduct1 = document.getElementById('mens-product1').value;

  mensProduct1 = false;

  sessionStorage.setItem('mensProduct1', true)
}

function addToCart2(){
  let mensProduct2 = document.getElementById('mens-product2').value;

  mensProduct2 = false;

  sessionStorage.setItem('mensProduct2', true)
}

function addToCart3(){
  let mensProduct3 = document.getElementById('mens-product3').value;

  mensProduct3 = false;

  sessionStorage.setItem('mensProduct3', true)
}
function addToCart4(){
  let mensProduct4 = document.getElementById('mens-product4').value;

  mensProduct4 = false;

  sessionStorage.setItem('mensProduct4', true)
}

function addToCart5(){
  let mensProduct5 = document.getElementById('mens-product5').value;

  mensProduct5 = false;

  sessionStorage.setItem('mensProduct5', true)
}

function addToCart6(){
  let mensProduct6 = document.getElementById('mens-product6').value;

  mensProduct6 = false;

  sessionStorage.setItem('mensProduct6', true)
}
function addToCart7(){
  let mensProduct7 = document.getElementById('mens-product7').value;

  mensProduct7 = false;

  sessionStorage.setItem('mensProduct7', true)
}

function addToCart8(){
  let mensProduct8 = document.getElementById('mens-product8').value;

  mensProduct8 = false;

  sessionStorage.setItem('mensProduct8', true)
}

function addToCart9(){
  let mensProduct9 = document.getElementById('mens-product9').value;

  mensProduct9 = false;

  sessionStorage.setItem('mensProduct9', true)
}