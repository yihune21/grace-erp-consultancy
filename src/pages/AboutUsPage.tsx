import Content from "../components/About/Content";
import CompanyOverview from "../components/About/CompanyOverview";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import FounderStatement from "../components/About/FounderStatement";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white mb-4 justify-center items-center">
        <h1 className="text-6xl">About Us</h1>
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
