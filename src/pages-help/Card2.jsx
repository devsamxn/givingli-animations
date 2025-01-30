import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const LastPart = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.defaults({ ease: "none", duration: 2 });
    tl.to(".black", { yPercent: -100 })
      .to(".pink", { yPercent: 100 })
      .to(".blue", { yPercent: -100 });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: "+=550",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
    });
  });
  return (
    <section className="container relative h-screen w-screen bg-[url(../public/last.jpg)] overflow-hidden overflow-x-hidden grid grid-cols-3">
      <div className="black bg-black h-full w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Uncover</h1>
      </div>
      <div className="pink bg-black h-full w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">The</h1>
      </div>
      <div className="blue bg-black h-full w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Truth</h1>
      </div>
    </section>
  );
};

export default LastPart;
