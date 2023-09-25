import"https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js";(function(e,t,n,o,m){e[o]=e[o]||[],e[o].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],a=t.createElement(n),l=o!="dataLayer"?"&l="+o:"";a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id="+m+l,i.parentNode.insertBefore(a,i)})(window,document,"script","dataLayer","GTM-TWGDJ9VQ");const r=document.querySelectorAll("button.menu");r.forEach(e=>{e.addEventListener("click",()=>{var t=document.getElementById("menu");t.classList.toggle("!block");var t=document.getElementById("open-menu");t.classList.toggle("!hidden");var t=document.getElementById("close-menu");t.classList.toggle("!block")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("#main-menu > li").forEach(function(t){const n=t.querySelector(".sub-menu");let o;n&&(t.addEventListener("mouseenter",function(){clearTimeout(o),n.style.display="block"}),t.addEventListener("mouseleave",function(){o=setTimeout(function(){n.style.display="none"},300)}))})});var c=window.location.pathname,u="/contact-us",p="/contact-us/",g="/thank-you",v="/thank-you/",h="/sitemap",y="/sitemap/";if(c===u||c===g||c===h||c===p||c===v||c===y){var s=document.getElementById("section");s.classList.add("!hidden")}else{var s=document.getElementById("section");s.classList.remove("!hidden")}function k(){const e=new Date;e.setDate(e.getDate()+1),document.cookie=`cookieConsent=accepted; expires=${e.toUTCString()}; path=/`;var t=document.getElementById("cookies-popup");t.classList.add("hidden")}var E=document.getElementById("accept_button");E.addEventListener("click",k);const w=document.cookie.includes("cookieConsent=accepted"),L=document.cookie.includes("cookieConsent=rejected");if(w||L){var f=document.getElementById("cookies-popup");f.classList.add("hidden")}else{var d=document.createElement("style"),x=`
    @media (max-width: 280px){
.custom-class {
margin-bottom: 8rem;
}
}


@media (min-width: 281px) and (max-width: 434px){
.custom-class {
margin-bottom: 6rem;
}
}


@media (min-width: 435px) and (max-width: 767px) {
.custom-class {
margin-bottom: 5rem;
}
}


@media (min-width: 768px) and (max-width: 1024px) {
.custom-class {
margin-bottom: 8rem;
}
}

@media (min-width:1025px){
.custom-class {
margin-bottom: 1.25rem; 
}
}




`;d.innerHTML=x,document.head.appendChild(d);var B=document.getElementById("s_top");B.classList.add("custom-class")}var b=document.getElementById("close");b.addEventListener("click",T);function T(){const e=new Date;e.setDate(e.getDate()+1),document.cookie=`cookieConsent=rejected; expires=${e.toUTCString()}; path=/`;var t=document.getElementById("cookies-popup");t.classList.add("hidden")}function I(){var e=document.getElementById("s_top");window.scrollY>300?e.style.display="block":e.style.display="none"}var D=document.getElementById("s_top");D.addEventListener("click",C);function C(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",I);
