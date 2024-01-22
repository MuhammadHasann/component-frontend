const button = document.querySelector("button");
const span = document.querySelector("button span");

const position = (e) => {
  const buttonRect = button.getBoundingClientRect();

  const offsetX = e.clientX - buttonRect.left;
  const offsetY = e.clientY - buttonRect.top;

  button.style.setProperty("--x", offsetX + "px");
  button.style.setProperty("--y", offsetY + "px");
};

button.addEventListener("mousemove", position);
