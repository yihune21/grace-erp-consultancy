import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Training from "../components/Training/Training";

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/assets/erp_imp(1).jpg')] flex w-fill h-80  text-[#ea580c] mb-4 justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {" "}
          Odoo Training Program
        </h1>
      </div>

      <Training />
      <Footer />
    </>
  );
};

export default TrainingPage;
