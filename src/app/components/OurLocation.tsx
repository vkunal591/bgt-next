import React from 'react'

export default function OurLocation() {
    return (
        <div className='max-w-7xl m-auto p-4 lg:p-16'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                <div className='w-full lg:w-1/2 p-4'>
                    {/* location iframe */}
                    <div className='rounded overflow-hidden '>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510630722!2d76.76355598950211!3d28.644287345822324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1746534494866!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-primary text-5xl font-semibold mb-4'>Our Location</h3>
                    <p className='text-gray-700 mb-10'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment.</p>

                    <h5 className='text-2xl font-semibold text-primary'>Headquarters</h5>
                    <p className='text-gray-600 text-sm font-normal font-[ubuntu] w-full lg:w-1/2'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment.</p>

                </div>

            </div>
        </div>
    )
}
