import { useState, useRef } from "react";
import gsap from "gsap";

const graffitiImages = ["🎉", "🎈"];

const GiftCardSelector = () => {
  const [amount, setAmount] = useState(10);
  const effectContainerRef = useRef(null);
  const numberRef = useRef(null);
  const amounts = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const updateAmount = (change) => {
    const currentIndex = amounts.indexOf(amount);
    const newIndex = currentIndex + change;

    if (newIndex < 0 || newIndex >= amounts.length) return; // Prevent out of bounds

    const newAmount = amounts[newIndex];

    // Animate the number transition
    gsap.to(numberRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setAmount(newAmount);
        gsap.set(numberRef.current, { y: 50, opacity: 0 });
        gsap.to(numberRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    // Trigger graffiti animation for `+` and frownies for `-`
    if (change > 0) createGraffiti();
    else createFrownies();
  };

  const createGraffiti = () => {
    for (let i = 0; i < 50; i++) {
      const graffiti = document.createElement("p");
      graffiti.innerHTML =
        graffitiImages[Math.floor(Math.random() * graffitiImages.length)];
      graffiti.className = "graffiti";
      graffiti.style.position = "absolute";
      graffiti.style.left = `${Math.random() * 100}%`; // Random position across width
      graffiti.style.top = `${Math.random() * 100}%`; // Random position across height
      graffiti.style.width = `${50 + Math.random() * 50}px`; // Varying sizes
      graffiti.style.transform = `rotate(${Math.random() * 360}deg)`;
      effectContainerRef.current.appendChild(graffiti);

      gsap.fromTo(
        graffiti,
        { scale: 0, opacity: 5 },
        {
          scale: 2,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => graffiti.remove(),
        }
      );
    }
  };

  const createFrownies = () => {
    for (let i = 0; i < 50; i++) {
      const frown = document.createElement("div");
      frown.innerText = "☹️";
      frown.className = "emoji";
      frown.style.position = "absolute";
      frown.style.left = `${Math.random() * 100}%`;
      frown.style.top = `${Math.random() * 100}%`;
      frown.style.fontSize = `${20 + Math.random() * 30}px`; // Random sizes
      effectContainerRef.current.appendChild(frown);

      gsap.to(frown, {
        y: -window.innerHeight,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => frown.remove(),
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-transparent">
      {/* Amount Display */}
      <div className="relative font-bold flex flex-row justify-between items-center gap-5">
        <button
          className="text-4xl text-black p-2 rounded-full h-10 w-10 flex justify-center"
          onClick={() => updateAmount(-1)}
        >
          ☹
        </button>
        <div ref={numberRef} className="text-5xl">
          {amount}
        </div>
        <button
          className="text-4xl text-black p-2 rounded-full h-10 w-10"
          onClick={() => updateAmount(1)}
        >
          😀
        </button>
      </div>

      {/* Floating Effect Container */}
      <div
        ref={effectContainerRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></div>
    </div>
  );
};

export default GiftCardSelector;
