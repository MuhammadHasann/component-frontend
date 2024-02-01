const itemDataCarousel = [
  {
    id: 1,
    title: "Dog small",
    subTitle: "Animal",
    source:
      "https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YW5pbWFsfHx8fHx8MTcwNjY4MzU1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, fuga ipsa error similique voluptatibus nulla, quia repellat rem inventore temporibus obcaecati odit? Omnis, quod suscipit.",
  },
  {
    id: 2,
    title: "Waterfall flyover",
    subTitle: "Adventure",
    source:
      "https://images.unsplash.com/photo-1568736333606-0163627ba088?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YWR2ZW50dXJlfHx8fHx8MTcwNjY4NDQwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, doloremque quaerat aut distinctio optio beatae? Eius ducimus earum sunt delectus explicabo, quasi accusantium aliquid magnam autem pariatur architecto consectetur.",
  },
  {
    id: 3,
    title: "Mountain skiing",
    subTitle: "Sports",
    source:
      "https://images.unsplash.com/photo-1580237754630-b714f666d54f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YWR2ZW50dXJlfHx8fHx8MTcwNjY4NDU5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus quia veritatis eos dignissimos tenetur commodi aspernatur unde dicta nulla!",
  },
  {
    id: 4,
    title: "Basketball",
    subTitle: "Sports",
    source:
      "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnRzfHx8fHx8MTcwNjY4NDc0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint quam asperiores sapiente? Eos, laudantium consequatur eaque inventore ex odit sunt saepe velit.",
  },
  {
    id: 5,
    title: "Beach and sea",
    subTitle: "Beach",
    source:
      "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2h8fHx8fHwxNzA2Njg0ODA5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae sit esse. Tempore, voluptas dolores. Error fugit, nihil ratione veritatis esse reprehenderit at vel aliquam?",
  },
  {
    id: 6,
    title: "3 coffee",
    subTitle: "Coffe shop",
    source:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlLXNob3B8fHx8fHwxNzA2Njg0ODcy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae sit esse. Tempore, voluptas dolores. Error fugit, nihil ratione veritatis esse reprehenderit at vel aliquam?",
  },
];

const slickCarousel = document.querySelector(".slick-carousel");

const Card = (item) => {
  return `
    <div class="item_carousel">
      <div class="image_carousel">
        <img
          src="${item.source}"
          alt="Image Card"
        />
        <h2 class="sub-title">${item.subTitle}</h2>
        <h1 class="title">${item.title}</h1>
        <a href="${item.source}" class="learn-more_button">Learn more</a>
      </div>
      <div class="content_carousel">
        <span>Activies</span>
        <div class="detail-content_carousel">
          <span>Detail Card</span>
          <h2 class="sub-title">${item.subTitle}</h2>
          <p class="description">"${item.description}"</p>
        </div>
        <button class="navigate">&#129030;</button>
      </div>
    </div>
  `;
};

const getData = () => {
  itemDataCarousel.map((item) => (slickCarousel.innerHTML += Card(item)));

  slickCarousel.addEventListener("click", (event) => {
    const btnNavigate = event.target.closest(".navigate");
    if (btnNavigate) {
      let itemCarousel = document.querySelectorAll(".item_carousel");
      slickCarousel.appendChild(itemCarousel[0]);
    }
  });
};

getData();
