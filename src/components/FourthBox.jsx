import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function FourthBox() {
  const fourthMainBox = useRef(null);
  const fourthSubBox = useRef(null);
  const fourthSubBox1 = useRef(null);
  const fourthSubBox2 = useRef(null);
  const fourthSubBox3 = useRef(null);

  useGSAP(() => {
    gsap.set(fourthSubBox.current, {
      rotate: -15,
      scale: 0.9,
    });
    gsap.set(fourthSubBox1.current, {
      yPercent: 8,
    });
    gsap.set(fourthSubBox2.current, {
      yPercent: 2,
    });
    gsap.set(fourthSubBox3.current, {
      yPercent: -16,
    });
    fourthMainBox.current.addEventListener("mouseenter", () => {
      gsap.to(fourthSubBox1.current, {
        yPercent: 16,
        duration: 0.3,
        ease: "power2.Out",
      });
      gsap.to(fourthSubBox2.current, {
        yPercent: -10,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(fourthSubBox3.current, {
        yPercent: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    fourthMainBox.current.addEventListener("mouseleave", () => {
      gsap.to(fourthSubBox1.current, {
        yPercent: 8,
        duration: 0.3,
        ease: "power2.Out",
      });
      gsap.to(fourthSubBox2.current, {
        yPercent: 2,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(fourthSubBox3.current, {
        yPercent: -16,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
  return (
    <div
      ref={fourthMainBox}
      className="relative bg-yellow-500 col-span-2 row-span-1 h-full w-full rounded-3xl overflow-hidden"
    >
      <div
        ref={fourthSubBox}
        className="absolute bg-transparent h-[25rem] w-[28rem] right-0 top-0 -mt-[4rem] grid grid-cols-3 gap-4"
      >
        <div ref={fourthSubBox1} className="h-full grid grid-rows-4 gap-4">
          <div className="bg-[url('/fourthBox1.webp')] bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-5.webp')] bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/fourthBox2.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-2.webp')] bg-cover bg-center rounded-xl drop-shadow-2xl" />
        </div>
        <div ref={fourthSubBox2} className="h-full grid grid-rows-4 gap-4">
          <div className="bg-[url('/fourthBox3.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/thirdBox4.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-0.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/fourthBox4.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
        </div>
        <div ref={fourthSubBox3} className="h-full grid grid-rows-4 gap-4">
          <div className="bg-[url('/fourthBox4.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-3.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-4.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
          <div className="bg-[url('/card-1.webp')]  bg-cover bg-center rounded-xl drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
}

export default FourthBox;
