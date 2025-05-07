'use client'
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "./Button";
import HeadingContent from "./HeadingContent";
import Image from "next/image";
import Link from "next/link";

export interface CardData {
    _id: string;
    title: string;
    heading: string;
    content: string;
    fileUrl: string;
    authorName: string;
    status: 'active' | 'inactive' | string;
    slug: string;
    summary: string;
}

interface SectionWithCardsSliderProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
    cards: any;
    sectionPadding?: string;
    cardClass?: string;
    cardContetntClass?: string;
    showButton?: boolean;
    imageClass?: string;
    titleClass?: string;
    subtitleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
    showImage?: boolean;
    showSubtitle?: boolean;
    showTitle?: boolean;
    showDescription?: boolean;
    swiperSlidesPerView?: number | "auto";
    swiperSpaceBetween?: number;
    swiperBreakpoints?: any;
}

const SectionWithCardsSlider: React.FC<SectionWithCardsSliderProps> = ({
    headingProps,
    cards,
    sectionPadding = "py-10 px-4",
    cardClass = "p-4 rounded-lg shadow-md bg-white",
    cardContetntClass = "p-4 rounded-lg shadow-md bg-white",
    showButton = true,
    imageClass = "",
    titleClass = "",
    subtitleClass = "",
    descriptionClass = "",
    buttonClass = "",
    showImage = true,
    showSubtitle = true,
    showTitle = true,
    showDescription = true,
    swiperSlidesPerView = 1,
    swiperSpaceBetween = 20,
    swiperBreakpoints = {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    console.log(cards)
    useEffect(() => {
        // Swiper needs DOM to be rendered before using navigation refs
    }, []);

    return (
        <section className={`w-full ${sectionPadding}`}>
            <div className="flex  items-center mb-6">
                <HeadingContent {...headingProps} />
                {/* Custom Navigation Buttons */}
                <div className="flex items-center justify-center mb-2 ml-2 gap-1">
                    <button ref={prevRef} className="px-3 py-0 flex justify-center items-center text-primary text-3xl rounded-full hover:bg-gray-200">{"<"}</button>
                    <button ref={nextRef} className="px-3 py-0 flex justify-center items-center text-primary text-3xl rounded-full hover:bg-gray-200">{">"}</button>
                </div>
            </div>
            <hr className="border-gray-400 mb-10" />
            <Swiper
                modules={[Navigation]}
                spaceBetween={swiperSpaceBetween}
                slidesPerView={swiperSlidesPerView}
                breakpoints={swiperBreakpoints}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                pagination={{ clickable: true }}
                className="mt-4"
            >
                {cards && cards?.data?.map((card: any) => (
                    <SwiperSlide key={card._id}>
                        <Link href={`/blogs/${card?.slug}`} >
                            <div className={`${cardClass}`}>
                                {showImage && card.fileUrl && (
                                    <Image
                                        width={900}
                                        height={900}
                                        src={card.fileUrl}
                                        alt={card.title || "Card Image"}
                                        className={`${imageClass || "w-full h-48 object-cover rounded-md mb-4"}`}
                                    />
                                )}

                                <div className={`${cardContetntClass}`}>

                                    {showTitle && card.title && (
                                        <h3 className={`text-xl line-clamp-2 text-gray-800 font-semibold mb-2 ${titleClass}`}>
                                            {card.title}
                                        </h3>
                                    )}

                                    {showDescription && card.heading && (
                                        <p className={`text-gray-700 mb-4 line-clamp-3 ${descriptionClass}`}>
                                            {card.heading}
                                        </p>
                                    )}


                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SectionWithCardsSlider;
