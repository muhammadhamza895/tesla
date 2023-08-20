import React, { useState } from 'react'
import logo from '../images/tesla-logo.svg'
import '../index.css'
import MobileMenuList from './MobileMenuList'
import Vehicle from './Vehicle'
import Energy from './Energy'
import Charging from './Charging'
import Discover from './Discover'
import Shop from './Shop'

const Header = () => {

    // MOBILE MENU LIST
    const [mobileMenu, setMobileMenu] = useState(false)

    const openMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    // COMPUTER LIST HEADER STATES    
    const [computerVehicle, setComputerVehicle] = useState(false)
    const [computerEnergy,setComputerEnergy]=useState(false)
    const [computerCharging,setComputerCharging]=useState(false)
    const [computerDisover, setComputerDiscover]=useState(false)
    const [computerShop,setComputerShop]=useState(false)

    // COMPUTER VEHILE LIST
    const computerVehicleFunction = () => {
        setComputerVehicle(true)
        setComputerEnergy(false)
        setComputerCharging(false)
        setComputerDiscover(false)
        setComputerShop(false)
    }

    const computerVehicleFunctionExit=()=>{
        setComputerVehicle(false)
    }

    // ENERGY LIST FUNCTION
    const computerEnergyFunction=()=>{
        setComputerEnergy(true)
        setComputerVehicle(false)
        setComputerCharging(false)
        setComputerShop(false)
        setComputerDiscover(false)
    }

    const computerEnergyFunctionExit =()=>{
        setComputerEnergy(false)
    }

    // CHARGING LIST FUNCTION
    const computerChargingFunction=()=>{
        setComputerCharging(true)
        setComputerEnergy(false)
        setComputerVehicle(false)
        setComputerShop(false)
        setComputerDiscover(false)
    }

    const computerChargingFunctionExit=()=>{
        setComputerCharging(false)
    }

    // DISOCOVER LIST FUNCTION
    const computerDiscoverFunction=()=>{
        setComputerDiscover(true)
        setComputerCharging(false)
        setComputerEnergy(false)
        setComputerShop(false)
        setComputerVehicle(false)
    }

    const computerDiscoverFunctionExit=()=>{
        setComputerDiscover(false)
    }

    // SHOP LIST FUNCTION
    const computerShopFunction=()=>{
        setComputerShop(true)
        setComputerDiscover(false)
        setComputerCharging(false)
        setComputerEnergy(false)
        setComputerVehicle(false)
    }

    const computerShopFunctionExit=()=>{
        setComputerShop(false)
    }


    return (

        <div className='relative'>
            <div id='navbar' className='navbar z-10 flex justify-between py-5 px-5 sm:px-10 items-center fixed w-screen lg:z-30'>
            {/* LOGO */}
            <img className='w-32 ' src={logo} alt="" />

            {/* MOBILE MENU BUTTON */}
            <button onClick={openMenu} className=' p-1 lg:hidden rounded-sm backdrop-blur-sm'>Menu</button>
            {mobileMenu && (
                <MobileMenuList
                    close={openMenu}
                />
            )}


            <div className='hidden lg:inline-block space-x-7 items-center'>
                <a onMouseEnter={computerVehicleFunction} className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Vechicles</a>
                <a onMouseEnter={computerEnergyFunction} className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Energy</a>
                <a onMouseEnter={computerChargingFunction} className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Charging</a>
                <a onMouseEnter={computerDiscoverFunction} className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Discover</a>
                <a onMouseEnter={computerShopFunction} className='cursor-pointer px-2 py-1 hover:bg-[#dde2e6] rounded-sm'>Shop</a>
            </div>

            <div className='hidden lg:inline-block space-x-5 items-center'>
                <span class="material-symbols-outlined cursor-pointer">help</span>
                <span class="material-symbols-outlined cursor-pointer">captive_portal</span>
                <span class="material-symbols-outlined cursor-pointer">account_circle</span>
            </div>
            
            

        </div>

        {/* COMPUTER VEHICLE LIST  */}
        {computerVehicle && (
            <Vehicle
                closeComputerVehicle={computerVehicleFunctionExit}
            />
        )}

        {/* COMPUTER ENERGY LIST */}
        {computerEnergy && (
            <Energy
                closeComuterEnergy={computerEnergyFunctionExit}
            />
        )}

        {/* COMPUTER CHARGING LIST */}
        {computerCharging && (
            <Charging
                closeComputerCharging={computerChargingFunctionExit}
            />
        )}

        {/* COMPUTER DISCOVER LIST */}
        {computerDisover && (
            <Discover
                closeComputerDiscover={computerDiscoverFunctionExit}
            />
        )}

        {/* COMPUTER SHOP LIST */}
        {computerShop && (
            <Shop
                closeComputerShop={computerShopFunctionExit}
            />
        )}

        </div>

    )


}

export default Header;
