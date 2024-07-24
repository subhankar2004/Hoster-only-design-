import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex flex-row-reverse lg:justify-end'>
      <div className='flex items-center justify-center lg:flex-1 '>
        <img src="./src/assets/Blue-Shape.svg" alt="1st" className='-rotate-[45deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./src/assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./src/assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./src/assets/Hero-Model.png" alt="4th" className='absolute h-64 md:h-72 lg:h-[400px]'/>
      </div>
      <div className='lg:flex-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-gray-400 '>With Hoster ,get your website up and running in no less than 5 minutes with the most competitive pricing package available online. </p>
        <form action="#" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='Enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400' />
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600'>Join Waitlist</button>
        </form>
        <div className='flex gap-2 '>
          <img src="./src/assets/Checkmark.svg" alt="" />
          <p className='font-lato text-gray-400 '>No Spam ever. Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body
