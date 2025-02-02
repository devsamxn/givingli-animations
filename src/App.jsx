// import PhoneSlider from "./pages-help/PhoneSlider";
import FourthPage from "./pages/FourthPage";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import GiftCardSelector from "./pages-help/Gift";
import NavBar from "./pages/NavBar";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const appRef = useRef(null);
  const changeBgColor = (ind = 0) => {
    const colors = ["#fee7b0", "#fff9eb"]; // Define colors for each image
    const newColor = colors[ind % colors.length]; // Cycle through colors

    gsap.to(appRef.current, {
      backgroundColor: newColor,
      duration: 0.6, // Smooth transition
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={appRef}
      className="overflow-x-hidden min-h-screen transition-colors duration-500 bg-[#fee7b0]"
    >
      <NavBar />
      <Homepage className="section" changeBgColor={changeBgColor} />
      <section className="section h-[20rem]  flex justify-center items-center">
        <h1 className="font-playfair text-[5rem] text-center font-bold">
          Explore endless possibilities.
        </h1>
      </section>
      <SecondPage className="section" />
      <ThirdPage className="section" />
      <section className="section h-[20rem]" />
      <FourthPage className="section" />
    </div>
  );
};

export default App;
