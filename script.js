const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

const productCards = document.querySelectorAll(".product-card");

const productContainer = document.querySelector(".product-container");

const productContainerCard = document.querySelector(".product-card");

productCards.forEach((card) => {
  // Select color selectors within the current product card
  let colorSelectors = card.querySelectorAll(".color-selector div");
  // Select current product card
  let currentImage = card.querySelector(".product-thumb");
  // Add click event listener to each color selector within the current product card
  colorSelectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      // Remove "selected" class from all color selectors within the current product card
      colorSelectors.forEach((otherSelector) => {
        otherSelector.classList.remove("selected");
      });
      // Add "selected" class to the clicked color selector
      this.classList.add("selected");
      let nextColor = selector.classList[0];
      let currentImageSrc = currentImage.getAttribute("data-item");
      // Change image src
      currentImage.src = `images/${currentImageSrc + nextColor}.png`;
    });
  });
});

const handleScroll = () => {
  // Handle end of container
  preBtn.classList.toggle("display-0", productContainer.scrollLeft === 0);
  nxtBtn.classList.toggle(
    "display-0",
    productContainer.scrollWidth / 5 <= productContainer.scrollLeft
  );
};

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  // Slider effect
  nxtBtn.addEventListener("click", () => {
    // Change arrow opacity
    nxtBtn.classList.add("display-0");
    preBtn.classList.remove("display-0");
    item.scrollLeft += containerWidth;
  });

  preBtn.addEventListener("click", () => {
    nxtBtn.classList.remove("display-0");
    preBtn.classList.add("display-0");
    item.scrollLeft -= containerWidth;
  });
});
