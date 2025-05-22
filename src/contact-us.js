function contactUsPage() {
    const contentDiv = document.querySelector(".content");

    // containers
    const contactPageDiv = document.createElement("div");
    const mainContentDiv = document.createElement("div");

    contactPageDiv.classList.add("contact-page");
    mainContentDiv.classList.add("main-content");
    contentDiv.appendChild(contactPageDiv);
    contactPageDiv.appendChild(mainContentDiv);

    // content
    const headline = document.createElement("h2");
    const headlineP = document.createElement("p");
    const contactInfoDiv = document.createElement("div");

    const addressDiv = document.createElement("div");
    const openingTimeDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");
    const emailDiv = document.createElement("div");

    const addressTitle = document.createElement("h3");
    const openingTimeTitle = document.createElement("h3");
    const phoneTitle = document.createElement("h3");
    const emailTitle = document.createElement("h3");

    const addressP = document.createElement("p");
    const openingTimeP1 = document.createElement("p");
    const openingTimeP2 = document.createElement("p");
    const phoneP = document.createElement("p");
    const emailP = document.createElement("p");

    const messageForm = document.createElement("form");
    const messageTitle = document.createElement("h3");
    const table = document.createElement("table");
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const emailLabel = document.createElement("label");
    const msgLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const msgInput = document.createElement("textarea");
    const submitBtn = document.createElement("button");

    // main content
    mainContentDiv.appendChild(headline);
    mainContentDiv.appendChild(headlineP);
    mainContentDiv.appendChild(contactInfoDiv);
    mainContentDiv.appendChild(messageForm);
    
    headline.classList.add("headline");

    headline.textContent = "Contact Us";
    headlineP.textContent = "We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Here's how you can get in touch with us:";

    // contact-info-container
    contactInfoDiv.appendChild(addressDiv);
    contactInfoDiv.appendChild(openingTimeDiv);
    contactInfoDiv.appendChild(phoneDiv);
    contactInfoDiv.appendChild(emailDiv);

    addressDiv.appendChild(addressTitle);
    addressDiv.appendChild(addressP);
    openingTimeDiv.appendChild(openingTimeTitle);
    openingTimeDiv.appendChild(openingTimeP1);
    openingTimeDiv.appendChild(openingTimeP2);
    phoneDiv.appendChild(phoneTitle);
    phoneDiv.appendChild(phoneP);
    emailDiv.appendChild(emailTitle);
    emailDiv.appendChild(emailP);

    contactInfoDiv.classList.add("contact-info-container");

    addressTitle.textContent = "📍 Visit Us:";
    addressP.textContent = "Café. Fake Avenue 55, Singapore, 554433";
    openingTimeTitle.textContent = "🕒 Opening Hours:";
    openingTimeP1.textContent = "Monday to Friday: 7:00 AM - 8:00 PM";
    openingTimeP2.textContent = "Saturday to Sunday: 8:00 AM - 9:00 PM";
    phoneTitle.textContent = "☎️ Call Us:";
    phoneP.textContent = "+65 9876 5432";
    emailTitle.textContent = "📧 Email Us:";
    emailP.textContent = "MyFakeCafe123@coffee.com";

    // table
    messageForm.appendChild(messageTitle);
    messageForm.appendChild(table);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    tr1.appendChild(th1);
    tr1.appendChild(td1);
    tr2.appendChild(th2);
    tr2.appendChild(td2);
    tr3.appendChild(th3);
    tr3.appendChild(td3);
    th1.appendChild(emailLabel)
    td1.appendChild(emailInput);
    th2.appendChild(msgLabel);
    td2.appendChild(msgInput);
    td3.appendChild(submitBtn);

    messageForm.id = "message-form";

    messageTitle.textContent = "💬 Send us a Message:";

    emailLabel.setAttribute("for", "email-input");
    emailLabel.textContent = "Email:";
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email-input";
    emailInput.required = true;

    msgLabel.setAttribute("for", "message-input");
    msgLabel.textContent = "Message:";
    msgInput.rows = 10;
    msgInput.cols = 30;
    msgInput.name = "message";
    msgInput.id = "message-input";
    msgInput.required = true;

    submitBtn.textContent = "Submit"
    submitBtn.id = "submit-btn"
}

export { contactUsPage };