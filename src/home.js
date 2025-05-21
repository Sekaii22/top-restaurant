import lemonBarImage from "./assets/dana-devolk-lemon-bar-unsplash.jpg";
import chocoCakeImage from "./assets/eiliv-aceron-choco-cake-unsplash.jpg"
import croissantImage from "./assets/hannah-fleming-hlll-croissants-unsplash.jpg"
import tiramisuImage from "./assets/karolina-kolodziejczak-tiramisu-unsplash.jpg"

function homePage() {
    const contentDiv = document.querySelector(".content");

    // containers
    const homepageDiv = document.createElement("div");
    const mainContentDiv = document.createElement("div");

    homepageDiv.classList.add("home-page");
    mainContentDiv.classList.add("main-content");
    contentDiv.appendChild(homepageDiv);
    homepageDiv.appendChild(mainContentDiv);

    // content
    const headline = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const cardContainer = document.createElement("div");
    const cardGroup1 = document.createElement("div");
    const cardGroup2 = document.createElement("div");
    const card1 = document.createElement("div");
    const card2 = document.createElement("div");
    const card3 = document.createElement("div");
    const card4 = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");

    headline.classList.add("headline");
    cardContainer.classList.add("card-container");
    cardGroup1.classList.add("card-group");
    cardGroup2.classList.add("card-group");
    card1.classList.add("card");
    card2.classList.add("card");
    card3.classList.add("card");
    card4.classList.add("card");

    headline.textContent = "Welcome to Café.";
    p1.textContent = "Here at our café, we're passionate about crafting exceptional coffee that speaks for itself. Nestled in the heart of the city, our café has become a favorite destination for coffee lovers who appreciate bold flavor, perfect balance, and uncompromising quality.";
    p2.textContent = "We believe great coffee should be more than just a drink—it should be an experience. That's why we've dedicated ourselves to perfecting every cup, using only the finest ethically sourced beans, roasted in small batches for bold flavor and smooth complexity. Recognized as one of the best coffee spots in the city, we invite you to taste the difference.";
    p3.textContent = "But the experience doesn't stop with the coffee.";
    p4.textContent = "Our dessert menu is crafted to complement our brews, offering the perfect balance of sweetness and richness. From flaky, butter-layered croissants to decadent chocolate tortes, tangy lemon bars, and our signature espresso-soaked tiramisu, every bite is made in-house with the same care and quality that goes into our coffee. Whether you're after a quick pick-me-up or an indulgent treat, our coffee and dessert pairings are made to satisfy.";

    img1.src = lemonBarImage;
    img1.alt = "Lemon bar image";
    img2.src = chocoCakeImage;
    img2.alt = "Chocolate cake image";
    img3.src = croissantImage;
    img3.alt = "Croissant image";
    img4.src = tiramisuImage;
    img4.alt = "Tiramisu image";

    mainContentDiv.appendChild(headline);
    mainContentDiv.appendChild(p1);
    mainContentDiv.appendChild(p2);
    mainContentDiv.appendChild(p3);
    mainContentDiv.appendChild(p4);
    mainContentDiv.appendChild(cardContainer);

    cardContainer.appendChild(cardGroup1);
    cardContainer.appendChild(cardGroup2);

    cardGroup1.appendChild(card1);
    cardGroup1.appendChild(card2);
    cardGroup2.appendChild(card3);
    cardGroup2.appendChild(card4);

    card1.appendChild(img1);
    card2.appendChild(img2);
    card3.appendChild(img3);
    card4.appendChild(img4);
}

export { homePage };
