var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
var myIndex1 = 0;
text();
function text() {
  var i;
  var x = document.getElementsByClassName("image-text");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x.length) {
    myIndex1 = 1;
  }
  x[myIndex1 - 1].style.display = "block";
  setTimeout(text, 2000); // Change image every 2 seconds
}
const burger = document.querySelector(".burger");
burger.addEventListener("click", go);
function go() {
  var list = document.querySelector(".list");
  var listItems = document.querySelectorAll(".list li");
  list.classList.toggle("active-this");
}
