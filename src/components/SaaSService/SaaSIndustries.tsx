import saasIndustryImg from "../../assets/saas_industries.jpg";
const SaaSIndustries = () => {
  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            SaaS Industries
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 font-bold">
            Are you a Wholesaler (B2B), Retailer (B2C), or Service Provider?
            Tired of managing your business operations manually? Looking for a
            solution to maximize your efficiency?
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
            GraceERP Consultancy PLC | Ethiopia is excited to introduce a New
            Year gift for your business: our Odoo ERP SaaS service! With an
            affordable subscription, you can manage all your operations
            centrally from anywhere, hassle-free.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
            If you're seeking this kind of solution, we're here to help empower
            your business efficiency. Stay tuned for more details on the modules
            and subscription fees—we’ll be sharing them soon!
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
            We're dedicated to transforming your challenges into success!
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 font-semibold">
            Phone: +251-991133434 / +251-925210595 <br />
            GraceERP Consultancy PLC | Ethiopia
          </p>
        </div>

        <div className="flex justify-center mt-12 shadow-lg hover:scale-105 transition-transform duration-500">
          <img
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
            src={saasIndustryImg}
            alt="SaaS Industry Image"
          />
        </div>
      </div>
    </>
  );
};

export default SaaSIndustries;
