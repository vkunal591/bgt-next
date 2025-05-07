import React from 'react'
import HeroSection from '../components/common/HeroSection'
import InfoImageSection from '../components/common/InfoImageSection'
import FeatrurePoints from '../components/FeaturePoints'
import Faqs from '../components/common/Faqs'
import TrustedPartners from '../components/common/TruestedPartners'
import ContactUs from '../components/ContactUs'
import Image from 'next/image'
import InfoBannerSection from '../components/common/InfoBannerSection'
import ContactForm from '../components/common/ContactForm'
import ContactHeroSection from '../components/common/ContactHeroSection'
import OurLocation from '../components/OurLocation'
import { getBanners } from '@/utils/server'


const page = async () => {
    const { data } = await getBanners('/contact-us') // Placeholder for actual data fetching
    return (
        <div className="bg-gray-100">
            <HeroSection
                title={data?.title ?? "Unleash Innovation"}
                description={data?.description ?? "Tailored software solutions for every business need."}
                bgImage={data?.fileUrl ?? "/assets/images/banners/bannerhome.png"}
                alignment="center"
                position="center"

            />
            <ContactHeroSection />
            <OurLocation />

        </div>
    );
}


export default page;

export const revalidate = 60;
