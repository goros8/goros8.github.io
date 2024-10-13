const getJSON = async() => {
    const url = `https://portiaportia.github.io/json/ice-creams.json`;
    try {
        const response = await fetch(url);
        return response.json();

    } catch(error){
        console.error(error);
    }
};

const displayIceCream = async () =>{
    const list = await getJSON();
    list.forEach(flavor => {
        document.getElementById("container").append(getInfo(flavor));

    });

};

const getInfo = (flavor) => {
    const section = document.createElement("section");

    const img = document.createElement("img");
    
    const imgURL = `https://portiaportia.github.io/json/images/ice-creams/`;
    img.src = `${imgURL}${flavor.image}`;
    img.alt = flavor.name;
    img.classList.add("ice-cream-image");

    const label = document.createElement("div");
    label.innerHTML = flavor.name;
    label.classList.add("label");
    label.classList.add("hidden");

    section.append(img);
    section.append(label);

    section.addEventListener("mouseover", () => {
        label.classList.remove("hidden");
    });

    section.addEventListener("mouseout", () => {
        label.classList.add("hidden");
    });

    return section;
};
displayIceCream();