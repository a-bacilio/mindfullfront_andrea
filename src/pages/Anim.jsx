import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

function Anim() {
    return (
      
        <AnimatePresence>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            exit={{ x: -100, opacity: 0 }}
          >
                    <div className="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>1. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</h1>

                    </div>
                    <div>
                        <label className='flex flex-col w-8'>
                        <input type="radio" name="P1" value="0" />
                        <div className='text-center mt-5'>0</div>
                        </label>

                        
                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(1)} >Iniciar meditación</button>
                    </div>
                
          </motion.div>
        </AnimatePresence>
      
    )
  }
export default Anim