import "./src/style.css"
import { register } from "swiper/element";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Pagination]);
register();
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
});
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    lerp: 0.1,
    duration: 3,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  },
});
// mobileMenuToggle.addEventListener("click", () => {
//   mobileMenu.classList.remove("hidden");
//   document.body.style.overflow = "hidden";
// });

// mobileMenuClose.addEventListener("click", () => {
//   mobileMenu.classList.add("hidden");
//   document.body.style.overflow = "auto";
// });

// Close mobile menu on resize to desktop
// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 768) {
//     mobileMenu.classList.add("hidden");
//     document.body.style.overflow = "auto";
//   }
// });

/*
document.addEventListener("scroll", () => {
  const threshold = window.innerHeight; // Define threshold for scroll
  const scrolled = window.scrollY; // Get the vertical scroll position

  // If scrolled past the threshold and header is not changed
  if (scrolled > threshold && !headerChange) {
    header.classList.add("minimised");
    headerChange = true;
    // Add additional logic for header change
  }

  // If scrolled back above the threshold and header is changed
  if (scrolled <= threshold && headerChange) {
    header.classList.remove("minimised");

    headerChange = false;
    // Add additional logic to revert the header
  }
});
*/
