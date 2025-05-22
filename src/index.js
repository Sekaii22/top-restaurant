import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";

const contentDiv = document.querySelector(".content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactUsBtn = document.querySelector("#contact-btn");

function disableActiveTabBtn(btn) {
    // reset
    homeBtn.classList.remove("active-tab-btn");
    menuBtn.classList.remove("active-tab-btn");
    contactUsBtn.classList.remove("active-tab-btn");

    btn.classList.add("active-tab-btn");
}

homeBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstElementChild;
    if (child !== null)
        contentDiv.removeChild(child);
    homePage();
    disableActiveTabBtn(e.currentTarget);
});

menuBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstElementChild;
    if (child !== null)
        contentDiv.removeChild(child);
    menuPage();
    disableActiveTabBtn(e.currentTarget);
});

contactUsBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstElementChild;
    if (child !== null)
        contentDiv.removeChild(child);
    // aboutPage();
    disableActiveTabBtn(e.currentTarget);
});

// homePage();
// disableActiveTabBtn(homeBtn);