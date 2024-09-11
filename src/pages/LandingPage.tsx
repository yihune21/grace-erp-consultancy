import About from "../components/About/About";
import Feature from "../components/About/Feature";
import Customers from "../components/About/Customers";
// import Testimonials from "../components/About/Testimonials";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Home/Hero";
import WorkWithUs from "../components/Home/WorkWithUs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkWithUs />
      <Feature />
      <Customers />
      <Footer />
    </>
  );
};

export default LandingPage;
