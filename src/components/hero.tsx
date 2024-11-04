import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   
<div className='flex flex-col lg:flex-row justify-center items-center lg:items-start h-auto lg:h-screen my-10 lg:my-28 px-4'>
  <div className='flex flex-col lg:flex-row justify-around w-full max-w-7xl'>
    <div id='left' className='lg:w-1/2 w-full mt-8 lg:mt-16 px-4'>
      <div className='text-[32px] lg:text-[37px] font-bold'>
        <h1>IMPECCABLE</h1>
        <h1>CRAFTSMANSHIP AND</h1>
        <h1>FINESSE</h1>
      </div>
      <p className='text-[20px] lg:text-[30px] font-medium text-[#787054] w-full lg:w-[798px] my-4 lg:my-8'>
        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
      </p>
      <button className='bg-[#A29875] font-medium text-[18px] lg:text-[25px] text-white w-44 lg:w-52 h-10 lg:h-12 rounded-md'>
        Explore Now
      </button>
    </div>

    <div id='right' className='lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 lg:ml-52'>
      <Image
        src='/hero.svg'
        alt='hero-image'
        height={525} 
        width={380} 
        className='w-full max-w-xs lg:max-w-md h-auto'
      />
    </div>
  </div>
</div>


  )
}

export default Hero
