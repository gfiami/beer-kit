function cart() {
  window.alert("I wont charge you and won't give you this kit. Sorry :(");
}
const paymentButton = document.querySelector(".payment");
const checkBeer = document.querySelectorAll("[name='beer'");
const checkCup = document.querySelectorAll("[name='cup'");
const checkOpen = document.querySelectorAll("[name='opener'");
let beerSelected;
let cupSelected;
let openerSelected;

checkBeer.forEach(function (item) {
  item.addEventListener("change", function () {
    if (item.checked) {
      beerSelected = 1;
      checkKit();
    }
  });
});

checkCup.forEach(function (item) {
  item.addEventListener("change", function () {
    if (item.checked) {
      cupSelected = 1;
      checkKit();
    }
  });
});

checkOpen.forEach(function (item) {
  item.addEventListener("change", function () {
    if (item.checked) {
      openerSelected = 1;
      checkKit();
    }
  });
});

function checkKit() {
  if (beerSelected == 1 && cupSelected == 1 && openerSelected == 1) {
    paymentButton.disabled = false;
  }
}
