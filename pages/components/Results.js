// Results.js
const Results = ({ wordsPerMinute, accuracy }) => {
    const formattedWPM = wordsPerMinute ? wordsPerMinute.toFixed(2) : 0;
    const formattedAccuracy = accuracy ? accuracy.toFixed(2) : 0;
  
    return (
      <div className="mt-6 text-center">
        <p className="text-2xl font-semibold mb-2">Speed: {formattedWPM} WPM</p>
        <p className="text-xl">Accuracy: {formattedAccuracy}%</p>
      </div>
    );
  };
  
  export default Results;  // Ensure default export
  