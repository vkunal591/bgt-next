'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';

interface Product {
  name: string;
  description: string;
  images: string[];
}

interface ProductViewProps {
  product?: Product;
  loading?: boolean;
}

const ProductView: React.FC<ProductViewProps> = ({ product, loading = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const navigateImage = (direction: 'left' | 'right') => {
    if (!product) return;
    const newIndex =
      direction === 'left'
        ? (currentIndex - 1 + product.images.length) % product.images.length
        : (currentIndex + 1) % product.images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 mb-20 max-w-7xl m-auto p-4 lg:p-16'>
      <div className='w-full lg:w-2/5 flex gap-4'>
        {/* Thumbnails */}
        <div className='flex flex-col items-center justify-center h-80 w-1/4 relative overflow-y-auto scrollbar-hidden'>
          <div className='h-full w-full space-y-5'>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className='w-20 h-20 bg-gray-200 animate-pulse rounded-xl' />
                ))
              : product?.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                      currentIndex === index ? 'border-color-primary' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      width={100}
                      height={100}
                      alt={`Thumbnail ${index + 1}`}
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </div>
                ))}
          </div>
        </div>

        {/* Main Image with Navigation */}
        <div className='w-full relative rounded-3xl bg-gray-200 overflow-hidden min-h-[300px]'>
          {loading ? (
            <div className='w-full h-full bg-gray-300 animate-pulse' />
          ) : (
            <>
              <Image
                src={product?.images[currentIndex] || ''}
                width={900}
                height={900}
                alt='Main Product Image'
                className='w-full h-full object-cover'
              />
              {/* Navigation */}
              <button
                onClick={() => navigateImage('left')}
                className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full'
              >
                {'<'}
              </button>
              <button
                onClick={() => navigateImage('right')}
                className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full'
              >
                {'>'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className='w-full lg:w-3/5 lg:p-4 space-y-4'>
        {loading ? (
          <>
            <div className='h-8 w-2/3 bg-gray-200 animate-pulse rounded' />
            <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
            <div className='h-4 w-5/6 bg-gray-100 animate-pulse rounded' />
            <div className='h-10 w-32 bg-gray-300 animate-pulse rounded' />
          </>
        ) : (
          <>
            <h2 className='text-3xl text-primary font-semibold mb-4'>{product?.name}</h2>
            <p className='text-gray-600 font-[ubuntu] font-normal mb-8'>{product?.description}</p>
            <Button className='px-10 font-thin' href='/contact-us' >Inquire →</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
