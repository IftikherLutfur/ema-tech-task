import About from "./Components/About";
import BusinessSection from "./Components/BusinessSection";
import Header from "./Components/Header";
import Newsletter from "./Components/Newsletter";
import Slide1 from "./Components/Slide1";
import Slider2 from "./Components/Slider2";

export default function Home() {
  return (
    <div className=" bg-black min-h-screen flex flex-col items-center justify-center">

      <Header/>
      <Slide1/>
      <BusinessSection/>
      <Slider2/>
      <About/>
      <Newsletter/>
     
    </div>
  );
}
