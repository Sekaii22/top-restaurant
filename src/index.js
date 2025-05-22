import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";

const contentDiv = document.querySelector(".content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

function disableActiveTabBtn(btn) {
    // reset
    homeBtn.classList.remove("active-tab-btn");
    menuBtn.classList.remove("active-tab-btn");
    aboutBtn.classList.remove("active-tab-btn");

    btn.classList.add("active-tab-btn");
}

homeBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstChild;
    if (child !== null)
        contentDiv.removeChild(contentDiv.firstChild);
    homePage();
    disableActiveTabBtn(e.currentTarget);
});

menuBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstChild;
    if (child !== null)
        contentDiv.removeChild(contentDiv.firstChild);
    menuPage();
    disableActiveTabBtn(e.currentTarget);
});

aboutBtn.addEventListener("click", (e) => {
    let child = contentDiv.firstChild;
    if (child !== null)
        contentDiv.removeChild(contentDiv.firstChild);
    // aboutPage();
    disableActiveTabBtn(e.currentTarget);
});

homePage();
disableActiveTabBtn(homeBtn);