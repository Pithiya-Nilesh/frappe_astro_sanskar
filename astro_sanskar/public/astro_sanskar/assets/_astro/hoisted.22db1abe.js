import"./hoisted.f5929443.js";document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3},navigation:{nextEl:".next-button",prevEl:".prev-button"},breakpoints:{640:{slidesPerView:1.5,centeredSlides:!0},768:{centeredSlides:!1,slidesPerView:2},1024:{centeredSlides:!1,slidesPerView:2},1280:{centeredSlides:!1,slidesPerView:3}}})});document.querySelectorAll(".read-more-btn").forEach(function(n){n.addEventListener("click",function(){var e=this.closest(".client_card_height").querySelector(".more-content"),t=this;if(!e){console.error("No .more-content element found.");return}e.style.display==="none"||e.style.display===""?(e.style.display="block",t.textContent="Read Less"):(e.style.display="none",t.textContent="Read More")})});document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-customer",{loop:!0,slidesPerView:1,spaceBetween:0,navigation:{nextEl:"#next",prevEl:"#prev"},breakpoints:{640:{slidesPerView:1.5,centeredSlides:!0},768:{centeredSlides:!0,slidesPerView:1},1024:{centeredSlides:!1,slidesPerView:2}}})});