import"./hoisted.fb0f5850.js";let y;y=window.location.pathname.slice(1);console.log("Current URL:"+y);document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var I=document.getElementById("talk_form");I.addEventListener("submit",A);var a=document.querySelector('input[name="productemail"]');a.addEventListener("blur",P);function P(){const e=a.value.trim(),t=a.nextElementSibling;if(e===""){x(t),a.style.borderColor="";return}_(e)?(x(t),a.style.borderColor=""):(h(a),k(t,"Please enter a valid email address."))}function _(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function k(e,t){!e||!e.classList.contains("error-message")?(e=document.createElement("p"),e.textContent=t,e.classList.add("error-message"),e.style.color="red",e.style.fontSize="0.8rem",e.style.marginTop="0.2rem",e.style.marginBottom="0",a.parentNode.insertBefore(e,a.nextSibling)):e.textContent=t}function x(e){e&&e.classList.contains("error-message")&&e.remove()}const O="c9025a4d07020e1",L="78509ec3e33e18e";function h(e){e.style.borderColor!=="red"?e.style.borderColor="red":e.style.borderColor=""}function m(e){e.addEventListener("focus",()=>{e.style.borderColor=""})}function A(e){e.preventDefault();const t=e.target,o=t.querySelector('input[name="productname"]'),n=t.querySelector('input[name="productemail"]'),c=document.querySelector('textarea[name="productmessage"]'),l=document.querySelector('input[name="productphone"]'),d=o.value.trim(),u=n.value.trim(),f=c.value.trim();if(l.value.trim(),m(o),m(n),m(c),m(l),d===""&&h(o),u===""&&h(n),f===""&&h(c),d===""||u===""||f==="")return;new URLSearchParams(window.location.search).get("page");const p=new FormData(e.target),r=Object.fromEntries(p.entries());p.set("data",JSON.stringify(r));var w=r.productname,S=r.productemail,q=r.productphone,C=r.productmessage;function E(){return fetch("https://api.ipify.org?format=json").then(i=>i.json()).then(i=>i.ip).catch(i=>(console.error("Error fetching IP address:",i),null))}E().then(i=>{let{browserName:g,device:v}=D();console.log("---------->>>",g,v,i),fetch("https://sanskar.frappe.cloud/api/resource/Enquiry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${O}:${L}`},body:JSON.stringify({first_name:w,email:S,phone:q,message:C,enquiry_source:"Website Enquiry",query_type:"Developer Interview",ip:i,browser_name:g,device:v,demo_for:y})}).then(s=>{console.log("------>res",s),s.status===200?window.location.href="/thank-you":(V(w,S,q,C,"Website Enquiry",y,"Developer Interview",i,g,v,s),alert("Failed to submit data. Please try after some time."))}).catch(s=>{console.log(s)})})}j().then(e=>{console.log("Received IP Address:",e)}).catch(e=>{console.error("Error:",e)});function j(){return new Promise((e,t)=>{fetch("https://api.ipify.org?format=json").then(o=>o.json()).then(o=>{const n=o.ip;e(n)}).catch(o=>{console.error("Error fetching IP address:",o),t(o)})})}function D(){const e=navigator.userAgent;var t="Unknown";e.indexOf("Chrome")!==-1?t="Google Chrome":e.indexOf("Firefox")!==-1?t="Mozilla Firefox":e.indexOf("Safari")!==-1?t="Apple Safari":e.indexOf("Edg")!==-1?t="Microsoft Edge":(e.indexOf("MSIE")!==-1||e.indexOf("Trident")!==-1)&&(t="Internet Explorer");const o=window.innerWidth;var n="Unknown";return o<=576?n="Mobile":o<=992?n="Tablet":o<=1200?n="Laptop":n="Desktop",{browserName:t,device:n}}function V(e="",t="",o="",n="",c="",l="",d="",u="",f="",b="",p=""){console.log("sending email notification..."),fetch("https://sanskartechnolab.com/api/method/astro_sanskar.api.send_form_failed_notification",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({full_name:e,email:t,phone:o,message:n,enquiry_source:"Website Enquiry",demoForValue:l,queryTypeValue:d,ip:u,browser_name:f,device:b,response:p,page_name:"Hire Frappe Developer"})}).then(r=>{r.status===200?console.log("email notification sent."):(console.log("failed to send email notification",r),alert("We are unable to process your request. please send your requirements on info@sanskartechnolab.com"))}).catch(r=>{console.log("error",r)})}document.addEventListener("DOMContentLoaded",function(){console.log("object"),new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3},navigation:{nextEl:".next-button",prevEl:".prev-button"},breakpoints:{640:{slidesPerView:1,centeredSlides:!0},768:{centeredSlides:!0,slidesPerView:1},1024:{centeredSlides:!0,slidesPerView:1}}})});
