import React, { useState } from 'react'
import MobileMenuListVehicle from './MobileMenuListVechicle'
import MobileMenuListEnergy from './MobileMenuListEnergy'
import MobileMenuListCharging from './MobileMenuListCharging'
import MobileMenuListDiscover from './MobileMenuListDiscover'


const MobileMenuList = (props) => {



    //MOBILE VEHICLE LIST FUNCTION
    const [vehicleList, setVehicleList] = useState(false)


    const vehicleListFunction = () => {
        setVehicleList(!vehicleList)
    }

    // MOBILE ENERGY LIST FUNCTION
    const [energy,setEnergy]=useState(false)

    const energyListFunction=()=>{
        setEnergy(!energy)
    }

    // MOBILE CHARGING LIST FUNCTION
    const [charging,setCharging]=useState(false)

    const chargingListFunction=()=>{
        setCharging(!charging)
    }

    // MOBILE DISCOVER FUNCTION
    const [discover,setDiscover]=useState(false)

    const disoverListFunction =()=>{
        setDiscover(!discover)
    }


    return (
        <>
            <div className='mobileMenuList overflow-y-auto bg-white h-[100vh] w-full absolute top-0  left-0 lg:hidden  '>
                <div className='flex justify-end mr-7 mt-5 mb-3 md:mt-6 md:mb-4 md:mr-11'>
                    <button onClick={props.close} className='font-[700] text-xl'>X</button>
                </div>
                <hr />

                <ul className='px-5 mt-8 space-y-8 mb-7 md:px-9 md:space-y-10'>
                    <li onClick={() => { vehicleListFunction() }} className='flex justify-between'>Vehicles<span class="material-symbols-outlined">chevron_right</span></li>
                    <li onClick={() => { energyListFunction() }}  className='flex justify-between'>Energy<span class="material-symbols-outlined">chevron_right</span></li>
                    <li onClick={() => { chargingListFunction() }} className='flex justify-between'>Charging<span class="material-symbols-outlined">chevron_right</span></li>
                    <li onClick={() => { disoverListFunction() }} className='flex justify-between'>Discover<span class="material-symbols-outlined">chevron_right</span></li>
                    <li>Shop</li>
                    <li>Support</li>
                    <li className='flex justify-between'>
                        <span className='flex items-center space-x-2'>
                            <span class="material-symbols-outlined">language</span>
                            <p>
                                <p>United States</p>
                                <p className='text-gray-400'>English</p>
                            </p>
                        </span>
                        <span>
                            <span class="material-symbols-outlined">chevron_right</span>
                        </span>
                    </li>
                    <li className='flex space-x-2'>
                        <span class="material-symbols-outlined">account_circle</span>
                        <span>Account</span>
                    </li>
                </ul>
            </div>

            {/* VEHICLE LIST */}
            {vehicleList && (
                <MobileMenuListVehicle
                    vclose={props.close}
                    removeVehicleList={vehicleListFunction}
                />
            )}

            {/* ENERGY LIST */}
            {energy && (
                <MobileMenuListEnergy
                    energyClose={props.close}
                    removeEnergyList={energyListFunction}
                />
            )}

            {/* CHARGING LIST */}
            {charging && (
                <MobileMenuListCharging
                    chargingClose={props.close}
                    removeChargingList={chargingListFunction}
                />
            )}

            {/* DISCOVER LIST */}
            {discover && (
                <MobileMenuListDiscover
                    discoverClose={props.close}
                    removeDiscoverList={disoverListFunction}
                />
            )}

        </>
    )
}

export default MobileMenuList

