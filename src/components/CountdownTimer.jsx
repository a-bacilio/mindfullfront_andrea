import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = ({initialTime=9999, currentLevel, setCard=()=>{}}) => {
  // Initial time in seconds (1 hour)
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const navigate = useNavigate();
  
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