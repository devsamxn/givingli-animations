import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const FourthPage = () => {
  useEffect(() => {
    const handleParralax = (e) => {
      const speed = 2;
      document.querySelectorAll(".layer").forEach((layer) => {
        const x = (window.innerHeight - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * (speed + 1)) / 100;
        layer.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
      });
    };
    document.addEventListener("mousemove", handleParralax);
    return () => {
      document.removeEventListener(".mousemove", handleParralax);
    };
  }, []);
  return (
    <div className="relative h-[100dvh] ">
      <img
        src="/logo-1.png"
        className="left layer absolute size-36 top-1/2 -translate-y-1/2 left-10"
      />
      <img
        src="/logo-2.png"
        className="right layer absolute size-36 top-1/2 -translate-y-1/2 right-10"
      />
    </div>
  );
};

export default FourthPage;
