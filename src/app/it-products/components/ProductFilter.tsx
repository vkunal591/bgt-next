"use client"
import React, { useState } from 'react';

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

export default function ProductFilter({ categories, products }: ProductFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProducts = selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

    return (
        <div className='max-w-7xl m-auto p-4 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {/* Category List */}
                <div className='space-y-2 border border-gray-200'>
                    <button
                        className={`block w-full text-2xl font-semibold text-center text-primary  px-4 py-2 rounded ${selectedCategory === null ? 'bg-white text-primary' : 'bg-gray-100'}`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        Categories
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`block w-full text-left px-4 py-2 rounded ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filteredProducts.map((product) => (
                        <div key={product.id} className=''>
                            <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
                            <h3 className='mt-2 font-semibold text-lg line-clamp-2'>{product.title}</h3>
                            {product.description && <p className='text-sm text-gray-600 line-clamp-2'>${product.description}</p>}
                            {product.price && <p className='text-sm text-gray-600'>${product.price.toFixed(2)}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
