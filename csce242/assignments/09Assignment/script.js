class Bird {
    constructor(title, species, color, age, habitat, pic) {
        this.title = title;
        this.species = species;
        this.color = color;
        this.age = age;
        this.habitat = habitat;
        this.pic = pic;
    }

    createImage() {
        const imgElement = document.createElement("img");
        imgElement.src = this.pic;
        return imgElement;
    }

    get section() {
        const section = document.createElement("section");
        section.classList.add("bird-section");

        const titleElement = document.createElement("h2");
        titleElement.innerHTML = this.title;
        section.appendChild(titleElement);

        section.appendChild(this.createImage());

        return section;
    }

    get expandedSection() {
        const section = document.createElement("div");
        section.classList.add("bird-expanded-section");
    
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

const birds = [
    new Bird("Sparrow", "Passeridae", "Brown", 2, "Urban Areas", "images/sparrow.jpg"),
    new Bird("Peacock", "Pavo Cristatus", "Multicolored", 4, "Forests", "images/peacock.jpg"),
    new Bird("Eagle", "Aquila Chrysaetos", "Dark Brown", 5, "Mountains", "images/eagle.jpg"),
    new Bird("Penguin", "Spheniscidae", "Black & White", 3, "Polar Regions", "images/penguin.jpg")
];

function displayBirds() {
    const birdList = document.getElementById("bird-list");

    birds.forEach((bird) => {
        const birdSection = bird.section;

        birdSection.addEventListener("click", () => {
            const modal = document.getElementById("bird-modal");
            const modalContent = document.getElementById("modal-content");

            modalContent.innerHTML = "";

            modalContent.appendChild(bird.expandedSection);

            modal.style.display = "flex";
        });

        birdList.appendChild(birdSection);
    });
}

window.onload = function() {
    displayBirds();
};
