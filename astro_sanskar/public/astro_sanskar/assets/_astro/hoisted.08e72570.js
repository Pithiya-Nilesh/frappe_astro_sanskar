import"./hoisted.fb0f5850.js";var d=document.getElementById("popup-trigger-one"),l=document.getElementById("popup-trigger-two"),o=document.getElementById("popup-container-one"),i=document.getElementById("popup-container-two");d.addEventListener("click",r.bind(null,o));l.addEventListener("click",r.bind(null,i));function r(e){e.style.display="flex"}function p(e){e.style.display="none"}document.addEventListener("click",function(e){var t=[o,i];t.forEach(function(n){e.target===n&&p(n)})});var a=document.querySelectorAll(".close-btn");a.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation();var n=e.closest(".popup-container");p(n)})});document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3},navigation:{nextEl:".next-button",prevEl:".prev-button"},breakpoints:{640:{slidesPerView:1.5,centeredSlides:!0},768:{centeredSlides:!1,slidesPerView:2},1024:{centeredSlides:!1,slidesPerView:2},1280:{centeredSlides:!1,slidesPerView:3}}})});