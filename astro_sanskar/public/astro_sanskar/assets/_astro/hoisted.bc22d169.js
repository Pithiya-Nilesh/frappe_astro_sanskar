import"./hoisted.f5929443.js";const L=new URLSearchParams(window.location.search),k=L.get("page"),O=k||"";document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var V=document.getElementById("talk_form");V.addEventListener("submit",T);var i=document.querySelector('input[name="productemail"]');i.addEventListener("blur",A);function A(){const e=i.value.trim(),t=i.nextElementSibling;if(e===""){y(t),i.style.borderColor="";return}E(e)?(y(t),i.style.borderColor=""):(u(i),_(t,"Please enter a valid email address.",i))}var s=document.querySelector('input[name="productname"]');s.addEventListener("blur",D);function D(){const e=s.value.trim(),t=s.nextElementSibling;if(e===""){y(t),s.style.borderColor="";return}x(e)?(y(t),s.style.borderColor=""):(u(s),_(t,"Please enter a valid name.",s))}function E(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function x(e){return/^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/.test(String(e).toLowerCase())}function _(e,t,n){!e||!e.classList.contains("error-message")?(e=document.createElement("p"),e.textContent=t,e.classList.add("error-message"),e.style.color="red",e.style.fontSize="0.8rem",e.style.marginTop="0.2rem",e.style.marginBottom="0",n.parentNode.insertBefore(e,n.nextSibling)):e.textContent=t}function y(e){e&&e.classList.contains("error-message")&&e.remove()}const j="c9025a4d07020e1",N="78509ec3e33e18e";function u(e){e.style.borderColor!=="red"?e.style.borderColor="red":e.style.borderColor=""}function h(e){e.addEventListener("focus",()=>{e.style.borderColor=""})}function T(e){e.preventDefault();const t=e.target,n=t.querySelector('input[name="productname"]'),r=t.querySelector('input[name="productemail"]'),d=document.querySelector('textarea[name="productmessage"]'),m=document.querySelector('input[name="productphone"]'),c=n.value.trim(),l=r.value.trim(),p=d.value.trim();if(m.value.trim(),h(n),h(r),h(d),h(m),c===""&&u(n),l===""&&u(r),p===""&&u(d),c===""||l===""||p==="")return;new URLSearchParams(window.location.search).get("page");const f=new FormData(e.target),o=Object.fromEntries(f.entries());f.set("data",JSON.stringify(o));var g=o.productname,w=o.productemail,S=o.productphone,P=o.productmessage;function I(){return fetch("https://api.ipify.org?format=json").then(a=>a.json()).then(a=>a.ip).catch(a=>(console.error("Error fetching IP address:",a),null))}I().then(a=>{let{browserName:q,device:C}=B();E(l)&&x(c)&&fetch("https://sanskar.frappe.cloud/api/resource / En quiry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${j}:${N}`},body:JSON.stringify({first_name:g,email:w,phone:S,message:P,enquiry_source:"Website Enquiry",demo_for:O,query_type:"Product Engineering",ip:a,browser_name:q,device:C,website_page_name:"Product Development"})}).then(v=>{v.status===200?window.location.href="/thank-you":(F(g,w,S,P,"Website Enquiry","Product Developement","Developer Interview",a,q,C,"Product Development"),alert("Failed to submit data. Please try after some time."))}).catch(v=>{console.error(v)})})}function z(){return new Promise((e,t)=>{fetch("https://api.ipify.org?format=json").then(n=>n.json()).then(n=>{const r=n.ip;e(r)}).catch(n=>{console.error("Error fetching IP address:",n),t(n)})})}z();function B(){const e=navigator.userAgent;var t="Unknown";e.indexOf("Chrome")!==-1?t="Google Chrome":e.indexOf("Firefox")!==-1?t="Mozilla Firefox":e.indexOf("Safari")!==-1?t="Apple Safari":e.indexOf("Edg")!==-1?t="Microsoft Edge":(e.indexOf("MSIE")!==-1||e.indexOf("Trident")!==-1)&&(t="Internet Explorer");const n=window.innerWidth;var r="Unknown";return n<=576?r="Mobile":n<=992?r="Tablet":n<=1200?r="Laptop":r="Desktop",{browserName:t,device:r}}function F(e="",t="",n="",r="",d="",m="",c="",l="",p="",b="",f=""){fetch("https://sanskartechnolab.com/api/method/astro_sanskar.api.send_form_failed_notification",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({full_name:e,email:t,phone:n,message:r,enquiry_source:"Website Enquiry",demoForValue:m,queryTypeValue:c,ip:l,browser_name:p,device:b,response:f,page_name:"Product Developement"})}).then(o=>{o.status===200?alert("email notification sent."):alert("We are unable to process your request. please send your requirements on info@sanskartechnolab.com")}).catch(o=>{console.error("error",o)})}document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3},navigation:{nextEl:".next-button",prevEl:".prev-button"},breakpoints:{640:{slidesPerView:1,centeredSlides:!0},768:{centeredSlides:!0,slidesPerView:1},1024:{centeredSlides:!0,slidesPerView:1}}})});
