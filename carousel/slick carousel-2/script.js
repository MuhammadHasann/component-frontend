const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");

  document.querySelector(".slides").prepend(items[items.length - 1]);
});

btnNext.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");

  document.querySelector(".slides").appendChild(items[0]);
});
