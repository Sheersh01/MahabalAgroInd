import React from 'react'
import motoImg from "../assets/moto.avif"
const Motto = () => {
  return (
    <div className='w-full  h-screen relative text-white'>
      <img className='w-full h-full object-cover object-top' src={motoImg} alt="" />
     <div className='absolute top-10 left-0 lg:px-12 px-6 lg:py-10 py-6 '>
       <h1 className='uppercase lg:text-[2vw] md:text-[3vw] text-[4.5vw]'>Our Motto</h1>
      <h1 className='lg:text-[3vw] md:text-[4.8vw] text-[6vw] py-8 leading-none'>
        We are Mahabal agro ind. We provide Valorization of organic waste to high quality organic compost with engineering compost system .this organic compcost can be utilized to soil condition of farm.
      </h1>
     </div>
    </div>
  )
}

export default Motto