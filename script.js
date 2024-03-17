const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  // Select color selectors within the current product card
  const colorSelectors = card.querySelectorAll(".color-selector div");
  // Select current product card
  const currentImage = card.querySelector(".product-thumb");
  // Add click event listener to each color selector within the current product card
  colorSelectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      // Remove "selected" class from all color selectors within the current product card
      colorSelectors.forEach((otherSelector) => {
        otherSelector.classList.remove("selected");
      });
      // Add "selected" class to the clicked color selector
      this.classList.add("selected");
      const nextColor = selector.classList[0];
      const currentImageSrc = currentImage.getAttribute("data-item");
      // Change image src
      currentImage.src = `images/${currentImageSrc + nextColor}.png`;
    });
  });
});

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  // Slider effect
  nxtBtn[i].addEventListener("click", () => {
    // Change arrow opacity
    nxtBtn[i].classList.add("opacity-0");
    preBtn[i].classList.remove("opacity-0");
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    nxtBtn[i].classList.remove("opacity-0");
    preBtn[i].classList.add("opacity-0");
    item.scrollLeft -= containerWidth;
  });
});
