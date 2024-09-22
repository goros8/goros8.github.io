// when the hamburger is clicked toggle between showing and hiding the nav items
const burger = document.getElementById("toggle-nav");
burger.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}

// dont go to links destination when clicked
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault();//dont go to the links destination
    console.log("link was clicked");
}
// change the color of the ball

document.getElementById("txt-color").onchange = (e)=>{
    // document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
}

// move the ball down when the button is clicked
let pos= 0;
document.getElementById("down").onclick= ()=>{
    pos+=10;
    console.log(pos);
    document.getElementById("ball").style.setProperty("top", pos +"px");
}
// show the color message
document.getElementById("btn-show-color").onclick= ()=> {
    const color= document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";
    
    if(color== "red"){
        messageP.innerHTML="red is for anger";
        mood = "angry";
    }
    else if(color== "blue"){
        messageP.innerHTML="blue is for sadness";
        mood = "sad";
    }
    else{
        messageP.innerHTML="thats a fun color"
        mood = "mysterious";
    }

    messageP.innerHTML = `you chose ${color} so you are ${mood}`;

}

// donations
// get the number
document.getElementById("btn-donations").onclick= ()=>{
    const donation = document.getElementById("txt-donations").value;
    if(isNaN(donation) || donation<=0){
        document.getElementById("error-donations").classList.add("error");
        document.getElementById("error-donations").innerHTML=(`invalid donation type: ${donation}`);
        
    }else{
        const percent = donation/10000;
        const showP = percent *100;
        document.getElementById("error-donations").classList.remove("error");
        document.getElementById("error-donations").innerHTML = (showP +"%");
        document.querySelector(":root").style.setProperty("--funds", showP+"%");
    }
}









