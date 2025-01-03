"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image';
import cart from '../assets/cart.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
  };

  return (
    <nav className=' bg-[grey] shadow-inner shadow-[#0e0c0c]  w-full '> 
      <div className="max-w-screen-full flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
        
        <div>
          <h1 className="text-[Red] font-[800] pt-2 text-[20px]">E-Commerce Watches </h1>
        </div>

      <div className="hidden md:flex">
          <ul className="text-black flex gap-[20px] pt-2 font-[500] text-[18px]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/featured"><li>Product</li></Link>
            <Link href="/signup"><li>Create Account</li></Link>     
          </ul>

        </div>
       <Link href='/cart'><div  className='bg-[grey] w-[34px] h-[35px] place-items-center py-1 rounded-full hidden md:block lg:block'><Image src={cart} alt='cart' className='h-[23px] w-[24px]' /></div></Link>

     <div className="md:hidden flex items-center">
        <div  className='bg-[grey] w-[34px] h-[35px] place-items-center py-1 rounded-full'><Image src={cart} alt='cart' className='h-[23px] w-[24px]' /></div>

          <button onClick={handleMenuToggle} className="text-black focus:outline-none">
        
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 bg-[gray] h-[200px]">
          <ul className="text-red flex flex-col gap-4 font-[500] text-[18px]">
            <Link href="/"><li onClick={() => setIsMenuOpen(false)}>Home</li></Link>
            <Link href="/featured"><li onClick={() => setIsMenuOpen(false)}>Products</li></Link>
            <Link href="/signup"><li onClick={() => setIsMenuOpen(false)}>Account Create</li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;