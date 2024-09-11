import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Training from "../components/Training/Training";

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white mb-4 justify-center items-center">
        <h1 className="text-6xl"> Odoo Training Program</h1>
      </div>

      <Training />
      <Footer />
    </>
  );
};

export default TrainingPage;
