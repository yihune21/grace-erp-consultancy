import Testimonials from "../components/About/Testimonials";
import Projects from "../components/ERPImplementation/Projects";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const HappyClientsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white  justify-center items-center">
        <h1 className="text-6xl"> Happy Clients</h1>
      </div>
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HappyClientsPage;
