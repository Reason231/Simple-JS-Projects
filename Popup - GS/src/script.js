const container=document.getElementById("container")
const submitbtn=document.getElementById("submitbtn")

submitbtn.addEventListener("click",(e)=>{
    container.style.visibility="visible"
    container.style.transform = "translateY(0px)";
    submitbtn.style.visibility="hidden"
})