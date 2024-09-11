import ERPImplementation from "../components/ERPImplementation/ERPImplementation";
import Services from "../components/ERPImplementation/Services";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const ERPImplementationPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-60 bg-gray-800 text-white mb-4 justify-center items-center mb-0">
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
