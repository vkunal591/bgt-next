"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { ImInstagram } from 'react-icons/im';
import { IoCall, IoCallOutline, IoLocateOutline, IoLocationOutline, IoMailOpenOutline, IoMaleOutline, IoPinOutline } from 'react-icons/io5';

export default function ContactForm() {
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
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10'>
                    {/* Left Content Section */}
                    <div className='lg:w-1/2 space-y-6 flex flex-col justify-between items-start min-h-96'>
                        <h2 className='text-4xl font-bold'>Let’s discuss something cool together</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <span><IoMailOpenOutline /></span>
                                <p>email@example.com</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span><IoCallOutline /> </span>
                                <p>+1 234 567 890</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span><IoLocationOutline /></span>
                                <p>123 Street Name, City</p>
                            </div>
                        </div>
                        <div className='flex gap-4 text-xl'>
                            <Link href='#'><ImInstagram /></Link>
                            <Link href='#'><FaFacebook /></Link>
                            <Link href='#'><BsTwitterX /></Link>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className='lg:w-1/2 bg-white text-black p-6 rounded-xl shadow-lg w-full'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            {/* Service Type */}
                            <div>
                                <label className='block font-semibold mb-2'>Select Service Type</label>
                                <div className='flex gap-4'>
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="type1"
                                            className="peer hidden"
                                        />
                                        <div className="px-8 py-2 border rounded-full peer-checked:bg-[#E32B6B] peer-checked:border-primary peer-checked:text-white outline-none">
                                            Security Products
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="type2"
                                            className="peer hidden"
                                        />
                                        <div className="px-8 py-2 border rounded-full peer-checked:bg-[#E32B6B] peer-checked:border-primary peer-checked:text-white outline-none">
                                            It Products
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="type3"
                                            className="peer hidden"
                                        />
                                        <div className="px-8 py-2 border rounded-full peer-checked:bg-[#E32B6B] peer-checked:border-primary peer-checked:text-white outline-none">
                                            Elv Services
                                        </div>
                                    </label>
                                </div>

                                {errors?.serviceType && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.serviceType.message}
                                    </p>
                                )}
                            </div>


                            {/* Name */}
                            <div>
                                <label className='block font-medium'>Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 outline-0 border-b-2 focus:border-[#E32B6B]'
                                />
                                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className='block font-medium'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full  p-2  outline-0 border-b-2 focus:border-[#E32B6B]'
                                />
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className='block font-medium'>Message</label>
                                <textarea
                                    name='message'
                                    rows={1}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full  p-2 outline-0 border-b-2 focus:border-[#E32B6B]'
                                ></textarea>
                                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                            </div>


                            <div>
                                <label className='block font-medium mb-2'>Upload File (jpg, png, pdf)</label>

                                <label htmlFor='fileUpload' className='w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer text-gray-500 hover:border-[#E32B6B] transition'>
                                    <FiUploadCloud className='w-10 h-10 mb-2' />
                                    <span className='text-sm'>Click or drag to upload</span>
                                </label>

                                <input
                                    id='fileUpload'
                                    type='file'
                                    accept='image/png, image/jpeg, application/pdf'
                                    onChange={handleChange}
                                    className='hidden'
                                />
                            </div>



                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='border border-color-primary text-white bg-primary px-6 py-2 rounded-full'
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
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
