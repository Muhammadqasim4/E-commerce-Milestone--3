import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  id: number;
  image: string;  
  title: string;
  price: number;
  addToCart: (product: { id: number; title: string; price: number; image: string ;  }) => void;
}

const ProductCard: FC<ProductCardProps> = ({ id, image, title, price, addToCart }) => {
  return (
 
    <div className=" w-[200px] h-[340px] bg-white border border-gray-300 rounded-lg hover:shadow-black hover:shadow-lg transition-shadow duration-300">
    <Image
      src={image}  
      alt={title}
      className=" object-cover rounded-t-lg"
      height={180}
      width={200}
      
    />
    <div className="p-4 flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
        <p className="text-xl text-brown-600 font-bold">${price}</p>
      
      <button
        onClick={() => addToCart({ id, title, price, image })} className="py-2 mt-2  bg-green-500 text-white  px-6 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105">Add to Cart
      </button>
      </div>
    </div>
  </div>
  
  
  

  );
};

export default ProductCard;