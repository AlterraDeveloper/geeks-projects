const $slides = document.querySelectorAll(".slide");
const $rightArrow = document.querySelector(".right-arrow");
const $leftArrow = document.querySelector(".left-arrow");

const sliderProxy = new Proxy(
  {
    currentSlide: 0,
  },
  {
    set: function (obj, prop, newval) {
      obj[prop] = newval;
      updateSlider(newval);
    },
  }
);

function updateSlider(currentSlide) {
  const $slide = $slides[currentSlide];
  const imageUrl = $slide.style.backgroundImage;
  $slides.forEach((s) => s.classList.remove("active"));
  $slide.classList.add("active");
  setBackgroundImage(document.body, imageUrl);
}

function setBackgroundImage(element, url) {
  element.style.backgroundImage = url;
}

$rightArrow.onclick = () => {
  if (sliderProxy.currentSlide + 1 >= $slides.length)
    sliderProxy.currentSlide = 0;
  else sliderProxy.currentSlide++;
};

$leftArrow.onclick = () => {
  if (sliderProxy.currentSlide - 1 < 0)
    sliderProxy.currentSlide = $slides.length - 1;
  else sliderProxy.currentSlide--;
};

updateSlider(sliderProxy.currentSlide);
