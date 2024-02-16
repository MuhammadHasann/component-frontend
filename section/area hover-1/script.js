const contentContainer = document.querySelector(".content_container");
const rectangleContainer = document.querySelector(".rectangle_container");
const circleContent = document.querySelector(".circle-content");

const column = 20;
const row = 10;
const rectangleLength = column * row;

const appendElement = (num) => {
  for (let i = 0; i < num; i++) {
    const rectangle = document.createElement("div");
    rectangle.classList.add("content-rectangle");
    rectangleContainer.appendChild(rectangle);
  }

  contentContainer.style.setProperty("--column", column);
  contentContainer.style.setProperty("--row", row);
};

appendElement(rectangleLength);

const positionCursor = (e) => {
  const { left, top } = contentContainer.getBoundingClientRect();

  const offsetX = e.clientX - left;
  const offsetY = e.clientY - top;

  contentContainer.style.setProperty("--positionX", `${offsetX}px`);
  contentContainer.style.setProperty("--positionY", `${offsetY}px`);
};

contentContainer.addEventListener("mousemove", positionCursor);
