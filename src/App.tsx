import { useState } from 'react'
import MarketNav from './common/Components/MarketNav'
import SideNav from './common/Components/SideNav'
import TopNav from './common/Components/TopNav'


function App() {
 

  return (
    <div className="w-full flex flex-col h-[100%] bg-[#E5E5E5]">
      <TopNav />
      <div className='flex gap-[9px]'>
      <SideNav />
      <MarketNav />
      <div className='bg-[#fff] py-[7px] px-[10px] mt-[5px]'> body</div>
      </div>
    </div>
  )
}

export default App
