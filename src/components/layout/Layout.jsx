import React, {useState} from 'react'
import { Link } from "react-router-dom";
import bg_image from "../../assets/images/bg.png"
import logo from "../../assets/icons/logo.png"
import level from "../../assets/icons/level.png"
import settings from "../../assets/icons/settings.png"




function Layout({ children }) {

    const [modal, setmodal] = useState(false);
    const [about, setAbout] = useState(false);

const obtenernivel=()=>{
    
}

    return (
        <div className='h-full w-full bg-black-100 bg-black min-h-svh relative'>
            
            <div className='w-full h-full fixed top-0 left-0 '>
                <img className='w-full fixed top-0 left-0 h-full' src={bg_image} />
            </div>
            <div className='pt-14 absolute w-full h-full top-0 left-0 flex flex-col items-center'>
            { (!modal & !about) && children }
            { (modal & !about ) && <div className=' w-full h-full absolute flex flex-col items-center justify-center top-14 left-0'>
                <div className='w-full max-w-3xl py-2 flex flex-col items-center justify-center  rounded-xl text-center'>
                    <div className='text-white'>
                        <h1 className='text-3xl text-bold'>
                            Configuración
                        </h1>
                        <div className='bg-red-300 px-2 py-1 rounded-lg mt-4'>
                            Notificaciones
                        </div>
                        <div className='bg-red-300 px-2 py-1 rounded-lg mt-4' onClick={()=>setAbout(true)}>
                            Sobre nosotros
                        </div>

                    </div>
                </div>
            </div>  }
            { (modal & about) && <div>
                Acerca de
            </div> }
            </div>
            
            <div className='border-red border-2 z-1 absolute bg-white h-24 w-full flex flex-row justify-center items-center'>
                <div className='max-w-4xl w-full  flex flex-row items-center justify-between px-12'>
                    <div >
                        <Link to="/" className='cursor-pointer' onClick={() => {setmodal(false)  }}>
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
                            <img className='h-10 w-10' src={settings} />
                        </div>
                    </div>
                </div>
            </div>
            
           
            
        </div>
    )
}

export default Layout