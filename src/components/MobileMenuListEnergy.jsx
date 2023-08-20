import React from 'react'
import Energy from './Energy'


const MobileMenuListEnergy=(props)=>{
    return (
        <div className='mobileMenuList overflow-y-auto bg-white h-[100vh] w-full absolute top-0  left-0 lg:hidden  '>
                    <div className='flex items-center justify-between ml-7 mr-7 mt-5 mb-3 md:mt-6 md:mb-4 md:mr-11 md:ml-11'>
                        <a onClick={props.removeEnergyList}><span  class="material-symbols-outlined">arrow_back_ios</span></a>
                        <p className='text-base md:text-xl font-[600]'>Energy</p>
                        <button onClick={props.energyClose} className='font-[700] text-xl'>X</button>
                    </div>
                    <hr />

                    {/* CAR LIST */}
                    <Energy/>
                </div>
    )
}

export default MobileMenuListEnergy