import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import dinosaurio1 from "../assets/images/levels/all3.png"
import dinosaurio2 from "../assets/images/levels/frame2.png"
import dinosaurio3 from "../assets/images/levels/frame3.png"
import dinosaurio4 from "../assets/images/levels/frame4.png"
import dinosaurio5 from "../assets/images/levels/frame5.png"
import dinosaurio6 from "../assets/images/levels/frame6.2.png"
import { useGetLevelQuery } from '../app/redux/querys/authquerys'

function Dinosaurios() {

    
    const {data, isFetching} = useGetLevelQuery();
 

    const { dinosaurios_x } = useParams()

    const dinosauriosData = [
        
        {
           level_img: dinosaurio1,
        },
        {
            level_img: dinosaurio1,
        },
        {
            level_img: dinosaurio2,
        },
        {
            level_img: dinosaurio3,
         },
         
         {
            level_img: dinosaurio4,
         },
         {
            level_img: dinosaurio5,
         },
         
         {
            level_img: dinosaurio6,
         },

         ]
        const info = dinosauriosData[ dinosaurios_x ]

        const [state, setState] = useState(true);
        const [card, setCard] = useState(0);
        return (
            <div className='w-full h-full'>
                <div className="flex justify-start"><button onClick={event =>  window.location.href='../level/1'}><img src="../src/assets/images/levels/flechai2.png" className="mt-16 mr-8 h-12 w-20"></img></button></div>
                <div className='border-solid border-yellow-100 border-100 w-full flex flex-col justify-center items-center'>
                </div>
                {(card == 0 && info) &&
                    
                        <div className="mb-4 w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                            <img src={info.level_img ?? ""} className="w-full h-full"></img></div>
}
    
                {
                    !info && <div>No existe datos del nivel</div>
                }
    
    
            </div >
        )
    }
    
    export default Dinosaurios      