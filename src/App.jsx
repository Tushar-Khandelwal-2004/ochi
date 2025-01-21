import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import LocomotiveScroll from "locomotive-scroll"
import FeatureCard from "./components/FeatureCard"
import FeatureEndButton from "./components/FeatureEndButton"
import ClientReview from "./components/ClientReview"

function App() {
  
  const locomotiveScroll=new LocomotiveScroll();
  
  return (
    <div className="w-full h-screen ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Features/>
      <FeatureCard/>
      <FeatureEndButton/>
      <ClientReview/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
