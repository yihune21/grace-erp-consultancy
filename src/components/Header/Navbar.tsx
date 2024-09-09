import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../assets/logo-removebg-preview.png";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "About us", href: "/about-us", current: false },
  {
    name: "Services",
    href: "",
    current: false,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "ERP implementation",
        href: "/erp-implementation",
      },
      { name: "SaaS service", href: "/SaaS-service" },
      { name: "Odoo Training Programs", href: "/training" },
    ],
  },
  { name: "Expertise", href: "/expertise", current: false },
  { name: "Happy clients", href: "/happy-clients", current: false },
  { name: "Contact us", href: "/contact-us", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (name: any) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleNavItemClick = (close: any) => {
    setOpenDropdown(null);
    close();
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/home">
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </a>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative group">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                          )}
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <span className="ml-1 inline-block">
                              <FaChevronDown className="h-3 w-3" />
                            </span>
                          )}
                        </a>
                        {item.hasDropdown && (
                          <div className="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {item.dropdownItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => handleDropdownClick(item.name)}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <FaChevronUp className="h-5 w-5" />
                      ) : (
                        <FaChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={() => handleNavItemClick(close)}
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
                    onClick={() => handleNavItemClick(close)}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
