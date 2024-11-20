
import FindYourMatch from "./Components/FindYourMatch";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";


export default function Home() {
  return (
    <> 
      <Navbar /> 
      <HeroSection/>
      <FindYourMatch/>
      <Register/>
    </>
  );
}

