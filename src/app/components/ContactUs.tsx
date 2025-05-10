import Image from 'next/image';
import React from 'react'
import Button from './common/Button';

interface ContactUsProps {
    sectionPadding?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
    sectionPadding = "p-4 lg:p-16 lg:py-12",
}) => {
    return (
        <section className={`relative w-full ${sectionPadding} text-white`}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8'>
                <div className='col-span-1 md:col-span-2'>
                    <h2 className='text-4xl text-primary mb-4 font-semibold'>Contact Us</h2>
                    <p className='mt-2 font-normal font-[ubuntu] text-dark-primary'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions.</p>
                    <div className='flex flex-col md:flex-row gap-4 mt-8'>
                        <Button
                            variant="outline"
                            showArrow
                            href={"/conact-us"}
                            className={``}
                        >
                            Request a quote
                        </Button>
                        <Button
                            variant="outline"
                            showArrow
                            href={"mailto:admin@bgtgulf.com"}
                            className={``}
                        >
                            Send us an email
                        </Button>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-1'>
                    <Image
                        src="/assets/images/content/contact.jpg"
                        alt="Client Background"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full rounded-none"
                    />
                </div>
            </div>
        </section>
    )
}


export default ContactUs;
