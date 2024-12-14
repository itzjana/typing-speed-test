const TypingArea = ({ textToType, onInputChange }) => {
    return (
      <div className="w-full max-w-xl mx-auto p-4">
        <p className="text-xl mb-4 text-gray-700">{textToType}</p>
        <input
          type="text"
          onChange={onInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Start typing..."
        />
      </div>
    );
  };
  