let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period"); // Reference to the AM/PM element

setInterval(() => {
    let currentTime = new Date();
    
    let hours = currentTime.getHours();
    let isPM = hours >= 12;  // Check if it's PM
    

    if (hours === 0) {
        hours = 12;  // Midnight case
    } else if (hours > 12) {
        hours = hours - 12;  // Convert to 12-hour format
    }

    // Update the clock display
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    
    // Update the AM/PM indicator
    period.innerHTML = isPM ? "PM" : "AM";  // Display AM/PM

}, 1000);
