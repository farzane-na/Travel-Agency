// variables
const $ = document;
const questions = $.querySelectorAll(".question__text");
const headerOPtion = $.querySelectorAll(".header__option-buttom");
const wayOptionBtn = $.querySelector(".option-way-icon");
const wayOptions = $.querySelector(".way-options");
const way = $.querySelector(".way-option");
const oneWayOption = $.querySelector(".one-way");
const twoWayOption = $.querySelector(".two-way");
const numberPassanger = $.querySelector(".number");
const minusBtn = $.querySelector(".minus");
const plusBtn = $.querySelector(".plus");
const originBox = $.querySelector(".origin-box");
const destinationBox = $.querySelector(".destination-box");
const changeBtn = $.querySelector(".change-button");
const openMobileMenu=$.querySelector(".header__mobile-icon");
const menuMobileItem=$.querySelector(".header__menu-mobile");
const closeMobilemenu=$.querySelector(".close-mobile-menu");
let number = 0;

// functions 

// These two functions are for increasing and decreasing the number of passengers
function minusnumberOfPassangers() {
    if (numberPassanger.innerHTML > 0) {
        number -= 1;
        numberPassanger.innerHTML = number;
    }
}

function plusnumberOfPassangers() {
    number += 1;
    numberPassanger.innerHTML = number;
}
//The task of this function is that by pressing the button between the origin and destination, the values ​​of the origin and destination are moved together.
function changeOriginDestination() {
    let origin = originBox.value;
    let destination = destinationBox.value;
    originBox.value = destination;
    destinationBox.value = origin;
}
//This function handles the travel options and makes it possible for the trip to be one-way or two-way.
function setWayOption(event) {
    let wayItem = event.target.innerHTML;
    way.innerHTML = wayItem;
    wayOptions.style.display = "none";
}
//By using this function, by clicking on any of the header color and background options, it changes.
function headerOptionHandeler(event) {
    let optionBtn = event.currentTarget;
    headerOPtion.forEach(item => item.classList.remove("header__option-button-selected"));
    optionBtn.classList.add("header__option-button-selected");
}
//By clicking on the questions in the main section of the project, the style of the questions and the icon next to it will change.
function questionHandeler(event) {
    let questionMark = event.currentTarget;
    questions.forEach(item => item.classList.remove("select-question"));
    questionMark.classList.add("select-question");
}
//Show menu items in mobile mode
function showMobileMenuItem(){
    menuMobileItem.style.right=0;
}
// Events 
headerOPtion.forEach(function (btn) {
    btn.addEventListener("click", headerOptionHandeler);
})
questions.forEach(function (item) {
    item.addEventListener("click", questionHandeler);
})
wayOptionBtn.addEventListener("click", function () {
    wayOptions.style.display = "inline";
})
oneWayOption.addEventListener("click", setWayOption);
twoWayOption.addEventListener("click", setWayOption);
minusBtn.addEventListener("click", minusnumberOfPassangers);
plusBtn.addEventListener("click", plusnumberOfPassangers);
changeBtn.addEventListener("click", changeOriginDestination);
openMobileMenu.addEventListener("click",showMobileMenuItem);
closeMobilemenu.addEventListener("click",function(){
    menuMobileItem.style.right="-256rem";
})

//Use of the library Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });