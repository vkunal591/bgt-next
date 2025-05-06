"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { ImInstagram } from 'react-icons/im';
import { IoCall, IoCallOutline, IoLocateOutline, IoLocationOutline, IoMailOpenOutline, IoMaleOutline, IoPinOutline } from 'react-icons/io5';

export default function ContactHeroSection() {
    const [formData, setFormData] = useState({
        serviceType: '',
        service: '',
        name: '',
        email: '',
        message: '',
        file: null,
    });
    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<any>('');

    const handleChange = (e: any) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        const newErrors: any = {};
        if (!formData.serviceType) newErrors.serviceType = 'Select a service type';
        if (!formData.service) newErrors.service = 'Select a service';
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setSuccess('');
        try {
            // Simulate sending data (API call)
            await new Promise((res) => setTimeout(res, 2000));
            setSuccess('Message sent successfully!');
            setFormData({
                serviceType: '',
                service: '',
                name: '',
                email: '',
                message: '',
                file: null,
            });
        } catch (err) {
            console.error(err);
            setSuccess('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const services: any = {
        'Security Product': ['CCTV', 'Access Control', 'Alarm System'],
        'IT Product': ['Software Development', 'Web Hosting', 'Cloud Services'],
        'ELV Services': ['Networking', 'PA System', 'Intercom']
    };

    return (
        <div className='bg-primary text-white'>
            <div className='max-w-7xl m-auto p-4 lg:p-16'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20'>
                    {/* Left Content Section */}
                    <div className='lg:w-1/2 lg:pr-20  flex flex-col items-start min-h-96'>
                        <h2 className='text-4xl font-bold mb-4'>Contact Us</h2>
                        <p className='text-sm text-gray-50 mb-8'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment.</p>
                        <div className='space-y-4 mb-16'>
                            <div className='flex items-center gap-3'>
                                <span><IoMailOpenOutline /></span>
                                <p>email@example.com</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span><IoCallOutline /> </span>
                                <p>+1 234 567 890</p>
                            </div>
                        </div>
                        <div className='flex gap-4 text-xl'>
                            <div>
                                <h4 className='text-xl font-semibold text-gray-50 mb-4'>Contact Support</h4>
                                <p className='text-sm text-gray-50'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment.</p>
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold text-gray-50 mb-4'>Meida Inquiries</h4>
                                <p className='text-sm text-gray-50'>BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className='lg:w-2/5 bg-white text-black p-6 rounded-xl shadow-lg w-full'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <h2 className='text-4xl text-gray-800'>Get In Touch</h2>


                            {/* Name */}
                            <div>

                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 outline-0 border-b-2 border-gray-500 focus:border-[#E32B6B]'
                                />
                                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Your email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full  p-2  outline-0 border-b-2 border-gray-500 focus:border-[#E32B6B]'
                                />
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className='block font-medium'>Message</label>
                                <textarea
                                    name='message'
                                    rows={1}
                                    placeholder='Your message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full  p-2 outline-0 border-b-2 border-gray-500 focus:border-[#E32B6B]'
                                ></textarea>
                                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='border border-color-primary text-white bg-primary px-6 py-2 rounded-full'
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Submit →'}
                            </button>

                            {/* Success Message */}
                            {success && <p className='text-green-600 mt-2'>{success}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
