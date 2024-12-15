import { useState, useEffect } from 'react';
import Timer from './Timer';  // Timer component
import TypingArea from './TypingArea';  // TypingArea component
import Results from './Results';  // Results component

const TypingGame = () => {
  const text = 'The quick brown fox jumps over the lazy dog'.split(' '); // Split sentence into words
  const [userInput, setUserInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [typedWordsCount, setTypedWordsCount] = useState(0); // Total words typed (both correct and incorrect)
  const [timerFinished, setTimerFinished] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0); // Track time elapsed for WPM calculation
  const [startTime, setStartTime] = useState(null); // Timer start time
  const [gameActive, setGameActive] = useState(true); // Track if game is still active
  const [currentWord, setCurrentWord] = useState(text[currentWordIndex]); // Current word to type
  const [history, setHistory] = useState([]); // Score history
  const [typingAllowed, setTypingAllowed] = useState(false); // Control if typing is allowed

  // Update the current word whenever currentWordIndex changes
  useEffect(() => {
    if (currentWordIndex < text.length) {
      setCurrentWord(text[currentWordIndex]);
    }
  }, [currentWordIndex, text]);

  // Handle word change when current word is typed correctly
  useEffect(() => {
    if (userInput.trim() === currentWord) {
      setCorrectWordsCount((prevCount) => prevCount + 1);  // Increment correct words count
      setTypedWordsCount((prevCount) => prevCount + 1);    // Increment total typed words count (correct or incorrect)
      if (currentWordIndex < text.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);  // Move to next word
      }
      setUserInput(''); // Clear input field for the next word
    } else if (userInput.trim() !== '') {
      setTypedWordsCount((prevCount) => prevCount + 1);  // Increment total typed words count on incorrect typing
    }
  }, [userInput, currentWord, currentWordIndex]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTimerEnd = () => {
    setTimerFinished(true);
    // Calculate Words Per Minute (WPM) based on time and correct words typed
    const wpm = Math.floor((correctWordsCount / timeElapsed) * 60); // Total correct words / time in minutes

    // Calculate Accuracy based on correct words typed and total words typed
    const accuracy = ((correctWordsCount / typedWordsCount) * 100).toFixed(2);

    setWordsPerMinute(wpm);
    setAccuracy(accuracy);

    // Add result to history
    setHistory((prevHistory) => [
      ...prevHistory,
      { wpm, accuracy, time: new Date().toLocaleString() },
    ]);
  };

  const handleAbort = () => {
    setGameActive(false);
    setTimerFinished(true); // Mark the game as finished
    
    // Calculate Words Per Minute (WPM) and Accuracy based on the words typed so far
    const wpm = Math.floor((typedWordsCount / 60) * 60); // Use the number of words typed divided by 1 minute (since we calculate WPM for 60 seconds)
    const accuracy = ((correctWordsCount / typedWordsCount) * 100).toFixed(2); // Accuracy based on the words typed so far

    setWordsPerMinute(wpm);
    setAccuracy(accuracy);

    // Save the result to history
    setHistory((prevHistory) => [
      ...prevHistory,
      { wpm, accuracy, time: new Date().toLocaleString() },
    ]);
  };

  const handleRestart = () => {
    setUserInput('');
    setCorrectWordsCount(0);
    setTypedWordsCount(0);
    setCurrentWordIndex(0);
    setCurrentWord(text[0]);
    setTimerFinished(false);
    setWordsPerMinute(0);
    setAccuracy(0);
    setTimeElapsed(0);
    setGameActive(true);
    setStartTime(null);
    setTypingAllowed(false); // Disable typing until timer starts
  };

  const handleStartTimer = () => {
    setStartTime(Date.now());
    setTypingAllowed(true); // Allow typing once the timer starts
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mt-6">Typing Speed Test</h1>

      {!timerFinished ? (
        <>
          <Timer
            duration={60}
            onEnd={handleTimerEnd}
            setTimeElapsed={setTimeElapsed}
            startTime={startTime}
            setStartTime={setStartTime}
          />
          <TypingArea
            textToType={currentWord}  // Show the current word to type
            userInput={userInput}
            onInputChange={handleInputChange}
            typingAllowed={typingAllowed}  // Enable/disable input based on timer
          />
          {gameActive && (
            <div className="flex mt-4 space-x-4 justify-center">
              <button
                className="p-2 bg-blue-500 text-white rounded"
                onClick={handleStartTimer}
                disabled={startTime !== null} // Disable if timer already started
              >
                Start Timer
              </button>
              <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={handleAbort}
              >
                Abort
              </button>
            </div>
          )}
        </>
      ) : (
        <Results
          wordsPerMinute={wordsPerMinute}
          accuracy={accuracy}
          onRestart={handleRestart}
        />
      )}

      {/* Display history */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Score History</h2>
        <div className="mt-4">
          {history.length === 0 ? (
            <p>No previous scores</p>
          ) : (
            <ul>
              {history.map((entry, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">Score {index + 1}:</span>
                  <br />
                  <span>Speed: {entry.wpm} WPM | Accuracy: {entry.accuracy}%</span>
                  <br />
                  <span className="text-gray-500">Time: {entry.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingGame;
