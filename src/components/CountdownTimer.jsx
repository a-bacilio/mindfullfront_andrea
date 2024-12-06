import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const CountdownTimer = ({ initialTime = 9999, availableLevel, setCard = () => { } }) => {
  // Initial time in seconds (1 hour)

  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    setTimeRemaining(initialTime
    )
  }, [initialTime])
  

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          return 0;
        } else if(availableLevel){
          clearInterval(timerInterval);
          return 0;
        }
        else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      {timeRemaining > 0 && <button className='bg-white mt-14 opacity-35 text-[25px] text-zinc-500 
        px-8 py-2 rounded mb-12 border border-black' >
        <p>Tiempo restante:</p>
        <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
      </button>}
      {timeRemaining <= 0 &&
        <button className='bg-white mt-14 opacity-35 text-[25px] text-zinc-500 
        px-8 py-2 rounded mb-12 border border-black' onClick={() => setCard(2)}
        >Iniciar meditacion</button>
      }

    </div>
  );
};

export default CountdownTimer;