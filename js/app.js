//mobile view menu handler

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

// main image handler

const productPreviewMainImg = document.querySelector(
  ".product__preview-main-img"
);
const productPreviewMainImgContainer = document.querySelector(
  ".product__preview-main-img-container"
);

const productPreview = document.querySelector(".product__preview");
const imageButtonsContainer = document.querySelector(
  ".product__preview-button-container"
);

const imageButtons = document.querySelectorAll(".product__preview-button");
const imageButtonsArray = [...imageButtons];
let images = document.querySelectorAll(".product__preview-img");
let imagesArray = [...images];
const imageContainers = document.querySelectorAll(
  ".product__preview-image-container"
);
const imageContainersArray = [...imageContainers];

const productPreviewMainImgGallery = document.querySelector(
  ".gallery-product__preview-main-img"
);
const imageButtonsGallery = document.querySelectorAll(
  ".gallery-product__preview-button"
);
const imageButtonsArrayGallery = [...imageButtonsGallery];
const imagesGallery = document.querySelectorAll(
  ".gallery-product__preview-img"
);
const imagesArrayGallery = [...imagesGallery];
const imageContainersGallery = document.querySelectorAll(
  ".gallery-product__preview-image-container"
);
const imageContainersArrayGallery = [...imageContainersGallery];

let imageCounter = 1;
imageButtonsArray[0].addEventListener("click", (e) => {
  e.stopPropagation();
  if (imageCounter <= 1) {
    imageCounter = 4;
  } else {
    imageCounter = imageCounter - 1;
  }

  for (i = 0; i <= 3; i++) {
    imagesArray[i].classList.remove("opacity");
    imageContainersArray[i].classList.remove("border");
  }

  imagesArray[imageCounter - 1].classList.add("opacity");
  imageContainersArray[imageCounter - 1].classList.add("border");

  productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;
});

imageButtonsArray[1].addEventListener("click", (e) => {
  e.stopPropagation();
  if (imageCounter >= 4) {
    imageCounter = 1;
  } else {
    imageCounter = imageCounter + 1;
  }

  for (i = 0; i <= 3; i++) {
    imagesArray[i].classList.remove("opacity");
    imageContainersArray[i].classList.remove("border");
  }

  imagesArray[imageCounter - 1].classList.add("opacity");
  imageContainersArray[imageCounter - 1].classList.add("border");

  productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;
});

// main image handler desktop
const mainImageHandler = () => {
  productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;

  for (i = 0; i <= 3; i++) {
    imagesArray[i].classList.remove("opacity");
    imageContainersArray[i].classList.remove("border");
  }
  imagesArray[imageCounter - 1].classList.add("opacity");
  imageContainersArray[imageCounter - 1].classList.add("border");

  imageButtonsContainer.style.display = "none";

  imagesArray.forEach((element, index) => {
    element.addEventListener("click", () => {
      for (i = 0; i <= 3; i++) {
        imagesArray[i].classList.remove("opacity");
        imageContainersArray[i].classList.remove("border");
      }
      element.classList.add("opacity");
      imageContainersArray[index].classList.add("border");
      imageCounter = index + 1;
      productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;
    });
  });
};

//gallery handler
const gallery = document.querySelector(".gallery");
const galleryBackgroundDesktop = document.querySelector(".gallery-background");
const galleryClose = document.querySelector(".gallery__close-img");
let isGalleryOpen = false;

const galleryHandler = () => {
  if (!isGalleryOpen) {
    gallery.classList.remove("display-none");
    galleryBackgroundDesktop.classList.remove("display-none");
    // imagesArray.forEach((element) => {
    //   element.replaceWith(element.cloneNode());
    // });
    productPreviewMainImgGallery.src = `./images/image-product-${imageCounter}.jpg`;
    for (i = 0; i <= 3; i++) {
      imagesArrayGallery[i].classList.remove("opacity");
      imageContainersArrayGallery[i].classList.remove("border");
    }
    imagesArrayGallery[imageCounter - 1].classList.add("opacity");
    imageContainersArrayGallery[imageCounter - 1].classList.add("border");

    imagesArrayGallery.forEach((element, index) => {
      element.addEventListener("click", () => {
        for (i = 0; i <= 3; i++) {
          imagesArrayGallery[i].classList.remove("opacity");
          imageContainersArrayGallery[i].classList.remove("border");
        }
        element.classList.add("opacity");
        imageContainersArrayGallery[index].classList.add("border");
        imageCounter = index + 1;
        productPreviewMainImgGallery.src = `./images/image-product-${imageCounter}.jpg`;
      });
    });
  }
};

