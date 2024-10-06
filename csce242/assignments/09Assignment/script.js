class Bird {
    constructor(title, species, color, age, habitat, pic) {
        this.title = title;
        this.species = species;
        this.color = color;
        this.age = age;
        this.habitat = habitat;
        this.pic = pic;
    }

    // Helper method to create an image element
    createImage() {
        const imgElement = document.createElement("img");
        imgElement.src = this.pic;
        return imgElement;
    }

    // Method to return a section with just the title and image
    get section() {
        const section = document.createElement("section");
        section.classList.add("bird-section");

        const titleElement = document.createElement("h2");
        titleElement.innerHTML = this.title;
        section.appendChild(titleElement);

        // Append the image
        section.appendChild(this.createImage());

        return section;
    }

    get expandedSection() {
        const section = document.createElement("div");
        section.classList.add("bird-expanded-section"); // Flex container for both columns
    
        // Left column (bird details)
        const section1 = document.createElement("div");
        section1.classList.add("bird-info");
    
        const titleElement = document.createElement("h2");
        titleElement.innerHTML = this.title;
        section1.appendChild(titleElement);
    
        const speciesElement = document.createElement("p");
        speciesElement.innerHTML = `Species: ${this.species}`;
        section1.appendChild(speciesElement);
    
        const colorElement = document.createElement("p");
        colorElement.innerHTML = `Color: ${this.color}`;
        section1.appendChild(colorElement);
    
        const ageElement = document.createElement("p");
        ageElement.innerHTML = `Age: ${this.age} years`;
        section1.appendChild(ageElement);
    
        const habitatElement = document.createElement("p");
        habitatElement.innerHTML = `Habitat: ${this.habitat}`;
        section1.appendChild(habitatElement);
    
        const section2 = document.createElement("div");
        section2.classList.add("bird-image-container");
    
        section2.appendChild(this.createImage());
    
        section.appendChild(section1);
        section.appendChild(section2);
        return section;
    }
}

// Create an array of bird objects
const birds = [
    new Bird("Sparrow", "Passeridae", "Brown", 2, "Urban Areas", "images/sparrow.jpg"),
    new Bird("Peacock", "Pavo Cristatus", "Multicolored", 4, "Forests", "images/peacock.jpg"),
    new Bird("Eagle", "Aquila Chrysaetos", "Dark Brown", 5, "Mountains", "images/eagle.jpg"),
    new Bird("Penguin", "Spheniscidae", "Black & White", 3, "Polar Regions", "images/penguin.jpg")
];

// Function to add all birds to the DOM
function displayBirds() {
    const birdList = document.getElementById("bird-list");

    birds.forEach((bird) => {
        // Create a bird section (title + image)
        const birdSection = bird.section;

        // Add a click event listener to show expanded information in the modal
        birdSection.addEventListener("click", () => {
            const modal = document.getElementById("bird-modal");
            const modalContent = document.getElementById("modal-content");

            // Clear existing modal content
            modalContent.innerHTML = "";

            // Append the expanded section of the clicked bird
            modalContent.appendChild(bird.expandedSection);

            // Show the modal
            modal.style.display = "flex";
        });

        // Append the bird section to the bird list
        birdList.appendChild(birdSection);
    });
}

window.onload = function() {
    displayBirds();
};
