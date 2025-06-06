import React from 'react'
import heroImg from "../assets/hero2.avif"
const Hero = () => {
  return (
    <div className='relative h-screen text-[#F6F0E8] w-full bg-black'>
      <img className='w-full h-full object-cover object-top opacity-[60%] bg-black' src={heroImg} alt="" />
     <div className='absolute top-1/2 -translate-y-1/2 lg:px-20 md:px-4 w-full md:space-y-2 space-y-12'>
           <h1 className='lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase md:text-left text-center '>Valorization</h1>
           <h1 className='lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase md:text-right  text-center lg:pr-80 md:pr-20'>of</h1>
        <h1 className='lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase lg:pl-20 md:pl-20 text-center'>organic </h1>
        <h1 className='lg:text-[8vw] md:text-[10vw] text-[12vw] leading-none uppercase md:text-right text-center lg:pr-20 md:pr-10'> waste</h1>
     </div>
    </div>
  )
}

export default Hero