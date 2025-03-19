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

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // Target the text
    let split = new SplitText(".quote", { type: "chars" });

    // Animation on scroll
    gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".quote",
            start: "top 80%", // When 80% of the text is in the viewport
            end: "top 30%",
            toggleActions: "play none none none"
        }
    });
});
