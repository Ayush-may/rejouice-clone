gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

$('#page1-content').on('mousemove',(e)=>{
    gsap.to('#cursor',{
        opacity: 1,
        x: e.clientX,
        y: e.clientY,
        ease:"back",
        duration:1
    });
});

$('#page1-content').on('mouseenter',(e)=>{
    gsap.to('#cursor',{
        scale: 1,
        opacity:1
    });
});

$('#page1-content').on('mouseleave',(e)=>{
    gsap.to('#cursor',{
        scale:0,
        opacity:0
    });
});

gsap.from('#page2-first-content h2',{
    y: "100",
    duration: 3,
    stagger: 1,
    ease: "back",
    scrollTrigger:{
        trigger:'#page2',
        start:"top 80%",
        end:"bottom 90%",
        scrub:2,
        markers: false
    }
});


gsap.to('#page2 .loader-overflow',{
    width: "100%",
    duration:3,
    ease: Expo.easeOut,
    scrollTrigger:{
        trigger:'#page2',
        start:"top 80%",
        end:"bottom 90%",
        scrub: 2,
        markers: false
    }
});

gsap.to('.big-text span',{
    y: 0,
    duration: 3,
    ease: Expo.easeInOut,
    stagger: 0.5,
    scrollTrigger:{
        trigger:'#page2',
        start:"top 70%",
        end:"70% 70%",
        scrub: 2,
        markers: false,
    }
});

gsap.to('.page3-first-text h1',{
    y: 0,
    duration:3,
    stagger: 1,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger:".page3",
        start:"top 70%",
        end:"400px 70%",
        scrub: 3,
        markers: false
    }
});

var load = gsap.timeline();

load.to('.screen-loader h6',{
    delay:0.5,
    y: 0,
    opacity:1,
    // stagger: 0.1,
    ease: "power2",
    duration:1
}).to('.screen-loader h6',{
    y:"-200",
    duration:1,
    opacity:0,
    // stagger:0.1,
    ease: Expo.easeIn
}).to('.screen-loader',{
    y:"-100vh",
    duration:3,
    ease: Expo.easeInOut
},">-0.3").to('#page1-content h1 span',{
    y:0,
    duration:2,
    opacity:1,
    stagger:0.05,
    ease:"power2"
},">-1.5");


gsap.to('.page4 .overflow-this-div-inside h2',{
    y:0,
    duration:3,
    stagger:0.1,
    ease: Expo.easeOut,
    scrollTrigger: {
        trigger:".page4",
        start:"top center",
        end:"bottom center+=300",
        scrub:1,
        markers: true
    }
});

gsap.from('.number-slider div:nth-child(1)',{
   y: 0,
   ease: Expo.easeInOut,
   stagger:0.1,
   scrollTrigger:{
        trigger:".page4",
        start:"70% 80%",
        end:"80% 90%",
        scrub:4,
        markers: false
   } 
});

// scroll progress animation
gsap.to('.scroll-progress .progress',{
    width: "100%",
    duration:1,
    ease:"none",
    scrollTrigger:{
        trigger:'main',
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false
    }
});