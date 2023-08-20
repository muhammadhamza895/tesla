import React from 'react'
import img4 from '../images/img4.avif'


const solarData=()=>{
    return(
        <div className='flex flex-col sm:grow pt-10 pb-16 justify-between items-center text-center fixed top-14 w-screen h-[90vh]'>
            <div className='space-y-2 md:space-y-6'>
                <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-[700]'>Solar Panels</h1>
                <a className='underline' href="#">Schedule a Virtual Consultation</a>
            </div>
            <div className='flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0 lg:space-x-8'>

                <button className='px-12 py-2  text-white font-[600]  bg-[#25262c]  rounded-[5px] opacity-75'>Order Now</button>
                <button className='px-12 py-2  text-black font-[600]  bg-[#d5d4d5]  rounded-[5px] opacity-75 mt-0'>Learn more</button>

            </div>

        </div>
    )
}

const Solar =()=>{
    return <img className='object-cover w-[100%] h-[100vh]' src={img4} alt="" />
}

export default Solar
export {solarData}