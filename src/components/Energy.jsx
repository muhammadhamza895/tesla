import React from 'react'
import energy1 from '../images/energy1.avif'
import energy2 from '../images/energy2.avif'
import energy3 from '../images/energy3.avif'
import energy4 from '../images/energy4.avif'



const Energy = (props) => {
    return (
        <div onMouseLeave={props.closeComuterEnergy} className='lg:flex lg:h-[90vh] lg:fixed  lg:bg-white lg:w-[100%] lg:justify-between lg:pl-10 lg:pr-14 lg:items-center lg:z-20 xl:pl-12 xl:pr-20 2xl:pl-24 2xl:pr-36'>
            <div className='grid grid-cols-1 gap-8 mt-8 mb-6 sm:grid-cols-2 lg:py-16 lg:gap-14 2xl:gap-28'>

                {/* Energy 1 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={energy1} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Solar Panels</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Energy 2  */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={energy2} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Solar Roof</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Energy 3 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={energy3} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Powerwall</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm ' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm ' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* ENERGY 4 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={energy4} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Megsapack</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <ul className='px-7 mt-12 space-y-8 mb-7 sm:px-9 md:px-11 md:space-y-10 lg:space-y-5 font-[500] lg:h-fit  lg:pt-6 lg:pb-6 lg:border-l  lg:border-l-[#d1d7dc] lg:text-sm'>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Utilities</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Commercial</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Schedule a Consultaion</li>
                
            </ul>
        </div>
    )
}


export default Energy