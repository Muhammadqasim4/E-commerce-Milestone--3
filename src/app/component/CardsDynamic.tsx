import Image from 'next/image';
import {data} from '../data/cardData'
import Link from  'next/link'



const ShopPage = () => {
  return (
    <>
   
    <div className="p-4 place-items-center">
      {/* Left Side Heading */}
      <div className="mb-8">
        <h1 className="text-[red] text-3xl font-bold underline ">Watches</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] justify-center">
        
      {data.map((item)=>{
        return(
          <Link href={`/Cards/${item.slug}`} key={item.id}>

  <div className="relative py-2 px-1 shadow-lg shadow-black rounded ">
          <Image
            src={item.image}
            alt="Card 1"
            layout="intrinsic"
            width={180}
            height={180}
            className="rounded-md"
          />
         <h1 className='text-[20px] font-[600]'>{item.title}</h1>
         <p className='text-gray-600 text-[14px]'>{item.desc}</p>
         <h1 className='text-gray-400 hover:text-blue-700 text-[13px] font-[700]'>{item.btn}</h1>
        </div>
        
          </Link>
        )
      })}




      </div>
    </div>
    </>
  )}
  export default ShopPage


