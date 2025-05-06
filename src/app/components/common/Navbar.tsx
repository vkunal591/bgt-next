"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const services = [
  {
    name: "Web Development",
    image: "/assets/images/webdev.png",
    path: "/services/web-development",
    id: "web-development", // Unique ID for submenu
  },
  {
    name: "App Development",
    image: "/assets/images/appdev.png",
    path: "/services/app-development",
    id: "app-development", // Unique ID for submenu
  },
  {
    name: "Artificial Intelligence",
    image: "/assets/images/ai.png",
    path: "/services/artificial-intelligence",
    id: "ai", // Unique ID for submenu
  },
  {
    name: "Saas Development",
    image: "/assets/images/saas.png",
    path: "/services/saas-development",
    id: "saas", // Unique ID for submenu
  },
  {
    name: "Blockchain Development",
    image: "/assets/images/block.png",
    path: "/services/blockchain-development",
    id: "blockchain", // Unique ID for submenu
  },
  {
    name: "CRM Development",
    image: "/assets/images/crm.png",
    path: "/services/crm-development",
    id: "crm", // Unique ID for submenu
  },
  {
    name: "UX/UI Designing",
    image: "/assets/images/ux.png",
    path: "/services/ux-ui-designing",
    id: "ux-ui", // Unique ID for submenu
  },
  {
    name: "Digital Marketing",
    image: "/assets/images/webdev.png",
    path: "/services/digital-marketing",
    id: "digital-marketing", // Unique ID for submenu
  },
  {
    name: "API Development",
    image: "/assets/images/api.png",
    path: "/services/api-development",
    id: "api", // Unique ID for submenu
  },
];

const industries = [
  {
    id: "health-care", // Added id
    name: "Health Care",
    image: "/assets/images/serve1.png",
    path: "/industries/health-care",
  },
  {
    id: "oil-gas-energy", // Added id
    name: "Oil & Gas Energy",
    image: "/assets/images/serve2.png",
    path: "/industries/oil-gas-energy",
  },
  {
    id: "retails-e-commerce", // Added id
    name: "Retails & E-Commerce",
    image: "/assets/images/serve3.png",
    path: "/industries/retails-e-commerce",
  },
  {
    id: "real-estate-construction", // Added id
    name: "Real Estate & Construction",
    image: "/assets/images/serve4.png",
    path: "/industries/real-estate-construction",
  },
  {
    id: "finance-banking", // Added id
    name: "Finance & Banking",
    image: "/assets/images/serve5.png",
    path: "/industries/finance-banking",
  },
  {
    id: "government-smart-cities", // Added id
    name: "Goverment & Smart Cities",
    image: "/assets/images/serve6.png",
    path: "/industries/government-smart-cities",
  },
  {
    id: "education-service", // Added id
    name: "Education Service",
    image: "/assets/images/serve7.png",
    path: "/industries/education-service",
  },
  // {
  //   id: "logistic-transportation", // Added id
  //   name: "Logistic & Transportation",
  //   image: "/assets/images/serve8.png",
  //   path: "/industries/logistic-transportation",
  // },
  // {
  //   id: "hospitality-tourism", // Added id
  //   name: "Hospitality & Tourism",
  //   image: "/assets/images/serve9.png",
  //   path: "/industries/hospitality-tourism",
  // },
  // {
  //   id: "legal-compliance", // Added id
  //   name: "Legal & Compliance",
  //   image: "/assets/images/serve10.png",
  //   path: "/industries/legal-compliance",
  // },
];

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null); // Track active submenu by ID
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to whatever offset you prefer
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleMouseEnter = (submenuId: string) => {
    setActiveSubmenuId(submenuId); // Set the submenu as active on hover
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveSubmenuId(null); // Reset the active submenu when mouse leaves
    }, 500);
  };

  const handleClick = (submenuId: string) => {
    // Toggle submenu visibility on click (open if closed, close if already open)
    setActiveSubmenuId((prev) => (prev === submenuId ? null : submenuId));
  };

  // Define menuItems with submenus for "Services" and "Industries"
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Security Products", path: "/security-products" },
    { name: "IT Products", path: "/it-products" },
    { name: "ELV Services", path: "/elv-services" },
    { name: "Support", path: "/support" },
    { name: "Contact Us", path: "/contact-us" },
  ];


  const handleLinkClick = () => setActiveSubmenuId(null);

  return (
    <nav className={`${!scrolled ? "bg-transparent" : "bg-white shadow"}  flex justify-between p-4 lg:px-10 lg:py-6  items-center lg:h-auto  top-0 z-[100] w-full `}>
      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo/logo.png"}
            width={150}
            height={70}
            unoptimized
            priority
            alt="BGT"
            className="h-10 lg:h-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden max-w-6xl lg:flex justify-between items-center w-3/5 lg:px-10 text-dark-primary">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.name)}   // Hover behavior
          >
            <Link href={item.path} className="border-none outline-none hover:text-blue-800">
              <li
                className={` text-sm  hover:scale-105 ${pathname === item.path
                  ? "border-b-2 border-color-primary text-primary font-bold"
                  : "text-dark-primary  transition-all duration-300"
                  } `}
              // onClick={(e) => {
              //   item?.submenu && e.preventDefault(); // Prevent link navigation to enable click behavior
              //   handleClick(item.name); // Toggle submenu on click
              // }}
              >
                {item.name}
              </li>
            </Link>

            {/* Submenu
            {item?.submenu && (
              <div
                className={`absolute top-16 left-[-20rem] w-[60vw] mt-2 z-[10000] rounded-2xl bg-gray-100 text-gray-800 shadow ${activeSubmenuId === item.name ? "block" : "hidden"
                  }`}
                onMouseLeave={handleMouseLeave} // Reset on mouse leave
              >
                <ul className="space-y-2 p-2 grid grid-cols-1 lg:grid-cols-3">
                  {item?.submenu.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.path}
                        onClick={handleLinkClick}
                        className="px-4 py-2 text-base text-gray-700 rounded-xl hover:bg-gray-200 flex justify-start items-center gap-4"
                      >
                        <span className="text-3xl rounded-full p-3 group-hover:bg-white">
                          <Image
                            src={subItem?.image}
                            width={50}
                            height={50}
                            alt="Icon"
                            className="w-7 h-7 filter invert"
                          />
                        </span>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        ))}
      </ul>

      <div className="d:bloxk lg:hidden ">
      <MobileMenu />
        <Link
          href={"tel:+91"}
          className="border hidden text-xs bg-primary text-white rounded-lg px-5 py-3"
        >
          Call Now 2374 888 999
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
