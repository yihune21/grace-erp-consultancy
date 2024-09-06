import logo from "../../assets/logo.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
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
              {/* Replace "#" with actual links */}
              <a href="#" className="hover:text-gray-200">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-gray-200">
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
                  <a href="#" className="hover:text-gray-200">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Claim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p>© {year} GraceERP Consultancy, PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
