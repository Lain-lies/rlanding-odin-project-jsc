import "./styles.css";
import {generateHome} from "./home.js";
import {generateMenu} from "./menu.js";
import {generateContact} from "./contact.js";

function init(){

    const pageContent = [generateHome(), generateMenu(), generateContact()];
    const contentContainer = document.querySelector("#content");
    const buttons = document.querySelectorAll("nav > *");
    
    let currentlyShownContent = pageContent[0];
    appendAll(contentContainer, currentlyShownContent);

    for(let i = 0; i < buttons.length; i++){
        
        buttons[i].addEventListener("click", () => {
            
            removeAll(contentContainer, currentlyShownContent); 
            currentlyShownContent = pageContent[i];
            appendAll(contentContainer, currentlyShownContent);

        });
    }

}

function appendAll(parent, children){
    
    children.forEach(element => {
        
        parent.appendChild(element);
    });

}

function removeAll(parent, children){

    children.forEach(element => {
        
        parent.removeChild(element);
    })
    
}
init();
