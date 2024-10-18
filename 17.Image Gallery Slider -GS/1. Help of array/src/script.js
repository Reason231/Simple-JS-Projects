const back = document.getElementById("back");
const next = document.getElementById("next");

let img1 = document.getElementById("1");
let img2 = document.getElementById("2");
let img3 = document.getElementById("3");

let images = [
    "../images/image-1.png",
    "../images/image-2.png",
    "../images/image-3.png",
    "../images/image-4.png",
    "../images/image-5.png",
    "../images/image-6.png"
];

let currentIndex = 0;  // Start from the first image

// Initialize with the first set of images
updateImages();

// Function to update the images
function updateImages() {
    img1.src = images[currentIndex % images.length];        // 0 at initial, after the next button clicked currentIndex becomes 1=> 1%6 at second
    img2.src = images[(currentIndex + 1) % images.length];  // 1 at inital
    img3.src = images[(currentIndex + 2) % images.length];  // 2 % 6 means 2 is divided by 6, and it can't be divided so remainder is 2.
}

// Event listener for next button
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;  // Here it updates the currentIndex and it becomes 1.
    updateImages();  // After the currentIndex becomes 1, it calls to the updateImages and the currentIndex will be become 1%6
});

// Event listener for back button
back.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // Decrement and wrap around
    updateImages();  // Update displayed images
});


