import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondBox = () => {
  const secondBox = useRef(null);
  const secondSubBox1 = useRef(null);
  const secondSubBox2 = useRef(null);

  useGSAP(() => {
    gsap.set(secondSubBox1.current, {
      transformOrigin: "center",
      rotateZ: -25,
      perspective: 800, // Add depth for 3D effect
    });
    gsap.set(secondSubBox2.current, {
      transformOrigin: "center",
      rotateZ: 8,
      perspective: 800, // Add depth for 3D effect
    });
    secondBox.current.addEventListener("mouseenter", () => {
      gsap.to(secondSubBox1.current, {
        rotation: -33,
        scale: 1,
        duration: 0.3,
        xPercent: -3,
      });
      gsap.to(secondSubBox2.current, {
        rotation: 20,
        scale: 1,
        duration: 0.3,
        xPercent: 3,
      });
    });
    secondBox.current.addEventListener("mouseleave", () => {
      gsap.to(secondSubBox1.current, {
        rotation: -25,
        scale: 1,
        duration: 0.3,
        xPercent: 3,
      });
      gsap.to(secondSubBox2.current, {
        rotation: 8,
        scale: 1,
        duration: 0.3,
        xPercent: -3,
      });
    });
  }, []);
  return (
    <div
      ref={secondBox}
      className="secondBox relative bg-pink-400 col-span-2 row-span-1 h-full w-full rounded-3xl bg-opacity-50 bg-blend-color"
    >
      <div
        ref={secondSubBox1}
        className="secondBox1 absolute h-[16rem] w-[11rem] right-[10rem] -mt-5 bg-[url(/secondBox1.webp)] bg-cover bg-center"
      />
      <div
        ref={secondSubBox2}
        className="secondBox2 z-40 absolute h-[15rem] w-[15rem] rounded-2xl right-2 bg-[url(/secondBox2.svg)] bg-cover bg-center"
      />
      <div className="absolute bottom-5 ml-5">
        <h1 className="text-3xl font-playfair font-extrabold text-pink-900">
          Scheduling
        </h1>
        <p className="w-[50dvh] text-xl mt-2 text-pink-900 font-semibold text-balance">
          Schedule all your cards and gifts now and we'll send them later
        </p>
      </div>
    </div>
  );
};

export default SecondBox;
