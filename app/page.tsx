import Image from "next/image";
import Navbar from "./components/Nabvar";
import HeroSection from "./components/HeroSection";
import WeCan from "./components/WeCan";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto p-5 ">
    
    <Navbar/>

      <HeroSection/>
    </div>

    <div className="max-w-7xl mx-auto p-5 ">
      
    </div>
  </div>
  );
}
