import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import img1 from "./assets/img1.png";

const Card = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate perspective tilt based on cursor position
  const calcTransform = (x, y) => {
    const xOffset = (x / window.innerWidth - 0.5) * 20; // Rotate horizontally (-10deg to 10deg)
    const yOffset = (y / window.innerHeight - 0.5) * 20; // Rotate vertically (-10deg to 10deg)
    return `perspective(1000px) rotateX(${yOffset}deg) rotateY(${xOffset}deg)`;
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-white">
      {/* Background Layer */}
      {/* <div className="h-screen bg-black">e</div> */}
      <motion.div
        className="relative h-screen w-screen inset-0 bg-white"
        style={{ transformOrigin: "center" }}
        animate={{
          transform: calcTransform(mousePos.x, mousePos.y),
        }}
        transition={{
          type: "tween",
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* Content */}
        <img
          src="../public/img1.png"
          className="absolute top-0 left-0 perspective size-64"
        />
        <img
          src="../public/img1.png"
          className="absolute right-0 bottom-0 perspective size-64"
        />
        <img
          src="../public/img1.png"
          className="perspective size-64 absolute right-0 top-0"
        />
        <img
          src="../public/img1.png"
          className="perspective size-64 absolute left-0 bottom-0"
        />
      </motion.div>
    </div>
  );
};

export default Card;
