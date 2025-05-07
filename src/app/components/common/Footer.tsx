import React from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./FooterAccordion";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoArrowUp } from "react-icons/io5";


export default function Footer() {

  const company = [
    { name: "About us", url: "/about-us" },
    { name: "Support", url: "/support" },
    { name: "Contact Us", url: "/contact-us" },
    // { name: "Careers", url: "/careers" },
    // { name: "Culture", url: "/culture" },
    // { name: "Blog", url: "/blog" },
  ];

  const services = [
    { name: "Security Servilliance", url: "/security-products" },
    { name: "IT Products", url: "/it-products" },
    { name: "ELV Services", url: "/elv-services" },
  ]



  // const support = [
  //   { name: "Getting started", url: "/" },
  //   { name: "Help center", url: "/" },
  //   { name: "Server status", url: "/" },
  //   { name: "Report a bug", url: "/" },
  //   { name: "Chat support", url: "/" },
  // ];



  return (
    <footer className="text-gray-800 font-[arsenal] bg-white ">
      <div className="flex  flex-row justify-between items-center p-4 lg:px-10 ">
        <div className="">
          <Image
            src="/assets/images/logo/logo.png"
            width={200}
            height={70}
            alt="BGT"
            className="h-12"
          />
        </div>
        <div>
          <Link href={"#"} className="bg-primary text-white inline-block p-4 rounded-lg"><IoArrowUp /></Link>
        </div>
      </div>
      <hr className="m-0 border-gray-500" />
      <div className="container mx-auto py-10 px-4 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 lg:gap-10 mx-auto">
          <div className="w-full lg:col-span-2">

            <div>
              <p className="font-[arsenal] tracking-wide text-sm/7 text-gray-800 mt-4 lg:mb-8">
                BGT is your trusted IT partner in Sydney, offering custom
                solutions for websites, mobile apps, and advanced technologies
                like AI. Let's create something exceptional together!
              </p>
              <p className="text-lg font-semibold mb-2 ">Followe Us On</p>
              <p className="flex items-center gap-4 pl-1">
                <Link href={""} title="facebook">
                  <FaFacebook className="text-2xl text-blue-600" />
                </Link>
                <Link href={""} title="instagram">
                  <FaInstagramSquare className="text-2xl text-pink-500" />
                </Link>
              </p>

            </div>
          </div>


          <div>
            <h3 className="mb-5 text-lg  text-primary font-medium">Company</h3>
            <ul className="text-sm text-gray-800 space-y-3.5">
              {company &&
                company?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-600 font-[arsenal]">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3 text-lg  text-primary font-medium hidden lg:block">
              Services
            </h3>
            <ul className="text-sm text-gray-800 space-y-3.5">
              {services &&
                services?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-600 font-[arsenal]">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>



          {/* <div>
            <h3 className="mb-5 text-lg  font-semibold">Support</h3>
            <ul className="text-sm text-gray-200 space-y-3.5">
              {support &&
                support?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="hover:text-gray-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div> */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg  text-primary font-medium">
              Contact Us
            </h3>
            <div>
              <Link
                href={"mailto:admin@bgtgulf.com"}
                className="text-sm mb-2 flex items-center"
              >
                <strong>
                  <IoMailOutline className="text-xl mr-2" />
                </strong>{" "}
                admin@bgtgulf.com
              </Link>
              <Link
                href={"tel:+97143266940"}
                className="text-sm mb-2 flex items-center"
              >
                <strong>
                  <IoCallOutline className="text-xl mr-2" />
                </strong>{" "}
                +971 4 3266940
              </Link>
              <Link
                href={"tel:+971553472035"}
                className="text-sm mb-2 flex items-center"
              >
                <strong>
                  <IoCallOutline className="text-xl mr-2" />
                </strong>{" "}
                +971553472035
              </Link>
              <p className="text-sm flex items-center mb-4">
                <strong>
                  <IoLocationOutline className="text-xl mr-2" />
                </strong>{" "}
                Office - 504,
                Al Tayer Commercial Building
                49, Al Mina Road, PO Box: 118199
                Dubai – United Arab Emirates

              </p>

            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-50 bg-primary py-4 px-4 lg:px-10">
        <div className="text-gray-50">
          © {new Date().getFullYear()} BGT. All rights reserved.
        </div>
        <div className="flex space-x-4 text-base mt-2 md:mt-0">
          <Link
            href="/"
            className="text-gray-50 hover:underline"
          >
            Terms & Conditions
          </Link>
          <span className="hidden md:block">|</span>
          <Link
            href="/"
            className="text-gray-50 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
