let eyeicon=document.getElementById("eyeicon")
let password=document.getElementById("password")

eyeicon.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type="text"
        eyeicon.src="../eye-icons/eye-open.png"
    }
    else{
        password.type="password"
        eyeicon.src="../eye-icons/eye-close.png"
    }
})