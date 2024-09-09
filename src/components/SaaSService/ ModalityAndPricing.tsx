import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../About/Testimonials.css"; // Custom styles

const modalities = [
  {
    name: "Basic",
    role: "Modules Included",
    modules: ["Purchase", "Inventory", "Sales", "Expenses", "Invoicing"],
  },
  {
    name: "Standard",
    role: "Modules Included",
    modules: [
      "Purchase",
      "Inventory",
      "Sales",
      "Expenses",
      "CRM",
      "Accounting",
      "HR",
      "Payroll",
      "Fixed Asset",
      "Budget Management",
      "Payroll",
    ],
  },
  {
    name: "Custom",
    role: "Request Quotation",
    image: "/mnt/data/mod.png", // Image uploaded by the user
    modules: ["Request a custom quotation based on your business needs."],
  },
];

const ModalityAndPricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="px-4 py-12 md:px-24 lg:px-32 text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6">
          Modality And Pricing
        </h1>
      </div>

      {/* Modalities section */}
      <div className="flex w-full h-40 bg-orange-500 text-white mb-4 justify-center items-center">
        <h1 className="text-4xl">Modalities</h1>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Slider {...settings}>
            {modalities.map((modality, index) => (
              <div key={index} className="text-center">
                <figure className="mt-10">
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <h2 className="text-2xl mb-4">{modality.name} Modality</h2>
                    {modality.modules.length > 1 ? (
                      <ul className="grid grid-cols-2 gap-x-8 gap-y-4 justify-center mx-auto text-left w-3/4">
                        {modality.modules.map((module, idx) => (
                          <li key={idx} className="text-lg text-gray-700 mb-2">
                            {module}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-gray-700">
                        {modality.modules[0]}
                      </p>
                    )}
                  </blockquote>
                  {modality.image && (
                    <figcaption className="mt-10">
                      <img
                        alt={modality.name}
                        src={modality.image}
                        className="mx-auto h-40 w-40 rounded-lg"
                      />
                    </figcaption>
                  )}
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Pricing section */}
      <div className="flex w-full h-40 bg-orange-500 text-white mb-4 justify-center items-center">
        <h1 className="text-4xl">Pricing</h1>
      </div>
      <section className="bg-blue-900 py-16">
        <div className="text-center mb-12">
          <h1 className="text-yellow-400 text-4xl sm:text-5xl font-bold mb-4">
            ODOO ERP SaaS Service
          </h1>
          <p className="text-white text-xl">Choose Your Subscription Plan</p>
          <p className="text-white mt-2">
            10 days free trial. No agreement or pre-payment required.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Retailer
            </button>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Wholesaler
            </button>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mx-2">
              Service
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-32">
          {/* Basic Plan */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <h2 className="text-yellow-400 text-xl font-bold mb-4">BASIC</h2>
            <h3 className="text-3xl font-bold mb-4">4,199 ETB/MONTH</h3>
            <ul className="space-y-3">
              <li>✔️ 10 days free trial</li>
              <li>✔️ 5 modules</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
          </div>

          {/* Standard Plan */}
          <div className="bg-purple-700 text-white p-8 rounded-lg relative shadow-lg hover:scale-105 transition-transform duration-500">
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-br-lg">
              Most Popular
            </div>
            <h2 className="text-yellow-400 text-xl font-bold mb-4">STANDARD</h2>
            <h3 className="text-3xl font-bold mb-4">10,999 ETB/MONTH</h3>
            <ul className="space-y-3">
              <li>✔️ 10 days free trial</li>
              <li>✔️ 11 modules</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <button className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full mt-6 shadow-lg hover:scale-105 transition-transform duration-500">
              Get Started
            </button>
          </div>

          {/* Custom Plan */}
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <h2 className="text-yellow-400 text-xl font-bold mb-4">CUSTOM</h2>
            <h3 className="text-3xl font-bold mb-4">Request a Quotation</h3>
            <ul className="space-y-3">
              <li>✔️ 10 days free trial</li>
              <li>✔️ Full ERP Implementation</li>
              <li>✔️ End-to-End Integration</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Full customization</li>
              <li>✔️ Customized reports</li>
              <li>✔️ On-site training</li>
              <li>✔️ 24/7 Support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

function CustomPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-prev custom-arrow left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50"
      onClick={onClick}
    >
      ←
    </button>
  );
}

function CustomNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-next custom-arrow right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50"
      onClick={onClick}
    >
      →
    </button>
  );
}

export default ModalityAndPricing;
