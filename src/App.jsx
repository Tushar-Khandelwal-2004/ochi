import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./LandingPage"

//2:12:32
function App() {
  

  return (
    <div className="w-full h-screen ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
    </div>
  )
}

export default App
