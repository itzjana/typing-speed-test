import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import TypingArea from './components/TypingArea';
import Results from './components/Results';

export default function Home() {
  const [textToType, setTextToType] = useState('Type this sentence as fast as you can!');
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const calculateResults = () => {
    const wordCount = inputValue.trim().split(/\s+/).length;
    const timeSpent = 60 - timeLeft;
    setWordsPerMinute(Math.round(wordCount / (timeSpent / 60)));

    const correctWords = inputValue.split(' ').filter((word, index) => word === textToType.split(' ')[index]).length;
    setAccuracy(Math.round((correctWords / wordCount) * 100));
  };

  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      calculateResults();
    }
  }, [timeLeft, testStarted]);

  const handleStartTest = () => {
    setTestStarted(true);
    setStartTime(Date.now());
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (!testStarted) {
      handleStartTest();
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold text-center mb-6">Typing Speed Test</h1>
      {!testStarted && (
        <button
          onClick={handleStartTest}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg mx-auto block"
        >
          Start Test
        </button>
      )}
      <Timer duration={60} onEnd={calculateResults} />
      {testStarted && (
        <>
          <TypingArea textToType={textToType} onInputChange={handleInputChange} />
          {timeLeft === 0 && <Results wordsPerMinute={wordsPerMinute} accuracy={accuracy} />}
        </>
      )}
    </div>
  );
}
