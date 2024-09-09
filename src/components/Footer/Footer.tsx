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
          {/* Left section */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-start mb-4">
              {/* Add your logo */}
              <img className="rounded-full w-10 h-10 mb-4" src={logo} alt="" />
              <p className="text-gray-200">
                Making the world a better place through constructing <br />{" "}
                elegant hierarchies.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://t.me/grace_erp" target="_blank">
                <FaTelegram />
              </a>
              <a
                href="https://www.linkedin.com/company/graceerp-consultancy/"
                target="_blank"
                className="hover:text-gray-200"
              >
                <BiLogoLinkedinSquare />
              </a>
              <a
                href="mailto:contact@grace-erp-consultancy.com"
                className="hover:text-gray-200"
              >
                <MdEmail />
              </a>
              <a
                href="http://www.youtube.com/@GraceERPConsultancy"
                target="_blank"
                className="hover:text-gray-200"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Right sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/erp-implementation" className="hover:text-gray-200">
                    ERP implementation
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
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/SaaS-service#pricing"
                    className="hover:text-gray-200"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">
                GraceERP Consultancy
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="hover:text-gray-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-gray-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/happy-clients" className="hover:text-gray-200">
                    Customers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>Address:Addis Ababa, Ethiopia</li>
                <li>Phone: +251-991133434/+251-925210595</li>
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
