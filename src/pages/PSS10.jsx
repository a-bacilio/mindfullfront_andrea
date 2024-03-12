import React, { useState } from 'react'

function PSS10() {
    const [state, setState] = useState(true);
    const [card, setCard] = useState(0);


    return (
        <div>
            {card == 0 &&
                <div>
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
                </div>

            }

            {card == 1 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(2)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 2 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>3. En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(3)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 3 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>6. En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(4)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 4 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>7. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(5)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 5 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>8. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(6)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 6 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>9. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(7)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 7 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>10. En el ultimo mes, ¿con que frecuencia se ha sentido que tenia todo bajo control?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(8)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 8 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>11. En el último mes, ¿con qué frecuencia ha estado enfadado porque  las cosas que le han ocurrido estaban fuera de su control?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(9)} >Iniciar meditación</button>
                    </div>
                </div>

            }

            {card == 9 &&
                <div>
                    <div class="w-full max-w-96 mt-20 mb-8 h-full p-10 overflow-auto bg-rose-400 rounded-lg text-white text-justify">
                        <h1 className='mb-8'>14. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</h1>

                    </div>
                    <div>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(10)} >Iniciar meditación</button>
                    </div>
                </div>

            }
        </div>
    )
}

export default PSS10