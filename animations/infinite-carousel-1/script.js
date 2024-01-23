const carousels = document.querySelectorAll(".carousel");

const addAnimation = () => {
  carousels.forEach((carousel) => {
    carousel.setAttribute("data-animation", true);

    const carouselInner = carousel.querySelector(".carousel__inner");
    const carouselContent = Array.from(carouselInner.children);

    carouselContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);

      carouselInner.appendChild(duplicatedItem);
    });
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
