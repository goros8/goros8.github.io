const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};
document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    showSuccessModal();
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if(httpResult.status == 200){
        result.innerHTML ="Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email wasn't sent";
    }
}

// const addressInput = document.getElementById("address");
//         const mapIframe = document.getElementById("map");

//         // Listen for address input changes
//         addressInput.addEventListener("input", () => {
//             const address = addressInput.value;
//             if (address) {
//                 const encodedAddress = encodeURIComponent(address);
//                 const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;
//                 mapIframe.src = mapSrc;
//             }
//         });




// Modal
        function showSuccessModal() {
            const modal = document.getElementById("successModal");
            modal.style.display = "block";
        }
        document.querySelector(".close").onclick = function() {
            const modal = document.getElementById("successModal");
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            const modal = document.getElementById("successModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };