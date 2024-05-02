import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

function PSS10() {
    const [state, setState] = useState(true);
    const [card, setCard] = useState(0);


    return (
        <div>
            {card == 0 &&
                <AnimatePresence>
                <motion.div
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                >
                          <div className="w-full max-w-80 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                              <h1 className='mb-8'>1. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</h1>
      
                          </div>
                          <div>
                              <label className='flex flex-row w-8 ml-6 space-x-12'>
                              <input type="radio" name="P1" value="0" />
                              
                              <input type="radio" name="P1" value="0" />
                              
                              <input type="radio" name="P1" value="0" />
                              
                              <input type="radio" name="P1" value="0" />
                             
                              <input type="radio" name="P1" value="0" />
                          
                              </label>
                              <div className='flex flex-row'>
                                <div className='text-center text-sm mt-5'>Nunca</div>
                              <div className='text-center text-sm mt-5'>Casi nunca</div>
                              <div className='text-center text-sm mt-5'>De vez en cuando</div>
                              <div className='text-center text-sm mt-5'>A menudo</div>
                              <div className='text-center text-sm mt-5'>Muy a menudo</div>
                              </div>
                          </div>
                          <div>
                              <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(1)} >Siguiente</button>
                          </div>
                          <div>
                          <input type="range" min={0} max="100" value="25" className="range" step="25" />
<div className="w-full flex justify-between text-xs px-2">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div></div>
                     

                      
                </motion.div>
              </AnimatePresence>

            }

            {card == 1 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(2)} >Siguiente</button>
                    </div>
                    
                </div>
                

            }

            {card == 2 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>3. En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(3)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 3 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>6. En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(4)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 4 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>7. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(5)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 5 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>8. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(6)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 6 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>9. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(7)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 7 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>10. En el ultimo mes, ¿con que frecuencia se ha sentido que tenia todo bajo control?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(8)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 8 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>11. En el último mes, ¿con qué frecuencia ha estado enfadado porque  las cosas que le han ocurrido estaban fuera de su control?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(9)} >Siguiente</button>
                    </div>
                </div>

            }

            {card == 9 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>14. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(10)} >Siguiente</button>
                    </div>
                </div>

            }
        </div>
    )
}

export default PSS10