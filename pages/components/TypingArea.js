import { useState } from 'react';

const TypingArea = ({ textToType, onInputChange, userInput }) => {
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <p className="text-xl mb-4 text-gray-700">{textToType}</p>
      <input
        type="text"
        value={userInput}  // Directly bind userInput without debouncing
        onChange={onInputChange}  // Trigger onInputChange on each keystroke
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TypingArea;
