let lists = document.getElementsByClassName("list")
let rightBox=document.getElementById("right")
let leftBox=document.getElementById("left")

for(list of lists){
    list.addEventListener("dragstart",function(e){
        // The clicked item will be saved in the selected variable
        let selected=e.target


        // dragover: This event is triggered when an item is dragged over a target (in this case, the rightBox or leftBox).
        // e.preventDefault(): This method tells the browser to allow the drop to happen. Without it, the dragged item will not be allowed to be dropped into the container.
        rightBox.addEventListener("dragover",function(e){
            e.preventDefault()
        })

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected)
            // After the drag and drop of one item, it will be null so that we can select another item
            selected=null;
        })


        // To drag from the right box to left box
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault()
        })

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected)
            // After the drag and drop of one item, it will be null so that we can select another item
            selected=null;
        })
    })
}