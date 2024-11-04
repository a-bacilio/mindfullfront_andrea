import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import bg_image from "../../assets/images/bg.png"
import logo from "../../assets/icons/logo.png"
import level from "../../assets/icons/level.png"
import settings from "../../assets/icons/settings.png"
import headshot from "../../assets/images/headshot.png"
import jsCookie from "js-cookie";




function Layout({ children }) {

    const [modal, setmodal] = useState(false);
    const [levelHome, setlevelHome]=useState("");
    const [card, setCard] = useState(0);
    useEffect(() => {
      setlevelHome(jsCookie.get("MFM_LEVEL"))
    }, [])
    

    
    
    

const obtenernivel=()=>{
    
}

    return (
       
       <div className='h-full w-full bg-black-100 bg-black min-h-svh relative'>
            
            <div className='w-full h-full fixed top-0 left-0 '>
                <img className='w-full fixed top-0 left-0 h-full' src={bg_image} />
            </div>
            <div className='pt-8 absolute w-full h-full top-0 left-0 flex flex-col items-center'>
            
            { (!modal) && children }
            { (modal ) && <div className=' w-full h-full absolute flex flex-col items-center justify-center  left-0'>
                <div className='w-full max-w-3xl  flex flex-col items-center justify-center  rounded-xl text-center'>
                    <div className='text-white'>
                        
                        <h1 className='text-[40px] text-bold font-raleway mb-8'>
                            Más información
                        </h1>
                        {card !== 2 && (<div><button className='text-[30px] font-raleway mt-8 bg-rose-400 px-2 py-1 rounded-lg w-60 mb-2' onClick={() => {if(card==1){setCard(0)}else{setCard(1)}}}>La técnica</button>
                            
                        </div>)}
                        {card == 1 &&<div className="w-full max-w-80 mt-12 text-center h-80 p-10 overflow-y-auto bg-rose-400 rounded-lg text-white text-lg">
                            <h1 className="font-raleway mt-0">
                                <div>El mindfulness es una tradición que surge del campo budista, posteriormente adaptado en occidente por Jon Kabat-Zinn en 1979 para el tratamiento de dolor crónico y otros desordenes relacionados al estrés.</div>
                                <div className='mt-6'>Existen dos componentes de mindfulness: (a) la regulación de la atención para mantenerla en la experiencia inmediata y (b) el acercamiento a las experiencias con curiosidad, apertura y aceptación sin evaluacion.</div> 
                                <div className='mt-6'>El mindfulness tiene evidencia de capacidad superior de producir mejoras en la salud que educación en salud, terapia de relajación y psicoterapia de apoyo. Mientras que es comparable a los efectos de terapia cognitivo conductual.</div>
                                <div className='mt-6'>Los mecanismos por los cuales el mindfulness impacta a la salud mental aún se encuentran en estudio. Sin embargo, se han observado cambios en el procesamiento cerebral.</div>
                                <div className='mt-6'>Estudios de resonancia magnética funcional demuestran cambios en la corteza prefrontal, la corteza cingulada, la ínsula y el hipocampo. Además, se mostraron cambios en la amígdala asociada con la regulación de emociones.</div></h1></div>}
                            {card !== 1 && (<div><button className='text-[30px] font-raleway mt-4 bg-rose-400 px-2 py-1 rounded-lg w-60' onClick={() => {if(card==2){setCard(0)}else{setCard(2)}}}>Sobre nosotros</button>
                            
                            </div>)}
                            {card == 2 &&<div className="w-full max-w-80 mt-12 h-96 p-10 overflow-y-auto bg-rose-400 rounded-lg text-white text-lg text-left">
                                <img className='h-36 w-36' src={headshot} />
                                <h1 className="font-raleway mb-8">
                                    <div className='mt-8 text-[30px]'>Andrea Montero </div>
                                    <div className='mt-8 text-[22px]'>Médico investigadora egresada de la maestría de informática biomédica.</div>
                                    <div className='mt-6'>Experiencia en atención clínica, investigación e interpretación médica.</div>
                                    <div className='mt-6'>Mis intereses incluyen la cardiología pediátrica y la salud mental.</div>
                                    <div className='mt-6'>Iniciando el camino del desarrollo web.</div>
                                    <div className='mt-12 text-[30px]'>Anthony Bacilio</div>
                                    <div className='mt-8 text-[22px]'>Desarrollador Web con 3 años de experiencia.</div>
                                    <div className='mt-6'>Maestro en Informática Biomédica.</div>
                                    <div className='mt-6'>Ingeniero Mecatrónico.</div>
                                    <div className='mt-6'>Experiencia en desarrollo de sistemas de salud, ensayos clinicos, portales, formularios, sistemas de resumen y análisis, ETL's.</div>
                                    </h1></div>}
                           

                    </div>
                </div>
            </div>  }

            </div>
            
            <div className='border-red border-2 z-1 absolute bg-white h-24 w-full flex flex-row justify-center items-center'>
                <div className='max-w-4xl w-full  flex flex-row items-center justify-between px-12'>
                    <div >
                        <Link to={levelHome!="" ? "level/"&levelHome: "/" } className='cursor-pointer' onClick={() => {setmodal(false)  }}>
                            <img className='h-12 w-12' src={logo} />
                        </Link>

                    </div>
                    <div>
                        <Link  to="/levels" className='cursor-pointer' onClick={() => setmodal(false)}>
                            <img className='h-10 w-10' src={level} />
                        </Link>
                    </div>
                    <div>
                        <div className='cursor-pointer' onClick={() => setmodal(!modal)}>
                            <img className='h-12 w-12' src={settings} />
                        </div>
                    </div>
                </div>
            </div>
            
           
            
        </div>
    )
}

export default Layout