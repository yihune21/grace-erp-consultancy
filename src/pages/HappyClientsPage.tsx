import Projects from "../components/HappyClients/Projects";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import bgImg from "../assets/erp_imp(1).jpg";

const HappyClientsPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex w-fill h-80 bg-gray-800 text-white  justify-center items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {" "}
          Happy Clients
        </h1>
      </div>
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default HappyClientsPage;
