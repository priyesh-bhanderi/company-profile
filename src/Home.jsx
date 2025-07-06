import About from "./components/About";
import CTABanner from "./components/CTABanner";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ProcessSteps from "./components/ProcessSteps";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import Contact from './components/Contact'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <ProcessSteps />
            <Stats />
            <Portfolio />
            <Technologies />
            <Testimonials />
            {/* <Pricing /> */}
            <CTABanner />
            <FAQs />
            <Contact />
            <Footer />
            <FloatingCTA />
        </div>
    )
}