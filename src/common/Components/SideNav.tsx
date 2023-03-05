import React from 'react'
import {CiGrid42} from 'react-icons/ci'
import {MdOutlinePeopleAlt} from 'react-icons/md';
import {AiOutlineLineChart, AiOutlineFile} from 'react-icons/ai'
import  {FiBriefcase} from 'react-icons/fi';
import {SlSettings} from 'react-icons/sl';

const SideNav = () => {
  return (
    <div className='flex flex-col max-w-[120px] h-[820px] bg-[#fff] border-t border-[#EDEDED]  pt-[37px]'>
      <div className='flex flex-col gap-[40px] px-[16px]'>
        <div className='flex flex-col gap-[9px] items-center'>
            <CiGrid42 size={30} color='#1E1E1E' />
            <h3 className='text-[#1E1E1E] text-[15px] font-medium'>Overview</h3>
        </div>
        <div className='flex flex-col gap-[9px] items-center'>
            <AiOutlineLineChart size={30} color='#D71E0E' />
            <h3 className='text-[#D71E0E] text-[15px] font-medium'>Market</h3>
        </div>
        <div className='flex flex-col gap-[9px] items-center'>
            <FiBriefcase size={30} color='#1E1E1E' />
            <h3 className='text-[#1E1E1E] text-[15px] font-medium'>Portfolio</h3>
        </div>
        <div className='flex flex-col gap-[9px] items-center'>
            <MdOutlinePeopleAlt size={30} color='#1E1E1E' />
            <h3 className='text-[#1E1E1E] text-[15px] font-medium'>Community</h3>
        </div>
        <div className='flex flex-col gap-[9px] items-center'>
            <AiOutlineFile size={30} color='#1E1E1E' />
            <h3 className='text-[#1E1E1E] text-[15px] font-medium'>Reports</h3>
        </div>
        <div className='flex flex-col gap-[9px] items-center'>
            <SlSettings size={30} color='#1E1E1E' />
            <h3 className='text-[#1E1E1E] text-[15px] font-medium'>Settings</h3>
        </div>
      </div>
    </div>
  )
}

export default SideNav
