import Content from "../components/About/Content";
import CompanyOverview from "../components/About/CompanyOverview";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import FounderStatement from "../components/About/FounderStatement";
import bgImg from "../assets/erp_imp(1).jpg";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex w-fill h-80 bg-gray-800 text-white mb-4 justify-center items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          About Us
        </h1>
      </div>
      <Content />
      <section id="leader">
        <FounderStatement />
      </section>
      <section id="values">
        <CompanyOverview />
      </section>

      <Footer />
    </>
  );
};

export default AboutUsPage;
