import React from "react";

const HeaderSection = ({ subtitle, title, br, highlight, description, textAlign }: {
    subtitle?: string;
    title?: string;
    br?: boolean;
    highlight?: string;
    description?: string;
    textAlign?: string;
}) => {
    return (
        <div className={`${textAlign} mb-12`}>
            {subtitle && <div className="text-base font-medium text-primary tracking-wide mb-2">
                {subtitle}
            </div>}
            {title && <h2 className="text-4xl font-bold lg:w-3/4 mb-4">
                {title}{" "}
                {br && <br />}
                {highlight && <span className="text-primary">{highlight}</span>}
            </h2>}
            {description && <p className="text-gray-600 font-[cabin] text-lg mt-4 lg:w-3/5 mb-4">
                {description}
            </p>}
        </div >
    );
};

export default HeaderSection;
