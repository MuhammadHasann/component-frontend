const contentContainer = document.querySelector(".content_container");

// const updateScale = (event) => {
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;

//   rectangles.forEach((rectangle) => {
//     const rect = rectangle.getBoundingClientRect();
//     const rectCenterX = rect.left + rect.width / 2;
//     const rectCenterY = rect.top + rect.height / 2;

//     const deltaX = Math.abs(cursorX - rectCenterX) / rect.width;
//     const deltaY = Math.abs(cursorY - rectCenterY) / rect.height;

//     const scale = 0.5 + Math.max(deltaX, deltaY) * 0.5;

//     rectangle.style.transform = `scale(${scale})`;
//   });
// };

// const updateScale = (event, element) => {
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;

//   element.forEach((rectangle) => {
//     const rect = rectangle.getBoundingClientRect();
//     const rectCenterX = rect.left + rect.width / 2;
//     const rectCenterY = rect.top + rect.height / 2;

//     const deltaX = Math.abs(cursorX - rectCenterX);
//     const deltaY = Math.abs(cursorY - rectCenterY);

//     const maxDistance = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

//     if (deltaX <= maxDistance && deltaY <= maxDistance) {
//       const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
//       const scale = 0.5 + (distance / maxDistance) * 0.5;
//       rectangle.style.transform = `scale(${scale})`;
//       rectangle.style.opacity = `${scale}`;
//     } else {
//       rectangle.style.transform = "scale(1)";
//       rectangle.style.opacity = "1";
//     }
//   });
// };

const updateScale = (event, element) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  element.forEach((rectangle) => {
    const rect = rectangle.getBoundingClientRect();
    const rectCenterX = rect.left + rect.width / 2;
    const rectCenterY = rect.top + rect.height / 2;

    const deltaX = Math.abs(cursorX - rectCenterX);
    const deltaY = Math.abs(cursorY - rectCenterY);

    const maxDistance = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (deltaX <= maxDistance && deltaY <= maxDistance) {
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const scale = 0.5 + (distance / maxDistance) * 0.5;
      const opacity = 1 - scale; // Set opacity to be the inverse of scale
      rectangle.style.transform = `scale(${scale})`;
      rectangle.style.opacity = `${opacity}`;
    } else {
      rectangle.style.transform = "scale(1)";
      rectangle.style.opacity = "0";
    }
  });
};

const column = 30;
const row = 30;
const rectangleLength = column * row;

const appendElement = (num) => {
  for (let i = 0; i < num; i++) {
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    contentContainer.appendChild(rectangle);
  }

  const rectangles = document.querySelectorAll(".rectangle");

  document.documentElement.style.setProperty("--column", column);
  document.documentElement.style.setProperty("--row", row);

  contentContainer.addEventListener("mousemove", (event) => updateScale(event, rectangles));
  contentContainer.addEventListener("mouseleave", () => {
    rectangles.forEach((rectangle) => {
      rectangle.style.transform = `scale(1)`;
      rectangle.style.opacity = "0";
    });
  });
};

appendElement(rectangleLength);
