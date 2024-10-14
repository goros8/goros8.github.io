// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const exit = document.getElementById("close");
let currentModalImages = [];
let currentModalIndex = 0;

// Open modal when any image is clicked
document.querySelectorAll(".slideshow-img").forEach((img, index, allImages) => {
    img.addEventListener("click", () => {
        console.log("Image clicked:", img.src); // Debugging
        modal.classList.add("show"); // Show the modal
        modalImg.src = img.src; // Set the modal image source

        // Convert NodeList to Array for easier manipulation
        currentModalImages = Array.from(allImages);
        currentModalIndex = index;
    });
});

// Close modal on close button click
exit.addEventListener("click", () => {
    console.log("Close button clicked"); // Debugging
    modal.classList.remove("show"); // Hide the modal
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        console.log("Modal background clicked"); // Debugging
        modal.classList.remove("show"); // Hide the modal
    }
});

// Navigate to the next image in the modal
next.addEventListener("click", () => {
    currentModalIndex = (currentModalIndex + 1) % currentModalImages.length;
    modalImg.src = currentModalImages[currentModalIndex].src; // Update image source
});

// Navigate to the previous image in the modal
prev.addEventListener("click", () => {
    currentModalIndex = (currentModalIndex - 1 + currentModalImages.length) % currentModalImages.length;
    modalImg.src = currentModalImages[currentModalIndex].src; // Update image source
});
