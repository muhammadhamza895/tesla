import React from 'react'
import img1 from '../images/img1.avif'


const data = () => {
    return (
        <div className='flex flex-col sm:grow pt-10 pb-16 justify-between items-center text-center fixed top-14 w-screen h-[90vh]'>
            <div className='space-y-2 md:space-y-4'>
                <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-[700]'>Model 3</h1>
                <div>
                    <p className='font-[500] text-[0.85rem] lg:text-[1rem]'>Starting at $32,740</p>
                    <p className='font-[500] text-[0.85rem] lg:text-[1rem]'>After Federal Tax Credit</p>
                </div>
            </div>
            <div className='flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0 lg:space-x-8'>

                <button className='px-12 py-2  text-white font-[600]  bg-[#25262c]  rounded-[5px] opacity-75'>Custom Order</button>
                <button className='px-12 py-2  text-black font-[600]  bg-[#d5d4d5]  rounded-[5px] opacity-75 mt-0'>Explore Inventory</button>

            </div>

        </div>
    )

}

const Model3 = () => {
    return (
        <div className='h-[100vh]'>
            <img className='object-cover w-[100%] h-[100%]' src={img1} alt="" />
        </div>
    )
}

export default Model3;
export { data }