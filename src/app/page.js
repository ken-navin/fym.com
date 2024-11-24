
import About from "./Components/About";
import FindYourMatch from "./Components/FindYourMatch";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Trust from "./Components/Trust";


export default function Home() {
  return (
    <> 
      <Navbar /> 
      <HeroSection/>
      <FindYourMatch/>
      <Register/>
      <Footer/>
    </>
  );
}

