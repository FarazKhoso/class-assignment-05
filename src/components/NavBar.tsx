
import React from 'react'
import  {CiHeart} from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { RiContactsLine } from 'react-icons/ri'

const NavBar = () => {
  return (
    <div className='bg-[#A29875] w-full h-auto sm:h-[135px] text-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-9 py-3 sm:py-0'>
    <h1 id='logo' className='text-3xl sm:text-[69.78px] font-bold'>Purity</h1>
  
    <div className='relative w-full sm:max-w-[600px] lg:max-w-[750px] mt-3 sm:mt-0'>
      <input
        type='text'
        placeholder='Search for Gold Jewellery, Diamond Jewellery and more…'
        className='w-full h-10 sm:h-[56.24px] rounded-xl pl-4 pr-10 text-xs sm:text-sm lg:text-base'
      />
      <IoIosSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl text-slate-600' />
    </div>
  
    <div id='icons' className='flex items-center gap-3 mt-3 sm:mt-0 sm:ml-6'>
      <CiHeart className='text-2xl sm:text-3xl' />
      <RiContactsLine className='text-2xl sm:text-3xl' />
      <IoCartOutline className='text-2xl sm:text-3xl' />
    </div>
  </div>
  


  )
}

export default NavBar
