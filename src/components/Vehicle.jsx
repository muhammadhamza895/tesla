import React from 'react'
import vehicle1 from '../images/vehicle1.avif'
import vehicle2 from '../images/vehicle2.avif'
import vehicle3 from '../images/vehicle3.avif'
import vehicle4 from '../images/vehicle4.avif'


const Vehicle = (props) => {
    return (
        <div onMouseLeave={props.closeComputerVehicle} className='lg:flex lg:h-[90vh] lg:fixed  lg:bg-white lg:w-[100%] lg:justify-between lg:pl-10 lg:pr-24 lg:items-center lg:z-20 xl:pl-24 xl:pr-36'>
            <div className='grid grid-cols-1 gap-8 mt-8 mb-6 sm:grid-cols-2 lg:py-16 lg:gap-14 2xl:gap-28'>

                {/* CAR 1 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={vehicle1} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Model S</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm ' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm ' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* CAR 2 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem]  xl:w-[14rem]' src={vehicle2} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Model 3</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* CAR 3 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={vehicle3} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Model X</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* CAR 4 */}
                <div className='flex justify-center items-center space-x-5'>
                    <img className='w-[10rem] xl:w-[14rem]' src={vehicle4} alt="" />
                    <div className='py-2 space-y-1'>
                        <p className='text-xl font-[600]'>Model Y</p>
                        <div className='space-x-3'>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Order</a>
                            <a className='underline underline-offset-4 sm:text-sm' href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <ul className='px-7 mt-12 space-y-8 mb-7 sm:px-9 md:px-11 md:space-y-10 lg:space-y-5 font-[500] lg:h-fit  lg:pt-6 lg:pb-6 lg:border-l  lg:border-l-[#d1d7dc] lg:text-sm'>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>List Inventory</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Used Cars</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Demo Drive</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Trade-In</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Compare</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Fleet</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Cybertruck</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Semi</li>
                <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Roadster</li>
            </ul>
        </div>
    )
}


export default Vehicle