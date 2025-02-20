export const generateHome = () => {

    const NUM_DAYS_A_WEEK = 7;
    const content = [];

    const intro = document.createElement("div");
    const introChildren = [document.createElement("h1"), document.createElement("p"), document.createElement("p")];
    introChildren[0].textContent = "The Elf Steak House";
    introChildren[1].textContent = "Step into a world of enchantment where the aroma of sizzling steaks fills the air. At Elf Steakhouse, we blend the finest cuts with age-old elven culinary traditions, crafting meals that delight the senses. Whether you seek a hearty feast or a mystical dining experience, our menu offers a taste of magic in every bite."
    introChildren[2].textContent = "Come dine with us and discover flavors worthy of legends!"

    intro.classList.add("introduction");
    appendChildren(intro, introChildren);

    const hourList = document.createElement("ul");
    const hour = [];

    for(let i = 0; i < NUM_DAYS_A_WEEK; i++){

        hour.push(document.createElement("li"));
    }


    hour[0].textContent = "Monday: 11:00 AM - 10:00 PM";
    hour[1].textContent = "Tuesday: 11:00 AM - 10:00 PM";
    hour[2].textContent = "Wednesday: 11:00 AM - 10:00 PM";
    hour[3].textContent = "Thursday: 11:00 AM - 10:00 PM";
    hour[4].textContent = "Friday: 11:00 AM - 10:00 PM";
    hour[5].textContent = "Saturday: 11:00 AM - 10:00 PM";
    hour[6].textContent = "Sunday: 11:00 AM - 10:00 PM";

    hourList.classList.add("schedule");

    appendChildren(hourList, hour);

    content.push(intro);
    content.push(hourList);

    return content;

}

function appendChildren(parent, children){

    children.forEach(child => {
        
        parent.appendChild(child);

    });

}
