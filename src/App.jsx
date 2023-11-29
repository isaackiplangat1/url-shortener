import Banner from "./components/Banner"
import Features from "./components/Features"
import FeaturesLink from "./components/FeaturesLink"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import UrlInput from "./components/UrlInput"

function App() {

  return (
    <div className=" overflow-hidden ">
    <Navbar/>
    <Banner/>
    <div className=" translate-y-[50%]">
    <UrlInput/>
    </div>
    <Features/>
    <FeaturesLink/>
    <Footer/>
  
    </div>
  )
}

export default App
