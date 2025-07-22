import React from 'react';

export default function ResultScreen ({
  category,
  score,
  totalQuestions,
  onRestart,
  onBackToHome
})  {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 80) return { message: "Excellent !", emoji: "🎉", color: "text-green-600" };
    if (percentage >= 60) return { message: "Bien joué !", emoji: "👏", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Pas mal !", emoji: "👍", color: "text-yellow-600" };
    return { message: "À améliorer", emoji: "💪", color: "text-red-600" };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">{scoreInfo.emoji}</div>
        
        <h2 className={`text-2xl font-bold mb-2 ${scoreInfo.color}`}>
          {scoreInfo.message}
        </h2>
        
        <p className="text-gray-600 mb-6">
          Catégorie: {category.name}
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <div className="text-4xl font-bold text-gray-800 mb-2">
            {score} / {totalQuestions}
          </div>
          <div className={`text-lg font-semibold ${scoreInfo.color}`}>
            {percentage}% de réussite
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Recommencer ce quiz
          </button>
          
          <button
            onClick={onBackToHome}
            className="w-full border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Choisir un autre quiz
          </button>
        </div>
      </div>
    </div>
  );
};