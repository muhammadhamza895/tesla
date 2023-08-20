import React from 'react'
import video from '../video/vid.mp4'


const Video =()=>{
    return (
        <video src={video}
                autoplay="{true}" loop muted
                className="absolute -z-[10]  w-[100%] object-cover h-[100vh] ">
        </video>
    )
}

export default Video;