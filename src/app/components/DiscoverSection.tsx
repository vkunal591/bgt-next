'use client'
import React, { useRef } from 'react'
import HeadingContent from './common/HeadingContent'
import InfoImageSection from './common/InfoImageSection';
import InfoBannerSection from './common/InfoBannerSection';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface SectionWithCardsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
}

const DiscoverSection: React.FC<SectionWithCardsProps> = ({
    headingProps }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="max-w-7xl mx-auto p-4 lg:p-16 lg:py-12">
            <HeadingContent {...headingProps} />
            <div className="flex items-center justify-end mb-2 ml-2 gap-1">
                <button ref={prevRef} className="px-3 py-0 flex justify-center items-center text-primary text-3xl rounded-full hover:bg-gray-200">{"<"}</button>
                <button ref={nextRef} className="px-3 py-0 flex justify-center items-center text-primary text-3xl rounded-full hover:bg-gray-200">{">"}</button>
            </div>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
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
                <SwiperSlide>

                    <InfoBannerSection
                        subtitle="Your Identity"
                        title="Your Access"
                        description="Quick. Easy. Reliable attendance tracking."
                        buttonText="Explore More"
                        buttonLink="/elv-services"
                        imageSrc="/assets/images/banners/banner2.png"
                        contentPosition="center-right"
                        subTitleClass='text-white lg:text-gray-700 text-5xl font-bold tracking-wide'
                        titleColor="text-white lg:text-gray-800 text-3xl font-medium"
                        textColor="text-white lg:text-gray-800"
                        buttonColor="bg-prunary"
                        buttonTextColor="text-black"
                        overlayLayer='bg-black/20 lg:bg-black/0'
                        contentClass='mx-0 lg:max-w-xl space-y-4 lg:mx-20'
                        className='mb-20'
                    />
                </SwiperSlide>
                <SwiperSlide >

                    <InfoBannerSection
                        subtitle="You’re Being Watched,"
                        title="IP Camera Active"
                        description="Real-time video feed is recorded and stored securely."
                        buttonText="Explore More"
                        buttonLink="/security-products"
                        imageSrc="/assets/images/banners/banner3.png"
                        contentPosition="center-right"
                        subTitleClass='text-white lg:text-gray-800 text-5xl font-bold tracking-wide'
                        titleColor="text-white lg:text-gray-800 text-3xl font-medium"
                        textColor="text-white lg:text-gray-800"
                        buttonColor="bg-prunary"
                        buttonTextColor="text-black"
                        overlayLayer='bg-black/20 lg:bg-black/0'
                        contentClass='mx-0 lg:max-w-xl space-y-4 '
                        className='mb-20'
                    />
                </SwiperSlide>
                <SwiperSlide >

                    <InfoBannerSection
                        subtitle="24/7 Surveillance in"
                        title="Action"
                        description="Your security, always recorded and protected."
                        buttonText="Explore More"
                        buttonLink="/it-products"
                        imageSrc="/assets/images/banners/banner4.png"
                        contentPosition="top-center"
                        subTitleClass='text-white lg:text-gray-800 text-5xl font-bold tracking-wide'
                        titleColor="text-white lg:text-gray-800 text-3xl font-medium"
                        textColor="text-white lg:text-gray-800"
                        buttonColor="bg-prunary"
                        buttonTextColor="text-black"
                        overlayLayer='bg-black/20 lg:bg-black/0'
                        contentClass='mx-0 lg:max-w-xl space-y-4 lg:mx-20 text-center '
                        className='mb-20'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


export default DiscoverSection