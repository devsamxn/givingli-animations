import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FirstBox = () => {
  const firstBox = useRef(null);
  const firstSubBox1 = useRef(null);
  const firstSubBox2 = useRef(null);
  const firstSubBox3 = useRef(null);
  useGSAP(() => {
    gsap.set(firstSubBox1.current, {
      transformOrigin: "center",
      // rotateX: -10, // Slight tilt along X-axis
      // rotateY: -20, // Slight tilt along Y-axis
      rotateZ: -10,
      // skewX: 5, // Skew the box a little
      perspective: 800, // Add depth for 3D effect
    });
    gsap.set(firstSubBox2.current, {
      transformOrigin: "center",
      rotateZ: 10,
      perspective: 800, // Add depth for 3D effect
    });
    gsap.set(firstSubBox3.current, { x: 0 });

    firstBox.current.addEventListener("mouseenter", () => {
      gsap.to(firstSubBox1.current, {
        rotation: -18,
        scale: 1,
        duration: 0.3,
        xPercent: -3,
      });
      gsap.to(firstSubBox2.current, {
        rotation: 18,
        scale: 1,
        duration: 0.3,
        xPercent: 3,
      });
      gsap.to(firstSubBox3.current, {
        x: "-15%",
        duration: 0.4,
        ease: "power2.out",
      });
    });
    firstBox.current.addEventListener("mouseleave", () => {
      gsap.to(firstSubBox1.current, {
        rotation: -10,
        scale: 1,
        duration: 0.3,
        xPercent: 3,
      });
      gsap.to(firstSubBox2.current, {
        rotation: 10,
        scale: 1,
        duration: 0.3,
        xPercent: -3,
      });
      gsap.to(firstSubBox3.current, {
        x: "0%",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <div
      ref={firstBox}
      className="firstSubBox relative bg-purple-300 col-span-1 row-span-2 h-full w-full rounded-3xl"
    >
      <h1 className="absolute top-[2dvh] text-4xl font-playfair ml-[3dvh] font-bold text-purple-800">
        Customization
      </h1>
      <div className="relative mt-10">
        <div
          ref={firstSubBox1}
          className="firstSubBox1 z-40 absolute bg-[url('/firstBox1.webp')] bg-cover bg-center h-[15rem] w-[10rem] top-10 left-10"
        />
        <div
          ref={firstSubBox2}
          className="firstSubBox2 absolute bg-[url('/firstBox2.webp')] bg-cover bg-center h-[15rem] w-[10rem] top-10 left-36"
        />
      </div>
      <div className="-ml-5 absolute bg-purple-300 bottom-[5rem] h-[5rem] w-full rounded-2xl overflow-hidden">
        <div
          ref={firstSubBox3}
          className="firstSubBox3 h-full w-[30rem] bg-white bg-[url(/banner.svg)]"
        />
      </div>
      <p className="absolute bottom-5 text-purple-800 font-bold mx-5 font-playfair text-md tracking-tight">
        Use a pre-designed template or personalize with video, stickers, fonts,
        and more
      </p>
    </div>
  );
};

export default FirstBox;
