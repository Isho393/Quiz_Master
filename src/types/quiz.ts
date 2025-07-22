export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  questions: Question[];
}

export interface QuizState {
  currentCategory: Category | null;
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  showResult: boolean;
  isQuizComplete: boolean;
  userAnswers: number[];
}