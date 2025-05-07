import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
  variant?: "filled" | "outline"; // <-- New variant prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  showArrow = false,
  variant = "filled",
}) => {
  const baseClasses =
    "inline-block font-semibold py-2 px-5 rounded-3xl shadow-md transition duration-300 ease-in-out";

  const filledClasses =
    "bg-primary text-white hover:bg-primary/90";

  const outlineClasses =
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white";

  const variantClasses = variant === "outline" ? outlineClasses : filledClasses;

  const content = (
    <>
      {children}
      {showArrow && <span className="ml-2">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <span className={`${baseClasses} ${variantClasses} ${className}`}>
          {content}
        </span>
      </Link>
    );
  }


  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
