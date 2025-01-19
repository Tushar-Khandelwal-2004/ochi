import About from "./components/About"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LandingPage from "./LandingPage"

//26
function App() {
  

  return (
    <div className="w-full h-screen ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
    </div>
  )
}

export default App
