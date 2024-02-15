const arrows = document.querySelectorAll(".arrow");
const imageCarousel = document.querySelectorAll(".image-carousel");
const navigationCarousel = document.querySelector(".navigation-carousel");
const INTERVAL_TIME = 3000;
let indexActive = -1;
let intervalId = null;

const createNavigationDots = () => {
  imageCarousel.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("navigation");
    dot.dataset.index = i;
    dot.addEventListener("click", () => {
      indexActive = i;
      setActiveSlide();
      startInterval();
    });
    navigationCarousel.appendChild(dot);
  });
};

const setActiveSlide = () => {
  const navigationDot = document.querySelectorAll(".navigation");

  navigationDot.forEach((item, i) => {
    item.classList.toggle("active", i === indexActive);
    item.style.setProperty("--width", i < indexActive ? "100%" : "0%");
  });

  imageCarousel.forEach((item, i) => {
    item.style.display = i === indexActive ? "block" : "none";
  });
};

const nextSlide = (auto = false) => {
  const navigationDot = document.querySelectorAll(".navigation");

  indexActive++;
  if (indexActive >= navigationDot.length) {
    if (auto) {
      clearInterval(intervalId);
      indexActive = navigationDot.length - 1;
    } else {
      indexActive = 0;
    }
  }
  setActiveSlide();
};

const prevSlide = () => {
  const navigationDot = document.querySelectorAll(".navigation");

  indexActive--;
  if (indexActive < 0) {
    indexActive = navigationDot.length - 1;
  }
  setActiveSlide();
};

const startInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => nextSlide(true), INTERVAL_TIME);
};

createNavigationDots();
nextSlide();
startInterval();

arrows.forEach((arrow) => {
  arrow.addEventListener("mousemove", (e) => {
    const { left, top } = arrow.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    arrow.style.setProperty("--pointerX", offsetX + "px");
    arrow.style.setProperty("--pointerY", offsetY + "px");
  });
});

document.querySelector(".left").addEventListener("click", () => {
  startInterval();
  prevSlide();
});

document.querySelector(".right").addEventListener("click", () => {
  startInterval();
  nextSlide();
});
