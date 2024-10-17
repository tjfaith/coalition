const carouselContent = document.querySelector(".carousel-content");
const images = carouselContent.querySelectorAll("div");
const totalImages = images.length;
const navBtn = document.querySelectorAll(".carousel-nav div");

let currentIndex = 0;
let imgToShow = 3; 

function adjustImagesPerSet() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    imgToShow = 1;
  } else {
    imgToShow = 3;
  }

  updateCarousel();
}

window.addEventListener("resize", adjustImagesPerSet);

adjustImagesPerSet();


// Function to update the display of images and navigation buttons
function updateCarousel() {
  images.forEach((img, index) => {
    const isVisible =
      index >= currentIndex && index < currentIndex + imgToShow;
    img.style.display = isVisible ? "block" : "none";
  });
  navBtn.forEach((button, index) => {
    button.classList.toggle(
      "active",
      index === Math.floor(currentIndex / imgToShow)
    );
  });
}

// Event listeners for next and previous buttons
navBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
  
    const newIndex =
      (Math.floor(currentIndex / imgToShow) + (index === 0 ? -1 : 1)) *
      imgToShow;
    currentIndex = Math.max(0, Math.min(newIndex, totalImages - imgToShow));
    updateCarousel();
  });
});

function autoplay() {
  currentIndex = (currentIndex + imgToShow) % totalImages;
  updateCarousel();
}


const autoplayInterval = setInterval(autoplay, 3000); 



