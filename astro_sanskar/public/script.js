console.log("loaded custom javascript")

console.log("frappe user", frappe.session.user)


const div = document.createElement('div')
div.className = 'overflow-y-scroll lg:h-[26rem] md:h-[36rem] h-full'
div.id = 'messages'
// document.getElementById('a').appendChild(div)
document.body.appendChild(div)


    var token = window.localStorage.getItem("chat_token")
    if (!token){
        window.localStorage.setItem("chat_token", Math.random().toString(36).substr(2))
    }

    const chat_icon = document.getElementById("chat_icon");
    const chat_popup = document.getElementById("chat_popup");
    const close_btn = document.getElementById("close_btn");
    const chat_message = document.getElementById("chat_message");
    var form = document.getElementById("chat_form");
    
    get_messages()
    
    frappe.realtime.on('latest_chat_updates', function (res) {
        console.log("real time", res)
    })
    
    function get_messages()
    {
        fetch(`https://sanskar.frappe.cloud/api/resource/Astro Site Chat?filters=[["token", "=", "efwpyg4gt0k"]]&fields=["name", "date", "message", "read", "is_owner"]&order_by=date asc`,{
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    }).then(response => response.json())
                        .then(data => {
                            var messages = data.data
                            for (let i = 0; i < messages.length; i++) {
                                console.log(messages[i])

                                if (messages[i].is_owner == 1){

                                    const container = document.getElementById('messages');

                                    // Create the outermost div element with classes
                                    const outerDiv = document.createElement('div');
                                    outerDiv.className = 'px-2 pt-2 text-right ml-5 mt-5';

                                    // Create the message paragraph element
                                    const messageParagraph = document.createElement('p');
                                    messageParagraph.className = 'text-white !text-left bg-[#3E96F4] text-xs lg:text-base md:text-sm p-4 py-2 rounded-l-[10px] rounded-b-[10px] inline-block';
                                    messageParagraph.textContent = messages[i].message;

                                    // Create the inner flex container
                                    const innerFlexContainer = document.createElement('div');
                                    innerFlexContainer.className = 'flex items-center justify-end';

                                    // Create the timestamp paragraph element
                                    const timestampParagraph = document.createElement('p');
                                    timestampParagraph.className = 'text-[#9A9A9A] text-xs lg:text-sm md:text-xs';
                                    timestampParagraph.textContent = formatDateToAMPM(messages[i].date);

                                    // Create the image element
                                    const imageElement = document.createElement('img');
                                    if (messages[i].read == 1)
                                    {
                                        imageElement.src = 'https://sanskartechnolab.com/files/double_right.svg';
                                    }
                                    else{
                                        imageElement.src = 'https://sanskartechnolab.com/files/single_right.svg';
                                    }
                                    imageElement.alt = 'single tick';
                                    imageElement.className = "w-4 h-4 ml-2";

                                    // Append elements to their respective parents
                                    innerFlexContainer.appendChild(timestampParagraph);
                                    innerFlexContainer.appendChild(imageElement);
                                    outerDiv.appendChild(messageParagraph);
                                    outerDiv.appendChild(innerFlexContainer);
                                    container.appendChild(outerDiv);
                                }
                                else{
                                    // if message recived by admin

                                    const container = document.getElementById('messages');

                                    // Create the outermost div element with classes
                                    const outerDiv = document.createElement('div');
                                    outerDiv.className = 'px-2 pt-2 mr-5 mt-5';

                                    // Create the message paragraph element
                                    const messageParagraph = document.createElement('p');
                                    messageParagraph.className = 'text-[#31393C] bg-[#F6F9FB] text-xs lg:text-base md:text-sm p-4 py-2 rounded-r-[10px] rounded-b-[10px] inline-block';
                                    messageParagraph.textContent = messages[i].message;

                                    // Create the inner relative span container
                                    const innerSpan = document.createElement('span');
                                    innerSpan.className = 'relative';

                                    // Create the timestamp paragraph element within the span
                                    const timestampParagraph = document.createElement('p');
                                    if (messages[i].message.length < 5)
                                    {
                                        timestampParagraph.className = 'text-[#9A9A9A] lg:text-sm md:text-xs text-xs absolute -right-8 whitespace-nowrap overflow-visible';
                                    }
                                    else if(messages[i].message.length <= 10){
                                        timestampParagraph.className = 'text-[#9A9A9A] lg:text-sm md:text-xs text-xs absolute -right-3 whitespace-nowrap overflow-visible';
                                    }
                                    else{
                                        timestampParagraph.className = 'text-[#9A9A9A] lg:text-sm md:text-xs text-xs absolute right-0 whitespace-nowrap overflow-visible';
                                    }
                                    timestampParagraph.textContent = formatDateToAMPM(messages[i].date);
                                    // timestampParagraph.textContent = messages[i].message.length;

                                    // Append elements to their respective parents
                                    innerSpan.appendChild(timestampParagraph);
                                    outerDiv.appendChild(messageParagraph);
                                    outerDiv.appendChild(innerSpan);
                                    container.appendChild(outerDiv);
                                }

                            }

                        })  
                        
    }

    function show_popup(){
        chat_popup.classList.remove("hidden")
        chat_icon.classList.add("hidden")
        get_messages()
        // const messages = document.getElementById("messages");
        // messages.scrollTop = messages.scrollHeight;
    }   

    function close_popup(){
        chat_popup.classList.add("hidden")
        chat_icon.classList.remove("hidden")
    }

    console.log("ip", get_ip())
    function send_message(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        formData.set("data", JSON.stringify(data));
        var message = data.chat_message;

        if (message === ""){
            chat_message.classList.add("!border", "!border-red-500")
        }
        else{
            fetch("https://sanskar.frappe.cloud/api/resource/Astro Site Chat",{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: message,
                        token: token,
                        is_owner: 1,
                        // ip: get_ip()
                    })
                    }).then((res) => {
                    if(res.status === 200){
                        // alert("Your Message is Sent.")
                        chat_message.value = ""
                    }
                    else{
                        alert("faild to send message")
                    }
                }).catch((error) => {
                    console.log(error)
                })            


        }
    }

    function remove_error_class(){
        chat_message.classList.remove("!border", "!border-red-500")
    }
    
    function formatDateToAMPM(dateTimeString) {
        // Parse the input date string
        const date = new Date(dateTimeString);

        // Get the hours and minutes
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Determine whether it's AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

        // Add leading zero to minutes if needed
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        // Format the result as "hh:mm AM/PM"
        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

        return formattedTime;
    }

    function get_ip() {
        // Return a Promise that resolves with the IP address
        return new Promise((resolve, reject) => {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ipAddress = data.ip;
                    console.log('Public IP Address:', ipAddress);
                    resolve(ipAddress); // Resolve the Promise with the IP address
                })
                .catch(error => {
                    console.error('Error fetching IP address:', error);
                    reject(error); // Reject the Promise with the error
                });
        });
    }

    // Usage example:
    get_ip()
        .then(ipAddress => {
            console.log('Received IP Address:', ipAddress);
        })
        .catch(error => {
            console.error('Error:', error);
        });
          