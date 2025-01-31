import FifthBox from "../components/FifthBox";
import FirstBox from "../components/FirstBox";
import FourthBox from "../components/FourthBox";
import SecondBox from "../components/SecondBox";
import ThirdBox from "../components/ThirdBox";
import FourthPage from "./FourthPage";

const SecondPage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[53rem] w-screen bg-gray-200 gap-5 px-[15rem]">
      <FirstBox />
      <SecondBox />
      <ThirdBox />
      <FourthBox />
      <FifthBox />
    </div>
  );
};

export default SecondPage;
