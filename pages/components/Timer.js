const Timer = ({ duration, onEnd }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
  
    useEffect(() => {
      if (timeLeft <= 0) return;
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      if (timeLeft === 0) {
        onEnd();
        clearInterval(timer);
      }
  
      return () => clearInterval(timer);
    }, [timeLeft]);
  
    return (
      <div className="text-xl font-bold text-center">{timeLeft}s</div>
    );
  };
  