import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const HappyClientsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-fill h-60 bg-gray-800 text-white  justify-center items-center">
        <h1 className="text-6xl"> Happy Clients</h1>
      </div>
      <div className="flex w-fill h-60 bg-orange-800 text-white  justify-center items-center ">
        <h1 className="text-6xl animate-fade-bounce">Coming Soon!</h1>
      </div>

      <Footer />
    </>
  );
};

export default HappyClientsPage;
