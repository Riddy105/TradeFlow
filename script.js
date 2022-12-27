"use strict";
const navEl = document.querySelector(`nav`);
const bodyEl = document.querySelector(`body`);
const mainEl = document.querySelector("main");
const btnEl = document.querySelector(`.mobile-btn`);
const faqBlocks = document.querySelectorAll(".faq-block");
const faqBtns = document.querySelectorAll(".faq-button");
const navBarContainer = document.querySelector(".nav-bar-container");
const mainSectionCoords = mainEl.getBoundingClientRect();
btnEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  bodyEl.classList.toggle("fixed");
});

// window.addEventListener("scroll", () => {
//   window.scrollY > mainSectionCoords.top
//     ? navBarContainer.classList.add("fixed-nav")
//     : navBarContainer.classList.remove("fixed-nav");
// });

faqBlocks.forEach((faqBlock, index) => {
  faqBlock.addEventListener("click", () => {
    faqBlock.classList.toggle("faq-open");
  });
});
