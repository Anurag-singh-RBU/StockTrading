import React from 'react'
import icons from '../../assets/data.json'

const Hero = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center sm:mt-32 mt-25 sm:mb-20 mb-10 gap-5'>

      <div className="text-center flex flex-col justify-center items-center font-bold font-TASA sm:text-[45px] text-2xl leading-tight">
        <h1 className='flex'><span className='text-green-600'>Monvex. </span>&nbsp;A production grade</h1>
        <h1>cool library for the web.</h1>
      </div>

      <div className='text-center flex flex-col justify-center items-center font-monvex text-gray-500 sm:text-[14px] text-sm w-full font-semibold sm:tracking-wider'>
        <h2>Create stunning web animations with our free and</h2>
        <h2 className='flex'>open source library for <span className='text-red-500'>&nbsp;React</span>&nbsp;,&nbsp;<span className='text-blue-600'>Javascript</span>&nbsp;and
        <span className='text-orange-500'>&nbsp;Vue</span>.</h2>
      </div>

      <button 
      className="sm:mt-5 mt-3 px-3 py-2 cursor-pointer text-center font-monvex rounded-md bg-white text-[#0C1012] text-[14px] tracking-wider shadow-sm hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
        Get Started
      </button>

     <div className='flex flex-wrap justify-between items-center sm:mt-10 mt-10 mx-3 sm:w-xl sm:text-[13px] text-xs font-monvex text-gray-500 leading-[1.1em] tracking-wide'>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[0].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Free and <span>Open Source</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[1].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Easy <span>to use</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[2].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Production <span>ready</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[3].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Hybrid <span>engine</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[4].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Robot <span>friendly</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-1/3 sm:w-auto mb-8"> 
        <div className="w-[18px] h-[18px]" dangerouslySetInnerHTML={{ __html: icons[5].svg }}/>
        <div className="flex flex-col justify-center items-center text-center">
          Tiny <span>foot print</span>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Hero
