const contentContainer = document.querySelector(".content_container");
const eyeContent = document.querySelector(".eye_content");
const content = document.querySelector(".content");

const pointer = (e) => {
  const rect = eyeContent.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const width = content.clientWidth / 2;
  const height = content.clientHeight / 2;

  const clampedX = Math.min(Math.max(offsetX, width), rect.width - width);
  const clampedY = Math.min(Math.max(offsetY, height), rect.height - height);

  content.style.setProperty("--positionX", `${clampedX}px`);
  content.style.setProperty("--positionY", `${clampedY}px`);
};

contentContainer.addEventListener("mousemove", pointer);
