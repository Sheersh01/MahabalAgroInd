import React from 'react'
import Hero from '../components/Hero'
import Description from '../components/Description'
import Statistics from '../components/Statistics'
import InfoSection from '../components/InfoSection'
import Motto from '../components/Motto'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='relative'>   
       <Hero/>
       <Description/>
    <Statistics/>
<Motto/>
<InfoSection/>
<Testimonials/>
      </div>
  )
}

export default Home