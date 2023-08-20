import React from 'react'
import Discover from './Discover'




const MobileMenuListDiscover=(props)=>{
    return (
        <div className='mobileMenuList overflow-y-auto bg-white h-[100vh] w-full absolute top-0  left-0 lg:hidden  '>
                    <div className='flex items-center justify-between ml-7 mr-7 mt-5 mb-3 md:mt-6 md:mb-4 md:mr-11 md:ml-11'>
                        <a onClick={props.removeDiscoverList}><span  class="material-symbols-outlined">arrow_back_ios</span></a>
                        <p className='text-base md:text-xl font-[600]'>Discover</p>
                        <button onClick={props.discoverClose} className='font-[700] text-xl'>X</button>
                    </div>
                    <hr />

                    {/* CAR LIST */}
                    <Discover/>
                </div>
    )
}

export default MobileMenuListDiscover