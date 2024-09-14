import "./Hero.css";
import odooLogo from "../../assets/odoo_logo.png";
import logo from "../../assets/logo-01.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mx-auto max-w-2xl sm:py-4 lg:py-6 justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative inline-flex items-center rounded-full bg-orange-500 text-white px-6 py-2 text-sm leading-6 font-semibold hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              Announcing our Odoo ERP SaaS Service.{" "}
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
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              GraceERP Consultancy PLC: Your Trusted ERP Implementer and
              Business Consultant
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
              Choosing GraceERP Consultancy PLC for your ERP system
              implementation comes with a range of benefits. Our experience and
              expertise in Odoo ERP implementation are first to none, Ensuring
              that your business gets the best possible results. Additionally,
              our team of experts is committed to providing you with the support
              you need to make the most of your investment in ERP Software.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about-us"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Sliding images container */}{" "}
        <motion.div
          className="relative w-full overflow-hidden flex justify-center items-center "
          animate={{
            x: ["100%", "0%", "-10%", "-10%"], // Slide from right, show fully, slide off left, pause off-screen
          }}
          transition={{
            duration: 10, // Total animation duration
            times: [0, 0.25, 0.75, 1], // Control when each stage happens
            ease: "linear", // Linear motion
            repeat: Infinity, // Repeat the animation
            repeatDelay: 2, // Pause after fully sliding off-screen
          }}
        >
          <div className="relative flex flex-col items-center justify-center gap-8">
            {/* Odoo Logo */}
            <img
              className="w-full sm:w-60 md:w-72 lg:w-96 xl:w-1/3 h-auto object-contain"
              src={odooLogo}
              alt="Odoo Logo"
            />

            {/* Company Logo */}
            <img
              className="w-full sm:w-60 md:w-72 lg:w-96 xl:w-1/3 h-auto object-contain"
              src={logo}
              alt="Company Logo"
            />
          </div>
        </motion.div>
      </div>

      {/* About odoo */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2  mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            What is Odoo?
          </h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 text-justify">
            <strong>Odoo</strong> is an open-source business management platform
            that offers a comprehensive suite of applications for various
            business functions, including CRM, sales, inventory, manufacturing,
            accounting, and HR. Its modular architecture allows businesses to
            customize the platform to their specific needs, while its integrated
            ecosystem ensures data consistency and efficiency. Odoo's
            user-friendly interface is designed for both technical and
            non-technical users, and its active community provides ongoing
            support and resources. Scalable to accommodate businesses of all
            sizes, Odoo is a versatile and powerful tool for managing business
            operations.
          </p>
          <a
            href="https://www.odoo.com/"
            target="_blank"
            className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go to odoo website for more
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            muted
            loop
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <source
              src="https://download.odoocdn.com/videos/odoo_com/video_homepage.webm"
              type="video/webm"
            />
            <source
              src="https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* About odoo */}
    </div>
  );
};

export default Hero;
