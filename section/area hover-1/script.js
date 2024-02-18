const contentContainer = document.querySelector(".content_container");

const updateScale = (event, element) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  element.forEach((rectangle) => {
    const rect = rectangle.getBoundingClientRect();
    const rectCenterX = rect.left + rect.width / 2;
    const rectCenterY = rect.top + rect.height / 2;

    const deltaX = Math.abs(cursorX - rectCenterX);
    const deltaY = Math.abs(cursorY - rectCenterY);

    const maxDistance = 7 * fontSize;

    if (deltaX <= maxDistance && deltaY <= maxDistance) {
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const scale = 0.5 + (distance / maxDistance) * 0.5;
      rectangle.style.transform = `scale(${scale})`;
      rectangle.style.opacity = 1 - scale;
    } else {
      rectangle.style.transform = "scale(1)";
      rectangle.style.opacity = 0;
    }
  });
};

const appendElement = () => {
  const column = 40;
  const row = 30;
  const rectangleLength = column * row;
  const rectangles = [];

  for (let i = 0; i < rectangleLength; i++) {
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    contentContainer.appendChild(rectangle);
    rectangles.push(rectangle);
  }

  document.documentElement.style.setProperty("--column", column);
  document.documentElement.style.setProperty("--row", row);

  contentContainer.addEventListener("mousemove", (event) => updateScale(event, rectangles));
  contentContainer.addEventListener("mouseleave", () => {
    rectangles.forEach((rectangle) => {
      rectangle.style.transform = "scale(1)";
      rectangle.style.opacity = 0;
    });
  });
};

appendElement();
