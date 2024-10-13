

const getInfo = async() =>{
    const url = "https://api.openbrewerydb.org/breweries"

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showInfo = async()=>{
    const info = await getInfo();
    info.forEach((item)=>{
        document.getElementById("breweries-section").append(getInfoSection(item));
    });
};

const getInfoSection = (item)=>{
    const section = document.createElement("section");
    const link = document.createElement("a");
    const web = item.website_url;
    link.href = web;
    section.append(link);

    const h3= document.createElement("h3");
    h3.innerHTML = item.name;
    link.append(h3);
};

showInfo();