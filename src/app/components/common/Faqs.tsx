import React from "react";
import HeadingContent from "./HeadingContent";



interface FaqsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
    sectionPadding?: string;
}

const Faqs: React.FC<FaqsProps> = ({
    headingProps,
    sectionPadding = "p-4 lg:p-16",
}) => {
    return (
        <section className={`w-full ${sectionPadding}`}>
            <HeadingContent {...headingProps} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-10">
                {
                    [
                        {
                            id: 1,
                            question: "Richard McClintock, a Latin professor at Hampden-Sydney",
                            answer: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
                        },
                        {
                            id: 2,
                            question: "How can I contact customer support?",
                            answer: "You can reach our customer support team via email at "
                        },
                        {
                            id: 3,
                            question: "What payment methods do you accept?",
                            answer: "We accept various payment methods including credit cards, PayPal, and bank transfers."
                        },
                        {
                            id: 4,
                            question: "How do I reset my password?",
                            answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
                        },
                    ].map((faq, index) => (
                        <div key={faq.id} className={`p-4 border-b-[1.5px] ${index < 2 && "border-t-[1.5px] "} border-gray-600 `}>
                            <h5 className="text-base  font-[ubuntu] flex justify-between items-center ">{faq.question} <span className="w-4 h-[2px] inline-block bg-primary"></span></h5>
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Faqs;