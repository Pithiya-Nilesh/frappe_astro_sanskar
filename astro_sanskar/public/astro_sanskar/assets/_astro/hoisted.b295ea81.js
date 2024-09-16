import"./hoisted.f5929443.js";window.onload=function(){var e=document.getElementById("tablecontentmenu"),n=document.getElementById("section"),t=document.getElementById("introduction");function i(){if(!e||!n||!t){console.error("Element not found:",e?n?"introduction":"footer":"tablecontentmenu");return}var s=n.getBoundingClientRect(),r=t.getBoundingClientRect(),a=window.innerHeight;s.top<=a||r.top<=a&&r.bottom>=0?e.style.display="none":e.style.display="block"}function o(){window.innerWidth<=767?(window.addEventListener("scroll",i),i()):(window.removeEventListener("scroll",i),e&&(e.style.display="none"))}o(),window.addEventListener("resize",o)};document.addEventListener("DOMContentLoaded",function(){document.querySelector(".toggle-menu").addEventListener("click",function(){w()})});function w(){const e=document.getElementById("mobile-menu");e.classList.contains("menu-hidden")?(e.classList.remove("menu-hidden"),e.classList.add("menu-visible")):(e.classList.remove("menu-visible"),e.classList.add("menu-hidden"))}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".button");let n=null;e.forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const o=this.getAttribute("href");window.location.href=o,n&&n.classList.remove("active"),t.classList.add("active"),n=t})})});function k(e){document.addEventListener("DOMContentLoaded",e,!1)}k(()=>{const e=window.matchMedia("(prefers-reduced-motion)");({container:document.querySelector(".js-toc"),links:null,headings:null,intersectionOptions:{rootMargin:"0px",threshold:1},previousSection:null,observer:null,init(){this.handleObserver=this.handleObserver.bind(this),this.setUpObserver(),this.findLinksAndHeadings(),this.observeSections(),this.links.forEach(t=>{t.addEventListener("click",this.handleLinkClick.bind(this))})},handleLinkClick(t){t.preventDefault();let i=t.target.getAttribute("href").replace("#",""),o=this.headings.find(s=>s.getAttribute("id")===i);o.setAttribute("tabindex",-1),o.focus(),window.scroll({behavior:e.matches?"instant":"smooth",top:o.offsetTop-15,block:"start"}),this.container.classList.contains("is-active")&&this.container.classList.remove("is-active")},handleObserver(t,i){t.forEach(o=>{let s=`#${o.target.getAttribute("id")}`,r=this.links.find(a=>a.getAttribute("href")===s);o.isIntersecting&&o.intersectionRatio>=1?(r.classList.add("is-visible"),this.previousSection=o.target.getAttribute("id")):r.classList.remove("is-visible"),this.highlightFirstActive()})},highlightFirstActive(){let t=this.container.querySelector(".is-visible");this.links.forEach(i=>{i.classList.remove("is-active")}),t&&t.classList.add("is-active"),!t&&this.previousSection&&this.container.querySelector(`a[href="#${this.previousSection}"]`).classList.add("is-active")},observeSections(){this.headings.forEach(t=>{this.observer.observe(t)})},setUpObserver(){this.observer=new IntersectionObserver(this.handleObserver,this.intersectionOptions)},findLinksAndHeadings(){this.links=[...this.container.querySelectorAll("a")],this.headings=this.links.map(t=>{let i=t.getAttribute("href");return document.querySelector(i)})}}).init()});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var E=document.getElementById("follow_up_support_form");E.addEventListener("submit",q);var c=document.querySelector('input[name="support_email"]');c.addEventListener("blur",A);function A(){const e=c.value.trim(),n=c.nextElementSibling;if(e===""){m(n),c.style.borderColor="";return}g(e)?(m(n),c.style.borderColor=""):(d(c),S(n,"Please enter a valid email address.",c))}var l=document.querySelector('input[name="support_name"]');l.addEventListener("blur",C);function C(){const e=l.value.trim(),n=l.nextElementSibling;if(e===""){m(n),l.style.borderColor="";return}L(e)?(m(n),l.style.borderColor=""):(d(l),S(n,"Please enter a valid name.",l))}function g(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function L(e){return/^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/.test(String(e).toLowerCase())}function S(e,n,t){!e||!e.classList.contains("error-message")?(e=document.createElement("p"),e.textContent=n,e.classList.add("error-message"),e.style.color="red",e.style.fontSize="0.8rem",e.style.marginTop="0.2rem",e.style.marginBottom="0",t.parentNode.insertBefore(e,t.nextSibling)):e.textContent=n}function m(e){e&&e.classList.contains("error-message")&&e.remove()}const _="c9025a4d07020e1",O="78509ec3e33e18e";function d(e){e.style.borderColor!=="red"?e.style.borderColor="red":e.style.borderColor=""}function h(e){e.addEventListener("focus",()=>{e.style.borderColor=""})}function q(e){e.preventDefault();const n=e.target,t=n.querySelector('input[name="support_name"]'),i=n.querySelector('input[name="support_email"]'),o=document.querySelector('textarea[name="support_requirements"]'),s=t.value.trim(),r=i.value.trim(),a=o.value.trim();if(h(t),h(i),h(o),s===""&&d(t),r===""&&d(i),a===""&&d(o),s===""||r===""||a==="")return;new URLSearchParams(window.location.search).get("page");const p=new FormData(e.target),u=Object.fromEntries(p.entries());p.set("data",JSON.stringify(u));var v=u.support_name,b=u.support_email,y=u.support_requirements;g(r)&&L(s)&&fetch("https://sanskar.frappe.cloud/api/resource/Issue",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${_}:${O}`},body:JSON.stringify({custom_full_name:v,raised_by:b,subject:y,customer:"Website Support",project:"Website Support"})}).then(f=>{f.status===200?window.location.href="/thank-you":(j(v,b,y,"Website Support","Website Support"),alert("Failed to submit data. Please try after some time."))}).catch(f=>{console.error(f)})}function I(){return new Promise((e,n)=>{fetch("https://api.ipify.org?format=json").then(t=>t.json()).then(t=>{const i=t.ip;e(i)}).catch(t=>{console.error("Error fetching IP address:",t),n(t)})})}I();function j(e="",n="",t="",i="",o=""){fetch("https://sanskartechnolab.com/api/method/astro_sanskar.api.send_form_failed_notification",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({custom_full_name:e,raised_by:n,subject:t,customer:"Website Support",project:"Website Support",page_name:"Follow Up App"})}).then(s=>{s.status===200?alert("email notification sent."):alert("We are unable to process your request. please send your requirements on info@sanskartechnolab.com")}).catch(s=>{console.error("error",s)})}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll('a[href^="#"]');e.forEach(function(n){n.addEventListener("click",function(t){t.preventDefault();var i=this.hash,o=document.querySelector(i);window.scrollTo({top:o.offsetTop-170,behavior:"smooth"})})})});
