//----------------------PAGE SONDAGE-------------------------\\

boutonMise = document.getElementById('boutonMise');
bet1 = document.getElementsByClassName("bet")[0];
bet2 = document.getElementsByClassName("bet")[1];
mise = document.getElementById('idMise');

var displayMise1 = false;
var displayMise2 = false;

bet1.addEventListener('click', showMise1);

function showMise1() {
  if(displayMise1 === false) {
    if(displayMise2 === false) {
      mise.style.display = "block";
      bet1.style.backgroundColor = "#FA8100";
      bet1.style.color = "#00333C";
      bet1.style.border = "1px dashed #ffffff";
      displayMise1 = true;
    } else {
      mise.style.display = "none";
      bet2.style.backgroundColor = "#00333C";
      bet2.style.color = "#ffffff";
      bet2.style.border = "1px dashed #FA8100";
      displayMise2 = false;

      mise.style.display = "block";
      bet1.style.backgroundColor = "#FA8100";
      bet1.style.color = "#00333C";
      bet1.style.border = "1px dashed #ffffff";
      displayMise1 = true;
    }
  } else {
    mise.style.display = "none";
    bet1.style.backgroundColor = "#00333C";
    bet1.style.color = "#ffffff";
    bet1.style.border = "1px dashed #FA8100";
    displayMise1 = false;
  }

}

bet2.addEventListener('click', showMise2);

function showMise2() {
  if(displayMise2 === false) {
    if(displayMise1 === false) {
      mise.style.display = "block";
      bet2.style.backgroundColor = "#FA8100";
      bet2.style.color = "#00333C";
      bet2.style.border = "1px dashed #ffffff";
      displayMise2 = true;
    } else {
      mise.style.display = "none";
      bet1.style.backgroundColor = "#00333C";
      bet1.style.color = "#ffffff";
      bet1.style.border = "1px dashed #FA8100";
      displayMise1 = false;

      mise.style.display = "block";
      bet2.style.backgroundColor = "#FA8100";
      bet2.style.color = "#00333C";
      bet2.style.border = "1px dashed #ffffff";
      displayMise2 = true;
    }
  } else {
    mise.style.display = "none";
    bet2.style.backgroundColor = "#00333C";
    bet2.style.color = "#ffffff";
    bet2.style.border = "1px dashed #FA8100";
    displayMise2 = false;
  }
  
}