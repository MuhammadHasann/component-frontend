const contentContainer = document.querySelector(".content_container");
const cardContainer = document.querySelector(".card_container");

const pointer = (event, elements) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const rectCenterX = rect.left + rect.width / 2;
    const rectCenterY = rect.top + rect.height / 2;

    const deltaX = Math.abs(cursorX - rectCenterX);
    const deltaY = Math.abs(cursorY - rectCenterY);

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const maxDistance = 0.75 * fontSize;

    if (distance <= maxDistance) {
      element.style.transform = `scale(1)`;
      element.style.transition = `transform 0.1s`;
    } else {
      element.style.transform = `scale(0)`;
      element.style.transition = `transform 2s`;
    }
  });
};

const appendElement = () => {
  const column = 60;
  const row = 30;
  const total = column * row;
  const rectangles = [];

  for (let i = 0; i < total; i++) {
    const element = document.createElement("div");
    element.classList.add("rectangle");
    contentContainer.appendChild(element);
    rectangles.push(element);
  }

  document.documentElement.style.setProperty("--column-grid", column);
  document.documentElement.style.setProperty("--row-grid", row);

  cardContainer.addEventListener("mousemove", (e) => pointer(e, rectangles));
};

appendElement();

const position = (e) => {
  const rect = cardContainer.getBoundingClientRect();

  const offsetX = e.clientX - rect.left - rect.width / 2;
  const offsetY = e.clientY - rect.top - rect.height / 2;

  const valueY = Math.ceil((offsetX / 8) * -1);
  const valueX = Math.ceil(offsetY / 4);

  cardContainer.style.setProperty("--rotateX", valueX + "deg");
  cardContainer.style.setProperty("--rotateY", valueY + "deg");
};

cardContainer.addEventListener("mousemove", position);
cardContainer.addEventListener("mouseleave", () => {
  cardContainer.style.setProperty("--rotateX", "0deg");
  cardContainer.style.setProperty("--rotateY", "0deg");
});
