import React from 'react'
import shop1 from '../images/shop1.avif'
import shop2 from '../images/shop2.avif'
import shop3 from '../images/shop3.avif'
import shop4 from '../images/shop4.avif'


const Shop=(props)=>{
    return (
        <div onMouseLeave={props.closeComputerShop} className='hidden lg:flex lg:h-[fit] pt-28 pb-12 lg:fixed  lg:bg-white lg:w-[100%] justify-center lg:pl-10 lg:pr-24 lg:items-center lg:z-20 xl:pl-24 xl:pr-36'>
            <div className='text-center space-y-6'>
                <img className='w-[10rem] xl:w-[14rem]' src={shop1} alt="" />
                <p className='font-[500]'>Charging</p>
            </div>
            <div className='text-center space-y-6'>
                <img className='w-[10rem] xl:w-[14rem]' src={shop2} alt="" />
                <p className='font-[500]'>Vehicle Accessories</p>
            </div>
            <div className='text-center space-y-6'>
                <img className='w-[10rem] xl:w-[14rem]' src={shop3} alt="" />
                <p className='font-[500]'>Appearel</p>
            </div>
            <div className='text-center space-y-6'>
                <img className='w-[10rem] xl:w-[14rem]' src={shop4} alt="" />
                <p className='font-[500]'>Lifestyle</p>
            </div>
            
        </div>
    )
}

export default Shop