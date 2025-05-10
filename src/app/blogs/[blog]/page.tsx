'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Fetch } from '@/utils/api'; // Your custom fetch wrapper or use native fetch
import Image from 'next/image';

import { getBlogData, getData } from '@/utils/server';
import SectionWithCardsSlider from '@/app/components/common/SectionWithCardsSlider';

const Page = () => {
    const params = useParams();
    const blogId: any = params?.blog; // 'blogid' must match the file name [blogid]
    console.log(params?.blog)
    const [blog, setBlog] = useState<any>(null);
    const [blogs, setblogs] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getBlogData = async () => {
            try {
                if (blogId) {
                    const data: any = await getData(`/api/blog/public/${blogId}`)
                    console.log(data)
                    if (data) {
                        console.log(data)
                        setBlog(data);
                        setLoading(false);
                    }
                }

            } catch (error) {
                setError(true)
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        }

        getBlogData()
    }, [blogId]);

    useEffect(() => {
        const getBlogsData = async () => {
            try {

                const blogData = await getBlogData() // Placeholder for actual data fetching

                console.log(blogData)
                if (blogData) {
                    console.log(blogData)
                    setblogs(blogData);
                    setLoading(false);
                }


            } catch (error) {
                setError(true)
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        }

        getBlogsData()
    }, [blogId]);

    // if (loading) return <div>Loading... ID: {blogId}</div>;
    // if (!blog) return <div>Blog not found</div>;
    // Tailwind loading skeleton component
    const Skeleton = () => (
        <div className="max-w-7xl m-auto p-4 lg:p-16 lg:py-12 bg-gray-100">

            <div className="animate-pulse space-y-4">
                <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-64 bg-gray-300 rounded"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
            </div>
        </div>
    );

    if (loading) return <Skeleton />;
    if (error || !blog) return <p className="max-w-7xl m-auto p-4 lg:p-16 lg:py-12 bg-gray-100">No data found.</p>;

    return (
        <div className='bg-gray-100 lg:pt-20'><div className="max-w-7xl m-auto p-4 lg:p-16 lg:py-12 bg-gray-100">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-800 mb-6">{blog.heading}</p>
            <div className='w-full'>
                <Image
                    width={1650}
                    height={500}
                    src={blog?.fileUrl || "/assets/images/banners/bannerhome.png"}
                    alt={blog.title}
                    className="w-full h-auto max-h-96 rounded-lg mb-6 object-cover" />
            </div>
            <div
                className="prose text-gray-700 prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }} />
            <p className="mt-8 text-sm text-gray-800">Author: {blog.authorName}</p>
        </div>
            <SectionWithCardsSlider
                sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
                headingProps={{
                    title: "What’s Latest at BGT",
                    align: "left",
                    // buttonText: "See All",
                    // buttonLink: "/blogs",
                    layout: "w-full",
                    buttonVariant: "outline",
                    buttonColor: "bg-white",
                    buttonTextColor: "text-white",
                }}
                cards={blogs}
                cardClass="p-0  bg-transparent rounded-none shadow-none"
                imageClass="rounded-none mb-0 w-full h-48 object-cover"
                cardContetntClass="py-4 rounded-none shadow-none bg-transparent"
                titleClass="line-clamp-2 text-lg font-semibold mb-2"
                swiperSlidesPerView={1}
                swiperBreakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }} />
        </div>
    );
}

export default Page;
