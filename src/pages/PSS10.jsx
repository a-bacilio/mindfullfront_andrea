import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

function PSS10() {
    const [state, setState] = useState(true);
    const [card, setCard] = useState(0);


    return (
        <div>
            {card == 0 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">1. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(1)}>Siguiente</button>
                    </div></>
}
{card == 1 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(2)}>Siguiente</button>
                    </div></>
}
{card == 2 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">3. En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(3)}>Siguiente</button>
                    </div></>
}
{card == 3 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">4. En el último mes, ¿con qué frecuencia ha estado inseguro sobre su capacidad para manejar sus problemas personales?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(4)}>Siguiente</button>
                    </div></>
}
{card == 4 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">5. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van mal?

</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(5)}>Siguiente</button>
                    </div></>
}
{card == 5 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">6. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(6)}>Siguiente</button>
                    </div></>
}
{card == 6 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">7. En el último mes, ¿con qué frecuencia no ha podido controlar las dificultades de su vida?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(7)}>Siguiente</button>
                    </div></>
}
{card == 7 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">8. En el ultimo mes, ¿con que frecuencia ha sentido que no tenia todo bajo control?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(8)}>Siguiente</button>
                    </div></>
}
{card == 8 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">9. En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han ocurrido estaban fuera de su control?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={() => setCard(9)}>Siguiente</button>
                    </div></>
}
{card == 9 &&
                <><AnimatePresence>
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                    >
                        <div className="w-full max-w-80 mt-24 text-center h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-lg text-justify">
                            <h1 className="font-raleway mb-8">10. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</h1>
                            <div className="w-full mt-4 flex flex-col items-center">
                                <div className="w-full flex justify-between align-center mt-4">
                                    <p className="text-center mt-3 h-12 w-20">Nunca</p>

                                    <p className="text-center h-12 w-20">Muy a menudo</p>
                                </div><label htmlFor="customRange3" className="sr-only">Custom Range</label>
                                <input
                                    type="range"
                                    className="h-[10px] mt-12 w-48 cursor-pointer appearance-none border-transparent bg-white rounded"
                                    min="0"
                                    max="4"
                                    step="1"
                                    id="customRange3" />
                                <div className="w-full flex justify-between mt-4">
                                    <p className="text-center h-12 w-12">0</p>
                                    <p className="text-center h-12 w-12">1</p>
                                    <p className="text-center h-12 w-12">2</p>
                                    <p className="text-center h-12 w-12">3</p>
                                    <p className="text-center h-12 w-12">4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence><div className="felx flex-row text-center align-center items-center justify-center">
                        <button className='bg-white mt-14 opacity-65 text-[20px] text-zinc-500 px-8 py-2 rounded mb-12 border border-zinc-500' onClick={event =>  window.location.href='../level/16'}>Enviar</button>
                    </div></>
}
            
        </div>
    )
}

export default PSS10