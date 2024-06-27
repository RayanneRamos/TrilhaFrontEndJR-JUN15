document.addEventListener("DOMContentLoaded", () => {
  fetch("hobbies.json")
    .then((response) => response.json())
    .then((hobbie) => {
      const hobbiesContent = document.getElementById("hobbies-content");

      hobbie.forEach((hobbie) => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "hobbies-card-container";

        const cardContent = document.createElement("div");
        cardContent.className = "hobbies-card-content";

        const img = document.createElement("img");
        img.src = hobbie.hobbieDescription;
        img.className = "hobbies-card-image";
        img.alt = hobbie.hobbieName;

        const cardInfo = document.createElement("div");
        cardInfo.className = "hobbies-card-info";

        const cardTitle = document.createElement("strong");
        cardTitle.className = "hobbies-card-title";
        cardTitle.innerText = hobbie.hobbieName;

        cardInfo.appendChild(cardTitle);
        cardContent.appendChild(img);
        cardContent.appendChild(cardInfo);
        cardContainer.appendChild(cardContent);
        hobbiesContent.appendChild(cardContainer);
      });
    });
});

const button = document.getElementById("menu-hamburger");

function handleClickOpenMenu() {
  button.classList.toggle("active");
}
