const icon=document.getElementById("icon")

icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        icon.src="../sun.png"
    }
    else{
        icon.src="../moon.png"
    }
})