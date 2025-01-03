import React from "react";
import Image from "next/image"; 
import Watch from '../assets/hero.png.png';
const FifthPag = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-[70px]">
      <div className="flex flex-col sm:flex-row items-center justify-around p-6 w-full sm:w-[1050px] sm:h-[550px] bg-[gray]">
     <div className="sm:w-1/2 sm:pr-4 mb-6 sm:mb-0 order-2 sm:order-1 mt-5">
          <Image
            src={Watch}
            alt="Image"
            width={400}  
            height={400} 
          
            className="w-[250px] h-[340px] sm:w-[220px] sm:h-[340px] lg:h-[430px] lg:w-[280px] lg:mt-[100px] "
          />
        </div>

        <div className="sm:w-1/2 text-center sm:text-left sm:pl-4 order-1 sm:order-2 ">
          
          <h3 className="text-2xl sm:text-[58px] text-[#333] mt-4 font-semibold leading-[70px]">
          luxurious Patek Philippe wristwatch
          </h3>
          <p className="text-base text-[#333] mt-4 text-[14px]">
          This is a luxurious Patek Philippe wristwatch, known for its timeless elegance and precision craftsmanship. Featuring a stunning rose gold finish, the watch showcases a sophisticated dial with day, date, and moon phase complications. Its sleek design and high-quality materials make it a symbol of prestige and refinement, perfect for those who appreciate exquisite timepiece
            </p>

        <div className="flex mt-7 justify-center sm:justify-start gap-4">
            <div className="border-2 py-2 px-3 border-[red] text-[15px] text-[red] font-semibold rounded-lg  text-center">
              More Details
            </div>
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default FifthPag;