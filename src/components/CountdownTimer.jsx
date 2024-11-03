import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLevelQuery } from '../app/redux/querys/authquerys';



const CountdownTimer = ({initialTime=9999, currentLevel, setCard=()=>{}}) => {
  // Initial time in seconds (1 hour)
  const {data:dataLevel, isFetching:isFetchingLevel, refetch} = useGetLevelQuery ();
  const [timeRemaining, setTimeRemaining] = useState((dataLevel&& dataLevel.data && dataLevel.data.time_passed) ?
  (30-Number(dataLevel&& dataLevel.data && dataLevel.data.time_passed)):99999999);
  const navigate = useNavigate();
  
  useEffect(() => {
    refetch();
    setTimeRemaining((dataLevel&& dataLevel.data && dataLevel.data.time_passed) ?
    (30-Number(dataLevel&& dataLevel.data && dataLevel.data.time_passed)):99999999)
  }, [])
  
  
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log('Navigating to level:', currentLevel);
          navigate(`/level/${currentLevel}`, setCard(1));
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval); 
  }, [navigate, currentLevel]); 

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <p>Tiempo restante:</p>
      <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
};

export default CountdownTimer;