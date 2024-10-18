const createbtn = document.querySelector(".createbtn");
const ul = document.getElementById("ul");

createbtn.addEventListener("click", () => {
  // Create a new li element
  let li = document.createElement("li");
  
  // Add textarea and delete button inside the li
  li.innerHTML = `
    <textarea id="autoExpand"></textarea>
    <img id="deletebtn" src="../notes-app-img/images/delete.png" style="cursor: pointer;">
  `;

  // Append the li to the ul
  ul.appendChild(li);

  // Select the delete button that was just added inside the li
  const deletebtn = li.querySelector("#deletebtn");

  // Add event listener to the delete button to remove the note
  deletebtn.addEventListener("click", () => {
    li.remove(); // Remove the li (note) when the delete button is clicked
  });
});

// Function to auto-expand the height of the textarea as the user types
document.addEventListener("input", function (event) {
  if (event.target.tagName.toLowerCase() === "textarea") {
    autoExpand(event.target);
  }
});

function autoExpand(textarea) {
  textarea.style.height = "auto"; // Reset height to auto
  textarea.style.height = textarea.scrollHeight + "px"; // Set new height based on content
}
