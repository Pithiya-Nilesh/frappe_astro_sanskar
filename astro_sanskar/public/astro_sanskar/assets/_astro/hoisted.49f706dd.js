import"./hoisted.fb0f5850.js";let w;document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var N=document.getElementById("hire_form");N.addEventListener("submit",B);var A=document.getElementById("hire_schedule_form");A.addEventListener("submit",W);var F=document.getElementById("hire_small_form");F.addEventListener("submit",z);var v=document.querySelector('input[name="emailaddress"]');v.addEventListener("blur",k);var v=document.querySelector('input[name="hireemail"]');v.addEventListener("blur",k);function k(){const e=v.value.trim(),t=v.nextElementSibling;if(e===""){D(t),v.style.borderColor="";return}L(e)?(D(t),v.style.borderColor=""):(m(v),J(t,"Please enter a valid email address."))}var q=document.querySelector('#hire_form input[name="email"]');q.addEventListener("blur",T);function T(){const e=q.value.trim(),t=q.nextElementSibling;if(e===""){j(t),q.style.borderColor="";return}L(e)?(j(t),q.style.borderColor=""):(m(q),V(t,"Please enter a valid email address."))}function V(e,t){!e||!e.classList.contains("error-message")?(e=document.createElement("p"),e.textContent=t,e.classList.add("error-message"),e.style.color="red",e.style.fontSize="0.8rem",e.style.marginTop="0.2rem",e.style.marginBottom="0",q.parentNode.insertBefore(e,q.nextSibling)):e.textContent=t}function j(e){e&&e.classList.contains("error-message")&&e.remove()}const C="c9025a4d07020e1",P="78509ec3e33e18e";function m(e){e.style.borderColor!=="red"?e.style.borderColor="red":e.style.borderColor=""}function u(e){e.addEventListener("focus",()=>{e.style.borderColor=""})}function B(e){e.preventDefault();const t=e.target,n=t.querySelector('input[name="name"]'),o=t.querySelector('input[name="email"]'),l=document.querySelector('textarea[name="req_message"]'),d=document.querySelector('input[name="phone_no"]'),f=n.value.trim(),p=o.value.trim(),h=l.value.trim();if(d.value.trim(),u(n),u(o),u(l),u(d),f===""&&m(n),p===""&&m(o),h===""&&m(l),f===""||p===""||h==="")return;const g=new FormData(e.target),a=Object.fromEntries(g.entries());g.set("data",JSON.stringify(a));var i=a.name,b=a.email,S=a.phone_no,_=a.req_message;function I(){return fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(r=>r.ip).catch(r=>(console.error("Error fetching IP address:",r),null))}I().then(r=>{let{browserName:s,device:y}=x();console.log("---------->>>",s,y,r),fetch("https://sanskar.frappe.cloud/api/resource/Enquiry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${C}:${P}`},body:JSON.stringify({first_name:i,email:b,phone:S,message:_,enquiry_source:"Website Enquiry",demo_for:w,query_type:"Developer Interview",ip:r,browser_name:s,device:y})}).then(c=>{c.status===200?window.location.href="/thank-you":(O(i,b,S,_,"Website Enquiry",w,"Developer Interview",r,s,y,c),alert("Failed to submit data. Please try after some time."))}).catch(c=>{console.log(c)})})}function W(e){e.preventDefault();const t=e.target,n=t.querySelector('input[name="hirename"]'),o=t.querySelector('input[name="hireemail"]'),l=document.querySelector('textarea[name="hiremessage"]'),d=document.querySelector('input[name="hirephone"]'),f=n.value.trim(),p=o.value.trim(),h=l.value.trim();if(d.value.trim(),u(n),u(o),u(l),u(d),f===""&&m(n),p===""&&m(o),h===""&&m(l),f===""||p===""||h==="")return;const g=new FormData(e.target),a=Object.fromEntries(g.entries());g.set("data",JSON.stringify(a));var i=a.hirename,b=a.hireemail,S=a.hirephone,_=a.hiremessage;function I(){return fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(r=>r.ip).catch(r=>(console.error("Error fetching IP address:",r),null))}I().then(r=>{let{browserName:s,device:y}=x();console.log("---------->>>",s,y,r),fetch("https://sanskar.frappe.cloud/api/resource/Enquiry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${C}:${P}`},body:JSON.stringify({first_name:i,email:b,phone:S,message:_,enquiry_source:"Website Enquiry",demo_for:w,query_type:"Developer Interview",ip:r,browser_name:s,device:y})}).then(c=>{c.status===200?window.location.href="/thank-you":(O(i,b,S,_,"Website Enquiry",w,"Developer Interview",r,s,y,c),alert("Failed to submit data. Please try after some time."))}).catch(c=>{console.log(c)})})}function z(e){e.preventDefault();const t=e.target,n=t.querySelector('input[name="full_name"]'),o=t.querySelector('input[name="emailaddress"]'),l=document.querySelector('textarea[name="message"]'),d=document.querySelector('input[name="phone"]'),f=n.value.trim(),p=o.value.trim(),h=l.value.trim();if(d.value.trim(),u(n),u(o),u(l),u(d),f===""&&m(n),p===""&&m(o),h===""&&m(l),f===""||p===""||h==="")return;new URLSearchParams(window.location.search).get("page");const a=new FormData(e.target),i=Object.fromEntries(a.entries());a.set("data",JSON.stringify(i));var b=i.full_name,S=i.emailaddress,_=i.phone,I=i.message;function r(){return fetch("https://api.ipify.org?format=json").then(s=>s.json()).then(s=>s.ip).catch(s=>(console.error("Error fetching IP address:",s),null))}r().then(s=>{let{browserName:y,device:c}=x();fetch("https://sanskar.frappe.cloud/api/resource/Enquiry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`token ${C}:${P}`},body:JSON.stringify({first_name:b,email:S,phone:_,message:I,enquiry_source:"Website Enquiry",demo_for:w,query_type:"Developer Interview",ip:s,browser_name:y,device:c})}).then(E=>{console.log("asdfasd",E),E.status===200?window.location.href="/thank-you":(O(b,S,_,I,"Website Enquiry",w,"Developer Interview",s,y,c,E),alert("Failed to submit data. Please try after some time."))}).catch(E=>{console.log(E)})})}function L(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function J(e,t){!e||!e.classList.contains("error-message")?(e=document.createElement("p"),e.textContent=t,e.classList.add("error-message"),e.style.color="red",e.style.fontSize="0.8rem",e.style.marginTop="0.2rem",e.style.marginBottom="0",v.parentNode.insertBefore(e,v.nextSibling)):e.textContent=t}function D(e){e&&e.classList.contains("error-message")&&e.remove()}$().then(e=>{console.log("Received IP Address:",e)}).catch(e=>{console.error("Error:",e)});function $(){return new Promise((e,t)=>{fetch("https://api.ipify.org?format=json").then(n=>n.json()).then(n=>{const o=n.ip;e(o)}).catch(n=>{console.error("Error fetching IP address:",n),t(n)})})}function x(){const e=navigator.userAgent;var t="Unknown";e.indexOf("Chrome")!==-1?t="Google Chrome":e.indexOf("Firefox")!==-1?t="Mozilla Firefox":e.indexOf("Safari")!==-1?t="Apple Safari":e.indexOf("Edg")!==-1?t="Microsoft Edge":(e.indexOf("MSIE")!==-1||e.indexOf("Trident")!==-1)&&(t="Internet Explorer");const n=window.innerWidth;var o="Unknown";return n<=576?o="Mobile":n<=992?o="Tablet":n<=1200?o="Laptop":o="Desktop",{browserName:t,device:o}}function O(e="",t="",n="",o="",l="",d="",f="",p="",h="",g="",a=""){console.log("sending email notification..."),fetch("https://sanskartechnolab.com/api/method/astro_sanskar.api.send_form_failed_notification",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({full_name:e,email:t,phone:n,message:o,enquiry_source:"Website Enquiry",demoForValue:d,queryTypeValue:f,ip:p,browser_name:h,device:g,response:a,page_name:"Hire ERPNext Developer"})}).then(i=>{i.status===200?console.log("email notification sent."):(console.log("failed to send email notification",i),alert("We are unable to process your request. please send your requirements on info@sanskartechnolab.com"))}).catch(i=>{console.log("error",i)})}