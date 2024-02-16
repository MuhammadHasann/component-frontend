const contentContainer = document.querySelector(".content_container");
const circleContent = document.querySelector(".circle-content");
const rectangleContainer = document.querySelector(".rectangle_container");

const column = 20;
const row = 10;
const rectangleLength = column * row;

const hoverEffect = (event) => {
  const rectangle = event.target;
  const index = Array.from(rectangleContainer.children).indexOf(rectangle);
  const neighbors = [];

  const columnCount = parseInt(contentContainer.style.getPropertyValue("--column"));
  const rowCount = parseInt(contentContainer.style.getPropertyValue("--row"));

  const row = Math.floor(index / columnCount);
  const column = index % columnCount;

  const topRow = row - 1 >= 0;
  const bottomRow = row + 1 < rowCount;
  const leftColumn = column - 1 >= 0;
  const rightColumn = column + 1 < columnCount;

  if (topRow && leftColumn) neighbors.push(rectangleContainer.children[index - columnCount - 1]);
  if (topRow) neighbors.push(rectangleContainer.children[index - columnCount]);
  if (topRow && rightColumn) neighbors.push(rectangleContainer.children[index - columnCount + 1]);
  if (leftColumn) neighbors.push(rectangleContainer.children[index - 1]);
  if (rightColumn) neighbors.push(rectangleContainer.children[index + 1]);
  if (bottomRow && leftColumn) neighbors.push(rectangleContainer.children[index + columnCount - 1]);
  if (bottomRow) neighbors.push(rectangleContainer.children[index + columnCount]);
  if (bottomRow && rightColumn) neighbors.push(rectangleContainer.children[index + columnCount + 1]);

  neighbors.forEach((neighbor) => {
    neighbor.classList.toggle("scaled");
  });

  rectangle.classList.toggle("scaled");
};

const appendElement = (num) => {
  for (let i = 0; i < num; i++) {
    const rectangle = document.createElement("div");
    rectangle.classList.add("content-rectangle");
    rectangle.addEventListener("mouseenter", hoverEffect);
    rectangle.addEventListener("mouseleave", hoverEffect);
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
