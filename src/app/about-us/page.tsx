import React from 'react'
import HeroSection from '../components/common/HeroSection'
import InfoImageSection from '../components/common/InfoImageSection'
import FeatrurePoints from '../components/FeaturePoints'
import Faqs from '../components/common/Faqs'
import TrustedPartners from '../components/common/TruestedPartners'
import ContactUs from '../components/ContactUs'
import Image from 'next/image'
import { getBanners } from '@/utils/server'

const page = async () => {
    const { data } = await getBanners('/about-us') // Placeholder for actual data fetching
    return (
        <div className="bg-gray-100">
            <HeroSection
                title={data?.title ?? "Unleash Innovation"}
                description={data?.description ?? "Tailored software solutions for every business need."}
                bgImage={data?.fileUrl ?? "/assets/images/banners/bannerhome.png"}
                alignment="center"
                position="center"

            />


            <InfoImageSection
                subtitle=""
                title="About us"
                description="BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions."
                buttonLink="/about-us"
                imageSrc="/assets/images/content/aboutuspageinfo.png"
                imageClass='w-full'
                layout="flex-col-reverse md:flex-row-reverse"
                bgColor="bg-transparent"
                textColor="text-dark-primary"

            />



            <FeatrurePoints
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
            />


            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl m-auto p-4 lg:p-16 lg:py-12'>
                <div>
                    <h3 className="text-3xl font-semibold mb-4 text-primary" >Our Mission</h3>
                    <p className='font-normal font-[ubuntu] text-dark-primary'>
                        Our mission is to be the foremost distribution partner for advanced security surveillance, IT hardware, and video telematics solutions. We strive to empower businesses with the latest technologies, ensuring robust asset protection and seamless operational optimization.
                    </p>
                </div>
                <div>
                    <h3 className="text-3xl font-semibold mb-4 text-primary" >Our Vission</h3>
                    <p className='font-normal font-[ubuntu] text-dark-primary'>
                        Our vision is to emerge as the leading distributor of security and IT products in the Middle East and beyond, renowned for our comprehensive product range, competitive pricing, and steadfast commitment to excellence and innovation.
                    </p>
                </div>
            </div>

            <div className='bg-gray-900'>
                <div className='max-w-7xl m-auto p-4 lg:p-16 lg:py-12 flex flex-col md:flex-row gap-4 items-center justify-between'>
                    <div className='text-gray-50 w-full lg:w-3/4'>
                        <h3 className="text-3xl font-semibold mb-4 text-primary w-full lg:w-2/3" >From Door And Window Sensors To Mobile Apps And Cameras System!</h3>
                        <p className='font-normal font-[ubuntu]'>
                            Helping families live intelligently means we’re always working to bring our customers the latest technology. As one of the premier providers of smart home technology, we are recognized throughout the industry for our products, innovation & customer satisfaction.
                        </p>
                        <p className='font-normal font-[ubuntu]'>
                            Don’t worry about any thing, our security experts will install your new system, activate it, and show you how to use it.
                        </p>
                    </div>
                    <div className='realative '>
                        <Image
                            src="/assets/images/content/camera.png"
                            alt="Client Background"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full rounded-none"
                        />
                    </div>
                </div>

            </div>







            <Faqs
                pageUrl='/about-us'
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
                headingProps={{
                    title: "Most Asked Question",
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
                    title: "We are trusted By",
                    description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to ",
                    align: "left",
                    layout: "w-full",
                    buttonVariant: "outline",
                    buttonColor: "bg-white",
                    buttonTextColor: "text-white",

                }} />

            <ContactUs
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
            />

        </div>
    )
}


export default page;

export const revalidate = 1;
