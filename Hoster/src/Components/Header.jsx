import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between '>
      <div className='flex items-center justify-center gap-2'>
        <img src="./src/assets/Logo.svg" alt="Logo" />
        <button className='bg-gradient-to-r from-pink-500 to-violet-500 text-white px-2.5 py-1.5  rounded-2xl'>Hoster is Hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
        <li>
          <a href="#">plans</a>
        </li>
        <li>
        <a href="#">find domains</a>
        </li>
        <li>
        <a href="#">why hosters</a>
        </li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a className='text-blue-400' href="#">Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600'>Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
      <FaBars />
      </div>
    </div>
  )
}

export default Header;
