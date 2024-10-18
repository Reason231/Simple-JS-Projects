let scrollContainer=document.querySelector(".gallery")
let backBtn=document.getElementById("backBtn")
let nextBtn=document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel",(evt)=>{
    // It stops the default feature of scrolling the webpage
    evt.preventDefault()

    // Go on 1 image and scroll the mouse wheel down
    scrollContainer.scrollLeft +=evt.deltaY
})


nextBtn.addEventListener("click",()=>{
    // It helps to see the new image.
    scrollContainer.scrollLeft+=900
})

backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900
    
})