//first slider

const imageContainer = document.getElementById("image-container");
const sliderCirclesContainer = document.getElementById("slider-circles");

const images = document.querySelectorAll("#image-container div");

const totalImages = images.length;
const imagesPerSlide = 4;
const totalSlides = Math.ceil(totalImages / imagesPerSlide);

let activeCircleIndex = 0;
let intervalId;

for (let i = 0; i < totalSlides; i++) {
  const circle = document.createElement("div");
  circle.classList.add("slider-circle");
  sliderCirclesContainer.appendChild(circle);
  circle.addEventListener("click", () => {
    setActiveCircle(i);
    showSlide(i);
    resetInterval();
  });
}

function setActiveCircle(index) {
  const circles = document.querySelectorAll(".slider-circle");
  circles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  activeCircleIndex = index;
}

function showSlide(slideIndex) {
  const start = slideIndex * imagesPerSlide;
  const end = start + imagesPerSlide;
  const visibleImages = Array.from(images).slice(start, end);

  images.forEach((image, index) => {
    image.style.display = visibleImages.includes(image) ? "block" : "none";
  });
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const nextSlideIndex = (activeCircleIndex + 1) % totalSlides;
    setActiveCircle(nextSlideIndex);
    showSlide(nextSlideIndex);
  }, 3000);
}

setActiveCircle(activeCircleIndex);
resetInterval();

//second slider

const formContainer = document.getElementById("form-container");
const sliderCircleLecture = document.getElementById("slider-circle-lecture");
const forms = document.querySelectorAll("#form-container div");

const formsPerSlide = 3;
const totalFormSlides = Math.ceil(forms.length / formsPerSlide);
let activeFormCircleIndex = 0;
let formIntervalId;

function createFormCircle(index) {
  const formCircle = document.createElement("div");
  formCircle.classList.add("slider-circle");
  if (index === 0) {
    formCircle.classList.add("active");
  }
  sliderCircleLecture.appendChild(formCircle);
  formCircle.addEventListener("click", () => {
    setActiveFormCircle(index);
    showFormSlide(index);
    resetFormInterval();
  });
}

for (let i = 0; i < totalFormSlides; i++) {
  createFormCircle(i);
}
function setActiveFormCircle(index) {
  const formCircles = document.querySelectorAll(
    "#slider-circle-lecture .slider-circle"
  );
  formCircles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  activeFormCircleIndex = index;
}

function showFormSlide(slideIndex) {
  const start = slideIndex * formsPerSlide;
  const end = start + formsPerSlide;
  const visibleForms = Array.from(forms).slice(start, end);
  forms.forEach((form, index) => {
    form.style.display = visibleForms.includes(form) ? "block" : "none";
  });
}

function resetFormInterval() {
  clearInterval(formIntervalId);
  formIntervalId = setInterval(() => {
    const nextFormSlideIndex = (activeFormCircleIndex + 1) % totalFormSlides;
    setActiveFormCircle(nextFormSlideIndex);
    showFormSlide(nextFormSlideIndex);
  }, 3000);
}

setActiveFormCircle(activeFormCircleIndex);
resetFormInterval();
showFormSlide(0);

//mariami

document.addEventListener("DOMContentLoaded", function () {
  const fieldsets = document.querySelectorAll(".fieldset");
  let currentFieldsetIndex = 0;

  const showFieldset = (index) => {
    fieldsets.forEach((fieldset) => {
      fieldset.style.display = "none";
    });

    fieldsets[index].style.display = "block";
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      currentFieldsetIndex =
        currentFieldsetIndex > 0
          ? currentFieldsetIndex - 1
          : fieldsets.length - 1;
    } else if (direction === "right") {
      currentFieldsetIndex =
        currentFieldsetIndex < fieldsets.length - 1
          ? currentFieldsetIndex + 1
          : 0;
    }
    showFieldset(currentFieldsetIndex);
  };

  const leftArrowBtn = document.querySelector(".slider-btn-left");
  const rightArrowBtn = document.querySelector(".slider-btn-right");

  leftArrowBtn.addEventListener("click", () => handleArrowClick("left"));
  rightArrowBtn.addEventListener("click", () => handleArrowClick("right"));

  showFieldset(currentFieldsetIndex);
});

//anri

const sidebar = document.getElementById("sidebar");
const sidebarTrigger = document.getElementById("sidebar__trigger");
const sidebarCloseButton = document.getElementById("sidebar__close__button");

function toggleSidebar() {
  sidebar.classList.toggle("isClosed");
}

sidebarTrigger.addEventListener("click", toggleSidebar);
sidebarCloseButton.addEventListener("click", toggleSidebar);

document.addEventListener("click", (event) => {
  const isClickInsideSidebar =
    sidebar.contains(event.target) || sidebarTrigger.contains(event.target);

  if (!isClickInsideSidebar && !sidebar.classList.contains("isClosed")) {
    toggleSidebar();
  }
});
