import"https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js";import"./hoisted.7fea91e8.js";const h=document.getElementById("country"),C=document.getElementById("telephoneCode"),B={Afghanistan:"+93",Albania:"+355",Algeria:"+213",Andorra:"+376",Angola:"+244","Antigua and Barbuda":"+1",Argentina:"+54",Armenia:"+374",Australia:"+61",Austria:"+43",Azerbaijan:"+994",Bahamas:"+1",Bahrain:"+973",Bangladesh:"+880",Barbados:"+1",Belarus:"+375",Belgium:"+32",Belize:"+501",Benin:"+229",Bhutan:"+975",Bolivia:"+591","Bosnia and Herzegovina":"+387",Botswana:"+267",Brazil:"+55",Brunei:"+673",Bulgaria:"+359","Burkina Faso":"+226",Burundi:"+257","Cabo Verde":"+238",Cambodia:"+855",Cameroon:"+237",Canada:"+1","Central African Republic":"+236",Chad:"+235",Chile:"+56",China:"+86",Colombia:"+57",Comoros:"+269",Congo:"+242","Costa Rica":"+506",Croatia:"+385",Cuba:"+53",Cyprus:"+357","Czech Republic":"+420","Democratic Republic of the Congo":"+243",Denmark:"+45",Djibouti:"+253",Dominica:"+1","Dominican Republic":"+1",Ecuador:"+593",Egypt:"+20","El Salvador":"+503","Equatorial Guinea":"+240",Eritrea:"+291",Estonia:"+372",Eswatini:"+268",Ethiopia:"+251",Fiji:"+679",Finland:"+358",France:"+33",Gabon:"+241",Gambia:"+220",Georgia:"+995",Germany:"+49",Ghana:"+233",Greece:"+30",Grenada:"+1",Guatemala:"+502",Guinea:"+224","Guinea-Bissau":"+245",Guyana:"+592",Haiti:"+509","Holy See":"+379",Honduras:"+504",Hungary:"+36",Iceland:"+354",India:"+91",Indonesia:"+62",Iran:"+98",Iraq:"+964",Ireland:"+353",Israel:"+972",Italy:"+39",Jamaica:"+1",Japan:"+81",Jordan:"+962",Kazakhstan:"+7",Kenya:"+254",Kiribati:"+686",Kuwait:"+965",Kyrgyzstan:"+996",Laos:"+856",Latvia:"+371",Lebanon:"+961",Lesotho:"+266",Liberia:"+231",Libya:"+218",Liechtenstein:"+423",Lithuania:"+370",Luxembourg:"+352",Madagascar:"+261",Malawi:"+265",Malaysia:"+60",Maldives:"+960",Mali:"+223",Malta:"+356","Marshall Islands":"+692",Mauritania:"+222",Mauritius:"+230",Mexico:"+52",Micronesia:"+691",Moldova:"+373",Monaco:"+377",Mongolia:"+976",Montenegro:"+382",Morocco:"+212",Mozambique:"+258",Myanmar:"+95",Namibia:"+264",Nauru:"+674",Nepal:"+977",Netherlands:"+31","New Zealand":"+64",Nicaragua:"+505",Niger:"+227",Nigeria:"+234","North Korea":"+850","North Macedonia":"+389",Norway:"+47",Oman:"+968",Pakistan:"+92",Palau:"+680",Palestine:"+970",Panama:"+507","Papua New Guinea":"+675",Paraguay:"+595",Peru:"+51",Philippines:"+63",Poland:"+48",Portugal:"+351",Qatar:"+974",Romania:"+40",Russia:"+7",Rwanda:"+250","Saint Kitts and Nevis":"+1","Saint Lucia":"+1","Saint Vincent and the Grenadines":"+1",Samoa:"+685","San Marino":"+378","Sao Tome and Principe":"+239","Saudi Arabia":"+966",Senegal:"+221",Serbia:"+381",Seychelles:"+248","Sierra Leone":"+232",Singapore:"+65",Slovakia:"+421",Slovenia:"+386","Solomon Islands":"+677",Somalia:"+252","South Africa":"+27","South Korea":"+82","South Sudan":"+211",Spain:"+34","Sri Lanka":"+94",Sudan:"+249",Suriname:"+597",Switzerland:"+41",Syria:"+963",Taiwan:"+886",Tajikistan:"+992",Tanzania:"+255",Thailand:"+66","Timor-Leste":"+670",Togo:"+228",Tonga:"+676","Trinidad and Tobago":"+1",Tunisia:"+216",Turkey:"+90",Turkmenistan:"+993",Tuvalu:"+688",Uganda:"+256",Ukraine:"+380","United Arab Emirates":"+971","United Kingdom":"+44","United States":"+1",Uruguay:"+598",Uzbekistan:"+998",Vanuatu:"+678",Venezuela:"+58",Vietnam:"+84",Yemen:"+967",Zambia:"+260",Zimbabwe:"+263"};h.addEventListener("change",a=>{const e=h.value,i=B[e]||"";C.value=i});var V=document.getElementById("fileInput");V.addEventListener("change",a=>{j()});var z=document.getElementById("contact_form");z.addEventListener("submit",H);function m(a){a.style.borderColor="red"}function p(a){a.addEventListener("focus",()=>{a.style.borderColor=""})}function H(a){a.preventDefault(),q();const e=grecaptcha.getResponse();F();const i=document.querySelector('input[name="first_name"]'),u=document.querySelector('input[name="last_name"]'),c=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),d=i.value.trim(),y=u.value.trim(),S=c.value.trim(),f=r.value.trim();if(p(i),p(u),p(c),p(r),d===""&&m(i),y===""&&m(u),S===""&&m(c),f===""&&m(r),!e||e.length===1){O(),t();return}if(d===""||y===""||S===""||f===""){t();return}const b=document.getElementById("fileInput").files[0];if(b){const n=new XMLHttpRequest,o="https://sanskar.frappe.cloud/api/method/upload_file";n.open("POST",o,!0),n.setRequestHeader("Accept","application/json"),n.onload=function(){if(n.status===200){var L=JSON.parse(n.response),P=L.message.file_url;const M=new FormData(a.target),l=Object.fromEntries(M.entries());M.set("data",JSON.stringify(l));var R=l.first_name,w=l.last_name,K=l.email,k=l.country,D=l.phone,U=l.message;fetch("https://sanskar.frappe.cloud/api/resource/Astro Contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({first_name:R,last_name:w,email:K,country:k,phone:D,message:U,document:P})}).then(g=>{g.status===200?(t(),window.location.href="/thank-you"):(t(),alert("failed"))}).catch(g=>{t(),console.log(g)})}else t(),alert("File upload failed. Please try again later.")},n.onerror=function(){t(),alert("An error occurred while uploading the file.")};const s=new FormData;s.append("file",b),n.send(s),a.preventDefault()}else{const n=new FormData(a.target),o=Object.fromEntries(n.entries());n.set("data",JSON.stringify(o));var E=o.first_name,T=o.last_name,A=o.email,I=o.country,N=o.phone,G=o.message;fetch("https://sanskar.frappe.cloud/api/resource/Astro Contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({first_name:E,last_name:T,email:A,country:I,phone:N,message:G})}).then(s=>{console.log("asdfasd",s),s.status===200?(t(),window.location.href="/thank-you"):(t(),alert("failed"))}).catch(s=>{console.log(s),t()})}}function O(){const a=document.getElementById("recaptcha-error");a.style.display="block",setTimeout(function(){a.style.display="none"},3e3)}function F(){const a=document.getElementById("recaptcha-error");a.style.display="none"}function j(){var a=document.getElementById("fileInput"),e=a.value,i=/(\.jpg|\.pdf|\.png|\.docx|\.txt)$/i;if(!i.exec(e))return alert("Invalid file type only allow .jpg | .pdf | .png | .docx | .txt"),a.value="",!1}const Z={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AD:"Andorra",AO:"Angola",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BR:"Brazil",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",CV:"Cabo Verde",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FJ:"Fiji",FI:"Finland",FR:"France",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GR:"Greece",GD:"Grenada",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",VA:"Holy See",HN:"Honduras",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MR:"Mauritania",MU:"Mauritius",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",KP:"North Korea",MK:"North Macedonia",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PL:"Poland",PT:"Portugal",QA:"Qatar",RO:"Romania",RU:"Russia",RW:"Rwanda",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function v(a){const e=B[a]||"";C.value=e}function J(){fetch("https://ipinfo.io/json?token=219a209c7a5c67").then(e=>e.json()).then(e=>{const i=e.country,u=Z[i]||"Unknown";for(var c=document.getElementById("country"),r=0;r<c.options.length;r++){var d=c.options[r];if(d.value===u){d.selected=!0;break}}v(u)}).catch(e=>{console.error("Error fetching location:",e)})}J();h.addEventListener("change",a=>{const e=h.value;v(e)});function q(){document.body.style.pointerEvents="none",document.body.style.opacity="0.5"}function t(){document.body.style.pointerEvents="auto",document.body.style.opacity="1"}
