import React from "react";
import Button from "./Button"; // adjust the path

interface HeroSectionProps {
  title?: string;
  description?: string;
  bgImage?: string;
  titleColor?: string; // still used for text color
  alignment?: "left" | "center" | "right"; // still used for text alignment
  position?:
  | "top-left" | "top-center" | "top-right"
  | "center-left" | "center" | "center-right"
  | "bottom-left" | "bottom-center" | "bottom-right";
  buttonText?: string;
  buttonLink?: string;
}

const positionClasses: Record<string, string> = {
  "top-left": "justify-start items-start",
  "top-center": "justify-start items-center",
  "top-right": "justify-start items-end",
  "center-left": "justify-center items-start",
  "center": "justify-center items-center",
  "center-right": "justify-center items-end",
  "bottom-left": "justify-end items-start",
  "bottom-center": "justify-end items-center",
  "bottom-right": "justify-end items-end",
};

const textAlignmentClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bgImage,
  titleColor = "text-white",
  alignment = "center",
  position = "center",
  buttonText = "",
  buttonLink = "#",
}) => {
  // if (!title || !description || !bgImage) return null;

  return (
    <section
      className="w-full h-[50vh] lg:h-[80vh] 2xl:h-96 bg-cover bg-center flex relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div
        className={`w-full  px-6 py-10 flex flex-col gap-4 absolute inset-0 ${positionClasses[position]} ${textAlignmentClasses[alignment]} `}
      >
        <div className="m-16 lg:w-1/2">
          {title && <h1 className={`text-4xl md:text-5xl font-bold ${titleColor} drop-shadow-lg mb-2`}>{title}</h1>}
          {description && <p className="text-md md:text-lg text-white drop-shadow-md mb-4">{description}</p>}
          {buttonText && buttonLink && <Button href={buttonLink}>{buttonText}</Button>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
