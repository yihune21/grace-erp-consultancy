import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import SaaS from "../components/SaaSService/SaaS";
import SaaSIndustries from "../components/SaaSService/SaaSIndustries";
import SubscriptionAndPlan from "../components/SaaSService/SubscriptionAndPlan";
import bgImg from "../assets/saass(1).jpg";

const SaaSServicePage = () => {
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
          {" "}
          SaaS Service
        </h1>
      </div>
      <SaaS />
      <SaaSIndustries />
      <SubscriptionAndPlan />
      <Footer />
    </>
  );
};

export default SaaSServicePage;
