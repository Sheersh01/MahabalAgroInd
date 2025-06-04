import React from 'react'
import {MoveRight} from 'lucide-react'
const ReadMoreBtn = ({title}) => {
  return (
      <div className='bg-[#42ff00] uppercase text-[#00461f] lg:px-8 md:px-4 lg:py-4 md:py-2 rounded-full font-semibold mt-10 flex items-center gap-4 w-fit lg:text-[1vw] md:text-[1.5vw] px-4 py-2 cursor-pointer'>
          <h1>{title}</h1><MoveRight/> </div>
  )
}

export default ReadMoreBtn