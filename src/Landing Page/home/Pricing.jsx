import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-16 items-center w-full h-auto sm:mt-10 mb-20'>
      <div className='flex flex-col justify-start items-start h-auto sm:gap-4 sm:mt-18 mt-8 pl-5'>
        <div className='font-semibold font-mono sm:text-3xl text-2xl mb-3' style={{wordSpacing: "-3px"}}>Unbeatable Pricing</div>
        <div className='text-gray-500 sm:text-[16px] text-sm leading-[1.4em] sm:tracking-wide font-monvex sm:text-left text-justify pr-4'>
          We pioneered the concept of discount broking and price <br className='sm:block hidden'></br> transparency in India. Flat fees and no hidden charges.
        </div>
         <button 
      className="sm:mt-3 mt-5 px-3 py-2 cursor-pointer text-center font-monvex rounded-md bg-black text-white text-[14px] tracking-wider shadow-sm hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
        See Pricing
      </button>
      </div>
      <div className="sm:flex sm:gap-0 gap-3 justify-between h-auto w-auto sm:mt-0 -mt-15 whitespace-nowrap hidden">

        <div className="flex flex-col justify-center items-center">
          <div className='sm:h-[200px] sm:w-[150px] h-[200px] w-[100px] pricingOne'></div>
          <span className="text-xs text-black -mt-12 leading-[1.4em]">Free account<br></br> opening</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className='sm:h-[200px] sm:w-[150px] h-[200px] w-[100px] pricingOne'></div>
          <span className="text-xs text-black -mt-10"> Free mutual funds</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className='sm:h-[200px] sm:w-[150px] h-[200px] w-[100px] pricingTwo'></div>
          <span className="text-xs text-black -mt-12 leading-[1.4em]">Intraday and<br></br> F&O</span>
        </div>

      </div>
    </div>
  )
}

export default Pricing
