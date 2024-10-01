const images = [
    {
        src: "images/rain.jpg",
        title: "Rain",
        description: "Need my Umbrella"
    },
    {
        src: "images/birthday.jpg",
        title: "Birthday",
        description: "Yay! Make a wish!"
    },
    {
        src: "images/clown.jpg",
        title: "Clown",
        description: "Clowns are scary"
    },
    {
        src: "images/read.jpg",
        title: "Reading",
        description: "I love Books!"
    },
    {
        src: "images/shovel.jpg",
        title: "Shovel",
        description: "Get to digging"
    },
    {
        src: "images/work.jpg",
        title: "Work",
        description: "Work hard play hard"
    }
];

const loadImages = () => {
    const picturesContainer = document.getElementById("pictures");
    const header = document.getElementById("header");

    images.forEach(image => {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image-item");
        const imgElement = document.createElement("img");
        imgElement.src = image.src;

        imageDiv.appendChild(imgElement);

        
        imgElement.onclick = () => {
            header.innerHTML = `<h3>${image.title}</h3><p>${image.description}</p>`;
        };

        picturesContainer.appendChild(imageDiv);
    });
};

window.onload = loadImages;
