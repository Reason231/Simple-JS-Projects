
let [seconds,minutes,hours]=[0,0,0]
let displayTime=document.getElementById("displayTime")
let timer=null;

function stopWatch(){
    seconds+=1
        if(seconds==60){
            seconds=0;
            minutes+=1
                if(minutes==60){
                    minutes=0;
                    hours+=1
        }
    }

    // To shows the time with 0 infront of all, like: 01
    let h=hours < 10 ? "0" + hours : hours;
    let m=minutes < 10 ? "0" + minutes : minutes;
    let s=seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML=h+":"+m+":"+s;
}

// It starts the watch
function watchStart(){

    // When timer is not null, it means an interval is already running.
    if(timer!==null){
        //  Clears any existing interval to prevent multiple intervals from running simultaneously.
        clearInterval(timer);
    }

    // When the first time stopwatch starts. it assigned the value to the timer and now it doesn't become the null
    timer=setInterval(stopWatch, 1000);
}

// It stops the watch
function watchStop(){
    clearInterval(timer)
}

// It resets the timer
function watchReset() {
    clearInterval(timer);  // Stop the interval
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = "00:00:00";  // Reset the display
}



