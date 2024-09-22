

document.getElementById("color-slider").onchange = (e) => {
    const num = e.target.value;
    document.querySelector(":root").style.setProperty("--red-value", num);
    
    if (num <= 100) {
        document.getElementById("vibe").innerHTML = "cool";
    } else if (num <= 200) {
        document.getElementById("vibe").innerHTML = "Warm";
    } else {
        document.getElementById("vibe").innerHTML = "Red Hot";
    }
};

document.getElementById("toggle-arrow").onclick = () => {
    const arrow = document.getElementById("toggle-arrow");
    const navItems = document.querySelectorAll("nav ul li");

    arrow.classList.toggle("rotate");

    navItems.forEach(item => {
        item.classList.toggle("hidden");
    });
};


document.getElementById("option-one").onclick = () =>{
    const first =document.getElementById("color-slider");
    const second =document.getElementById("image-selector");

    first.classList.toggle("hidden");
    second.classList.toggle("hidden");
};
document.getElementById("option-two").onclick = () =>{
    const first =document.getElementById("color-slider");
    const second =document.getElementById("image-selector");

    first.classList.toggle("hidden");
    second.classList.toggle("hidden");
};



///images
const imageDisplay = document.getElementById("displayed-image");

document.getElementById("small").onclick = () => {
    imageDisplay.src = "https://picsum.photos/100";
    imageDisplay.style.display = "block";
};

document.getElementById("medium").onclick = () => {
    imageDisplay.src = "https://picsum.photos/200";
    imageDisplay.style.display = "block";
};

document.getElementById("large").onclick = () => {
    imageDisplay.src = "https://picsum.photos/300";
    imageDisplay.style.display = "block";
};