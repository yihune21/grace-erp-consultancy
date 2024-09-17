import ERPImplementation from "../components/ERPImplementation/ERPImplementation";
import Services from "../components/ERPImplementation/Services";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import bgImg from "../assets/erp_imp(1).jpg";

const ERPImplementationPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex w-full h-80 bg-cover bg-center bg-gray-800 text-[#f8fafc] justify-center items-center mb-0"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          ERP Implementation
        </h1>
      </div>
      <ERPImplementation />
      <Services />
      <Footer />
    </>
  );
};

export default ERPImplementationPage;
