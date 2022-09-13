//Global Variables
const sections = document.querySelectorAll("section");
const navBar = document.querySelector('#navbar__list');
//adds Class if section is in the field of view
function classActivation(visible, section) {
    if (visible) {
        section.classList.add("your-active-class");
        document.querySelector(`[href="#${section.id}"]`)?.classList.add("your-active-class");
    }
    else {
        section.classList.remove("your-active-class");
        document.querySelector(`[href="#${section.id}"]`)?.classList.remove("your-active-class");
    };
}
/**
 * Function to create NavBar
 * loops over each section and creates a li 
 * element with implemented anchorlink
 * */
sections.forEach(element => {
    const navBarItem = document.createElement("li");
    const sectionData = element.dataset.nav;
    const sectionId = element.id;
    navBarItem.innerHTML=`<a href="#${sectionId}">${sectionData}</a>`;
    navBar.append(navBarItem);
});
//Function to toggle responsive navBar
function toggleNavbar() {
    let responsiveNav = document.querySelector("#navbar__list");
    if (responsiveNav.className === "navbar__menu") {
        responsiveNav.className += " responsive";
    } else {
        responsiveNav.className = "navbar__menu";
    }
  }
// Add class 'active' to section when near top of viewport
function makeActive() {
    sections.forEach(section => {
        const sectionOffset = section.getBoundingClientRect().top;
        function viewport() {
            return sectionOffset < 150 && sectionOffset >= -150;
        };
        classActivation(viewport(), section);
    });
}
document.addEventListener("scroll", makeActive);
// Scroll to anchor ID using scrollTO event
let navBarItems = document.querySelectorAll("li");
navBarItems.forEach((item, n) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const link = document.getElementById("section"+(n+1));;
        link.scrollIntoView({behavior:"smooth", block:"start"})
    });
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active