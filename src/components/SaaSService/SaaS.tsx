import saas from "../../assets/saas.png";
import odooSaaS from "../../assets/saas_odoo.jpg";
const SaaS = () => {
  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32">
        <div className="flex md:flex-row items-center">
          <img
            className="shadow-lg hover:scale-105 transition-transform duration-500 hover:mr-2"
            src={saas}
            alt="SaaS Icon"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-5xl  text-gray-800 text-left mb-6 animate-fade-in">
            About Odoo SaaS
          </h1>
        </div>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 text-justify">
          Currently, Odoo as a SaaS provides users with the same Odoo ERP
          software via the Internet.
        </p>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 text-justify">
          Odoo SaaS is known as a software distribution model in which a
          third-party provider hosts applications and provides access to users
          via the Internet. Additionally,{" "}
          <strong>SaaS stands for Software As A Service</strong>, a growing
          concept today, and this trend is expected to soar in the future.
        </p>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 text-justify">
          The SaaS Kit of Odoo is a well-tested, proven site management system
          that allows PayPal payments. It includes a framework for establishing
          membership-based applications with features like account upgrades,
          tiered pricing levels, and multi-tenant data security in a single
          database. Let’s explore more about the Odoo feature.
        </p>
      </div>
      <div className="flex justify-center w-full mt-8 shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
          src={odooSaaS}
          alt="image for Odoo SaaS"
        />
      </div>
    </>
  );
};

export default SaaS;
