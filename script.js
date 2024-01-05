$(document).ready(function(){

  $('#itemslider').carousel({ interval: 2000 });
  
  $('.carousel-showmanymoveone .item').each(function(){
  var itemToClone = $(this);
  
  for (var i=1;i<6;i++) {
  itemToClone = itemToClone.next();
  
  if (!itemToClone.length) {
  itemToClone = $(this).siblings(':first');
  }
  
  itemToClone.children(':first-child').clone()
  .addClass("cloneditem-"+(i))
  .appendTo($(this));
  }
  });
  });

 
  const storedFirstname = localStorage.getItem('firstname');
  const storedLastname = localStorage.getItem('lastname');
  // if (storedFirstname && storedLastname) {
    document.getElementById('frstnm').textContent = `${storedFirstname}`;
    document.getElementById('lstnm').textContent = `${storedLastname}`;
  // }
  