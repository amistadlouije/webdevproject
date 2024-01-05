const storedFirstname = localStorage.getItem('firstname');
const storedLastname = localStorage.getItem('lastname');
// if (storedFirstname && storedLastname) {
  document.getElementById('frstnm').textContent = `${storedFirstname}`;
  document.getElementById('lstnm').textContent = `${storedLastname}`;
// }


function addToCart1(){
  let womensProduct1 = document.getElementById('womens-product1').value;

  womensProduct1 = false;

  sessionStorage.setItem('womensProduct1', true)
}

function addToCart2(){
  let womensProduct2 = document.getElementById('womens-product2').value;

  womensProduct2 = false;

  sessionStorage.setItem('womensProduct2', true)
}

function addToCart3(){
  let womensProduct3 = document.getElementById('womens-product3').value;

  womensProduct3 = false;

  sessionStorage.setItem('womensProduct3', true)
}
function addToCart4(){
  let womensProduct4 = document.getElementById('womens-product4').value;

  womensProduct4 = false;

  sessionStorage.setItem('womensProduct4', true)
}

function addToCart5(){
  let womensProduct5 = document.getElementById('womens-product5').value;

  womensProduct5 = false;

  sessionStorage.setItem('womensProduct5', true)
}

function addToCart6(){
  let womensProduct6 = document.getElementById('womens-product6').value;

  womensProduct6 = false;

  sessionStorage.setItem('womensProduct6', true)
}
function addToCart7(){
  let womensProduct7 = document.getElementById('womens-product7').value;

  womensProduct7 = false;

  sessionStorage.setItem('womensProduct7', true)
}

function addToCart8(){
  let womensProduct8 = document.getElementById('womens-product8').value;

  womensProduct8 = false;

  sessionStorage.setItem('womensProduct8', true)
}

function addToCart9(){
  let womensProduct9 = document.getElementById('womens-product9').value;

  womensProduct9 = false;

  sessionStorage.setItem('womensProduct9', true)
}