import React, { useEffect, useState } from 'react'
import Experience from './Experince';
import {data} from './Model3'
import {modelYData} from './Modely';
import { modelXData } from './ModelX';
import { solarData } from './Solar';
import { accessoriesData } from './Accessories';


const Home = () => {

    // TOP CONTAINER HEADING
    const [experience, setExperience] = useState(true);

    //   MODEL 3 CONTAINER
    const [model3, setModel3] = useState(false);

    // MODEL Y CONTAINER
    const [modely, setModely] = useState(false);

    // MODEL X CONTAINER
    const [modelx, setModelx] = useState(false);

    // SOLAR CONTAINER
    const [solar, setSolar] = useState(false);

    // ACCESSORIES CONTAINER
    const [acc, setAcc] = useState(false);

    

    // DATA CHANGING CONDITIONS
    const change = () => {
        if (window.scrollY >= 250) {
            setExperience(false);
            setModel3(true);
        } else {
            setExperience(true);
            setModel3(false);
        }

        if (window.scrollY >=900) {
            setModel3(false);
            setModely(true)
        } else {
            setModely(false)
        }

        if (window.scrollY >= 1500) {
            setModely(false)
            setModelx(true)
        } else {
            setModelx(false)
        }

        if (window.scrollY >= 2050) {
            setSolar(true)
            setModelx(false)
        } else {
            setSolar(false)
        }

        if (window.scrollY >= 2700) {
            setSolar(false)
            setAcc(true)
        } else {
            setAcc(false)
        }

         



    };


    useEffect(() => {
        window.addEventListener('scroll', change, true);
        return () => window.removeEventListener('scroll', change);
    }, []);


    return (

        <>
            {/* NAVBAR */}
            {experience && (
                <Experience/>
            )}

            {/* MODEL 3 */}
            {model3 && (
                data()
            )}

            {/* MODEL Y */}
            {modely && (
                modelYData()
            )}

            {/* MODEL X */}
            {modelx && (
                modelXData()
            )}

            {/* SOLAR */}
            {solar && (
                solarData()
            )}

            {/* ACCESSORIES */}
            {acc && (
                accessoriesData()
            )}


        </>


    )
}
export default Home;