"use client";
import React from "react";
import HeadingContent from "./HeadingContent";
import { motion } from "framer-motion";
import Image from "next/image";

// Dummy logos - Replace these with actual logo URLs
const clients = [
    "/assets/images/clients/client1.png",
    "/assets/images/clients/client2.png",
    "/assets/images/clients/client3.png",
    "/assets/images/clients/client4.png",
    "/assets/images/clients/client5.png",
    "/assets/images/clients/client6.png",
];

const repeatedClients = [...clients, ...clients, ...clients];

interface FaqsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
    sectionPadding?: string;
}

const TrustedPartners: React.FC<FaqsProps> = ({
    headingProps,
    sectionPadding = "px-4 lg:px-16",
}) => {
    return (
        <section className={`w-full ${sectionPadding}`}>
            <div className="max-w-7xl m-auto p-4 lg:p-16 lg:py-12">
                <HeadingContent {...headingProps} />
            </div>

            {/* Partner Logos Infinite Slider */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-max"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 35, // Adjust speed here
                    }}
                >
                    {/* Repeated content twice for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex space-x-10">
                            {repeatedClients.map((client, index) => (
                                <div
                                    key={`${i}-${index}`}
                                    className="flex-shrink-0 rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={client}
                                        width={300}
                                        height={100}
                                        alt={`Client`}
                                        unoptimized
                                        className="object-cover h-20 w-fit p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedPartners;
