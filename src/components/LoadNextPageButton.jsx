import React, { useEffect, useState } from 'react'



function LoadNextPageButton({time}) {
    const [nextButton,setNextButton] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setNextButton(true);
        }, time);
        return () => clearTimeout(timeoutId);
      }, []); 


  return (
    <div>{nextButton && <div className='z-100 border border-red border-solid border-2 text-white'>Hola gentita {time}</div>}</div>
  )
}

export default LoadNextPageButton