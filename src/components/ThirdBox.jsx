import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ThirdBox() {
  const thirdBox1 = useRef(null);
  const thirdSubBox1 = useRef(null);
  const thirdSubBox2 = useRef(null);
  const thirdSubBox3 = useRef(null);
  const thirdSubBox4 = useRef(null);
  const thirdBox2 = useRef(null);
  const thirdSubBox5 = useRef(null);
  const thirdSubBox5Banner = useRef(null);

  useGSAP(() => {
    gsap.set(thirdSubBox2.current, {
      transformOrigin: "center",
      rotateZ: -5,
      x: -3,
      yPercent: -10,
      perspective: 800, // Add depth for 3D effect
    });
    gsap.set(thirdSubBox3.current, {
      transformOrigin: "center",
      rotateZ: -10,
      x: -6,
      yPercent: -20,
      perspective: 800, // Add depth for 3D effect
    });
    gsap.set(thirdSubBox4.current, {
      transformOrigin: "center",
      rotateZ: -15,
      yPercent: -25,
      x: -10,
      perspective: 800, // Add depth for 3D effect
    });
    thirdBox1.current.addEventListener("mouseenter", () => {
      gsap.to(thirdSubBox2.current, {
        rotation: -6,
        y: -7,
        duration: 0.3,
      });
      gsap.to(thirdSubBox3.current, {
        rotation: -15,
        y: -8,
        duration: 0.3,
      });
      gsap.to(thirdSubBox4.current, {
        rotation: -25,
        y: -15,
        duration: 0.3,
      });
    });
    thirdBox1.current.addEventListener("mouseleave", () => {
      gsap.to(thirdSubBox2.current, {
        rotation: -5,
        y: 2,
        duration: 0.3,
      });
      gsap.to(thirdSubBox3.current, {
        rotateZ: -10,
        y: 2,
        duration: 0.3,
      });
      gsap.to(thirdSubBox4.current, {
        rotateZ: -15,
        y: 2,
        duration: 0.3,
      });
    });
    thirdBox2.current.addEventListener("mouseenter", () => {
      gsap.to(thirdSubBox5.current, {
        yPercent: -10,
        duration: 0.3,
      });
      gsap.to(thirdSubBox5Banner.current, {
        yPercent: -25,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    thirdBox2.current.addEventListener("mouseleave", () => {
      gsap.to(thirdSubBox5.current, {
        yPercent: 0,
        duration: 0.3,
      });
      gsap.to(thirdSubBox5Banner.current, {
        yPercent: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <div className="col-span-2 row-span-1 h-full w-full grid grid-cols-2 gap-5">
      <div
        ref={thirdBox1}
        className="thirdBox1 relative bg-green-400 h-full w-full rounded-3xl bg-opacity-50 bg-blend-color"
      >
        <div className="absolute bottom-0 left-0 py-5 px-10 flex flex-col gap-1 text-green-900 ">
          <h1 className="text-3xl font-bold font-playfair">Wallet</h1>
          <p className="font-semibold">
            Access all your gifts and save up your Givingli Cash
          </p>
        </div>
        <div
          ref={thirdSubBox1}
          className="thirdSubBox1 z-40 absolute w-[16rem] h-[6rem] rounded-2xl left-1/2 -translate-x-1/2 top-[3.5rem] bg-[url('/thirdBox1.svg')] bg-cover"
        />
        <div
          ref={thirdSubBox2}
          className="thirdSubBox2 z-30 absolute w-[15rem] h-[6rem] rounded-2xl left-1/2 -translate-x-1/2 top-[3.5rem] bg-[url('/card-3.webp')] bg-cover"
        />
        <div
          ref={thirdSubBox3}
          className="thirdSubBox3 z-20 absolute w-[14.5rem] h-[6rem] rounded-2xl left-1/2 -translate-x-1/2 top-[3.5rem] bg-[url('/card-0.webp')] bg-cover"
        />
        <div
          ref={thirdSubBox4}
          className=" thirdSubBox4 z-10 absolute w-[14rem] h-[6rem] rounded-2xl left-1/2 -translate-x-1/2 top-[3.5rem] bg-[url('/thirdBox4.webp')] bg-cover"
        />
      </div>
      <div
        ref={thirdBox2}
        className="relative bg-yellow-400 h-full w-full rounded-3xl overflow-y-hidden bg-opacity-50 bg-blend-color"
      >
        <div className="absolute top-0 left-0 mx-10 w-[80%] mt-5 flex flex-col gap-1 text-yellow-900">
          <h1 className="font-playfair text-3xl font-bold">Inbox</h1>
          <p className="font-semibold">
            Track your gifts, group chats, and sent cards.
          </p>
        </div>
        <div
          ref={thirdSubBox5}
          className="absolute z-50 h-[10rem] w-[16rem] bottom-0 left-1/2 transform -translate-x-1/2 -mb-7 rounded-2xl overflow-y-hidden"
        >
          <div
            ref={thirdSubBox5Banner}
            className="bg-[url(/thirdBox5.webp)] bg-cover h-[15rem] w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdBox;
