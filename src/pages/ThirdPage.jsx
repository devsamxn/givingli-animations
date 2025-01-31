import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function ThirdPage() {
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
        end: "+=1000", // Animation lasts for 2000px scroll distance
        scrub: true,
        pin: true, // **Pins the section so animation is fully visible**
        markers: true, // Set to `true` to debug scroll positions
      },
    });

    // Animate images outward to four corners
    // tl.to(images[0], { x: "-30vw", y: "-30vh", scale: 0.8, opacity: 1 }, 0);
    // tl.to(images[1], { x: "30vw", y: "-30vh", scale: 0.8, opacity: 1 }, 0.01);
    // tl.to(images[2], { x: "-20vw", y: "20vh", scale: 0.8, opacity: 1 }, 0.01);
    // tl.to(images[3], { x: "10vw", y: "-40vh", scale: 0.8, opacity: 1 }, 0.015);
    // tl.to(images[4], { x: "20vw", y: "30vh", scale: 0.8, opacity: 1 }, 0.017);
    // tl.to(images[5], { x: "30vw", y: "20vh", scale: 0.8, opacity: 1 }, 0.017);
    // tl.to(images[6], { x: "-40vw", y: "1vh", scale: 0.8, opacity: 1 }, 0.02);
    // tl.to(images[7], { x: "0vw", y: "30vh", scale: 0.8, opacity: 1 }, 0.02);
    tl.to(images[0], { x: "-30vw", y: "0vh", scale: 1.2, opacity: 1 }, 0);
    tl.to(images[1], { x: "-20vw", y: "-30vh", scale: 0.8, opacity: 1 }, 0.05);
    tl.to(images[2], { x: "0vw", y: "-33vh", scale: 1.2, opacity: 1 }, 0.05);
    tl.to(images[3], { x: "20vw", y: "-30vh", scale: 0.8, opacity: 1 }, 0.1);
    tl.to(images[4], { x: "30vw", y: "0vh", scale: 1.2, opacity: 1 }, 0.1);
    tl.to(images[5], { x: "20vw", y: "30vh", scale: 0.8, opacity: 1 }, 0.15);
    tl.to(images[6], { x: "0vw", y: "35vh", scale: 1.2, opacity: 1 }, 0.15);
    tl.to(images[7], { x: "-20vw", y: "30vh", scale: 0.8, opacity: 1 }, 0.2);

    // Fade in the text with a slight delay
    tl.to(textRef.current, { opacity: 1, scale: 3, duration: 0.3 }, "-=0.5");
    // Starts before images finish
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
    <div ref={containerRef} className="container relative h-[100dvh]">
      {[
        "img-01.webp",
        "img-02.webp",
        "img-03.webp",
        "img-04.webp",
        "img-05.webp",
        "img-06.webp",
        "img-07.webp",
        "img-08.webp",
      ].map((src, index) => (
        <img
          src={src}
          ref={(el) => (imagesRef.current[index] = el)}
          key={index}
          className={`z-10 layer absolute size-40 rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl shadow-black`}
        />
      ))}
      {/* <img src="/logo-2.png" className="layer absolute size-64" /> */}
      <div
        ref={textRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 font-playfair font-extrabold flex flex-col text-center text-purple-800 leading-tight"
      >
        <p className="text-2xl">Gifting</p>
        <p className="-mt-3 text-2xl">made simple</p>
        <p className="text-[0.5rem] max-w-44">
          Send the perfect gift every time. Our gift store is packed with
          hundreds of top brands and fully curated for every occasion.
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default ThirdPage;
