import { useState } from 'react';
import Timer from './components/Timer';  // Assuming Timer is in the same directory
import TypingArea from './components/TypingArea';  // Assuming TypingArea is in the same directory
import Results from './components/Results';  // Assuming Results is in the same directory

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [timerFinished, setTimerFinished] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const textToType = 'The quick brown fox jumps over the lazy dog.';

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTimerEnd = () => {
    setTimerFinished(true);
    
    // Calculate Words Per Minute (WPM) and Accuracy
    const totalWords = textToType.split(' ').length;
    const typedWords = userInput.split(' ').length;
    const wpm = Math.floor((typedWords / 5) / (60 / 60));  // Assuming 5 characters per word
    const accuracy = ((typedWords / totalWords) * 100).toFixed(2);

    setWordsPerMinute(wpm);
    setAccuracy(accuracy);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-6">Typing Speed Test</h1>
      
      {!timerFinished ? (
        <>
          <Timer duration={60} onEnd={handleTimerEnd} />
          <TypingArea textToType={textToType} userInput={userInput} onInputChange={handleInputChange} />
        </>
      ) : (
        <Results wordsPerMinute={wordsPerMinute} accuracy={accuracy} />
      )}
    </div>
  );
}
