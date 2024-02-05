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

const sidebar = document.getElementById("sidebar");
const sidebarTrigger = document.getElementById("sidebar__trigger");
const sidebarCloseButton = document.getElementById("sidebar__close__button");

function toggleSidebar() {
  sidebar.classList.toggle("isClosed");
}

function handleSidebarLinkClick(event) {
  let targetElement = event.target;

  // Check if the clicked element or its parent is a sidebar link
  while (targetElement && !targetElement.classList.contains("sidebar-link")) {
    targetElement = targetElement.parentElement;
  }

  if (targetElement) {
    toggleSidebar();
    const targetSectionId = targetElement.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      event.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  }
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

// Add event listener for sidebar link clicks
const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", handleSidebarLinkClick);
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header-section");

  window.addEventListener("scroll", function () {
    // Check screen width
    if (window.innerWidth > 768) {
      if (window.scrollY > 0) {
        header.style.backgroundColor = "#2a254d";
      } else {
        header.style.backgroundColor = "transparent";
      }
    }
  });
});

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor__cursor");
  const cursorTwo = document.querySelector(".custom-cursor__cursor-two");

  // Update the position of the cursor elements based on the mouse coordinates
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursorTwo.style.left = e.clientX + "px";
  cursorTwo.style.top = e.clientY + "px";
});

const cursor = document.querySelector(".custom-cursor__cursor");
const cursorTwo = document.querySelector(".custom-cursor__cursor-two");

const hoverElements = document.querySelectorAll(".custom-hover");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("custom-cursor__hover");
    cursorTwo.classList.add("custom-cursor__innerhover");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("custom-cursor__hover");
    cursorTwo.classList.remove("custom-cursor__innerhover");
  });
});

const scrollTopBtn = document.querySelector(".js-scroll-top");
if (scrollTopBtn) {
  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressPath = document.querySelector(".scroll-top path");
  const pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  const updateProgress = function () {
    const scroll =
      window.scrollY ||
      window.scrollTopBtn ||
      document.documentElement.scrollTopBtn;

    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    const windowHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    const height = docHeight - windowHeight;
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  const offset = 100;

  window.addEventListener(
    "scroll",
    function (event) {
      updateProgress();

      //Scroll back to top
      const scrollPos =
        window.scrollY ||
        window.scrollTopBtn ||
        document.getElementsByTagName("html")[0].scrollTopBtn;
      scrollPos > offset
        ? scrollTopBtn.classList.add("is-active")
        : scrollTopBtn.classList.remove("is-active");
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const testimonialTextContainer = document.querySelector(
    ".testimonial-text-container"
  );
  const testimonialText = document.querySelector(".testimonial-text");
  const testimonialAuthor = document.querySelector(".testimonial-author");
  const testimonialAuthorPosition = document.querySelector(
    ".testimonial-author-position"
  );
  const prevButton = document.querySelector(".testimonial-prev-arrow-btn");
  const nextButton = document.querySelector(".testimonial-next-arrow-btn");

  const testimonials = [
    {
      text: "ძალიან კმაყოფილი ვარ უფასო სამეცადინო კურსებით. მოუთმენლად ველი როდის დაიწყება ონლაინ გაკვეთილები, რომ ბავშვებს შევაყვარო საგნები.",
      author: "სახელი გვარი",
      position: "მოსწავლე",
    },
    {
      text: "1 წელია უკვე ამ საიტით ვსარგებლობთ მეც და ჩემი შვილებიც. მივესალმები თქვენს წამოწყებას!",
      author: "სახელი გვარი",
      position: "მშობელი",
    },
    {
      text: "ვაფასებ თქვენს შრომას და ღვაწლს, თამაშ-თამაშით ჩემი შვილს შეუყვარდა საგნების შესწავლა. ძალიან სახალისო და საინტერესოა, წარმატებები.",
      author: "სახელი გვარი",
      position: "მშობელი",
    },
    {
      text: "ძალიან კარგია ასეთი სავარჯიშოები, როგორც პატარასთვის ასევე მოზრდილებისთვისაც. ყველაფერი მომწონს კონგოში. დიდი სიამოვნებით დავასწრებ თქვენს გაკვეთილებს.",
      author: "სახელი გვარი",
      position: "მშობელი",
    },
  ];

  let currentIndex = 0;
  let intervalId;

  function updateTestimonial(direction) {
    const currentTestimonial = testimonials[currentIndex];

    testimonialText.innerText = currentTestimonial.text;
    testimonialAuthor.innerText = currentTestimonial.author;
    testimonialAuthorPosition.innerText = currentTestimonial.position;

    testimonialTextContainer.style.transform = `translateX(${direction})`;

    testimonialTextContainer.animate(
      [
        { transform: `translateX(${direction})` },
        { transform: "translateX(0)" },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  function showNextTestimonial() {
    updateTestimonial("100%");
    currentIndex = (currentIndex + 1) % testimonials.length;
    resetAndStartTimer();
  }

  function showPrevTestimonial() {
    updateTestimonial("-100%");
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    resetAndStartTimer();
  }

  function resetAndStartTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(showNextTestimonial, 8000);
  }

  // Initial testimonial update
  updateTestimonial("100%");

  // Set interval to update testimonial every 8 seconds (adjust as needed)
  intervalId = setInterval(showNextTestimonial, 8000);

  nextButton.addEventListener("click", function () {
    showPrevTestimonial();
  });

  prevButton.addEventListener("click", function () {
    showNextTestimonial();
  });
});
