window.onscroll = function() {myFunction()};

var header = document.getElementById("header-sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 500) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// SMOOTH SCROLL BAR


const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()


// SMOOTH SCROLL BAR



// Use GSAP to animate the text
gsap.registerPlugin(ScrollTrigger); // If using ScrollTrigger for scroll-based animations

gsap.timeline()
    .to(".quote", {
        y: 0, // Moves text to its original position (from translateY(100%))
        opacity: 1, // Fades it in
        duration: 1.5, // Adjust timing as needed
        stagger: 0.2, // Adds a slight delay between each element
        ease: "power4.out" // Smooth easing for a polished look
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
    

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".marquee-inner").forEach(marqueeInner => {
        const marqueeWidth = marqueeInner.scrollWidth / 2;

        gsap.to(marqueeInner, {
            x: -marqueeWidth,
            ease: "none",
            duration: 8,
            repeat: -1,
        });
    });
});



