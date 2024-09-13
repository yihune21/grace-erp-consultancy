// Desc: Customers Section of the About Page
import royal from "/assets/royal.png";
import tamra from "/assets/TAMRA.png";
import teleport from "/assets/telePort.png";
import { motion } from "framer-motion";

const Customers = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      {/* Top Enterprises Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by</h2>
        <p className="text-2xl font-semibold">Top Enterprises</p>
        <p className="text-gray-400 mt-2 mb-4">
          Implementation Experience and Success
        </p>
        <a
          className="mt-6 bg-blue-600 px-6 py-2 rounded-full text-white"
          href="/happy-clients"
        >
          Hear their story
        </a>
      </div>

      {/* Logo Grid */}

      <div className="overflow-hidden max-w-7xl mx-auto bg-gray-200">
        <motion.div
          className="relative w-full overflow-hidden flex justify-center items-center "
          animate={{
            x: ["100%", "-50%", "-50%"], // Slide from right, show fully, slide off left, pause off-screen
          }}
          transition={{
            duration: 10, // Total animation duration
            times: [0, 0.25, 0.75, 1], // Control when each stage happens
            ease: "linear", // Linear motion
            repeat: Infinity, // Repeat the animation
            repeatDelay: 2, // Pause after fully sliding off-screen
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 justify-items-center ">
            <div className="p-4 rounded-lg">
              <img src={royal} alt="Royal Family's company logo" />
            </div>
            <div className="p-4 rounded-lg">
              <img src={teleport} alt="Teleport's company logo" />
            </div>
            <div className="p-4 rounded-lg">
              <img src={tamra} alt="Tamra's company logo" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Customers;
