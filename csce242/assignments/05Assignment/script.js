



let clicks= 0;

document.getElementById("counter").onclick = () => {
    clicks++;
    document.getElementById("count").innerHTML = clicks;
};


document.getElementById("rSelection").onclick = () => {
    location.reload();
};

const slider = document.getElementById("slider");
const square = document.getElementById("square");

slider.oninput = () => {
    square.style.left = slider.value + "px";
};
