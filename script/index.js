const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    console.log(event.target.classList.contains("cart-modal__overlay"));
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  console.log(container);

  const restArray = [
    {
      id: 1,
      title: "Pizza-plus",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "pizza-plus.jpg",
    },
    {
      id: 2,
      title: "Tanuki",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "tanuki.jpg",
    },
    {
      id: 3,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "food-band.jpg",
    },
    {
      id: 4,
      title: "Greedy-pizza",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "greedy-pizza.jpg",
    },
    {
      id: 5,
      title: "Food point",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "food-point.jpg",
    },
    {
      id: 6,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 9,
      type: "Pizza",
      image: "pizza-burger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Loading...</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
           <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/rests/${card.image}" alt="${card.title}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">
                      ${card.title}
                    </h4>
                    <div class="products-card__description--badge">50 min</div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--raiting">
                        <img src="./images/icons/star.svg" alt="star" />
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        From ${card.price} $
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
         `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  console.log(container);

  const goodArray = [
    {
      id: 1,
      title: "Eel roll standard",
      descr: "Rice, eel, unagi sauce, sesame, nori seaweed.",
      price: 2.5,
      image: "eel-roll-standard.jpg",
    },
    {
      id: 2,
      title: "California salmon standard",
      descr:
        "Rice, salmon, avocado, cucumber, mayo, masago caviar, nori seaweed.",
      price: 3.95,
      image: "california-salmon-standard.jpg",
    },
    {
      id: 3,
      title: "Okinawa standard",
      descr: "Rice, boiled shrimp, cream cheese, salmon, fresh cucumber...",
      price: 2.5,
      image: "okinawa-standard.jpg",
    },
    {
      id: 4,
      title: "Caesar maki xl",
      descr:
        " Rice, smoked chicken breast, masago caviar, tomato, iceberg, Caesar sauce...",
      price: 2.5,
      image: "caesar-maki-xl.jpg",
    },
    {
      id: 5,
      title: "asai maki standard 185g",
      descr:
        "Rice, fresh tomato, bell pepper, avocado, cucumber, iceberg lettuce",
      price: 2.5,
      image: "yasai-maki-standard.jpg",
    },
    {
      id: 6,
      title: "Shrimp roll standard",
      descr: "Rice, nori seaweed, boiled shrimp, cream cheese, cucumbers",
      price: 2.5,
      image: "shrimp-roll-standard.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Loading...</p>';
  };

  const randerGoods = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
               <div class="products-card">
                  <div class="products-card__image">
                    <img src="./images/goods/${card.image}" alt="${card.title}" />
                  </div>
                  <div class="products-card__description">
                    <div class="products-card__description-row">
                      <h5 class="products-card__description--name">${card.title}</h5>
                    </div>
                    <div class="products-card__description-row">
                      <p class="products-card__description--text">
                        ${card.descr}
                      </p>
                    </div>
                    <div class="products-card__description-row">
                      <div class="products-card__description-controls">
                       <button class="btn btn-primary">
                         Add to cart
                         <img src="./images/icons/container.png" alt="shopping-cart" />
                       </button>
                       <span class="products-card__description-controls--price">${card.price} $</span>
                     </div>
                    </div>
                  </div>
                </div>
         `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerGoods(goodArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
