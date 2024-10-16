const icon=document.getElementById("icon")

icon.addEventListener("click",()=>{
    document.body.classList.toggle("toggle")
    if(document.body.classList.contains("toggle")){
        icon.src="../sun.png"
    }else{
        icon.src="../moon.png"
    }
})