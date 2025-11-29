import React from 'react'

const Awards = () => {
  return (
    <div className='flex justify-center w-full h-auto mt-10'>
      <div className='h-[500px] w-[700px] award -ml-25'></div>
      <div className='flex flex-col items-start justify-start h-auto gap-4 mt-35'>
        <div className='font-semibold font-mono text-3xl' style={{wordSpacing: "-5px"}}>Largest Stock Platform</div>
        <div className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>
          2+ million clients contribute to over 15 % of all retail volumes<br></br> in India daily by trading and investing in :
        </div>
        <div className='flex justify-between items-center mt-5'>
          <ul className='flex flex-col gap-3 list-disc marker:text-black ml-8'>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>Futures and Options</li>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>Commodity derivaties</li>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>Currency derivaties</li>
          </ul>

          <ul className='flex flex-col gap-3 list-disc marker:text-black ml-18'>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>Mutual Funds</li>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>Stocks and Trade</li>
            <li className='text-gray-500 text-[13px] leading-[1.4em] tracking-wide font-monvex'>ETHs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Awards
