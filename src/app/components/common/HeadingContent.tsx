import React from "react";// Adjust the path as needed
import Button from "./Button";

interface HeadingContentProps {
    subtitle?: string;
    title: string;
    description?: string;
    descriptionClass?: string; // Added for custom description class
    buttonText?: string;
    buttonLink?: string;
    layout?: string;
    bgColor?: string;
    subTitleClass?: string; // Added for custom subtitle class
    titleColor?: string;
    textColor?: string;
    buttonColor?: string;        // Passed as `className` to Button
    buttonTextColor?: string;    // Passed as `className` to Button
    width?: string;
    align?: "left" | "center" | "right";
    showArrow?: boolean;
    buttonVariant?: "filled" | "outline";
}

const HeadingContent: React.FC<HeadingContentProps> = ({
    subtitle = "",
    title,
    description = "",
    descriptionClass = "",
    buttonText,
    buttonLink,
    layout = "flex-col-reverse md:flex-row",
    bgColor = "bg-transparent",
    subTitleClass = "text-sm font-medium uppercase tracking-wide",
    titleColor = "text-primary",
    textColor = "text-dark-primary",
    buttonColor = "bg-primary",
    buttonTextColor = "text-white",
    width = "w-full",
    align = "left",
    showArrow = false,
    buttonVariant = "filled",
}) => {
    const alignment = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };
    return (
        <div className={`flex ${layout} ${bgColor} gap-6`}>
            <div className={`${width} ${textColor} ${alignment[align]} flex flex-col gap-4`}>
                {subtitle && <p className={` ${subTitleClass || "text-sm uppercase tracking-widest"} `}>{subtitle}</p>}
                <div className="flex items-center justify-between w-full">
                    <h2 className={`text-3xl font-bold ${titleColor}`}>{title}</h2>   {buttonText && buttonLink && (
                        <Button
                            href={buttonLink}
                            showArrow={showArrow}
                            variant={buttonVariant}
                            className={`${buttonColor} ${buttonTextColor}`}
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
                {description && <p className={`${descriptionClass}`}>{description}</p>}

            </div>
        </div>
    );
};

export default HeadingContent;
