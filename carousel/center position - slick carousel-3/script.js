const slides = document.querySelector(".slides");
const product = document.querySelectorAll(".product");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let indexProduct = -1;

const handleClick = (direction) => {
  if (direction === "next") indexProduct === product.length - 2 ? (indexProduct = -1) : indexProduct++;

  if (direction === "previous") indexProduct === -1 ? (indexProduct = product.length - 2) : indexProduct--;

  // product[indexProduct].classList.remove("active");
  if (indexProduct >= 0) product[indexProduct].classList.remove("active");
  product[indexProduct + 1].classList.add("active");
  if (indexProduct < 4) product[indexProduct + 2].classList.remove("active");

  const translateX = -indexProduct * 275;
  slides.style.transform = `translateX(${translateX}px)`;
};

btnPrev.addEventListener("click", () => {
  handleClick("previous");
});
btnNext.addEventListener("click", () => {
  handleClick("next");
});
