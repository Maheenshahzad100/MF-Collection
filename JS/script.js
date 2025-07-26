const heroBtns = document.querySelectorAll('.hero-btn');
const heroImgs = document.querySelectorAll('.hero-img');

let currentIndex = 2; 
let autoSlideInterval;


function showImage(index) {
  heroImgs.forEach((img, i) => {
    if (i === index) {
      img.style.position = 'relative';
      img.style.zIndex = '3';
      img.style.opacity = '1';
    } else {
      img.style.position = 'absolute';
      img.style.zIndex = (i < index) ? '1' : '2';
      img.style.opacity = '0';
    }
  });
}

heroBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);  
    currentIndex = index;
    showImage(currentIndex);
  });
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % heroImgs.length;
    showImage(currentIndex);
  }, 5000); 
}


showImage(currentIndex);
startAutoSlide();
// let currentDate = new Date();
// console.log(currentDate)
// let currentMonth = currentDate.getMonth();
// let month=["January", "February", "March", "April", "May", "June",

// "July", "August", "September", "October", "November", "December"]
// console.log("Current Month (zero-based index):", month[currentMonth]);