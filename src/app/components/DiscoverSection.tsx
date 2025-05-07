import React from 'react'
import HeadingContent from './common/HeadingContent'
import InfoImageSection from './common/InfoImageSection';
import InfoBannerSection from './common/InfoBannerSection';


interface SectionWithCardsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
}

const DiscoverSection: React.FC<SectionWithCardsProps> = ({
    headingProps }) => {
    return (
        <div className="max-w-7xl mx-auto p-4 lg:p-16">
            <HeadingContent {...headingProps} />
            <InfoBannerSection
                subtitle="Your Identity"
                title="Your Access"
                description="Quick. Easy. Reliable attendance tracking."
                buttonText="Explore More"
                buttonLink="/elv-services"
                imageSrc="/assets/images/banners/banner2.png"
                contentPosition="center-right"
                subTitleClass='text-white lg:text-gray-800 text-5xl font-bold tracking-wide'
                titleColor="text-white lg:text-gray-800 text-3xl font-medium"
                textColor="text-white lg:text-gray-800"
                buttonColor="bg-prunary"
                buttonTextColor="text-black"
                overlayLayer='bg-black/20 lg:bg-black/0'
                contentClass='mx-0 lg:max-w-xl space-y-4 lg:mx-20'
                className='mb-20'
            />


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


        </div>
    )
}


export default DiscoverSection