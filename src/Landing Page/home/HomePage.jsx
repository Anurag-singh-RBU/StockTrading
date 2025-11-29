import Navbar from './Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
// import Account from '../Account'
// import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
    <div className='max-w-3xl mx-auto mt-5 p-3 flex flex-col gap-10 justify-center items-center'>

      <Navbar/>
      <Hero/>

    </div>
    <div className="w-full h-px bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 -mt-8"/>

    <div className='max-w-4xl mx-auto mt-5 p-3 flex flex-col gap-10 justify-center items-center'>

      <div className='w-full h-[400px] flex justify-center items-center heroimg rounded-lg -mt-28 sm:mt-0'></div>
      <div className="w-full flex flex-col justify-center items-center text-center gap-4">
        <div className='text-3xl font-mono tracking-normal font-bold mt-8'>Invest in everything</div>
        <div className='text-gray-600 font-TASA sm:text-xl text-sm'>
          Online platform to invest in stocks , derivatives , mutual funds , ETFs , bonds and more.
        </div>
        <button className='cursor-pointer transition-all duration-700 ease-out mt-3 px-4 shadow-sm mb-10 py-3 rounded-md bg-linear-to-r from-sky-50 via-sky-200 to-sky-50 text-black font-mono hover:scale-103 hover:shadow-lg'>
          Signup for free
        </button>
      </div>
      {/* <Awards/>
      <Stats/>
      <Pricing/>
      <Education/> */}
      {/* <Account/> */}
      {/* <Footer/> */}

    </div>
    </>
  )
}

export default HomePage
