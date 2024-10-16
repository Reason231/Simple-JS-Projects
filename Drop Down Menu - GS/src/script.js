const menu=document.getElementById("menu")
const list=document.getElementById("list")
const li=document.querySelectorAll("li")
const arrow=document.getElementById("arrow")

menu.addEventListener("click",()=>{
    list.classList.toggle("active")
    arrow.classList.toggle("active")
    
})

li.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.textContent)
        menu.value=element.textContent
        list.classList.toggle("active")
    arrow.classList.toggle("active")
 
    })
});