const hamburger=document.querySelector(".hamburger")
const togglebar=document.querySelector(".togglebar")

hamburger.addEventListener("click",(a)=>{
    togglebar.style.transform="translateX(0)"   // Yesle chai transistion garera 0vw samma launcha
    togglebar.style.transform="translateY(-2vw)"  
    hamburger.style.visibility = "hidden"
})

const close=document.querySelector(".closebtn")
close.addEventListener("click",(b)=>{
    togglebar.style.transform="translateX(-100vw)"
    hamburger.style.visibility="visible"
})

