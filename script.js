gsap.from(".navbar > div", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 2.4,
});

gsap.from(".site-logo", 1.6, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
    delay: 2.4,
});

gsap.from(".header > span", 1.6, {
    top: "-750",
    ease: "bounce.out",
    delay: 1,
    stagger: 0.2,
});

gsap.to(".footer span", 0.4, {
    y: -40,
    ease: Expo.easeInOut,
    delay: 2.4,
});