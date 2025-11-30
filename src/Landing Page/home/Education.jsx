import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center w-full h-auto sm:mt-10 sm:gap-18 gap-0 mb-10 -mt-30'>
      <div className='sm:h-[400px] sm:w-[500px] h-[400px] w-[300px] education'></div>
      <div className='flex flex-col sm:items-start sm:justify-start justify-center items-center h-auto sm:gap-4 sm:mt-6'>
        <div className='font-semibold font-mono sm:text-3xl text-xl sm:mb-0 mb-2' style={{wordSpacing: "-5px"}}>Free and open market education</div>
        <div className='text-gray-500 sm:text-sm text-xs leading-[1.4em] tracking-wide font-monvex text-center sm:text-left mt-3 px-3'>
          Varsity - The largest online stock market education book in the world <br className='sm:block hidden'></br> covering everything from the basics to advanced trading.
        </div>
        <button 
      className="sm:mt-2 mt-5 px-3 py-2 cursor-pointer text-center font-monvex rounded-md bg-gray-900 text-white sm:text-[14px] text-sm tracking-wider shadow-sm hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
        Varsity
      </button>
       <div className='text-gray-500 sm:text-sm text-xs leading-[1.4em] tracking-wide font-monvex text-center sm:text-left sm:mt-5 mt-8'>
          TradingQ&A - The most active trading and investment community in <br className='sm:block hidden'></br> India for all your market related queries.
        </div>
        <button 
      className="sm:mt-2 mt-5 px-3 py-2 cursor-pointer text-center font-monvex rounded-md bg-gray-900 text-white sm:text-[14px] text-sm tracking-wider shadow-sm hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
        Trading
      </button>
      </div>
    </div>
  )
}

export default Education
