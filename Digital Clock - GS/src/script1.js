let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let period=document.getElementById("period")

setInterval(()=>{
    let currentTime=new Date()

    let hours=currentTime.getHours()
    let isPM=hours>=12

    if(hours===0){
        hours=12
    }else if(hours>12){
        hours=hours-12
    }
        
    hrs.innerHTML=((hours<10) ? "0":"") + hours
    min.innerHTML=((currentTime.getMinutes() < 10) ? "0":"") + currentTime.getMinutes()
    sec.innerHTML=((currentTime.getSeconds() < 10) ? "0":"") + currentTime.getSeconds()

    period.innerHTML=isPM ? "PM":"AM"
},1000)
