(function(e,t,n,o,i){e[o]=e[o]||[],e[o].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var d=t.getElementsByTagName(n)[0],s=t.createElement(n),l=o!="dataLayer"?"&l="+o:"";s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id="+i+l,d.parentNode.insertBefore(s,d)})(window,document,"script","dataLayer","GTM-TWGDJ9VQ");const u=document.querySelectorAll("button.menu");u.forEach(e=>{e.addEventListener("click",()=>{var t=document.getElementById("menu");t.classList.toggle("!block");var t=document.getElementById("open-menu");t.classList.toggle("!hidden");var t=document.getElementById("close-menu");t.classList.toggle("!block")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("#main-menu > li").forEach(function(t){const n=t.querySelector(".sub-menu");let o;n&&(t.addEventListener("mouseenter",function(){clearTimeout(o),n.style.display="block"}),t.addEventListener("mouseleave",function(){o=setTimeout(function(){n.style.display="none"},300)}))})});var c=window.location.pathname,r="/contact-us",m="/contact-us/",p="/thank-you",g="/thank-you/";if(c===r||c===p||c===m||c===g){var a=document.getElementById("section");a.classList.add("!hidden")}else{var a=document.getElementById("section");a.classList.remove("!hidden")}function v(){const e=new Date;e.setDate(e.getDate()+1),document.cookie=`cookieConsent=accepted; expires=${e.toUTCString()}; path=/`;var t=document.getElementById("cookies-popup");t.classList.add("hidden")}var y=document.getElementById("accept_button");y.addEventListener("click",v);const k=document.cookie.includes("cookieConsent=accepted"),E=document.cookie.includes("cookieConsent=rejected");if(k||E){var h=document.getElementById("cookies-popup");h.classList.add("hidden")}else{var L=document.getElementById("s_top");L.classList.add("!bottom-28","md:!bottom-10")}var f=document.getElementById("close");f.addEventListener("click",B);function B(){const e=new Date;e.setDate(e.getDate()+1),document.cookie=`cookieConsent=rejected; expires=${e.toUTCString()}; path=/`;var t=document.getElementById("cookies-popup");t.classList.add("hidden")}function w(){var e=document.getElementById("s_top");window.scrollY>300?e.style.display="block":e.style.display="none"}var T=document.getElementById("s_top");T.addEventListener("click",I);function I(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",w);
