import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const layersRef = useRef([]);
  const containerRef = useRef(null);
  const iphoneRef = useRef(null);
  const textRef = useRef(null);
  const hTextRef = useRef([]);

  // useGSAP(
  //   () => {
  //     let parallaxEnabled = true; // Initially enabled

  //     const parallaxX = gsap.quickTo(layersRef.current, "x", {
  //       duration: 0.3,
  //       ease: "power2.out",
  //     });
  //     const parallaxY = gsap.quickTo(layersRef.current, "y", {
  //       duration: 0.3,
  //       ease: "power2.out",
  //     });

  //     const handleParallax = (e) => {
  //       if (!parallaxEnabled) return; // Stop parallax when scrolling hides images

  //       const speed = 4;
  //       const x = (window.innerWidth - e.pageX * speed) / 100;
  //       const y = (window.innerHeight - e.pageY * (speed + 1)) / 100;

  //       parallaxX(-x);
  //       parallaxY(-y);
  //     };

  //     // ScrollTrigger to check visibility
  //     ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       start: "top top", // When images are in view
  //       end: "bottom top", // When they scroll out
  //       onEnter: () => (parallaxEnabled = false), // Enable parallax
  //       onLeave: () => (parallaxEnabled = true), // Disable parallax
  //       onEnterBack: () => (parallaxEnabled = false), // Re-enable when scrolling back up
  //       onLeaveBack: () => (parallaxEnabled = true), // Disable if scrolling away
  //       markers: true,
  //     });

  //     document.addEventListener("mousemove", handleParallax);

  //     return () => {
  //       document.removeEventListener("mousemove", handleParallax);
  //     };
  //   },
  //   { scope: layersRef }
  // );

  useGSAP(() => {
    gsap.to(layersRef.current[0], {
      x: "-60vw",
      y: "-100vh",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(layersRef.current[1], {
      x: "60vw",
      y: "-100vh",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(layersRef.current[2], {
      x: "-60vw",
      y: "100vh",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(layersRef.current[3], {
      x: "60vw",
      y: "100vh",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        // markers: true,
      },
    });
    gsap.from(layersRef.current[4], {
      xPercent: "180",
      yPercent: "70",
      scale: 1.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(layersRef.current[6], {
      xPercent: "-300",
      yPercent: "-50",
      scale: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(layersRef.current[7], {
      xPercent: "300",
      yPercent: "50",
      scale: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
        // markers: true,
      },
    });
    gsap.from(layersRef.current[5], {
      xPercent: "-300",
      yPercent: "-50",
      scale: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
        // markers: true,
      },
    });
    gsap.from(iphoneRef.current, {
      y: "85vh",
      scale: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: true,
        // markers: true,
      },
    });
    gsap.from(textRef.current, {
      scale: 3,
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400",
        scrub: true,
      },
    });
    gsap.to(hTextRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400",
        scrub: true,
      },
    });
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400", // Keeps pinned for a longer scroll
      pin: true,
      scrub: true,
      // markers: true,
    });
    ScrollTrigger.refresh();
  });

  return (
    <div
      className="relative h-[100dvh] flex items-center justify-center"
      ref={containerRef}
    >
      <img
        ref={(el) => (layersRef.current[0] = el)}
        src="/logo-1.png"
        className="layer absolute size-36 top-[10rem] -translate-y-1/2 left-60"
      />
      <img
        ref={(el) => (layersRef.current[1] = el)}
        src="/logo-2.png"
        className="layer absolute size-36 top-[10rem] -translate-y-1/2 right-60"
      />
      <img
        ref={(el) => (layersRef.current[2] = el)}
        src="/logo-1.png"
        className="layer absolute size-36 bottom-[5rem] left-40"
      />
      <img
        ref={(el) => (layersRef.current[3] = el)}
        src="/logo-2.png"
        className="layer absolute size-36 bottom-[6rem] right-40"
      />
      <img
        ref={(el) => (layersRef.current[4] = el)}
        src="/logo-3.png"
        className="z-10 layer absolute size-36 top-[13rem] left-1/2 -translate-x-1/2"
      />
      <img
        ref={(el) => (layersRef.current[5] = el)}
        src="/logo-3.png"
        className="z-10 layer absolute size-36 top-[23rem] left-1/2 -translate-x-1/2"
      />
      <img
        ref={(el) => (layersRef.current[6] = el)}
        src="/logo-2.png"
        className="layer absolute size-36 bottom-[18rem] left-10"
      />

      <img
        ref={(el) => (layersRef.current[7] = el)}
        src="/logo-1.png"
        className="layer absolute size-36 bottom-[18rem] right-10"
      />

      <div
        ref={textRef}
        className="absolute top-[12rem] text-lg opacity-0 font-playfair flex-col text-center leading-tight font-extrabold"
      >
        <div>
          <p>Gift</p>
          <p>More</p>
          <p>Smiles</p>
        </div>
        <div className="z-50 h-[0.8rem] w-[3rem] rounded-xl bg-blue-500 transition duration-300 ease-in-out hover:bg-gray-400 cursor-pointer flex justify-center text-[5px] p-1 text-white">
          Gift Someone
        </div>
      </div>
      <div
        ref={(el) => (hTextRef.current[0] = el)}
        className="absolute top-[12rem] left-[15rem] text-5xl opacity-0 font-playfair italic flex-col leading-tight space-y-0 font-extrabold w-[15rem]"
      >
        <p>We make gifting and celebrating better.</p>
      </div>
      <div
        ref={(el) => (hTextRef.current[1] = el)}
        className="absolute top-[13rem] right-[10rem] text-4xl opacity-0 font-playfair italic flex-col leading-tight space-y-0 font-extrabold w-[20rem]"
      >
        <p>
          So you can show up for every meaningful occasion, milestone, and
          moment.
        </p>
      </div>
      <img ref={iphoneRef} src="/iphone.png" className="absolute h-[55rem]" />
    </div>
  );
};

export default Homepage;
