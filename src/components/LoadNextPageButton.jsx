import React, { useEffect, useState } from 'react'
import { usePostUpdateLevelMutation } from '../app/redux/querys/authquerys';
import jsCookie from "js-cookie";


function LoadNextPageButton({time,next_level,setCard=()=>{}}) {
    const [nextButton,setNextButton] = useState(false);

    const [postUpdateLevel, { isSuccess, isError, isLoading, error }] =
    usePostUpdateLevelMutation();

    const onUpdateLevel = async () => {
      const { data: response, error } = await postUpdateLevel()
      if (response && response.data && response.data.level){
        jsCookie.set("MFM_LEVEL", response.data.level);
        jsCookie.set("MFM_LASTCOMP", response.data.last_completed);
        window.alert( "Felicidades, ahora te toca el nivel " + JSON.stringify(response.data.level+1) + " despues de que se cumplan 24 horas" );
        window.location="/level/"+next_level;
        setCard(0)
      }
      if(error && error.data && error.data.error){
        window.alert(error.data.error)
      }
    }; 

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setNextButton(true);
        }, time);
        return () => clearTimeout(timeoutId);
      }, []);


  return (
    <div>{nextButton && <div onClick={()=>onUpdateLevel()} className='cursor-pointer fixed top-0 right-0 z-100 border border-red border-solid border-2 text-white px-2 rounded bg-red-500 text-white shadow-lg'>Pasar al siguiente nivel</div>}</div>
  )
}

export default LoadNextPageButton