const pointer = (e, element) => {
  const rect = element.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  const deltaX = e.clientX - rect.left;
  const deltaY = e.clientY - rect.top;

  element.style.setProperty("--positionX-radial", `${(deltaX / width) * 100}%`);
  element.style.setProperty("--positionY-radial", `${(deltaY / height) * 100}%`);
  element.style.setProperty("--active", `0`);
};

const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) => pointer(e, container));
container.addEventListener("mouseleave", () => {
  // element.style.setProperty("--positionX-radial", `-100%`);
  // element.style.setProperty("--positionY-radial", `-100%`);
  container.style.setProperty("--active", `1`);
});
