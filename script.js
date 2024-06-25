function openModal(company) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    const companyData = {
        SensTek: {
            name: "SensTek",
            description: "SensTek is a leading company in sensor technology...",
            website: "https://www.senstek.com",
            logo: "./Assets/SensTek.jpg"
        },
        ASH: {
            name: "ASH",
            description: "ASH is a prominent firm in the automation industry...",
            website: "https://www.ash.com",
            logo: "./Assets/ASH.jpg"
        }
        // Add more company data as needed
    };

    const data = companyData[company];
    
    modalContent.innerHTML = `
        <img src="${data.logo}" alt="${data.name}" style="width:50px;">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <a href="${data.website}" target="_blank">${data.website}</a>
    `;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
