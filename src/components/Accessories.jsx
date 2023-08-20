import React from 'react'
import img5 from '../images/img5.avif'


const accessoriesData=()=>{
    return (
        
            <div className={`fixed top-14 flex flex-col sm:grow pt-10 pb-16 justify-between items-center text-center    w-screen h-[90vh]`}>
                <div className='space-y-2 md:space-y-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-[700]'>Accessories</h1>
                </div>
            
                <div>
                    <button className='px-12 py-2  text-[#4c4e53] font-[600]  bg-white  rounded-[5px]'>Shop Now</button>
                
                </div>

            </div>
        
        
    )
}

const Accessories =()=>{
    return <img className='-z-20 object-cover w-[100%] h-[100vh]' src={img5} alt="" />
}

export default Accessories;
export {accessoriesData}