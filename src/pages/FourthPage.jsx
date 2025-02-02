import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import GiftCardSelector from "../pages-help/Gift";

// ✅ Correct Plugin Registration
gsap.registerPlugin(ScrollTrigger);

function FourthPage() {
  const containerRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);
  const leftHCardRef = useRef(null);
  const rightHCardRef = useRef(null);

  useGSAP(
    () => {
      if (!leftCardsRef.current.length || !rightCardsRef.current.length) return;

      // ✅ Ensure Elements Start Centered (GSAP Set)
      gsap.set(leftCardsRef.current, { x: 0, y: 0 });
      gsap.set(rightCardsRef.current, { x: 0, y: 0 });

      // ✅ Animate Left Cards (Move Left on Scroll)
      leftCardsRef.current.forEach((card) => {
        gsap.to(card, {
          x: "-250px", // ✅ Moves left but stays centered initially
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        });
      });

      // ✅ Animate Right Cards (Move Right on Scroll)
      rightCardsRef.current.forEach((card) => {
        gsap.to(card, {
          x: "250px", // ✅ Moves right but stays centered initially
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        });
      });
      gsap.to(leftHCardRef.current, {
        x: "-250px", // ✅ Moves right but stays centered initially
        opacity: 1,
        scrollTrigger: {
          trigger: leftCardsRef.current[0],
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      gsap.to(rightHCardRef.current, {
        x: "+250px", // ✅ Moves right but stays centered initially
        opacity: 1,
        scrollTrigger: {
          trigger: rightCardsRef.current[0],
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center"
    >
      <h1 className="font-playfair text-[4rem] h-full -mt-[18rem] flex flex-col leading-tight text-center font-extrabold">
        <p>Givingli</p>
        <p className="-mt-4">Cash</p>
      </h1>
      <div className="absolute bg-[url('/iphone.png')] bg-cover bg-center h-[40rem] w-[20rem] rounded-2xl z-50"></div>
      <img
        src="/fourthPage.svg"
        className="h-[38rem] w-[28rem] z-40 top-12 absolute rounded-[9rem]"
      />
      <img
        src="givingiCard.png"
        className="h-[25%] w-[15dvw] z-50 absolute top-[20dvh]"
      />
      <div className="bg-transparent absolute bottom-[20dvh] w-[15dvw] h-[60dvh] z-50 overflow-hidden">
        <GiftCardSelector />
      </div>

      {/* {[
        ["bg-red-500", "-35deg", "left"],
        ["bg-pink-500", "35deg", "left"],
        ["bg-yellow-500", "150deg", "right"],
        ["bg-green-500", "210deg", "right"],
      ].map(([bgColor, rotation, position], index) => (
        <div
          key={index}
          ref={(el) =>
            position === "left"
              ? (leftCardsRef.current[index] = el)
              : (rightCardsRef.current[index] = el)
          }
          className={`absolute rounded-2xl ${bgColor} w-[20rem] h-[10rem]`}
          style={{
            transform: `rotate(${rotation})`,
            top: "42%",
            left: "50%",
            transformOrigin: "center",
            translate: "-50% -50%", // ✅ Keeps it centered
          }}
        />
      ))} */}
      <div
        ref={(el) => (leftCardsRef.current[0] = el)}
        className="absolute rounded-2xl bg-[url('/card-0.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          transform: "rotate(-30deg)",
          top: "65%",
          left: "50%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
      <div
        ref={(el) => (leftHCardRef.current = el)}
        className="absolute rounded-2xl bg-[url('/card-1.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          // transform: "rotate(210deg)",
          top: "50%",
          left: "47.5%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
      <div
        ref={(el) => (leftCardsRef.current[1] = el)}
        className="absolute rounded-2xl bg-[url('/card-2.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          transform: "rotate(30deg)",
          top: "35%",
          left: "52%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
      <div
        ref={(el) => (rightCardsRef.current[1] = el)}
        className="absolute rounded-2xl bg-[url('/card-5.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          transform: "rotate(30deg)",
          top: "65%",
          left: "50%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
      <div
        ref={(el) => (rightHCardRef.current = el)}
        className="absolute rounded-2xl bg-[url('/card-4.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          // transform: "rotate(210deg)",
          top: "50%",
          left: "49%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
      <div
        ref={(el) => (rightCardsRef.current[0] = el)}
        className="absolute rounded-2xl bg-[url('/card-3.webp')] bg-cover bg-center w-[20rem] h-[10rem]"
        style={{
          transform: "rotate(-30deg)",
          top: "35%",
          left: "48%",
          transformOrigin: "center",
          translate: "-50% -50%", // ✅ Keeps it centered
        }}
      />
    </section>
  );
}

export default FourthPage;
