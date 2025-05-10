'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Fetch } from '@/utils/api'; // Your custom fetch wrapper or use native fetch
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import ProductView from '../components/ProductView';
import HeadingContent from '@/app/components/common/HeadingContent';
import Faqs from '@/app/components/common/Faqs';
import InfoBannerSection from '@/app/components/common/InfoBannerSection';
import TrustedPartners from '@/app/components/common/TruestedPartners';
import ContactUs from '@/app/components/ContactUs';
import FeatrurePoints from '@/app/components/FeaturePoints';
import InfoImageSection from '@/app/components/common/InfoImageSection';
import { getData } from '@/utils/server';

const Page = () => {
    const params = useParams();
    const productId: any = params?.productId; // 'productid' must match the file name [productid]
    console.log(params?.productId)
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProductData = async () => {
            try {
                if (productId) {
                    const data: any = await getData(`/api/product/public/${productId}`)

                    if (data) {
                        console.log(data?.product)
                        setProduct(data?.product);
                        setLoading(false);
                    }
                }

            } catch (error) {

                console.error('Error fetching product:', error);
                setLoading(false);
            }
        }

        getProductData()
    }, [productId]);

    // if (loading) return <div>Loading... ID: {productId}</div>;
    // if (!product) return <div>Product not found</div>;

    return (
        <div className='bg-gray-100'>

            <ProductView
                product={{
                    name: product?.name ?? 'IP Camera',
                    description: product?.shortDescription ?? 'BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras. Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. ',
                    images: product?.images ?? [
                        '/assets/images/content/pr4.png',
                        '/assets/images/content/pr2.png',
                        '/assets/images/content/pr1.png',
                    ],
                }}
                loading={loading}
            />


            <HeadingContent layout='mb-4 max-w-7xl m-auto p-4 lg:p-16 lg:py-12' title='Product Overview' descriptionClass='font-medium' description='BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras. Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' />

            <div className='max-w-7xl m-auto p-4 lg:p-16 lg:py-12'>
                <h3 className='text-primary font-semibold text-3xl'>Product technical specification</h3>
                <ul className='p-4 px-6'>
                    <li className='text-gray-800 list-disc mb-2'>
                        BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras.
                    </li>
                    <li className='text-gray-800 list-disc mb-2'>
                        Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. </li>
                    <li className='text-gray-800 list-disc mb-2'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </li>
                </ul>
            </div>



            <div className='max-w-7xl m-auto p-4 lg:p-16 lg:py-12'>
                <h3 className='text-primary font-semibold text-3xl'>Product primary features</h3>
                <ul className='p-4 px-6'>
                    <li className='text-gray-800 list-disc mb-2'>
                        BGT Ventures specializes in distributing an extensive range of professional security and IT products. Our portfolio encompasses advanced security surveillance solutions, including IP CCTV cameras.
                    </li>
                    <li className='text-gray-800 list-disc mb-2'>
                        Thermal Cameras, ANPR Cameras, alongside biometric and RFID-based access control systems. We offer cutting-edge vehicle security and video telematics solutions, integrating AI-powered monitoring for enhanced fleet safety. </li>
                    <li className='text-gray-800 list-disc mb-2'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </li>
                </ul>
            </div>

            <InfoImageSection
                subtitle=""
                title="Our Security Product Portfolio"
                description="BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions."
                buttonText="Get Started"
                buttonLink="/about-us"
                imageSrc="/assets/images/content/prductinfo.png"
                layout="flex-col-reverse md:flex-row-reverse"
                titleColor='text-primary text-3xl'
                bgColor="bg-transparent"
                textColor="text-dark-primary"
                buttonColor="bg-primary"
                buttonTextColor="text-white"
            />

            <div className='max-w-7xl m-auto p-4 lg:p-16 lg:py-12'>
                <HeadingContent layout='mb-8' title='Gallery'
                    description='BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions.'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {
                        [
                            {
                                name: "IP Cameras",
                                image: "/assets/images/content/pr1.png"
                            },
                            {
                                name: "Product 1",
                                image: "/assets/images/content/pr2.png"
                            }, {
                                name: "Product 1",
                                image: "/assets/images/content/pr3.png"
                            },
                            {
                                name: "Product 1",
                                image: "/assets/images/content/pr4.png"
                            },
                            {
                                name: "Product 1",
                                image: "/assets/images/content/pr6.png"
                            },
                            {
                                name: "Product 1",
                                image: "/assets/images/content/pr7.png"
                            },
                            {
                                name: "Network Video Recorder",
                                image: "/assets/images/content/pr8.png"
                            }, {
                                name: "Product 1",
                                image: "/assets/images/content/pr9.png"
                            }
                        ].map((product, index) => (
                            <div className='' key={index}>
                                <div>
                                    <Image
                                        src={product?.image || "/assets/images/contnet/pr1.png"}
                                        width={900}
                                        height={900}
                                        alt=''
                                        // alt={product?.name || "BGT Product"}
                                        className=''
                                    />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            <InfoBannerSection
                subtitle="You’re Being Watched,"
                title="IP Camera Active"
                description="Real-time video feed is recorded and stored securely."
                buttonText="Explore More"
                buttonLink="/shop"
                imageSrc="/assets/images/banners/banner5.png"
                contentPosition="center-right"
                subTitleClass='text-4xl text-white font-bold tracking-wide'
                titleColor="text-white text-3xl font-medium italic"
                textColor="text-gray-100"
                buttonColor="bg-white"
                buttonTextColor="text-black"
                overlayLayer='bg-black/10'
                className='mb-20 h-full min-h-[500px] bg-transparent !py-0'
            />


            <Faqs
                pageUrl={`/${productId}`}
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

export default Page;


export const revalidate = 10;
