
import React from "react";
import Image from "next/image";
import { data } from "@/app/data/cardData";
import type { GetStaticPropsContext } from "next";

const Dynamic = ({ params }: GetStaticPropsContext) => {
  // Explicitly cast params to ensure it's treated correctly
  const { slug } = params as { slug: string };

  // Find the product by slug
  const dataa = data.find((b) => b.slug === slug);

  // Handle product not found scenario
  if (!dataa) {
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

  // Render product details if found
  return (
    <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-[60px]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(255,0,0)] text-center py-3 px-3 font-bold underline mb-7">
        {dataa.title}
      </h1>
      <div className="flex gap-8">
        {/* Left Section: Product Image */}
        <div className="w-1/3">
          <Image
            src={dataa.image}
            alt={dataa.title}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-2/3">
          <p className="mt-4 text-gray-700">Brand: {dataa.title}</p>
          <p className="text-lg text-red-600">Price: {dataa.price}</p>
          {dataa.description && (
            <p className="mt-4 text-gray-700">{dataa.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dynamic;

