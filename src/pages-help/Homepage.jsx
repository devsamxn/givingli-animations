import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Homepage() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const textRef = useRef(null);
  useGSAP(() => {
    const images = imagesRef.current; // Get all images

    if (!images.length) return; // Prevent errors if images are not loaded

    // Set initial positions (centered on top of each other)
    // gsap.set(images, {
    //   x: 0,
    //   y: 0,
    //   scale: 1,
    //   opacity: 1,
    // });

    // Create GSAP timeline for smooth animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // Animation lasts for 2000px scroll distance
        scrub: true,
        pin: true, // **Pins the section so animation is fully visible**
        markers: true, // Set to `true` to debug scroll positions
      },
    });

    // Animate images outward to four corners
    tl.to(images[0], { x: "-50vw", y: "-50vh", scale: 0.8, opacity: 1 }, 0);
    tl.to(images[1], { x: "50vw", y: "-50vh", scale: 0.8, opacity: 1 }, 0.05);
    tl.to(textRef.current, { opacity: 1, scale: 2, duration: 0.1 }, "-=0.5"); // Starts before images finish
    // tl.to(images[2], { x: "-50vw", y: "50vh", scale: 0.8, opacity: 1 }, 0);
    // tl.to(images[3], { x: "50vw", y: "50vh", scale: 0.8, opacity: 1 }, 0);
  });
  //   useEffect(() => {
  //     const handleParralax = (e) => {
  //       const speed = 2;
  //       document.querySelectorAll(".layer").forEach((layer) => {
  //         const x = (window.innerHeight - e.pageX * speed) / 100;
  //         const y = (window.innerHeight - e.pageY * (speed + 1)) / 100;
  //         layer.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
  //       });
  //     };
  //     document.addEventListener("mousemove", handleParralax);
  //     return () => {
  //       document.removeEventListener(".mousemove", handleParralax);
  //     };
  //   }, []);

  return (
    <div ref={containerRef} className="container relative h-[100dvh] ">
      {["/logo-1.png", "/logo-2.png"].map((src, index) => (
        <img
          src={src}
          ref={(el) => (imagesRef.current[index] = el)}
          key={index}
          className="layer absolute size-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ))}
      {/* <img src="/logo-2.png" className="layer absolute size-64" /> */}
      <h1
        ref={textRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0"
      >
        Welcome to the Experience
      </h1>
    </div>
  );
}

export default Homepage;
