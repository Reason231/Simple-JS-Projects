var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

// if we refresh the page, then it gets the localStorage value and sets it.
// parseInt converts the string into integer
let dayTime = parseInt(localStorage.getItem("days")) || 7;
let hoursTime = parseInt(localStorage.getItem("hours")) || 24;
let minuteTime = parseInt(localStorage.getItem("minutes")) || 60;
let secondTime = parseInt(localStorage.getItem("seconds")) || 60;

function timer() {
    setInterval(() => {
        secondTime--;
        if (secondTime < 0) {
            secondTime = 59;
            minuteTime--;
        }
        if (minuteTime < 0) {
            minuteTime = 59;
            hoursTime--;
        }
        if (hoursTime < 0) {
            hoursTime = 23;
            dayTime--;
        }

        if (dayTime < 0) {
            clearInterval(timer); // Stop the timer if days reach zero
            dayTime = 0;
            hoursTime = 0;
            minuteTime = 0;
            secondTime = 0;
        }

        seconds.innerHTML = secondTime;
        minutes.innerHTML = minuteTime;
        hours.innerHTML = hoursTime;
        days.innerHTML = dayTime;

        localStorage.setItem("seconds", secondTime);
        localStorage.setItem("minutes", minuteTime);
        localStorage.setItem("hours", hoursTime);
        localStorage.setItem("days", dayTime);
    }, 1000);
}

window.onload = () => {
    seconds.innerHTML = secondTime;
    minutes.innerHTML = minuteTime;
    hours.innerHTML = hoursTime;
    days.innerHTML = dayTime;
}

timer();
