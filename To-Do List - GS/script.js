const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===""){
        alert("Please write some task")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)  // It adds the li to the listContainer id

        // It adds the cross button (×) side to the li & styling through the css
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }

    // Save data after adding the task from the below function
    saveData();

    // It clears the input field after clicking on the add buton
    inputBox.value=""
}


// Adding event listener for the checked/unchecked and delete list
listContainer.addEventListener("click",(e)=>{

    // It checks if the listCotainer contains the li tag under it
    if(e.target.tagName==="LI"){
        // if the li tag contans then after clicking it, it toggles check and uncheck
        e.target.classList.toggle("checked")
        saveData()
    }

    // if click on the cross button then it would remove the list
    else if(e.target.tagName==="SPAN"){
        // It targets the li parentElement of the span and remove that li parent
        e.target.parentElement.remove()
        saveData()
    }
},false)

// It saves the data in localStorage even after the reload of the page
function saveData(){
    // It sets the listContainer datas in the data
    localStorage.setItem("data",listContainer.innerHTML)
}

// Required after the saveData function, because it helps to show the save data in the page
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask()