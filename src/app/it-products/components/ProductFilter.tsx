"use client"

import { getData } from '@/utils/server';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Product {
    id: string;
    title: string;
    image: string;
    category: string;
    price?: number;
    description?: string;
}

interface ProductFilterProps {
    categories: string[];
    products: Product[];
}

export default function ProductFilter() {
    const [categories, setcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getproductData = async () => {
            const categoryResponse: any = await getData("/api/category/public");
            const productResponse: any = await getData("/api/product/public?type=IT Products");

            if (categoryResponse) setcategories(categoryResponse);
            if (productResponse) setProducts(productResponse);

            setLoading(false); // Done loading
        }
        getproductData();
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter((p: any) => p.categories === selectedCategory)
        : products;

    return (
        <div className='max-w-7xl m-auto p-4 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {/* Category List */}
                <div className='space-y-2 border border-gray-200 rounded overflow-hidden'>
                    <button
                        className={`block w-full text-2xl font-semibold text-center text-primary px-4 py-2 rounded ${selectedCategory === null ? 'bg-white text-primary' : 'bg-gray-100'}`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        Categories
                    </button>
                    {categories.map((category: any, index: number) => (
                        <button
                            key={index}
                            className={`block w-full text-gray-800 text-center font-semibold px-4 py-2 rounded ${selectedCategory === category?._id ? 'bg-pink-200 text-gray-900' : 'bg-gray-100'}`}
                            onClick={() => setSelectedCategory(category?._id)}
                        >
                            {category?.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className='animate-pulse space-y-2'>
                                <div className='bg-gray-300 w-full h-48 rounded' />
                                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                                <div className='h-3 bg-gray-200 rounded w-full'></div>
                            </div>
                        ))
                        : filteredProducts.map((product: any) => (
                            <Link href={`products/${product?.slug}`} key={product._id}>
                                <div>
                                    <Image
                                        src={product.coverImage}
                                        alt={product.name}
                                        width={900}
                                        height={900}
                                        className='w-full h-48 object-cover'
                                    />
                                    <h3 className='mt-2 font-semibold text-lg line-clamp-2 text-gray-800'>{product.name}</h3>
                                    {product.shortDescription && (
                                        <p className='text-sm text-gray-600 line-clamp-2'>{product.shortDescription}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
