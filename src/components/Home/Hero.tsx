import "./Hero.css";

const Hero = () => {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:py-4 lg:py-6">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative inline-flex items-center rounded-full bg-orange-500 text-white px-6 py-2 text-sm leading-6 font-semibold hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
            Announcing our odoo ERP SaaS Service.{" "}
            <a
              href="/SaaS-service"
              className="ml-2 relative inline-flex items-center font-semibold text-white hover:underline"
            >
              <span className="absolute inset-0 " aria-hidden="true"></span>
              <p className="para">Read more</p>{" "}
              <span className="ml-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GraceERP Consultancy: Your Trusted ERP Implementer and Business
            Consultant
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choosing GraceERP Consultancy for your ERP system implementation
            comes with a range of benefits. Our experience and expertise in Odoo
            ERP implementation are first to none, Ensuring that your business
            gets the best possible results.Additionally, our team of experts is
            committed to providing you with the support you need to make the
            most of your investment in ERP Software.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
