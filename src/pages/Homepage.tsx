import HomePageLayout from "../components/layout/homepage/HomepageLayout";
import Navbar from "../components/layout/header/Navbar";
import Footer from "../components/layout/footer/Footer";
import HeroSection from "./section/Hero";
import AboutSection from "./section/About";
import HowItWork from "./section/HowItWorks";
import DataVisualization from "./section/DataVisualization";
import PredictionDemo from "./section/PredictionDemo";

const Homepage = () => {
    return (
        <>
            <HomePageLayout>
                <div>
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                    <HowItWork />
                    <DataVisualization />
                    <PredictionDemo />
                </div>
            </HomePageLayout>
            <Footer />
        </>
    )
};

export default Homepage;