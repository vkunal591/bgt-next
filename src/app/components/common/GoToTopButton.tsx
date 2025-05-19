'use client';

import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";

const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed flex flex-col gap-2 bottom-10 right-10 z-[100000]">
      <Link
        href="https://wa.me/971553472035"  // ✅ your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-400 text-white p-4 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <IoLogoWhatsapp size={18} />
      </Link>

      <button
        onClick={scrollToTop}
        className="bg-primary text-white p-4 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300"
        aria-label="Go to top"
      >
        <IoArrowUp />
      </button>
    </div>
  );
};

export default GoToTopButton;
