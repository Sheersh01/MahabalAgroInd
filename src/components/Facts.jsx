import React from 'react'
import ContentBox from './ContentBox'
const Facts = () => {
  return (
  <div className='min-h-screen w-full lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-10'>
  <div className='w-full flex md:flex-row flex-col lg:gap-12 md:gap-8 gap-8 '>
            <ContentBox/>
            <ContentBox/>
            
        </div>
   </div>
  )
}

export default Facts