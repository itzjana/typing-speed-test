const Results = ({ wordsPerMinute, accuracy, onRestart }) => {
    return (
      <div className="mt-6 text-center">
        <p className="text-2xl font-semibold">Speed: {wordsPerMinute} WPM</p>
        <p className="text-xl">Accuracy: {accuracy}%</p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>
    );
  };
  
  export default Results;
  