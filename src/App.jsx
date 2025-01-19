import About from "./components/About"
import Eyes from "./components/Eyes"
import Features from "./components/Features"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./LandingPage"

//1:23:32
function App() {
  

  return (
    <div className="w-full h-screen ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Features/>
    </div>
  )
}

export default App
