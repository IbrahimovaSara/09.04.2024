
const slidesContainer = document.querySelector('.slides');

const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

imageUrls.forEach(imageUrl => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const image = document.createElement('img');
  image.src = imageUrl;
  slide.appendChild(image);
  slidesContainer.appendChild(slide);
});

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= imageUrls.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000); 





