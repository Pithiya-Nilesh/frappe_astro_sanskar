import"./hoisted.78da099e.js";document.querySelectorAll(".read-more-btn").forEach(function(n){n.addEventListener("click",function(){var e=this.closest(".client_card_height").querySelector(".more-content"),t=this;if(!e){console.error("No .more-content element found.");return}e.style.display==="none"||e.style.display===""?(e.style.display="block",t.textContent="Read Less"):(e.style.display="none",t.textContent="Read More")})});