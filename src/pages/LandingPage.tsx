import About from "../components/About/About";
import CompanyOverview from "../components/About/CompanyOverview";
import Content from "../components/About/Content";
import Customers from "../components/About/Customers";
import OurTeam from "../components/About/OurTeam";
import Testimonials from "../components/About/Testimonials";
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
      <CompanyOverview />
      <Customers />
      <Testimonials />
      <OurTeam />
      <Content />
    </>
  );
};

export default LandingPage;
