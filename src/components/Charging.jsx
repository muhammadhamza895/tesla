import React from 'react'
import charging1 from '../images/charging1.avif'
import charging2 from '../images/charging2.avif'
import charging3 from '../images/charging3.avif'




const Charging = (props) => {
    return (
        <div onMouseLeave={props.closeComputerCharging} className='lg:flex lg:h-[90vh] lg:fixed  lg:bg-white lg:w-[100%] lg:justify-between lg:pl-10 lg:pr-24 lg:items-center lg:z-20 xl:pl-20 xl:pr-28'>
            <div className='grid grid-cols-1 gap-8 mt-8 mb-6 sm:grid-cols-2 lg:py-16 lg:gap-14 2xl:gap-28'>

                {/* Charging 1 */}
                <div className='flex justify-center items-center space-x-5 relative right-[30px] lg:space-x-0'>
                    <img className='w-[10rem] xl:w-[13rem]' src={charging1} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Charging</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm ' href="">Learn</a>
                        </div>
                    </div>
                </div>

                {/* CHARGING 2  */}
                <div className='flex justify-center items-center space-x-5 lg:space-x-0'>
                    <img className='w-[10rem] xl:w-[14rem]' src={charging2} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Home Charging</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">learn</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Shop</a>
                        </div>
                    </div>
                </div>

                {/* CHARGING 3 */}
                <div className='flex justify-center items-center space-x-5 lg:space-x-0'>
                    <img className='w-[10rem] xl:w-[14rem]' src={charging3} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Supercharging</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Find</a>
                        </div>
                    </div>
                </div>

                
            </div>
            <hr />

            <ul className='px-7 mt-12 space-y-8 mb-7 sm:px-9 md:px-11 md:space-y-10 lg:space-y-5 font-[500] lg:h-fit  lg:pt-6 lg:pb-6 lg:border-l  lg:border-l-[#d1d7dc] lg:text-sm items-start' >
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Charging Calculator</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Trip Planner</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Host a Supercharger</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Supercharger Voting</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Commercial Charging</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Host Wall Connectors</li>
                
            </ul>
        </div>
    )
}









export default Charging