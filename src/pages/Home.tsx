import Navbar from "../components/home/Navbar"
import Jumbo from "../components/home/Jumbo"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import CallToAct from "../components/home/CallToAct"
import TechStack from "../components/home/TechStack"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div data-theme="dark">
            <Navbar />
            <Jumbo />
            <About />
            <Projects />
            <TechStack />
            <CallToAct />
            <Footer />
        </div>
    )
}

export default Home