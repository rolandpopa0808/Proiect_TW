const hamburger = document.querySelector(".btn3");

const menu = document.querySelector(".menu");

function toggleNavbar() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

function updateSize() {
  if (window.innerWidth >= 1100) {
    menu.classList.remove("showMenu");
  }
}

updateSize();
window.addEventListener("resize", updateSize);

hamburger.addEventListener("click", toggleNavbar);

var currentX = "";
var currentX = "";
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");

    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
