import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {MdShowChart, MdOutlineCancel} from 'react-icons/md'
import {FiBook} from 'react-icons/fi';
import {RxCounterClockwiseClock} from 'react-icons/rx';
import {AiOutlineEye, AiOutlineCheckCircle} from 'react-icons/ai';
const MarketNav = () => {
  return (
    <div className='bg-[#fff] max-w-[227px]  py-[7px] px-[10px] mt-[5px] h-[410px]'>
        <div className='border border-[#D6D6D6] bg-[#F8FAFB] w-[191px] rounded-sm px-[7px] py-[10px] flex items-center gap-[5px]'>
            <CiSearch size={18} color='#92929D' />
            <input type="text" className='border-0 placeholder:text-[#92929D] bg-[#F8FAFB] w-[85%]' placeholder='Search' />
        </div>
        <div className='flex flex-col gap-[10px]'>
                <div className='h-[50px]  flex items-center gap-[15px] pl-[16px]'>
                    <MdShowChart size={24} color='#1E1E1E'/> <span className='text-[#1E1E1E] text-[14px] font-medium tracking-[2px]'>Product View</span>
                </div>
                <div className='h-[50px] bg-[#F8FAFB] flex items-center gap-[15px] pl-[16px]'>
                    <FiBook size={24} color='#1E1E1E'/> <span className='text-[#D71E0E] text-[14px] font-medium tracking-[2px]'>Order Book</span>
                </div>
                <div className='h-[50px]  flex items-center gap-[15px] pl-[16px]'>
                    <RxCounterClockwiseClock size={24} color='#1E1E1E'/> <span className='text-[#1E1E1E] text-[14px] font-medium tracking-[2px]'>Price History</span>
                </div>
                <div className='h-[50px]  flex items-center gap-[15px] pl-[16px]'>
                    <AiOutlineEye size={24} color='#1E1E1E'/> <span className='text-[#1E1E1E] text-[14px] font-medium tracking-[2px]'>Open Orders</span>
                </div>
                <div className='h-[50px]  flex items-center gap-[15px] pl-[16px]'>
                    <AiOutlineCheckCircle size={24} color='#1E1E1E'/> <span className='text-[#1E1E1E] text-[14px] font-medium tracking-[2px]'>Closed Trades</span>
                </div>
                <div className='h-[50px]  flex items-center gap-[15px] pl-[16px]'>
                    <MdOutlineCancel size={24} color='#1E1E1E'/> <span className='text-[#1E1E1E] text-[14px] font-medium tracking-[2px]'>Cancelled Trades</span>
                </div>

            </div>
       
      </div>
  )
}

export default MarketNav
