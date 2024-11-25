import About from "../components/About2"
import ExistingMember from "../components/ExistingMember"
import FaqSection from "../components/FaqSection"
import Footer from "../Components/Footer"
import Navbar from "../components/Navbar2"


const page = () => {
  return (
    <>
    <Navbar />
    <ExistingMember />
    <About />
    <FaqSection />
    <Footer />
    </>
  )
}

export default page
