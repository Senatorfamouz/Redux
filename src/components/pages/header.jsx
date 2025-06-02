import React from 'react'
import logo from '../../assets/react.svg'
import { LuShoppingCart } from "react-icons/lu";

const header = () => {
  return (
    <div className='w-full h-[60px] bg-orange-100 flex items-center justify-between px-4 shadow-md'>
        <img src={logo} alt="" />
      <navs className='flex items-center justify-center text-2xl font-bold text-[#22249f] gap-[50px] w-full '>
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Contact</nav>
        <nav>Blog</nav>
      </navs>
        <div className='flex items-center justify-center gap-4'>
            <LuShoppingCart className='text-3xl text-[#22249f] gap-9' />
        </div>
        <div className='flex items-center justify-center gap-2'>
            <button className='bg-[#22249f] text-white px-4 py-2 rounded-md'>Login</button>
            <button className='bg-[#22249f] text-white px-5 py-2 rounded-md'>SignUp</button>
        </div>
    </div>
  )
}

export default header
