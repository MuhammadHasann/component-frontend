const data = {
  Cards: {
    span: "Cards",
    h2: "8 Components",
  },
  Text: {
    span: "Text",
    h2: "12 Components",
  },
  Icons: {
    span: "Icons",
    h2: "21 Components",
  },
  Buttons: {
    span: "Buttons",
    h2: "15 Components",
  },
};

const infoCardSpan = document.querySelector(".info-card").querySelector("span");
const infoCardH2 = document.querySelector(".info-card").querySelector("h2");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const title = card.querySelector("h2").textContent;

    infoCardSpan.textContent = data[title]["span"];
    infoCardH2.textContent = data[title]["h2"];
  });

  card.addEventListener("mouseleave", () => {
    infoCardSpan.textContent = "all";
    infoCardH2.textContent = "56 Components";
  });
});
