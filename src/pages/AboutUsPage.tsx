import Content from "../components/About/Content";
import CompanyOverview from "../components/About/CompanyOverview";
import OurTeam from "../components/About/OurTeam";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white mb-4 justify-center items-center">
        <h1 className="text-6xl">About Us</h1>
      </div>
      <Content />
      <section id="values">
        <CompanyOverview />
      </section>
      <section id="leaders">
        <OurTeam />
      </section>
      <Footer />
    </>
  );
};

export default AboutUsPage;
