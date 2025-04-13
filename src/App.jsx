import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCard";
import Experience from "./sections/Experiences";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
