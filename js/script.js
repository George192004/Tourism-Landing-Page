var swiper1 = new Swiper(".mySwiper1", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
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
  loop: true,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 10,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
    },
    // when window width is <= 991px
    991: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
    },
  },
});

let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-content");
let images = document.querySelectorAll(".section-services img");
let close = document.querySelector(".close");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let currentIndex;

images.forEach(function (img, index) {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    currentIndex = 1;
  });
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
});

next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  modalImg.src = images[currentIndex].src;
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const sectionEl = document.querySelector(".section-hero");

btnMenu.addEventListener("click", function () {
  sectionEl.style.opacity = "0";
  sectionEl.style.transition = "all 0.5s ease-in";
});

btnClose.addEventListener("click", function () {
  sectionEl.style.opacity = "1";
});

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // inside of viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
