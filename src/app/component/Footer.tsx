import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className='bg-white shadow-inner shadow-black'>
 <h1 className='text-[red] font-[900] text-[25px] lg:pl-[97px] md:pl-[50px] sm:pl-[18px] pl-[52px] pt-4'>E-Commerce Watches</h1>
 <div className=' lg:flex-row lg:justify-around md:flex-row md:justify-around sm:flex-row sm:justify-around flex flex-col sm:gap-4 items-center  bg-white max-w-screen-full py-6 gap-8'>
 

 <div>
    <h1 className='text-blue-950 font-[600] text-[22px]'> Links</h1>
    <ul className='text-[17px] font-[500] leading-[23px]'>
    <li className='hover:underline'> <Link href='#'>Home</Link></li>
        <li className='hover:underline'> <Link href='#'>About</Link></li>
        <li className='hover:underline'> <Link href='#'>Contact</Link></li>
    </ul>
 </div>

 <div>
        <h1 className='text-blue-950 font-[600] text-[22px]'>Contact</h1>
        <ul className='text-[15px] font-[500] leading-[23px]'>
            <li className='hover:underline'><Link href='#'>FACEBOOK</Link></li>
            <li className='hover:underline'><Link href='#'>INSTAGRAM</Link></li>
            <li className='hover:underline'><Link href='#'>EMAIL</Link></li>
        </ul>
    </div>

    
     </div>
    
    </div> 
    </>
  )
}

export default Footer