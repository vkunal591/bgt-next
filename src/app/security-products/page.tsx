import React from 'react'
import HeroSection from '../components/common/HeroSection'
import InfoImageSection from '../components/common/InfoImageSection'
import FeatrurePoints from '../components/FeaturePoints'
import Faqs from '../components/common/Faqs'
import TrustedPartners from '../components/common/TruestedPartners'
import ContactUs from '../components/ContactUs'
import Image from 'next/image'
import InfoBannerSection from '../components/common/InfoBannerSection'
import { getBanners, getData } from '@/utils/server'
import ProductGrid from './components/ProductGrid'

const page = async () => {
    const { data } = await getBanners('/security-products') // Placeholder for actual data fetching

    return (
        <div className='bg-gray-100'>
            <HeroSection
                title={data?.title ?? "Unleash Innovation"}
                description={data?.description ?? "Tailored software solutions for every business need."}
                bgImage={data?.fileUrl ?? "/assets/images/banners/bannerhome.png"}
                alignment="center"
                position="center"
            />


            <InfoImageSection
                subtitle=""
                title="Our Product Portfolio"
                description="BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras, Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. Additionally, we supply gate barrier systems, public address solutions, and structured cabling products, ensuring seamless security and IT networking infrastructure. Our selection also includes a broad array of IT hardware, networking equipment, and software solutions tailored to meet the evolving needs of diverse industries."
                imageSrc="/assets/images/content/securityproduct.png"
                layout="flex-col-reverse md:flex-row"
                bgColor="bg-transparent"
                textColor="text-dark-primary"
            />


            <ProductGrid slug={"Security Products"} />


            <InfoImageSection
                subtitle=""
                title="Product Overview"
                description="BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras, Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. Additionally, we supply gate barrier systems, public address solutions, and structured cabling products, ensuring seamless security and IT networking infrastructure. Our selection also includes a broad array of IT hardware, networking equipment, and software solutions tailored to meet the evolving needs of diverse industries."
                imageSrc="/assets/images/content/cameraproduct.png"
                imageClass=''
                layout="flex-col-reverse md:flex-row"
                bgColor="bg-transparent"
                textColor="text-dark-primary"
            />

            <InfoBannerSection
                subtitle="You’re Being Watched,"
                title="IP Camera Active"
                description="Real-time video feed is recorded and stored securely."
                buttonText="Explore More"
                buttonLink="/security-products"
                imageSrc="/assets/images/banners/banner5.png"
                contentPosition="center-right"
                subTitleClass='text-4xl text-white font-bold tracking-wide'
                titleColor="text-white text-3xl font-medium italic"
                textColor="text-gray-100"
                buttonColor="bg-white"
                buttonTextColor="text-black"
                overlayLayer='bg-black/10'
                contentClass='max-w-xl space-y-4 mx-0 lg:mx-20'
                className='mb-20 h-full min-h-[500px] bg-transparent !py-0'
                descClass='text-gray-100'
            />
            <Faqs
                pageUrl='security-products'
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
                headingProps={{
                    title: "We are trusted By",
                    description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to ",
                    align: "left",
                    layout: "w-full",
                    buttonVariant: "outline",
                    buttonColor: "bg-white",
                    buttonTextColor: "text-white",

                }}
            />

            <TrustedPartners sectionPadding="py-4 lg:py-16"
                headingProps={{
                    title: "Most Asked Question",
                    description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to ",
                    align: "left",
                    layout: "w-full",
                    buttonVariant: "outline",
                    buttonColor: "bg-white",
                    buttonTextColor: "text-white",

                }} />

            <FeatrurePoints
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
            />


            <ContactUs
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
            />

        </div>
    );
}


export default page;

export const revalidate = 1;


