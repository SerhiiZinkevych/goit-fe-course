"use strict";

import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const img = lightbox.querySelector(".lightbox___image");

gallery.addEventListener("click", showLightBox);
lightbox.addEventListener("click", closeLightBox);

const markup = galleryItems.reduce(
  (result, { preview, original, description }) => {
    result += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="./img/placeholder.png"
        data-lazy="${preview}"
        data-source="${original}"
        alt="${description}" />
        <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
        </span>
        </a>
        </li>`;
    return result;
  },
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

//Lazy load :)
const lazyLoad = target => {
  const options = {
    rootMargin: "100px 0px",
    threshold: 0.01
  };

  const iObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.lazy;
        observer.disconnect();
      }
    });
  }, options);
  iObserver.observe(target);
};

const images = document.querySelectorAll(".gallery__item img");
images.forEach(image => {
  lazyLoad(image);
});

let curLi;

function showLightBox(e) {
  e.preventDefault();
  window.addEventListener("keydown", handleKeyDown);
  lightbox.classList.add("is-open");
  img.src = "";
  img.src = e.target.dataset.source;
  curLi = e.target.parentNode.parentNode;
}

function handleKeyDown(e) {
  if (e.key === "Escape") {
    closeLightBox(e);
    return;
  }

  if (e.key === "ArrowRight") {
    curLi = curLi.nextElementSibling ? curLi.nextElementSibling : curLi;
  }

  if (e.key === "ArrowLeft") {
    curLi = curLi.previousElementSibling ? curLi.previousElementSibling : curLi;
  }
  img.src = curLi.querySelector("img").dataset.source;
}

function closeLightBox(e) {
  console.log(e);
  if (e.target === img) {
    return;
  }

  window.removeEventListener("keydown", closeLightBox);
  lightbox.classList.remove("is-open");
}
