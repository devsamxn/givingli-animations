import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const phoneImages = ["temp/carousel1.png", "temp/carousel2.png"];

const PhoneSlider = ({ handleBgChange, changeBgColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef(new Map());

  // ✅ Set Initial Opacity for All Images and Show Only the First One
  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      gsap.set(img, { opacity: index === 0 ? 1 : 0 });
    });
  }, []);

  const changeImage = (direction) => {
    if (direction === "prev" && currentIndex === 0) return;
    if (direction === "next" && currentIndex === phoneImages.length - 1) return;

    const totalImages = phoneImages.length;
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % totalImages
        : (currentIndex - 1 + totalImages) % totalImages;

    const currentImage = imagesRef.current.get(currentIndex);
    const nextImage = imagesRef.current.get(nextIndex);

    if (!currentImage || !nextImage) return;

    gsap.set(nextImage, {
      x: direction === "next" ? "100%" : "-100%",
      scale: 0.8,
      opacity: 0, // Ensure it's initially hidden
    });

    gsap
      .timeline({
        onComplete: () => {
          setCurrentIndex(nextIndex);
          changeBgColor(nextIndex);
          handleBgChange(nextIndex);
        },
      })
      .to(currentImage, {
        x: direction === "next" ? "-100%" : "100%",
        scale: 0.9,
        opacity: 0, // Fade out smoothly
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        nextImage,
        {
          x: "0%", // Move into view
          opacity: 1, // Fade in smoothly
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3" // Overlap for smoother effect
      )
      .to(nextImage, {
        scale: 1, // Scale up to full size
        duration: 0.6,
        ease: "power2.out",
      });
  };

  return (
    <div className="relative w-full h-full flex flex-row">
      <div className="overflow-hidden">
        {phoneImages.map((src, index) => (
          <img
            key={index}
            ref={(el) => imagesRef.current.set(index, el)}
            src={src}
            alt={`Phone ${index + 1}`}
            className="h-full w-full object-cover absolute top-0 left-0"
          />
        ))}
      </div>
      <div className="absolute flex justify-between w-full bottom-0 rounded-full h-[3.5rem] -mb-[4rem] bg-gray-500 bg-opacity-50 mix-blend-overlay">
        <button
          className=" left-0 bottom-0 px-4 py-2 rounded-full text-white font-bold bg-black m-1"
          disabled={currentIndex === 0}
          onClick={() => changeImage("prev")}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          {`<--`}
        </button>

        <button
          className="right-0 bottom-0 px-4 py-2 rounded-full text-white font-bold bg-black m-1"
          disabled={currentIndex === phoneImages.length - 1}
          onClick={() => changeImage("next")}
          style={{ opacity: currentIndex === phoneImages.length - 1 ? 0.5 : 1 }}
        >
          {`-->`}
        </button>
      </div>
    </div>
  );
};

export default PhoneSlider;
