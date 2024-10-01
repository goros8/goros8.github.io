


// const canvas = document.getElementById("canvas");
const parentElement = document.querySelector('#canvas');
const parentWidth = parentElement.offsetWidth;
const parentHeight = parentElement.offsetHeight;
const errorMessage = document.getElementById("error-message");

document.getElementById("draw-btn").onclick= () => {
    const numStars = parseInt(document.getElementById("stars-input").value);
    canvas.innerHTML = ``;

    if (numStars < 0) {
        errorMessage.innerHTML = "Please enter a non-negative number.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    for(let i = 0; i<numStars;i++){
        const div = document.createElement("div");
        div.classList.add("star");

        const starSize = 50;
        
        const randomTop = Math.random() * (parentHeight - starSize);
        const randomLeft = Math.random() * (parentWidth - starSize);
        div.style.top = `${randomTop}px`;
        div.style.left = `${randomLeft}px`;
        div.onclick = () => {
            displayStarMessage(i + 1); // 1-indexed
        };
        parentElement.append(div);

    }
};
const displayStarMessage = (starNumber) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `You clicked on Star #${starNumber}`;
    messageDiv.style.position = "absolute";
    messageDiv.style.top = "45%";
    messageDiv.style.left = "38%";
    messageDiv.style.backgroundColor = "white";
    messageDiv.style.color = "black";
    messageDiv.style.padding = "10px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.zIndex = "1000";

    parentElement.append(messageDiv);

    
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);
};