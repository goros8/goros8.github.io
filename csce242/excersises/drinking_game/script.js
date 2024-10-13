const getLiquor = async (liquorType) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquorType}`;
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(`Error fetching ${liquorType}:`, error);
    }
};

const displayLiquorInfoInModal = async (liquorType) => {
    const data = await getLiquor(liquorType);

    if (data && data.ingredients && data.ingredients.length > 0) {
        const liquorInfo = data.ingredients[0];

        const liquorInfoDiv = document.getElementById("liquor-info");
        liquorInfoDiv.innerHTML = `
            <h3>${liquorInfo.strIngredient}</h3>
            <p><strong>Description:</strong> ${liquorInfo.strDescription || "No description available."}</p>
            <p><strong>Type:</strong> ${liquorInfo.strType || "Unknown"}</p>
            <p><strong>Alcohol Content:</strong> ${liquorInfo.strAlcohol === "Yes" ? `${liquorInfo.strABV}% ABV` : "Non-alcoholic"}</p>
        `;

        const modal = document.getElementById("liquorModal");
        modal.style.display = "block";
    } else {
        console.error(`No data available for ${liquorType}`);
    }
};

const setupModal = () => {
    const modal = document.getElementById("liquorModal");
    const closeBtn = document.querySelector(".close");

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    const liquorCategories = document.querySelectorAll('.liquors');
    
    liquorCategories.forEach(category => {
        category.onclick = () =>{
            const liquorType = this.id;
            displayLiquorInfoInModal(liquorType);
        };
    });
};

setupModal();
