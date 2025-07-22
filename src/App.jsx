import React from 'react';
import  CategoryCard  from './components/CategoryCard';
import  QuestionCard  from './components/QuestionCard';
import  ResultScreen  from './components/ResultScreen';
import  ProgressBar  from './components/ProgressBar';
import  useQuiz  from './hooks/useQuiz';
import  quizCategories  from './data/quizData';

function App() {
  const {
    quizState,
    startQuiz,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    resetQuiz
  } = useQuiz();

  const {
    currentCategory,
    currentQuestionIndex,
    score,
    selectedAnswer,
    showResult,
    isQuizComplete
  } = quizState;

  // Vue d'accueil - sélection de catégorie
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Quiz<span className="text-blue-600">Master</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testez vos connaissances dans différents domaines avec nos quiz interactifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quizCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={startQuiz}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500">
              Choisissez une catégorie pour commencer votre quiz
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Écran de résultat final
  if (isQuizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex items-center justify-center px-6">
        <ResultScreen
          category={currentCategory}
          score={score}
          totalQuestions={currentCategory.questions.length}
          onRestart={() => startQuiz(currentCategory)}
          onBackToHome={resetQuiz}
        />
      </div>
    );
  }

  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      <div className="container mx-auto px-6 py-8">
        {/* Header avec progression */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={resetQuiz}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </button>
            
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">{currentCategory.name}</h2>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} sur {currentCategory.questions.length}
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600">Score</p>
              <p className="text-lg font-bold text-blue-600">{score}/{currentQuestionIndex + (showResult ? 1 : 0)}</p>
            </div>
          </div>

          <ProgressBar
            current={currentQuestionIndex + (showResult ? 1 : 0)}
            total={currentCategory.questions.length}
            className="mb-8"
          />
        </div>

        {/* Question */}
        <div className="max-w-2xl mx-auto">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={selectAnswer}
            showResult={showResult}
            onSubmit={submitAnswer}
          />

          {/* Bouton suivant */}
          {showResult && !isQuizComplete && (
            <div className="text-center mt-8">
              <button
                onClick={nextQuestion}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Question suivante
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;