import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface InfoImageSectionProps {
    subtitle: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    imageSrc: string;
    imageClass?: string;
    imageAlt?: string;
    layout?: string;
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    className?: string;
}

const InfoImageSection: React.FC<InfoImageSectionProps> = ({
    subtitle,
    title,
    description,
    buttonText,
    buttonLink = '#',
    imageSrc,
    imageClass = 'w-full h-96 rounded-lg shadow-lg',
    imageAlt = 'Image',
    layout = 'row',
    bgColor = 'bg-white',
    titleColor = 'text-primary',
    textColor = 'text-black',
    buttonColor = 'bg-blue-600',
    buttonTextColor = 'text-white',
    className = '',
}) => {
    const isReversed = layout === 'row-reverse';

    return (
        <div className={`w-full p-4 lg:p-16 lg:py-12 max-w-7xl m-auto ${bgColor} ${textColor} ${className}`}>
            <div className={`max-w-7xl mx-auto flex  ${layout} items-center gap-8`}>
                {/* Text Box */}
                <div className="flex-1 space-y-4">
                    <p className="text-sm font-medium uppercase tracking-wide">{subtitle}</p>
                    <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>
                    <p className="text-base md:text-lg">{description}</p>
                    {buttonText && <Button variant="outline" showArrow href={buttonLink}>{buttonText}</Button>}

                </div>

                {/* Image Box */}
                <div className="w-full lg:w-1/2 ">
                    <Image width={900} height={900} src={imageSrc} alt={imageAlt} className={`${imageClass}`} />
                </div>
            </div>
        </div>
    );
};

export default InfoImageSection;
