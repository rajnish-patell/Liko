// SMOOTH SCROLL BAR

const body = document.body,
  jsScroll = document.getElementsByClassName("js-scroll")[0],
  height = jsScroll.getBoundingClientRect().height - 1,
  speed = 0.05;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  jsScroll.style.transform = scroll;

  raf = requestAnimationFrame(smoothScroll);
}
smoothScroll();

// SMOOTH SCROLL BAR

// Use GSAP to animate the text
gsap.registerPlugin(ScrollTrigger); // If using ScrollTrigger for scroll-based animations

gsap.timeline().to(".quote", {
  y: 0, // Moves text to its original position (from translateY(100%))
  opacity: 1, // Fades it in
  duration: 1.5, // Adjust timing as needed
  stagger: 0.2, // Adds a slight delay between each element
  ease: "power4.out", // Smooth easing for a polished look
});

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-text");

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.style.animation = "scrollReveal 1s ease-out forwards";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animate marquee scrolling left-to-right (reverse direction)
  const marqueeRightInner = document.querySelector(
    ".marquee-right .marquee-inner"
  );
  const marqueeRightWidth = marqueeRightInner.scrollWidth / 2; // half, since content is duplicated

  gsap.to(marqueeRightInner, {
    x: marqueeRightWidth, // move right
    ease: "none",
    duration: 8, // adjust for speed
    repeat: -1, // loop indefinitely
  });

  // Animate marquee scrolling right-to-left (default direction)
  const marqueeLeftInner = document.querySelector(
    ".marquee-left .marquee-inner"
  );
  const marqueeLeftWidth = marqueeLeftInner.scrollWidth / 2; // half, since content is duplicated

  gsap.to(marqueeLeftInner, {
    x: -marqueeLeftWidth, // move left
    ease: "none",
    duration: 8, // adjust for speed
    repeat: -1, // loop indefinitely
  });
});
