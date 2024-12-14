const Results = ({ wordsPerMinute, accuracy }) => {
    return (
      <div className="mt-6 text-center">
        <p className="text-2xl font-semibold">Speed: {wordsPerMinute} WPM</p>
        <p className="text-xl">Accuracy: {accuracy}%</p>
      </div>
    );
  };
  