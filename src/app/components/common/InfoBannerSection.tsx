import React from 'react';
import Button from './Button';

interface InfoBannerSectionProps {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    imageSrc: string;
    imageAlt?: string;
    bgColor?: string;
    contentClass?: string;
    subTitleClass?: string;
    titleColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    className?: string;
    contentPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'center-left' | 'center-right' | 'bottom-center' | 'top-center';
    overlayLayer?: string;
    descClass?:string
}

const positionMap: Record<string, string> = {
    'top-left': 'items-start justify-start',
    'top-right': 'items-center md:items-end justify-center md:justify-start',
    'bottom-left': 'items-start justify-end',
    'bottom-right': 'item-center md:items-end justify-center md:justify-end',
    'center': 'items-center justify-center',
    'center-left': 'items-start justify-center',
    'center-right': 'items-center md:items-end justify-center md:justify-center',
    'bottom-center': 'items-center justify-end',
    'top-center': 'items-center justify-start',
};

const InfoBannerSection: React.FC<InfoBannerSectionProps> = ({
    subtitle,
    title,
    description,
    buttonText,
    buttonLink = '#',
    imageSrc,
    imageAlt = 'Banner',
    bgColor = 'bg-white',
    contentClass = 'max-w-xl space-y-4 mx-20',
    titleColor = 'text-primary',
    subTitleClass = 'text-sm font-medium uppercase tracking-wide',
    textColor = 'text-gray-100',
    buttonColor = 'bg-primary',
    buttonTextColor = 'text-white',
    className = '',
    contentPosition = 'center',
    overlayLayer = 'bg-black/10',
    descClass
}) => {
    const positionClasses = positionMap[contentPosition] || 'items-center justify-center';

    return (
        <div
            className={`relative w-full min-h-[500px] flex ${bgColor} ${textColor} ${className}`}
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            aria-label={imageAlt}
        >
            <div className={`flex flex-col p-6 md:p-12 w-full h-full absolute top-0 left-0 ${positionClasses} text-left z-10`}>
                <div className={`${contentClass}`}>
                    <div>
                        <h4 className={`text-gray-800 ${subTitleClass || "text-3xl font-medium uppercase tracking-wide"} `}>{subtitle}</h4>
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 ${titleColor}`}>{title}</h2>
                        <p className={`text-base md:text-lg ${descClass || "text-gray-800"}`}>{description}</p>
                    </div>
                    <Button
                        variant="outline"
                        showArrow
                        href={buttonLink}
                        className={`${buttonColor} ${buttonTextColor}`}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
            {/* Optional overlay for readability */}
            <div className={`absolute inset-0 ${overlayLayer} z-0`} />
        </div>
    );
};

export default InfoBannerSection;
