import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import SaaS from "../components/SaaSService/SaaS";

const SaaSServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white mb-4 justify-center items-center">
        <h1 className="text-6xl "> SaaS Service</h1>
      </div>
      <SaaS />

      <Footer />
    </>
  );
};

export default SaaSServicePage;
