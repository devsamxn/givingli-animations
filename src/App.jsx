import FourthPage from "./pages/FourthPage";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const App = () => {
  return (
    <div className="bg-purple-200 overflow-x-hidden">
      <Homepage />
      <section className="h-[20rem]" />
      <SecondPage />
      <ThirdPage />
      <section className="h-[20rem]" />
      <FourthPage />
    </div>
  );
};

export default App;
