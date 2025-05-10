import Image from "next/image";
import React from "react";

interface FeatrurePointsProps {
    sectionPadding?: string;
}

const statsData = [
    {
        value: "24",
        label: "Industry Pioneers",
    },
    {
        value: "35%",
        label: "UAE Market Share",
    },
    {
        value: "23k",
        label: "Customer Served",
    },
    {
        value: "233",
        label: "Product Categories",
    },
];

const FeatrurePoints: React.FC<FeatrurePointsProps> = ({
    sectionPadding = "p-4 lg:p-16 lg:py-12",
}) => {
    return (
        <section className={`relative w-full ${sectionPadding} text-gray-800`}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full lg:w-11/12 left-1/2 top-1/2 translate-[-50%] rounded-2xl overflow-hidden">
                <Image
                    src="/assets/images/banners/banner5.jpg"
                    alt="Client Background"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-y-8">
                {statsData.map((feature, index) => (
                    <div
                        key={index}
                        className="p-4 text-center backdrop-blur-sm  rounded-lg text-gray-600"
                    >
                        <h5 className="text-5xl font-semibold flex justify-center items-center font-[arsenal]">
                            {feature.value}
                        </h5>
                        <p className="mt-2 !text-lg !font-semibold">{feature.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatrurePoints;
