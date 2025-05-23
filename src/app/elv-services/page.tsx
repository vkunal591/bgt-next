import React from 'react'
import HeroSection from '../components/common/HeroSection'
import InfoImageSection from '../components/common/InfoImageSection'
import FeatrurePoints from '../components/FeaturePoints'
import Faqs from '../components/common/Faqs'
import TrustedPartners from '../components/common/TruestedPartners'
import ContactUs from '../components/ContactUs'
import Image from 'next/image'
import InfoBannerSection from '../components/common/InfoBannerSection'
import HeadingContent from '../components/common/HeadingContent'
import { getBanners } from '@/utils/server'
import ProductGrid from '../security-products/components/ProductGrid'

const products = [
    {
        id: '1',
        title: 'IntelVision IP Camera',
        image: '/assets/images/content/pr1.png',
        category: 'Security',
        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '2',
        title: 'NaviGuard Cam Pro',
        image: '/assets/images/content/pr2.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '3',
        title: 'CyberEye HD Sensor',
        image: '/assets/images/content/pr3.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '4',
        title: 'AegisCam Ultra',
        image: '/assets/images/content/pr4.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '5',
        title: 'OmniSecure View',
        image: '/assets/images/content/pr6.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '6',
        title: 'QuantumEye 360',
        image: '/assets/images/content/pr7.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '7',
        title: 'NeuroTrack NVR',
        image: '/assets/images/content/pr8.png',
        category: 'Security',
        price: 150,
        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '8',
        title: 'SecureLink AI Cam',
        image: '/assets/images/content/pr9.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '9',
        title: 'OmniSecure View',
        image: '/assets/images/content/pr6.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '10',
        title: 'QuantumEye 360',
        image: '/assets/images/content/pr7.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '11',
        title: 'NeuroTrack NVR',
        image: '/assets/images/content/pr8.png',
        category: 'Security',
        price: 150,
        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },
    {
        id: '12',
        title: 'SecureLink AI Cam',
        image: '/assets/images/content/pr9.png',
        category: 'Security',

        description: 'Contrary to popular belief, Lorem is not simply random text.',
    },

]


const headingProps = {
    subtitle: "",
    title: "ELV Category ",
    description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to structured cabling solutions, ensuring efficient and high-performance network connectivity. We also specialize in public address systems, LED video walls for dynamic visual solutions, and telephony solutions to enhance business communication.",
    buttonText: "",
    buttonLink: "/services",
    layout: "flex-col mb-4",
    descriptionClass: "text-gray-600",
    textColor: "text-gray-800",
    buttonColor: "bg-primary",
    buttonTextColor: "text-white",
    align: "left",
    width: "",
}

const page = async () => {
    const { data } = await getBanners('/elc-services') // Placeholder for actual data fetching
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
                title="ELV Services Overview"
                description="BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras, Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. Additionally, we supply gate barrier systems, public address solutions, and structured cabling products, ensuring seamless security and IT networking infrastructure. Our selection also includes a broad array of IT hardware, networking equipment, and software solutions tailored to meet the evolving needs of diverse industries."
                imageSrc="/assets/images/content/elvservices.png"
                layout="flex-col-reverse md:flex-row"
                bgColor="bg-transparent"
                textColor="text-dark-primary"
            />



            <HeadingContent layout='mb-4 max-w-7xl m-auto p-4 lg:px-16' title='ELV Category ' description='BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions.' />
            <ProductGrid slug={"ELV Services"} layoutClass={"max-w-7xl m-auto p-4 pt-0 lg:p-16 lg:py-12 lg:pt-0"} />


            <InfoBannerSection
                subtitle=""
                title="Let’s Create your household secure"
                description="his book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet."
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
                className='mb-20 h-full min-h-[500px] bg-transparent !py-0'
                descClass='text-gray-100'
            />
            <Faqs
                pageUrl='/elv-services'
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
