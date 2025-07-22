import { useState, useCallback } from 'react';

const initialState = {
  currentCategory: null,
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  showResult: false,
  isQuizComplete: false,
  userAnswers: []
};

export const useQuiz = () => {
  const [quizState, setQuizState] = useState(initialState);

  const startQuiz = useCallback((category) => {
    setQuizState({
      ...initialState,
      currentCategory: category
    });
  }, []);

  const selectAnswer = useCallback((answerIndex) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex
    }));
  }, []);

  const submitAnswer = useCallback(() => {
    if (quizState.selectedAnswer === null || !quizState.currentCategory) return;

    const currentQuestion = quizState.currentCategory.questions[quizState.currentQuestionIndex];
    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    
    const newUserAnswers = [...quizState.userAnswers, quizState.selectedAnswer];
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const isLastQuestion = quizState.currentQuestionIndex === quizState.currentCategory.questions.length - 1;

    setQuizState(prev => ({
      ...prev,
      score: newScore,
      userAnswers: newUserAnswers,
      showResult: true,
      isQuizComplete: isLastQuestion
    }));
  }, [quizState]);

  const nextQuestion = useCallback(() => {
    if (quizState.isQuizComplete) return;

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      selectedAnswer: null,
      showResult: false
    }));
  }, [quizState.isQuizComplete]);

  const resetQuiz = useCallback(() => {
    setQuizState(initialState);
  }, []);

  return {
    quizState,
    startQuiz,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    resetQuiz
  };
};
export default useQuiz