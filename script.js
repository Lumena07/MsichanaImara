// Get all elements with class 'count'
var countElements = document.querySelectorAll('.impact-count');

// Define the animation duration in milliseconds
var animationDuration = 20000;

// Loop through each count element
countElements.forEach(function(element) {
  // Get the target count from the element's inner text
  var targetCount = parseInt(element.innerText);

  // Set the starting count to 0
  var startingCount = 0;

  // Calculate the increment value based on the animation duration
  var increment = Math.ceil(targetCount / (animationDuration / 16));

  // Create an interval that updates the count every 16 milliseconds
  var interval = setInterval(function() {
    // Increment the count
    startingCount += increment;

    // If the count exceeds the target count, set it to the target count
    if (startingCount >= targetCount) {
      clearInterval(interval);
      startingCount = targetCount;
    }

    // Update the element's inner text with the current count
    element.innerText = startingCount;
  }, 16);
});
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

//image slider js
/*const carousel = document.querySelector('.carousel-image');
const images = document.querySelectorAll('.carousel-item');
let counter = 0;
const size = images[0].clientWidth;

carousel.style.transform = `translateX(${-size * counter}px)`;

setInterval(() => {
  if (counter >= images.length - 1) {
    counter = 0;
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
  counter++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-size * counter}px)`;
}, 5000);*/

/*carousel.addEventListener('transitionend', () => {
  if (images[counter].id === 'last-clone') {
    carousel.style.transition = 'none';
    counter = images.length - 2;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
  if (images[counter].id === 'first-clone') {
    carousel.style.transition = 'none';
    counter = images.length - counter;
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }
});*/
