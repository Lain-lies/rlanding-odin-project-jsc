const content = [];
const NUM_MENU = 3;

const generateMenu = () => {

    const title = document.createElement("h1");
    title.textContent = "Menu";

    const menu = [

        [
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8fDA%3D",
        "The Standard Steak",
        "Anim ex irure do eiusmod deserunt ipsum laboris reprehenderit amet sit nisi sint et."
        ],
    
        [
        "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Tomahawk Steak",
        "Mollit occaecat velit exercitation ullamco mollit in cillum elit elit anim qui id consequat."
        ],
    
        [
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Fettucini Alfredo",
        "Id mollit dolor id et exercitation ipsum ad aliqua eiusmod."
        ]
     
    ];

    const list = document.createElement("ul");
    
    for(let i = 0; i < NUM_MENU; i++){
        
        const tempNode = generateListItem(...menu[i]);
        list.appendChild(tempNode);
    }

    content.push(title);
    content.push(list);

}

function generateListItem(imageLink, name, description){

    const listItem = document.createElement("li");
    
    const listItemChildren = [document.createElement("div"), document.createElement("div")];

    const image = document.createElement("img");
    image.src = imageLink;

    listItemChildren[0].classList.add("image-container");
    listItemChildren[0].appendChild(image);

    const menuName = document.createElement("h2");
    const menuDescription = document.createElement("p");

    menuName.textContent = name;
    menuDescription.textContent = description;

    listItemChildren[1].appendChild(menuName);
    listItemChildren[1].appendChild(menuDescription);

    listItemChildren.forEach(element => {
    
        listItem.appendChild(element);

    });

    return listItem;
}


function appendChildren(parent, children){

    children.forEach(child => {
        
        parent.appendChild(child);

    });

}

function displayMenu(parent){

    generateMenu();
    appendChildren(parent, content);

}


export{displayMenu};