imageButtonsArrayGallery[0].addEventListener("click", (e) => {
  e.stopPropagation();
  if (imageCounter <= 1) {
    imageCounter = 4;
  } else {
    imageCounter = imageCounter - 1;
  }

  for (i = 0; i <= 3; i++) {
    imagesArrayGallery[i].classList.remove("opacity");
    imageContainersArrayGallery[i].classList.remove("border");
  }

  imagesArrayGallery[imageCounter - 1].classList.add("opacity");
  imageContainersArrayGallery[imageCounter - 1].classList.add("border");

  productPreviewMainImgGallery.src = `./images/image-product-${imageCounter}.jpg`;
});

imageButtonsArrayGallery[1].addEventListener("click", (e) => {
  e.stopPropagation();
  if (imageCounter >= 4) {
    imageCounter = 1;
  } else {
    imageCounter = imageCounter + 1;
  }

  for (i = 0; i <= 3; i++) {
    imagesArrayGallery[i].classList.remove("opacity");
    imageContainersArrayGallery[i].classList.remove("border");
  }

  imagesArrayGallery[imageCounter - 1].classList.add("opacity");
  imageContainersArrayGallery[imageCounter - 1].classList.add("border");

  productPreviewMainImgGallery.src = `./images/image-product-${imageCounter}.jpg`;
});

const galleryCloseHandler = () => {
  gallery.classList.add("display-none");
  galleryBackgroundDesktop.classList.add("display-none");
  images = document.querySelectorAll(".product__preview-img");
  imagesArray = [...images];
  mainImageHandler();

  isGalleryOpen = false;
};

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
      navbarClientPanelCartProductQuantity.innerHTML = `<p class = "navbar__client-panel-cart-product-quantity-p">${productOrderedCounter}</p>`;
    } else {
      const navbarClientPanelCartProductQuantity =
        document.createElement("div");
      navbarClientPanelCartProductQuantity.classList.add(
        "navbar__client-panel-cart-product-quantity"
      );
      navbarClientPanelCartProductQuantity.innerHTML = `<p class = "navbar__client-panel-cart-product-quantity-p">${productOrderedCounter}</p>`;

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

//desktop menu hover

let menuLinks = [...document.querySelectorAll(".navbar__menu-link")];
console.log(menuLinks);
const menuUls = [...document.querySelectorAll(".navbar__menu-ul")];
console.log(menuUls);

const menuHover = () => {
  menuLinks.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      menuUls[index].style.borderBottom = "3px solid hsl(26, 100%, 55%)";
    });
    element.addEventListener("mouseout", () => {
      menuUls[index].style.borderBottom = "initial";
    });
  });
};

const removeMenuHover = () => {
  menuLinks.forEach((element) => {
    element.replaceWith(element.cloneNode(true));
  });
  menuLinks = [...document.querySelectorAll(".navbar__menu-link")];
};

// implementation of function depending on media query
const mediaQueryMobile = window.matchMedia("(max-width:1023px");

const handleMediaChange = (e) => {
  if (e.matches) {
    //mobile menu handler

    menuBar.addEventListener("click", showMenu);
    menuBar.classList.remove("display-none");
    hideMenu();

    navbarMenuCloseImg.addEventListener("click", hideMenu);
    navbarMenuBackground.addEventListener("click", hideMenu);

    // mobile main image start position
    productPreviewMainImg.src = `./images/image-product-${imageCounter}.jpg`;

    // main image buttons visible

    imageButtonsContainer.style.display = "flex";

    //mobile gallery listener remover
    productPreviewMainImgContainer.removeEventListener("click", galleryHandler);

    //dekstop menu hover remove
    removeMenuHover();
  } else {
    //mobile menu handler

    menuBar.removeEventListener("click", showMenu);
    menuBar.classList.add("display-none");
    navbarMenuWrapper.classList.remove("display-none");
    navbarMenuCloseImg.removeEventListener("click", hideMenu);
    navbarMenuBackground.removeEventListener("click", hideMenu);
    hideMenu();

    //main image desktop handler

    mainImageHandler();

    //desktop gellry listener add
    productPreviewMainImgContainer.addEventListener("click", galleryHandler);
    galleryClose.addEventListener("click", galleryCloseHandler);
    galleryCloseHandler();

    //desktop menu hover
    menuHover();
  }
};

mediaQueryMobile.addEventListener("change", handleMediaChange);
handleMediaChange(mediaQueryMobile);
