const TypingArea = ({ textToType, userInput, onInputChange, typingAllowed }) => {
    return (
      <div className="w-full max-w-xl mx-auto p-4">
        <p className="text-xl mb-4 text-white">{textToType}</p>
        <input
          type="text"
          value={userInput}
          onChange={onInputChange}
          className="w-full p-2 border border-gray-300 text-black rounded-lg focus:outline-none"
          placeholder="Start typing..."
          disabled={!typingAllowed}  // Disable input until typingAllowed is true
        />
      </div>
    );
  };
  
  export default TypingArea;
  