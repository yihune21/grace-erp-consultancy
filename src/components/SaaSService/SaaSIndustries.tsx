import saasIndustryImg from "../../assets/saas_industries.jpg";
import saasmodule from "../../assets/SaaS_modules.jpg";
import sub from "../../assets/Subscription_Plan.jpg";

const SaaSIndustries = () => {
  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32">
        <div className="flex animate-slideLeft justify-center mt-12 shadow-lg gap-4 hover:scale-105 transition-transform duration-500">
          <img
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
            src={saasIndustryImg}
            alt="SaaS Industry Image"
          />
          <img
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
            src={saasmodule}
            alt="SaaS Industry Image"
          />
          <img
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
            src={sub}
            alt="SaaS Subscription plan Image"
          />
        </div>
      </div>
    </>
  );
};

export default SaaSIndustries;
