import React from 'react'
import HeroSection from '../components/common/HeroSection'
import { getBanners, getBlogData } from '@/utils/server'
import SectionWithCardsSlider from '../components/common/SectionWithCardsSlider'

const page = async () => {
    const { data } = await getBanners('/blogs') // Placeholder for actual data fetching
    const blogData = await getBlogData() // Placeholder for actual data fetching
    return (
        <div className="bg-gray-100">
            <HeroSection
                title={data?.title ?? "Unleash Innovation"}
                description={data?.description ?? "Tailored software solutions for every business need."}
                bgImage={data?.fileUrl ?? "/assets/images/banners/bannerhome.png"}
                alignment="center"
                position="center"
            />

            <SectionWithCardsSlider
                sectionPadding="p-4 lg:p-16 max-w-7xl m-auto"
                headingProps={{
                    title: "What’s Latest at BGT",
                    align: "left",
                    // buttonText: "See All",
                    // buttonLink: "/blogs",
                    layout: "w-full",
                    buttonVariant: "outline",
                    buttonColor: "bg-white",
                    buttonTextColor: "text-white",

                }}
                cards={blogData}
                cardClass="p-0  bg-transparent rounded-none shadow-none"
                imageClass="rounded-none mb-0 w-full h-48 object-cover"
                cardContetntClass="py-4 rounded-none shadow-none bg-transparent"
                titleClass="line-clamp-2 text-lg font-semibold mb-2"
                swiperSlidesPerView={1}
                swiperBreakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            />

        </div>
    )
}


export default page;