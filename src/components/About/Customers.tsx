// Desc: Customers Section of the About Page
import { redirect } from "react-router-dom";
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
        <button
          className="mt-6 bg-blue-600 px-6 py-2 rounded-full text-white"
          onClick={() => {
            redirect("/happy-clients");
            console.log("clicked");
          }}
        >
          More Customers
        </button>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-8 mt-12 mx-auto max-w-7xl justify-items-center">
        {/* Replace with actual logos */}
        <div className=" p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <img src={royal} alt="Royal Family's company logo" />
        </div>
        <div className="p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <img src={teleport} alt="Teleport's company logo" />
        </div>
        <div className=" p-4 rounded-lg hover:scale-105 transition-transform duration-500">
          <img src={tamra} alt="Tamra's company logo" />
        </div>
      </div>
      {/* Client Testimonials Section */}
    </div>
  );
};

export default Customers;
