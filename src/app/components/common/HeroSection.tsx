import React from "react";
import Button from "./Button"; // adjust the path
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  description?: string;
  bgImage?: string;
  titleColor?: string;
  alignment?: "left" | "center" | "right";
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
  bgImage = "/assets/images/banners/bannerhome.png",
  titleColor = "text-white",
  alignment = "center",
  position = "center",
  buttonText = "",
  buttonLink = "#",
}) => {
  return (
    <section className="relative w-full h-[50vh] lg:h-screen 2xl:h-screen overflow-hidden">
      {/* Next.js Optimized Background Image */}
      <Image
        src={bgImage}
        alt={title || "Hero Background"}
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div
        className={`absolute inset-0 z-20 w-full px-6 py-10 flex flex-col gap-4 ${positionClasses[position]} ${textAlignmentClasses[alignment]}`}
      >
        <div className="lg:m-16 lg:w-1/2">
          {title && (
            <h1 className={`text-4xl md:text-5xl font-bold ${titleColor} drop-shadow-lg mb-2`}>
              {title}
            </h1>
          )}
          {description && (
            <p className="text-md md:text-lg text-white drop-shadow-md mb-4">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <Button href={buttonLink}>{buttonText}</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
