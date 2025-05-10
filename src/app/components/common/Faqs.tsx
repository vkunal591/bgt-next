"use client";

import React, { useEffect, useState } from "react";
import HeadingContent from "./HeadingContent";
import { getData } from "@/utils/server";


interface FaqsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
    sectionPadding?: string;
    pageUrl: string;
}

const Faqs: React.FC<FaqsProps> = ({
    headingProps,
    sectionPadding = "p-4 lg:p-16 lg:py-12",
    pageUrl,
}) => {
    const [faqData, setFaqData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await getData(`/api/faq/public?pageUrl=${pageUrl}`);
                console.log(data)
                setFaqData(data);
            } catch (err) {
                console.error("Error fetching FAQs:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, [pageUrl]);

    const renderSkeleton = () =>
        Array.from({ length: 4 }).map((_, index) => (
            <div
                key={index}
                className={`p-4 border-b-[1.5px] ${index < 2 ? "border-t-[1.5px]" : ""} border-gray-600 animate-pulse`}
            >
                <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-full bg-gray-200 rounded"></div>
            </div>
        ));

    const renderNoData = () => (
        <div className="col-span-2 text-center text-gray-500 mt-8">
            No FAQs available at the moment.
        </div>
    );

    return (
        <section className={`w-full ${sectionPadding}`}>
            <HeadingContent layout="" title={faqData?.heading} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-10">
                {loading
                    ? renderSkeleton()
                    : error || faqData?.questions.length === 0 || faqData === null
                        ? renderNoData()
                        : faqData?.questions.map((faq: any, index: any) => (
                            <div
                                key={faq._id}
                                className={`p-4 border-b-[1.5px] ${index < 2 ? "border-t-[1.5px]" : ""
                                    } border-gray-600`}
                            >
                                <h5 className="text-base font-[ubuntu] text-gray-800 flex justify-between items-center">
                                    {faq.question}
                                    <span className="w-4 h-[2px] inline-block bg-primary"></span>
                                </h5>
                                <p className="mt-2 text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
            </div>
        </section>
    );
};

export default Faqs;
