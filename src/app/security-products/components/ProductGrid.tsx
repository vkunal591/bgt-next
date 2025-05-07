'use client';

import { getData } from '@/utils/server';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductGrid({ slug, layoutClass }: { slug: any, layoutClass?: any }) {
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<any[]>([]);

    useEffect(() => {
        const getproductData = async () => {
            setLoading(true); // Start loading
            try {
                const productResponse: any = await getData(`/api/product/public?type=${slug}`);
                if (productResponse) {
                    setProductData(productResponse);
                } else {
                    setProductData([]); // In case of null/undefined
                }
            } catch (err) {
                console.error('Failed to fetch products:', err);
                setProductData([]);
            } finally {
                setLoading(false); // Done loading
            }
        };
        getproductData();
    }, []);

    const isEmpty = !loading && productData.length === 0;

    return (
        <div className={layoutClass || 'max-w-7xl m-auto p-4 lg:p-16'}>
            {loading ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div className='animate-pulse' key={index}>
                            <div className='w-full h-48 bg-gray-200 rounded' />
                            <div className='h-4 w-2/3 bg-gray-200 mt-4 mx-auto rounded' />
                        </div>
                    ))}
                </div>
            ) : isEmpty ? (
                <div className='text-center text-gray-600 text-lg py-20'>
                    No Security Products found.
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {productData.map((product: any, index: number) => (
                        <Link href={`products/${product?.slug}`} key={product._id}>
                            <div>
                                <div>
                                    <Image
                                        src={product?.coverImage || '/assets/images/contnet/pr1.png'}
                                        width={900}
                                        height={900}
                                        alt={product?.name || 'BGT Product'}
                                        className='w-full h-48 object-cover rounded'
                                    />
                                </div>
                                <h3 className='text-xl font-semibold p-2 text-gray-800 text-center'>
                                    {product?.name || 'BGT Product'}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
