// Desc: Customers Section of the About Page
import royal from "../../assets/royal.png";
import tamra from "../../assets/TAMRA.png";
import teleport from "../../assets/telePort.png";

const Customers = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      {/* Top Enterprises Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by</h2>
        <p className="text-2xl font-semibold">Top Enterprises</p>
        <p className="text-gray-400 mt-2">
          Implementation Experience and Success
        </p>
        <button className="mt-6 bg-blue-600 px-6 py-2 rounded-full text-white">
          More Customers
        </button>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 lg:grid-cols-6 gap-8 justify-items-center">
        {/* Replace with actual logos */}
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <span className="block h-16 w-16 bg-gray-500 rounded-full"></span>
        </div>
      </div>
      {/* Client Testimonials Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Client Testimonials
        </h3>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          {/* Client Testimonial */}
          <div className="flex flex-col md:flex-row items-center bg-gray-800 p-8 rounded-lg max-w-4xl">
            <div className="w-32 h-32 bg-gray-600 rounded-full mr-6"></div>
            <div>
              <h4 className="text-xl font-bold">African Union Commission</h4>
              <p className="text-gray-400 mt-2">
                "GraceERP Consultancy delivers dependable and professional
                service, rapid delivery and response, and comprehensive support
                and proper follow-up to all our needs, maintained by their
                high-standard professionals."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
