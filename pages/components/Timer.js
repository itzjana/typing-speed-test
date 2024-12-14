import { useState, useEffect } from 'react';

const Timer = ({ duration, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd();
      return;  // No need to continue if time is up
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Cleanup function to clear the interval when the timer finishes or the component unmounts
    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);  // Depend on timeLeft and onEnd

  return (
    <div className="text-xl font-bold text-center">{timeLeft}s</div>
  );
};

export default Timer;
