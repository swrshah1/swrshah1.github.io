const banner = document.querySelector("#banner");

const tl = new TimelineMax();

tl.fromTo(banner, 2, {
    height: "0%"
}, {
    height: "100%",
    ease: Power2.easeInOut
})