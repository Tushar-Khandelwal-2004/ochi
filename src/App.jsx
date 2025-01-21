import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import LocomotiveScroll from "locomotive-scroll"
import Temp from "./components/temp"
import FeatureCard from "./components/FeatureCard"
import FeatureEndButton from "./components/FeatureEndButton"
import ClientReview from "./components/ClientReview"
import Button3 from "./components/Button3"
function App() {
  
  const locomotiveScroll=new LocomotiveScroll();
  // return (
  //   <div className="bg-zinc-900">
  //   <Button3 text="read"/>

  //   </div>

  // )
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
