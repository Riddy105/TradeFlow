"use strict";
const navEl = document.querySelector(`nav`);
const btnEl = document.querySelector(`.mobile-btn`);
const faqBlocks = document.querySelectorAll(".faq-block");
const faqBtns = document.querySelectorAll(".faq-button");

btnEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
});

faqBtns.forEach((faqBtn, index) => {
  faqBtn.addEventListener("click", () => {
    faqBlocks[index].classList.toggle("faq-open");
  });
});
