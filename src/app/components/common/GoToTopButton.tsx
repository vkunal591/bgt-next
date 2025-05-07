"use client"
import { IoArrowUp } from "react-icons/io5";

const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="bg-primary text-white p-4 rounded-lg"
        aria-label="Go to top"
      >
        <IoArrowUp />
      </button>
    </div>
  );
};

export default GoToTopButton;
