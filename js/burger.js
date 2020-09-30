//-------------------Menu Burger---------------\\


burger = document.getElementById('imgBurger');
menuBurger = document.getElementById('divBurger');
var displayBurger = false;

burger.addEventListener('click', showBurger);

function showBurger() {
  if(displayBurger === false) {
    menuBurger.style.transform= "translateX(0)";
    burger.style.transform= "rotate(360deg)";
    displayBurger = true;
  } else {
    menuBurger.style.transform= "translateX(-100%)";
    burger.style.transform= "rotate(-360deg)";
    displayBurger = false;
  }
}