// Variables
let currentIndex = 0;

// Function to display images based on index
function showImage(index) {
  const slider = document.querySelector('.slider');
  const totalImages = document.querySelectorAll('.slider img').length;

  // Wrap around if index is out of bounds
  if (index >= totalImages) currentIndex = 0;
  if (index < 0) currentIndex = totalImages - 1;

  // Translate the slider
  const offset = -currentIndex * 100; // Move slider by percentage
  slider.style.transform = `translateX(${offset}%)`;
}

// Event Listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});

// Automatic Slideshow (Optional)
setInterval(() => {
  currentIndex++;
  showImage(currentIndex);
}, 3000); // Change every 3 seconds
