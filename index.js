document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 769) {
    const cursor = document.querySelector(".custom-cursor__cursor");
    const cursorTwo = document.querySelector(".custom-cursor__cursor-two");

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorTwo.style.left = e.clientX + "px";
    cursorTwo.style.top = e.clientY + "px";
  }
});

const cursor = document.querySelector(".custom-cursor__cursor");
const cursorTwo = document.querySelector(".custom-cursor__cursor-two");

const hoverElements = document.querySelectorAll(".custom-hover");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    if (window.innerWidth > 769) {
      cursor.classList.add("custom-cursor__hover");
      cursorTwo.classList.add("custom-cursor__innerhover");
    }
  });

  element.addEventListener("mouseleave", () => {
    if (window.innerWidth > 769) {
      cursor.classList.remove("custom-cursor__hover");
      cursorTwo.classList.remove("custom-cursor__innerhover");
    }
  });
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

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

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
  const testimonialImg = document.querySelector(".testimonial-student-img");
  const prevButton = document.querySelector(".testimonial-prev-arrow-btn");
  const nextButton = document.querySelector(".testimonial-next-arrow-btn");

  const testimonials = [
    {
      text: "ძალიან კმაყოფილი ვარ უფასო სამეცადინო კურსებით. მოუთმენლად ველი როდის დაიწყება ონლაინ გაკვეთილები, რომ ბავშვებს შევაყვარო საგნები.",
      author: "სახელი გვარი",
      position: "მოსწავლე",
      img: "/images/testimonial-1.png",
    },
    {
      text: "1 წელია უკვე ამ საიტით ვსარგებლობთ მეც და ჩემი შვილებიც. მივესალმები თქვენს წამოწყებას!",
      author: "სახელი გვარი",
      position: "მშობელი",
      img: "/images/testimonial-1.png",
    },
    {
      text: "ვაფასებ თქვენს შრომას და ღვაწლს, თამაშ-თამაშით ჩემი შვილს შეუყვარდა საგნების შესწავლა. ძალიან სახალისო და საინტერესოა, წარმატებები.",
      author: "სახელი გვარი",
      position: "მშობელი",
      img: "/images/testimonial-1.png",
    },
    {
      text: "ძალიან კარგია ასეთი სავარჯიშოები, როგორც პატარასთვის ასევე მოზრდილებისთვისაც. ყველაფერი მომწონს კონგოში. დიდი სიამოვნებით დავასწრებ თქვენს გაკვეთილებს.",
      author: "სახელი გვარი",
      position: "მშობელი",
      img: "/images/testimonial-1.png",
    },
  ];

  let currentIndex = 0;
  let intervalId;

  function updateTestimonial(direction) {
    const currentTestimonial = testimonials[currentIndex];

    testimonialTextContainer.style.opacity = 0;
    testimonialTextContainer.style.transform = `translateX(${direction})`;

    setTimeout(() => {
      testimonialText.innerText = currentTestimonial.text;
      testimonialAuthor.innerText = currentTestimonial.author;
      testimonialAuthorPosition.innerText = currentTestimonial.position;

      // Update the testimonial image source
      testimonialImg.src = currentTestimonial.img;

      testimonialTextContainer.animate(
        [
          { opacity: 0, transform: `translateX(${direction})` },
          { opacity: 1, transform: "translateX(0)" },
        ],
        {
          duration: 1000,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }, 100);
  }

  function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial("100%");
    resetAndStartTimer();
  }

  function showPrevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial("-100%");
    resetAndStartTimer();
  }

  function resetAndStartTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(showNextTestimonial, 8000);
  }

  // Initial testimonial update
  updateTestimonial("0%");

  // Set interval to update testimonial every 8 seconds (adjust as needed)
  intervalId = setInterval(showNextTestimonial, 8000);

  nextButton.addEventListener("click", function () {
    showPrevTestimonial();
  });

  prevButton.addEventListener("click", function () {
    showNextTestimonial();
  });
});
