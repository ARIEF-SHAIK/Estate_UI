import AboutSection from '../components/AboutSection'
import Footer from "../components/Footer"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"


const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Footer/>
    </div>
  )
}

export default HomePage