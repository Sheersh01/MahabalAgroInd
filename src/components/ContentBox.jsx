import React from 'react'
import ReadMoreBtn from './ReadMoreBtn'
const ContentBox = () => {
  return (
      <div className='bg-[#00461f] lg:w-1/2 md:w-[50%]  text-white lg:pt-12 lg:pb-30 md:py-8 lg:px-8 md:px-6 px-4 py-8 rounded-2xl'>
                <h1 className=''>LOGO</h1>
                <h1 className='font-bold  lg:text-[3vw] text-[5vw] lg:my-12 my-6'>Agricultural Products</h1>
                <p className='lg:text-[1.8vw] md:text-[2.5vw] text-[4vw] leading-none'>We aim to increase the productivity and quality of Turkish agriculture with our rich fertilizer range. We provide reliable and innovative products for bountiful harvests by offering solutions suitable for all types of plants and soil, from classic to special.</p>
                 <ReadMoreBtn  title="Read More"/>
            </div>
  )
}

export default ContentBox