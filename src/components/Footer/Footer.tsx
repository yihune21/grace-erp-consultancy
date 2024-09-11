import logo from "../../assets/logo-removebg-preview.png";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left section: Logo, Text, and Social Icons */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            {/* Logo with background and shadow */}
            <div className="p-2 bg-white rounded-full shadow-lg mb-4">
              <img className="w-5 h-5" src={logo} alt="Company logo" />
            </div>
            <p className="text-gray-200 text-center md:text-left mb-4">
              Empowering Your Business Potential
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://t.me/grace_erp" target="_blank">
                <FaTelegram className="text-gray-400 hover:text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/graceerp-consultancy/"
                target="_blank"
                className="hover:text-gray-200"
              >
                <BiLogoLinkedinSquare className="text-gray-400 hover:text-gray-200" />
              </a>
              <a
                href="mailto:contact@grace-erp-consultancy.com"
                className="hover:text-gray-200"
              >
                <MdEmail className="text-gray-400 hover:text-gray-200" />
              </a>
              <a
                href="http://www.youtube.com/@GraceERPConsultancy"
                target="_blank"
                className="hover:text-gray-200"
              >
                <FaYoutube className="text-gray-400 hover:text-gray-200" />
              </a>
            </div>
          </div>

          {/* Right sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Solutions Section */}
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/erp-implementation" className="hover:text-gray-200">
                    ERP Implementation
                  </a>
                </li>
                <li>
                  <a href="/SaaS-service" className="hover:text-gray-200">
                    SaaS Service
                  </a>
                </li>
                <li>
                  <a href="/training" className="hover:text-gray-200">
                    Functional Training
                  </a>
                </li>
              </ul>
            </div>

            {/* GraceERP Consultancy Section */}
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">
                GraceERP Consultancy
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="hover:text-gray-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-gray-200">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/happy-clients" className="hover:text-gray-200">
                    Happy Clients
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm">
                    Address: G&B Building, 2nd Floor, Office 203,
                    <br />
                    200m from Century Mall to Gurd Shola,
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </li>
                <li className="text-nowrap">
                  Phone: +251-991133434 / +251-925210595
                </li>
                <li className="text-nowrap">
                  Email: contact@grace-erp-consultancy.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p>
            © {year}{" "}
            <a className="text-orange-500 " href="/home">
              GraceERP Consultancy PLC
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
