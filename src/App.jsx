import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./LandingPage"
import LocomotiveScroll from "locomotive-scroll"
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
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
