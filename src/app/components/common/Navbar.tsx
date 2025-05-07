"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";



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
    <nav className={`${!scrolled ? "bg-black/50" : "bg-white  shadow"} fixed  shadow shadow-white/20  flex justify-between p-4 lg:px-10 lg:py-6  items-center lg:h-auto  top-0 z-[100] w-full `}>
    {/* ${!scrolled ? "bg-transparent" : "bg-white shadow"} */}
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
                className={` text-base  hover:scale-105 ${!scrolled && "text-white"} ${pathname === item.path
                  ? "border-b-2 border-color-primary text-primary font-bold"
                  : "font-medium  transition-all duration-300"
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
