const pointer = (e, element) => {
  const rect = element.getBoundingClientRect();
  const width = rect.width / 2;
  const height = rect.height / 2;

  const deltaX = rect.left + width;
  const deltaY = rect.top + height;

  const cursorX = e.clientX - deltaX;
  const cursorY = e.clientY - deltaY;

  document.documentElement.style.setProperty("--pointerX", `${cursorX / 2}px`);
  document.documentElement.style.setProperty("--pointerY", `${cursorY / 2}px`);
};

const button = document.querySelector(".button");

button.addEventListener("mousemove", (e) => pointer(e, button));
button.addEventListener("mouseleave", () => {
  document.documentElement.style.setProperty("--pointerX", `0px`);
  document.documentElement.style.setProperty("--pointerY", `0px`);
});

const textButton = document.querySelectorAll(".text_button");

textButton.forEach((element) => {
  const width = element.clientWidth;
  const height = element.clientHeight;

  document.documentElement.style.setProperty("--text__width_button", `${width}px`);
  document.documentElement.style.setProperty("--text__height_button", `${height}px`);

  console.log(width);
  console.log(height);
});
