
"use client";
import React from "react";
import Image from "next/image";
import { data } from "@/app/data/cardData";

// ✅ Typing for params fixed directly in the component props


   
  export default function Dynamic({ params }: { params: { slug: string } }) {
  
    const product = data.find((b) => b.slug === params.slug);
  




  // If product not found
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-blue-950 py-3 px-3 font-bold underline mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-700">
          Sorry, the product you are looking for could not be found.
        </p>
      </div>
    );
  }

  // Render the product details
  return (
    <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-[60px]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(255,0,0)] text-center py-3 px-3 font-bold underline mb-7">
        {product.title}
      </h1>
      <div className="flex gap-8">
        {/* Left Section: Product Image */}
        <div className="w-1/3">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-2/3">
          <p className="mt-4 text-gray-700">Brand: {product.title}</p>
          <p className="text-lg text-red-600">Price: {product.price}</p>
          {product.description && (
            <p className="mt-4 text-gray-700">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
