const sliderControl = document.querySelector(".slider__control");
const slides = document.querySelectorAll(".slide");
const slidesLength = slides.length;
let slidesArr = [].slice.call(slides);
slidesArr = slidesArr.reverse();
let slideCurrent = 0;

sliderControl.addEventListener("click", function(e) {
  let target = e.target;

  if(target.classList.contains("slider__control-next")) {
    let next = e.target;
    let prev = next.previousElementSibling;
    let nextSlide = slidesArr[slideCurrent + 1];
    let slide = slidesArr[slideCurrent];

    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");

    slideCurrent += 1;

    if (slideCurrent > 0) {
      prev.classList.remove("slider__control-disabled");
    }

    if (slideCurrent === slidesLength - 1) {
      next.classList.add("slider__control-disabled");
    }
  }

  if (target.classList.contains("slider__control-prev")) {

    slideCurrent -= 1;

    prev = e.target;
    next = prev.nextElementSibling;
    prevSlide = slidesArr[slideCurrent + 1];
    slide = slidesArr[slideCurrent];

    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");

    if (slideCurrent === slidesLength - 2) {
      next.classList.remove("slider__control-disabled");
    }
    if (slideCurrent === 0) {
      prev.classList.add("slider__control-disabled");
    }
  }
});

