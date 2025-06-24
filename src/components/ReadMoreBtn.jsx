import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const ReadMoreBtn = ({title}) => {
  return (
      <div className='bg-[#D98324] uppercase text-[#F6F0E8] lg:px-8 md:px-4 lg:py-4 md:py-2 rounded-full font-semibold mt-10 flex items-center gap-4 w-fit lg:text-[1vw] md:text-[1.5vw] text-[3vw] px-4 py-2 cursor-pointer hover:scale-[1.1] transition-all hover:bg-[#a76928]'>
          <h1>{title}</h1><FaArrowRightLong className=''/> </div>
  )
}

export default ReadMoreBtn