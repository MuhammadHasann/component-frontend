const currencyContainer = document.querySelector(".currency_container");
const currencyItems = document.querySelectorAll(".currency-item");

let isScrolling = false;
let oldScroll = 0;
let oldDirection = "normal";
let durationAnimation = 10;

const setAnimation = (element, direction) => {
  element.style.animation = `rotate_item ${durationAnimation}s linear ${direction} infinite`;
};

const updateAnimation = () => {
  const currentRotation = window.getComputedStyle(currencyContainer).getPropertyValue("rotate");
  const direction = oldScroll > window.scrollY ? "reverse" : "normal";

  if (oldDirection !== direction) {
    currencyContainer.style.setProperty("--rotate_from", currentRotation);
    currencyContainer.style.removeProperty("animation");
    currencyItems.forEach((item) => item.style.removeProperty("animation"));

    setTimeout(() => {
      currencyContainer.style.animation = `rotate ${durationAnimation}s linear ${direction} infinite`;
      currencyItems.forEach((item) => setAnimation(item, direction));
    }, 10);

    oldDirection = direction;
  }

  oldScroll = window.scrollY;
};

window.addEventListener("load", () => {
  currencyContainer.style.animation = `rotate ${durationAnimation}s linear normal infinite`;
  currencyItems.forEach((item) => setAnimation(item, "normal"));
});

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      updateAnimation();
      isScrolling = false;
    }, 100);
  }
});
