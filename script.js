"use strict";
const html = document.querySelector("html");
const navEl = document.querySelector(`nav`);
const headerEl = document.querySelector(`header`);
const navLinks = document.querySelector(`.nav-links`);
const bodyEl = document.querySelector(`body`);
const mainEl = document.querySelector("main");
const btnEl = document.querySelector(`.mobile-btn`);
const faqBlocks = document.querySelectorAll(".faq-block");
const faqBtns = document.querySelectorAll(".faq-button");
const navBarContainer = document.querySelector(".nav-bar-container");
const servicesImage = document.querySelector(".services-image-container");
const servicesInDetails = document.querySelector(".services-in-details");
const themeToggleBtn = document.querySelector(".theme-toggle");
const mainSectionCoords = mainEl.getBoundingClientRect();
btnEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  bodyEl.classList.toggle("fixed");
});

navLinks.addEventListener("click", () => {
  bodyEl.classList.remove("fixed");
  navEl.classList.remove("nav-open");
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

//Attached the event listener to the parent of the all the cards and fetching the intended card via(e.target) as attaching even listeners to each of the card using a loop slows down performance.
// The concept behind this is that a particular box i.e franchisng, licensing is linking to a respective one in a section below, the JavScript here is to make the latter box illuminate (Return it's original color not B&W like the other boxes) for just 10 seconds.
servicesImage.addEventListener("click", (e) => {
  const href = e.target.parentNode.parentNode.href;
  const indexOfHash = href.indexOf("#") + 1;
  const searchID = href.slice(indexOfHash);
  const servicesDetails = [...servicesInDetails.children]; // This returns an html collection which I spread into an array so I can loop over it.
  // servicesInDetails is also the parent of all the detailed services card(The B&W images)
  servicesDetails.forEach((service) => {
    if (service.id == searchID) {
      service.classList.remove("grayscale");
      setTimeout(() => {
        service.classList.add("grayscale");
      }, 10000);
    }
  });
});

// This is to force the page back to index.html on reload in a case where the address contains an #section i.e (index.html/#services) because we are in a particular section of the page.
if (document.location.reload) {
  let url = document.location.href;
  if (url.indexOf("#") != -1) {
    document.location = "/";
  }
}

// IMPLEMENTING DARK MODE
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  const icon = themeToggleBtn.children[0];
  icon.name = icon.name == "moon" ? "sunny" : "moon";
});
