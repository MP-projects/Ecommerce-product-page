//mobile view menu handle

const menuBar = document.querySelector(".navbar__menu-img");
const navbarMenuWrapper = document.querySelector(".navbar__menu-wrapper");
const navbarMenuBackground = document.querySelector(".navbar__menu-background");
const navbarMenuCloseImg = document.querySelector(".navbar__menu-close-img");

const showMenu = () => {
  navbarMenuWrapper.classList.remove("display-none");
  navbarMenuBackground.classList.remove("display-none");
};
const hideMenu = () => {
  navbarMenuWrapper.classList.add("display-none");
  navbarMenuBackground.classList.add("display-none");
};

const mediaQuery = window.matchMedia("(max-width:1024px");

const handleMediaChange = (e) => {
  if (e.matches) {
    menuBar.addEventListener("click", showMenu);
    navbarMenuCloseImg.addEventListener("click", hideMenu);
    navbarMenuBackground.addEventListener("click", hideMenu);
  } else {
    menuBar.removeEventListener("click", showMenu);
    navbarMenuCloseImg.removeEventListener("click", hideMenu);
    navbarMenuBackground.removeEventListener("click", hideMenu);
  }
};

mediaQuery.addEventListener("change", handleMediaChange);
handleMediaChange(mediaQuery);

// main image handler

const productPreviewButtonLeft = document.querySelector(
  ".product__preview-button--left"
);
const productPreviewButtonRight = document.querySelector(
  ".product__preview-button--right"
);
const productPreviewMainImg = document.querySelector(
  ".product__preview-main-img"
);

let imageCounter = 1;

productPreviewButtonLeft.addEventListener("click", () => {
  if (imageCounter <= 1) {
    imageCounter = 4;
  } else {
    imageCounter = imageCounter - 1;
  }
  productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;
});

productPreviewButtonRight.addEventListener("click", () => {
  if (imageCounter >= 4) {
    imageCounter = 1;
  } else {
    imageCounter = imageCounter + 1;
  }
  productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;
});

// product counter

const productChartOrderButtonQuantityMinus = document.querySelector(
  ".product__chart-order-button-quantity--minus"
);
const productChartOrderButtonQuantityPlus = document.querySelector(
  ".product__chart-order-button-quantity--plus"
);
const productChartOrderQuantity = document.querySelector(
  ".product__chart-order-quantity"
);

let orderCounter = 0;

productChartOrderButtonQuantityMinus.addEventListener("click", () => {
  if (orderCounter >= 1) {
    orderCounter = orderCounter - 1;
  }
  productChartOrderQuantity.textContent = orderCounter;
});
productChartOrderButtonQuantityPlus.addEventListener("click", () => {
  if (orderCounter <= 9) {
    orderCounter = orderCounter + 1;
  }
  productChartOrderQuantity.textContent = orderCounter;
});

// submit products to cart

const productChartOrderButton = document.querySelector(
  ".product__chart-order-button"
);
const navbarClientPanelCartButton = document.querySelector(
  ".navbar__client-panel-cart-button"
);
const navbarClientPanelCartOpenContentDiv = document.querySelector(
  ".navbar__client-panel-cart-open-content-div"
);

let productOrderedCounter = 0;

productChartOrderButton.addEventListener("click", () => {
  if (productOrderedCounter <= 99) {
    productOrderedCounter = productOrderedCounter + orderCounter;
    orderCounter = 0;
    if (productOrderedCounter > 99) {
      productOrderedCounter = 99;
    }

    productChartOrderQuantity.textContent = orderCounter;
  }

  if (productOrderedCounter > 0) {
    if (document.querySelector(".navbar__client-panel-cart-product-quantity")) {
      navbarClientPanelCartProductQuantity = document.querySelector(
        ".navbar__client-panel-cart-product-quantity"
      );
      navbarClientPanelCartProductQuantity.textContent = productOrderedCounter;
    } else {
      const navbarClientPanelCartProductQuantity =
        document.createElement("div");
      navbarClientPanelCartProductQuantity.classList.add(
        "navbar__client-panel-cart-product-quantity"
      );
      navbarClientPanelCartProductQuantity.textContent = productOrderedCounter;
      navbarClientPanelCartButton.appendChild(
        navbarClientPanelCartProductQuantity
      );
    }
    navbarClientPanelCartOpenContentDiv.innerHTML = `<div class= "navbar__client-panel-cart-open-content-container">
        <div class= "navbar__client-panel-cart-open-content-img-container">
        <img src="./images/image-product-1-thumbnail.jpg" alt="product image" class="navbar__client-panel-cart-open-content-img">
        </div>
        <div class = " navbar__client-panel-cart-open-content-order-info-container">
        <p class= "navbar__client-panel-cart-open-content-order-info">Fall Limited Edition Sneakers $125.00 x ${productOrderedCounter} <span class = "navbar__client-panel-cart-open-content-span">$${
      productOrderedCounter * 125
    }</span></p>
        </div>
        <button class= "navbar__client-panel-cart-open-content-close-button"><img src="./images/icon-delete.svg" alt="cancel order" class="navbar__client-panel-cart-open-content-close-img"></button>
        </div>
        <button class= "navbar__client-panel-cart-open-content-button">
        <p class= "navbar__client-panel-cart-open-content-button-p">Checkout</p>
        </button>`;

    navbarClientPanelCartOpenContentDiv.classList.add(
      "navbar__client-panel-cart-open-content-div--column"
    );

    // cart buttons handler

    const navbarClientPanelCartOpenContentButton = document.querySelector(
      ".navbar__client-panel-cart-open-content-button"
    );
    const navbarClientPanelCartOpenContentCloseButton = document.querySelector(
      ".navbar__client-panel-cart-open-content-close-button"
    );
    const removeProductsFromCart = () => {
      navbarClientPanelCartOpenContentDiv.innerHTML = `<p class="navbar__client-panel-cart-open-content-div-p">Your cart is empty</p>`;
      productOrderedCounter = 0;
      navbarClientPanelCartProductQuantity = document.querySelector(
        ".navbar__client-panel-cart-product-quantity"
      );
      navbarClientPanelCartProductQuantity.remove();
      navbarClientPanelCartOpenContentDiv.classList.remove(
        "navbar__client-panel-cart-open-content-div--column"
      );
    };
    navbarClientPanelCartOpenContentButton.addEventListener(
      "click",
      removeProductsFromCart
    );
    navbarClientPanelCartOpenContentCloseButton.addEventListener(
      "click",
      removeProductsFromCart
    );
  }
});

//cart menu showup

const navbarClientPanelCartOpen = document.querySelector(
  ".navbar__client-panel-cart-open"
);

let isCartMenuOpen = false;

navbarClientPanelCartButton.addEventListener("click", () => {
  if (isCartMenuOpen === false) {
    isCartMenuOpen = true;
    navbarClientPanelCartOpen.classList.remove("display-none");
  } else if (isCartMenuOpen === true) {
    isCartMenuOpen = false;
    navbarClientPanelCartOpen.classList.add("display-none");
  }
});
