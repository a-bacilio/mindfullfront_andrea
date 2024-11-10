import React, { useEffect, useState } from 'react'
import { usePostUpdateLevelMutation } from '../app/redux/querys/authquerys';
import jsCookie from "js-cookie";


function LoadNextPageButton({time,level_x,setCard=()=>{},refetchFn=()=>{},level=0} ) {
    const [nextButton,setNextButton] = useState(false);

    const [postUpdateLevel, { isSuccess, isError, isLoading, error }] =
    usePostUpdateLevelMutation();

    const onUpdateLevel = async () => {
      window.alert(JSON.stringify(level))
      window.alert(level_x)
      if(Number(level)+1==Number(level_x)){
        const { data: response, error } = await postUpdateLevel();
        await refetchFn();
        if (response && response.data && response.data.level){
          await refetchFn();
          jsCookie.set("MFM_LEVEL", response.data.level);
          jsCookie.set("MFM_LASTCOMP", response.data.last_completed);
          if(level_x<30){
            window.alert( "Felicidades, ahora podras acceder al nivel despues de que se cumplan 24 horas" );  
          }else{
            window.alert( "Felicidades, ha terminado las sesiones. Puede repasar todas las sesiones anteriores caundo desee" );  
          }
          window.location="/levels";
          setCard(0)
        }
        if(error && error.data && error.data.error){
          window.alert(error.data.error)
        }
      }else{
        window.alert( "Felicidades, buena sesion" );
        window.location="/levels";
          setCard(0)
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