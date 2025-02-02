import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function FifthBox() {
  const fifthBox = useRef(null);
  const fifthSubBox1 = useRef(null);
  useGSAP(() => {
    gsap.set(fifthSubBox1.current, {
      yPercent: 50,
    });
    fifthBox.current.addEventListener("mouseenter", () => {
      gsap.to(fifthSubBox1.current, {
        yPercent: 40,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
    fifthBox.current.addEventListener("mouseleave", () => {
      gsap.to(fifthSubBox1.current, {
        yPercent: 50,
        duration: 0.3,
        ease: "power2.inOut",
        delay: 0.1,
      });
    });
  });
  return (
    <div
      ref={fifthBox}
      className="relative bg-blue-200 col-span-1 row-span-1 rounded-3xl overflow-hidden"
    >
      <div className="m-4 flex flex-col gap-1 text-blue-900">
        <h1 className="text-3xl font-bold font-playfair">Reminders</h1>
        <p className="font-semibold">Never miss a birthday again</p>
      </div>
      <img
        ref={fifthSubBox1}
        className="absolute size-[18rem] right-0 bottom-0
        "
        src="/fifthBox1.webp"
      />
    </div>
  );
}

export default FifthBox;
