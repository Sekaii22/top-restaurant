import blackCoffeeImage from "./assets/olena-bohovyk-black-unsplash.jpg";
import cappucinoImage from "./assets/kitera-dent-cappuccino-unsplash.jpg";
import mochaImage from "./assets/pexels-fallon-michael-mocha.jpg";
import lemonBarImage from "./assets/dana-devolk-lemon-bar-unsplash.jpg";
import chocoCakeImage from "./assets/eiliv-aceron-choco-cake-unsplash.jpg";
import tiramisuImage from "./assets/karolina-kolodziejczak-tiramisu-unsplash.jpg";
import croissantImage from "./assets/hannah-fleming-hlll-croissants-unsplash.jpg";

let beverages = [
    {
        name: "Black Coffee",
        image: blackCoffeeImage,
        price: 3,
        desc: "Bold, smooth, and timeless — freshly brewed coffee served without milk or sugar to highlight its rich, natural flavor.",
    },
    {
        name: "Cappuccino",
        image: cappucinoImage,
        price: 4,
        desc: "A perfect balance of rich espresso, steamed milk, and velvety foam — smooth, creamy, and comforting.",
    }
    ,
    {
        name: "Mocha",
        image: mochaImage,
        price: 5,
        desc: "A delicious blend of espresso, steamed milk, and rich chocolate — the perfect mix of coffee and cocoa indulgence.",
    }
];

let foods = [
    {
        name: "Lemon Bar",
        image: lemonBarImage,
        price: 5,
        desc: "Buttery shortbread crust topped with tangy lemon filling — sweet, zesty, and refreshing.",
    },
    {
        name: "Chocolate Cake",
        image: chocoCakeImage,
        price: 5,
        desc: "Decadent, moist layers of rich chocolate cake with smooth chocolate frosting — a classic indulgence.",
    },
    {
        name: "Tiramisu",
        image: tiramisuImage,
        price: 6,
        desc: "Layers of espresso-soaked ladyfingers and creamy mascarpone, dusted with cocoa — our signature.",
    },
    {
        name: "Croissants",
        image: croissantImage,
        price: 3,
        desc: "Flaky, buttery, and golden-baked to perfection — a classic French pastry that melts in your mouth.",
    },
];

function menuPage() {
    let createMenuItem = function(item) {
        // create
        const menuItem = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const textContainer = document.createElement("div");
        const itemName = document.createElement("p");
        const price = document.createElement("span");
        const itemDescribe = document.createElement("p");

        // add class
        menuItem.classList.add("menu-item");
        imgContainer.classList.add("menu-img-container");
        textContainer.classList.add("menu-text-container");
        itemName.classList.add("item-name");
        price.classList.add("price");
        itemDescribe.classList.add("item-describe");

        // add content
        img.src = item.image
        img.alt = `${item.name} image`;

        itemName.textContent = `${item.name} `;
        price.textContent = `($${item.price})`;
        itemDescribe.textContent = item.desc;

        // add to DOM
        mainContentDiv.appendChild(menuItem);
        menuItem.appendChild(imgContainer);
        menuItem.appendChild(textContainer);

        imgContainer.appendChild(img);
        textContainer.appendChild(itemName);
        textContainer.appendChild(itemDescribe);

        itemName.appendChild(price);
    }

    const contentDiv = document.querySelector(".content");

    // containers
    const menuPageDiv = document.createElement("div");
    const mainContentDiv = document.createElement("div");

    menuPageDiv.classList.add("menu-page");
    mainContentDiv.classList.add("main-content");
    contentDiv.appendChild(menuPageDiv);
    menuPageDiv.appendChild(mainContentDiv);

    // content
    const headline = document.createElement("h2");
    const beverageHeading = document.createElement("h3");

    headline.classList.add("headline");
    beverageHeading.classList.add("sub-headline");

    headline.textContent = "Menu";
    beverageHeading.textContent = "Beverages";

    mainContentDiv.appendChild(headline);
    mainContentDiv.appendChild(beverageHeading);
    
    beverages.forEach(createMenuItem);

    const foodHeading = document.createElement("h3");
    foodHeading.classList.add("sub-headline");
    foodHeading.textContent = "Desserts & Sides";
    mainContentDiv.appendChild(foodHeading);
    
    foods.forEach(createMenuItem);
}

export { menuPage };