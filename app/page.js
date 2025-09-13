import BusinessSection from "./Components/BusinessSection";
import Header from "./Components/Header";
import Slide1 from "./Components/Slide1";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#163b29] to-black min-h-screen flex flex-col items-center justify-center">

      <Header/>
      <Slide1/>
      <BusinessSection/>
     
    </div>
  );
}
