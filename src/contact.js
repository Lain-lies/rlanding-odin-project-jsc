const content = [];
const NUM_CONTACT = 3;

const generateContact = () => {
    
    const title = document.createElement("h1");
    title.textContent = "Contacts";
    content.push(title);

    const contacts = [];
    for(let i = 0; i < 3; i++){
        
        contacts.push(document.createElement("div"));
    }

    contacts.forEach(element => {

        element.classList.add("contact-card");

    });

    const contactDetails = [

        ["Person1", "123456", "Receptionist", "person1@email.com"],
        ["Person2", "123456", "Manager", "person2@email.com"],
        ["Person3", "123456", "Owner", "person3@email.com"]

    ];

    for(let i = 0; i < NUM_CONTACT; i++){

        generateContactDetails(contacts[i], contactDetails[i]);
        content.push(contacts[i]);

    }
    
   
    
}

function generateContactDetails(parentNode, contactDetailsValue){

    const details = [

        document.createElement("h2"),
        document.createElement("p"),
        document.createElement("p"),
        document.createElement("p")
    ]
    
    for(let i = 0; i < 4; i++){

        details[i].textContent = contactDetailsValue[i];

    }

    details.forEach(element => {

        parentNode.appendChild(element);

    });
    
}

function appendChildren(parent, children){

    children.forEach(child => {
        
        parent.appendChild(child);

    });

}

function displayContact(parent){

    generateContact();
    appendChildren(parent, content);

}


export{displayContact};    