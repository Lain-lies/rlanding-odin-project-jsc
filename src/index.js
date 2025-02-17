import "./styles.css";
import {displayHome} from "./home.js";
import {menuTest}from "./menu.js";
import {contactTest} from "./contact.js";

// console.log(`test connection ${homeTest}, ${menuTest}, ${contactTest}`);

const contentContainer = document.querySelector("#content");

displayHome(contentContainer);