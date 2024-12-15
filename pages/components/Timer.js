import { useEffect, useState } from 'react';

const Timer = ({ duration, onEnd, setTimeElapsed, startTime, setStartTime }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    if (!startTime) return; // Don't start the timer until startTime is set

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeLeft(duration - elapsed);
      setTimeElapsed(elapsed); // Set time elapsed in parent

      if (elapsed >= duration) {
        clearInterval(timer);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [startTime, duration, setTimeElapsed, onEnd]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`; // Format as MM:SS
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-semibold">{formatTime(timeLeft)} remaining</p>
    </div>
  );
};

export default Timer;
