import React from 'react'
import afexLogo from '../../assets/images/afexLogo.png'
import {MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineLightMode} from 'react-icons/md'

const TopNav = () => {
  return (
    <div className='flex pt-[15px] pb-[13px] pr-[15px] pl-[16px] bg-[#fff]'>
        <div className='flex items-center justify-between w-[50%]  border-r border-[#EDEDED] pr-[2.6225em]'>
            <div className='max-w-[112px]'>
            <img src={afexLogo} alt='afex' />
            </div>
            {/* toggle */}
            <div className='w-[61.91px] flex items-center justify-center gap-[4.99px] bg-[#F4F4F6] rounded-[12.5px] py-[3px] pl-[7.99px] pr-[3px]'> <span className='text-[9px] text-[#1E1E1E] leading-[8.2px] font-medium'>LIGHT</span> <div className='bg-[#fff] p-[5px] rounded-full cursor-pointer'><MdOutlineLightMode size={16} color='#1E1E1E' /> </div></div>
        </div>
        <div className='border-r border-[#EDEDED] pl-[18.97px] w-[40%] flex items-center gap-[46.97px]'>
            <MdKeyboardArrowRight size={18}/>
            <div className='flex items-center gap-[52px]'>
                <div className='flex flex-col'>
                    <span className='text-[#778CA2] text-[12px] font-medium'>CASH BALANCE</span>
                    <h3 className='text-[#1E1E1E] text-[12px] lg:text-[15px] font-bold tracking-[2px]'>₦8,374,763</h3>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#778CA2] text-[12px] font-medium'>SECURITIES VALUE</span>
                    <h3 className='text-[#1E1E1E] text-[12px] lg:text-[15px] font-bold tracking-[2px]'>₦8,374,763</h3>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#778CA2] text-[12px] font-medium'>LOAN BALANCE</span>
                    <h3 className='text-[#1E1E1E] text-[12px] lg:text-[15px] font-bold tracking-[2px]'>₦8,374,763</h3>
                </div>
            </div>
        </div>
        <div className='flex flex-rol items-center justify-end gap-[8px] w-[10%]'>
                <button className='bg-[#1E1E1E] text-[#fff] py-[8px] px-[7.99px] text-bold text-[10px] w-[47.93px] h-[20px] border-0 flex items-center justify-center cursor-pointer'>DEMO</button>
                <MdKeyboardArrowDown size={18} color='#333333' />
        </div>
      
    </div>
  )
}

export default TopNav
