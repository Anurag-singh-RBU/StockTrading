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
    <div className='max-w-3xl mx-auto flex justify-between items-center font-monvex mt-5 text-[13px] text-[#FFFFFF99] bg-black p-3'>

        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        {/* <Account/> */}
        {/* <Footer/> */}

    </div>
  )
}

export default HomePage