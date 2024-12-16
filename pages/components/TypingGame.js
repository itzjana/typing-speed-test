import { useState, useEffect } from 'react';
import Timer from './Timer';
import TypingArea from './TypingArea';
import Results from './Results';

const TypingGame = () => {
  const text = 'The quick brown fox jumps over the lazy dog. As the sun sets behind the mountains, the birds soar high in the sky, singing melodies that echo through the valley. The river flows gently, weaving its way around rocks and trees, while the wind whispers through the branches of the ancient oaks. A small rabbit hops along the edge of the forest, pausing to nibble on some tender grass. Farther in the distance, the city lights begin to twinkle, marking the end of another peaceful day in the countryside. It is a world of harmony, where nature and civilization coexist in quiet balance, and every day offers a new adventure waiting to be discovered.'.split(' ');
  const [userInput, setUserInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [typedWordsCount, setTypedWordsCount] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [gameActive, setGameActive] = useState(true);
  const [currentWord, setCurrentWord] = useState(text[currentWordIndex]);
  const [history, setHistory] = useState([]);
  const [typingAllowed, setTypingAllowed] = useState(false);

  useEffect(() => {
    if (currentWordIndex < text.length) {
      setCurrentWord(text[currentWordIndex]);
    }
  }, [currentWordIndex, text]);

  useEffect(() => {
    if (userInput.trim() === currentWord) {
      setCorrectWordsCount((prevCount) => prevCount + 1);
      setTypedWordsCount((prevCount) => prevCount + 1);
      if (currentWordIndex < text.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }
      setUserInput('');
    } else if (userInput.trim() !== '') {
      setTypedWordsCount((prevCount) => prevCount + 1);
    }
  }, [userInput, currentWord, currentWordIndex]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTimerEnd = () => {
    setTimerFinished(true);
    const wpm = Math.floor((correctWordsCount / timeElapsed) * 60);
    const accuracy = ((correctWordsCount / typedWordsCount) * 100).toFixed(2);

    setWordsPerMinute(wpm);
    setAccuracy(accuracy);

    setHistory((prevHistory) => [
      ...prevHistory,
      { wpm, accuracy, time: new Date().toLocaleString() },
    ]);
  };

  const handleAbort = () => {
    setGameActive(false);
    setTimerFinished(true);
    const wpm = Math.floor((typedWordsCount / 60) * 60);
    const accuracy = ((correctWordsCount / typedWordsCount) * 100).toFixed(2);

    setWordsPerMinute(wpm);
    setAccuracy(accuracy);

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
    setTypingAllowed(false);
  };

  const handleStartTimer = () => {
    setStartTime(Date.now());
    setTypingAllowed(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mt-12 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
          Typing Speed Test
        </h1>

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
              textToType={currentWord}
              userInput={userInput}
              onInputChange={handleInputChange}
              typingAllowed={typingAllowed}
            />
            {gameActive && (
              <div className="flex mt-6 space-x-6 justify-center">
                <button
                  className="px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:translate-y-1"
                  onClick={handleStartTimer}
                  disabled={startTime !== null}
                >
                  Start Timer
                </button>
                <button
                  className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:translate-y-1"
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

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
            Score History
          </h2>
          <div className="max-w-4xl mx-auto">
            {history.length === 0 ? (
              <p className="text-center text-xl">No previous scores</p>
            ) : (
              <ul className="space-y-4">
                {history.map((entry, index) => (
                  <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <span className="font-bold text-lg">Score {index + 1}:</span>
                    <br />
                    <span className="text-xl">Speed: {entry.wpm} WPM | Accuracy: {entry.accuracy}%</span>
                    <br />
                    <span className="text-gray-400">{entry.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingGame;
