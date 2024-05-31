import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import dinosaurio1 from "../assets/images/levels/all3.png"
import dinosaurio2 from "../assets/images/levels/frame2.png"
import dinosaurio3 from "../assets/images/levels/frame3.png"
import { useGetLevelMutation } from '../app/redux/querys/authquerys'

function Dinosaurios() {

    
    const {data, isFetching} = useGetLevelMutation();
 

    const { dinosaurios_x } = useParams()

    const dinosauriosData = [
        
        {
           level_img: dinosaurio1,
        },
        {
            level_img: dinosaurio2,
        },
        {
            level_img: dinosaurio3,
        },]
        const info = dinosauriosData[ dinosaurios_x ]

        const [state, setState] = useState(true);
        const [card, setCard] = useState(0);
        return (
            <div className='w-full h-full'>
                <div className="flex justify-start"><img src="../src/assets/images/levels/flechai2.png" className="mt-16 mr-8 h-12 w-20"></img></div>
                {(card == 0 && info) &&
                    
                        <div className="w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                            <img src={info.level_img ?? ""} className="w-80 h-80"></img>
                            <button className='bg-white mt-14 opacity-65 text-[25px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(1)} >Iniciar meditación</button></div>}
    
                {card == 1 && <div className='w-full items-center fixed top-0 left-0 w-full h-full flex-center flex-column justify-center z-[100] bg-black'></div>}
                    <div className="relative;"></div>
    
            
                {
                    !info && <div>No existe datos del nivel</div>
                }
    
    
            </div >
        )
    }
    
    export default Dinosaurios      