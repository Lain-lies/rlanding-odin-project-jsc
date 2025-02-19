import "./styles.css";
import {displayHome, getHomeContent} from "./home.js";
import {displayMenu, getMenuContent} from "./menu.js";
import {displayContact, getContactContent} from "./contact.js";

const contentContainer = document.querySelector("#content");
let currentlyShownContent = getHomeContent();
displayHome(contentContainer);

const imports = [

    {display : displayHome, content : getHomeContent},
    {display : displayMenu, content : getMenuContent} ,
    {display : displayContact, content: getContactContent}

]

const buttons = document.querySelectorAll("nav > *");

for(let i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", () => {
        
        currentlyShownContent.forEach(element => {
            
            contentContainer.removeChild(element);
        });

        imports[i].display(contentContainer);
        
        currentlyShownContent = imports[i].content();

    });
}



