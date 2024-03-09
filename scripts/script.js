const questions = document.querySelectorAll(".question__text");
const headerOPtion = document.querySelectorAll(".header__option-buttom");
const wayOptionBtn = document.querySelector(".option-way-icon");
const wayOptions = document.querySelector(".way-options");
const way = document.querySelector(".way-option");
const oneWayOption = document.querySelector(".one-way");
const twoWayOption = document.querySelector(".two-way");
const numberPassanger = document.querySelector(".number");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const originBox = document.querySelector(".origin-box");
const destinationBox = document.querySelector(".destination-box");
const changeBtn = document.querySelector(".change-button");
const openMobileMenu = document.querySelector(".header__mobile-icon");
const menuMobileItem = document.querySelector(".header__menu-mobile");
const closeMobilemenu = document.querySelector(".close-mobile-menu");
let number = 0;

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
function showMobileMenuItem() {
    menuMobileItem.style.right = 0;
}
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
openMobileMenu.addEventListener("click", showMobileMenuItem);
closeMobilemenu.addEventListener("click", function () {
    menuMobileItem.style.right = "-256rem";
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