import React from 'react'



const Discover = (props) => {
    return (
        <>

            <div onMouseLeave={props.closeComputerDiscover} className='lg:flex lg:h-fit lg:pt-16 lg:pb-12 lg:fixed  lg:bg-white lg:w-[100%] lg:justify-between lg:pl-10 lg:pr-24 lg:items-center lg:z-20 xl:pl-24 xl:pr-36'>

                {/* MOBILE LIST */}
                <ul className='px-7 mt-12 space-y-8 mb-7 sm:px-9 md:px-11 md:space-y-10 lg:space-y-5 font-[500] lg:h-fit  lg:pt-6 lg:pb-6 lg:border-l  lg:border-l-[#d1d7dc] lg:text-sm lg:hidden'>

                    <li>Demo Drive</li>
                    <li>Video Guides</li>
                    <li>Customer Events</li>
                    <li>Stories</li>
                    <li>Find Us</li>
                    <li>Trip Planner</li>
                    <li>Find a Collision Center</li>
                    <li>Find a Certified Installer</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Investor Relations</li>

                </ul>

                {/* COMPUTER LIST */}
                <ul className='lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 px-7 mt-12 lg:mx-auto  font-[500] lg:h-fit  lg:pt-6 lg:pb-6 lg:text-sm hidden '>

                    <div className='space-y-8'>
                        <li className='text-[#c0c5c9] px-2 lg:text-lg'>Resouces</li>
                        <div className='space-y-4'>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Demo Drive</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Video Guides</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Customer Events</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Stories</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Find Us</li>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <li className='text-[#c0c5c9] lg:text-lg px-2 '>Location Services</li>
                        <div className='space-y-4'>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Trip Planner</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Find a Collision Center</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Find a Certified Installer</li>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <li className='text-[#c0c5c9] px-2 lg:text-lg'>Company</li>
                        <div className='space-y-4'>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>About</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Careers</li>
                            <li className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Investor Relations</li>
                        </div>
                    </div>


                </ul>

            </div>


        </>
    )
}


export default Discover