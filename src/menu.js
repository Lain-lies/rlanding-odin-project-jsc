const NUM_DAYS_A_WEEK = 7;
const content = [];
const generateMenu = () => {
    

    const title = document.createElement("h1");
    title.textContent = "Menu";

    const list = document.createElement("ul");
    

}



function appendChildren(parent, children){

    children.forEach(child => {
        
        parent.appendChild(child);

    });

}

function displayHome(parent){

    appendChildren(parent, content);

}


generateListItem();
export{displayHome};