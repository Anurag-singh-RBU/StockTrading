import React from 'react'

const Navbar = () => {

  return (

    <div className='fixed top-0 flex justify-between items-center mb-8 mx-auto w-full sm:max-w-3xl px-5'>
      <div className='rounded-md logo'></div>
      <div className='flex sm:gap-8 gap-5 font-monvex text-[13px] text-gray-600 items-center font-semibold'>
        <a href="#">
          About
        </a>
        <a href="#">
          Docs
        </a>
        <a href="#">
          Products
        </a>
      </div>
      <a href="#" className='bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-mono font-semibold sm:ml-4'>
        Login
      </a>
    </div>
    
  )
}

export default Navbar
