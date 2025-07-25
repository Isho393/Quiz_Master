import React from 'react';

export default function QuestionCard  ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  onSubmit
})  {
  const getOptionStyle = (index) => {
    if (!showResult) {
      return selectedAnswer === index
        ? 'border-blue-500 bg-blue-50 text-blue-700'
        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
    }

    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 text-green-700';
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'border-red-500 bg-red-50 text-red-700';
    }

    return 'border-gray-200 text-gray-500';
  };

  const getOptionIcon = (index) => {
    if (!showResult) return null;

    if (index === question.correctAnswer) {
      return (
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return (
        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    }

    return null;
  };
         // Carte de la question
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onSelectAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 flex items-center justify-between ${getOptionStyle(index)} ${
              !showResult ? 'hover:shadow-md' : ''
            }`}
          >
            <span className="font-medium">{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>

      {showResult && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <span className="block text-blue-700 font-semibold mb-1">Explication :</span>
          <span className="text-gray-700">{question.explanation}</span>
        </div>
      )}

      {!showResult && selectedAnswer !== null && (
        <button
          onClick={onSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Valider la réponse
        </button>
      )}
    </div>
  );
};