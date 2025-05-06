import Image from 'next/image';
import React from 'react'
import Button from './common/Button';

interface ContactUsProps {
    sectionPadding?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
    sectionPadding = "p-4 lg:p-16",
}) => {
    return (
        <section className={`relative w-full ${sectionPadding} text-white`}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8'>
                <div className='col-span-1 md:col-span-2'>
                    <h2 className='text-4xl text-primary mb-4 font-semibold'>Contact Us</h2>
                    <p className='mt-2 font-normal font-[ubuntu] text-dark-primary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
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
                            href={"mailto:"}
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
