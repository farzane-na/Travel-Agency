const questions = document.querySelectorAll(".question__text");
const headerOPtion = document.querySelectorAll(".header__option-buttom");
const openMobileMenu = document.querySelector(".header__mobile-icon");
const menuMobileItem = document.querySelector(".header__menu-mobile");
const closeMobilemenu = document.querySelector(".close-mobile-menu");
let number = 0;

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