'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Fetch } from '@/utils/api'; // Your custom fetch wrapper or use native fetch
import Image from 'next/image';

const Page = () => {
    // const params = useParams();
    // const productId = params?.productId; // 'productid' must match the file name [productid]
    // console.log(params?.productId)
    // const [product, setProduct] = useState<any>(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     try {
    //         if (productId) {
    //             const res: any = Fetch(`/api/products/${productId}`)

    //             if (res?.success) {
    //                 console.log(res.data)
    //                 setProduct(res?.data?.result);
    //                 setLoading(false);
    //             }
    //         }

    //     } catch (error) {

    //         console.error('Error fetching product:', error);
    //         setLoading(false);
    //     }
    // }, [productId]);

    // if (loading) return <div>Loading... ID: {productId}</div>;
    // if (!product) return <div>Product not found</div>;

    return (
        <div className='max-w-7xl m-auto p-4 lg:p-16 bg-white'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 flex gap-2'>
                    <div className='space-y-4 '>
                        {["/assets/images/content/pr1.png", "/assets/images/content/pr1.png", "/assets/images/content/pr1.png"].map((data, index) => (
                            <div key={index} className='w-20 h-20 rounded-xl overflow-hidden  bg-gray-300'>
                                <Image src={data || "/assets/images/content/pr1.png"} width={900} height={900} alt='' className='w-full h-full object-cover rounded-xl' />
                            </div>
                        ))}
                    </div>
                    <div className='bg-gray-900 w-full col-span-3'>
                        <Image src={"/assets/images/content/pr1.png"} width={900} height={900} alt='' className='w-full h-full object-cover' />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
