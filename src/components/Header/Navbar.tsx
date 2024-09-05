import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // React-icons for the arrow
import { useState } from "react";
import logo from "../../assets/logo.png";

const navigation = [
  { name: "Home", href: "#", current: true },
  {
    name: "Services",
    href: "#",
    current: false,
    hasDropdown: true,
    dropdownItems: [
      { name: "End to end ERP system implementation", href: "#" },
      { name: "ERP SaaS service", href: "#" },
      { name: "Odoo Training Programs", href: "#" },
    ],
  },
  {
    name: "SaaS service",
    href: "#",
    current: false,
    hasDropdown: true,
    dropdownItems: [
      { name: "About Odoo SaaS", href: "#" },
      { name: "SaaS industries", href: "#" },
      { name: "SaaS Modality and pricing", href: "#" },
    ],
  },
  { name: "Training program", href: "#", current: false },
  { name: "Expertise", href: "#", current: false },
  { name: "Happy clients", href: "#", current: false },
  { name: "About us", href: "#", current: false },
  { name: "Contact us", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  // State to track which dropdown is open in mobile view
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown in mobile view
  const handleDropdownClick = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0">
              <img alt="Company Logo" src={logo} className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="relative group">
                      {/* Main Menu Item */}
                      <a
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        )}
                      >
                        {item.name}
                      </a>

                      {/* Dropdown Menu */}
                      <div className="absolute hidden group-hover:block bg-white text-gray-900 mt-1 rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {item.dropdownItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div key={item.name}>
                <button
                  className="w-full flex justify-between px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => handleDropdownClick(item.name)}
                >
                  {item.name}
                  {openDropdown === item.name ? (
                    <FaChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {/* Submenu Items with Indentation */}
                {openDropdown === item.name && (
                  <div className="pl-6 space-y-1">
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
