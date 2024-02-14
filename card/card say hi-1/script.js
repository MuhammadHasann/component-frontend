const cardContainer = document.querySelector(".card_container");
const button = document.querySelector("button");

const position = (e) => {
  const width = cardContainer.offsetWidth / 2;
  const height = cardContainer.offsetHeight / 2;

  const cardContainerRect = cardContainer.getBoundingClientRect();

  const offsetX = e.clientX - cardContainerRect.left;
  const offsetY = e.clientY - cardContainerRect.top;

  cardContainer.style.setProperty("--positionX", offsetX + "px");
  cardContainer.style.setProperty("--positionY", offsetY + "px");

  const valueY = Math.ceil(((offsetX - width) / 6) * -1);
  const valueX = Math.ceil((offsetY - height) / 6);

  cardContainer.style.setProperty("--X", valueX + "deg");
  cardContainer.style.setProperty("--Y", valueY + "deg");
};

cardContainer.addEventListener("mousemove", position);
cardContainer.addEventListener("mouseleave", () => {
  cardContainer.style.setProperty("--X", "0deg");
  cardContainer.style.setProperty("--Y", "0deg");
});
