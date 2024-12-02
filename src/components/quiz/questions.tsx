"use client"

import { QuestionType } from '@/data/quiz/questions';
import { motion } from 'framer-motion'

export default function Questions(
  {
    questions,
    currentQuestion,
    selectedAnswers,
    handleAnswer
  }: {
    questions: QuestionType[]
    currentQuestion: number;
    selectedAnswers: number[];
    handleAnswer: (answerIndex: number) => void
  }
) {
  return (
    <motion.div
      key={currentQuestion}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <motion.button
            key={index}
            className={`w-full p-3 text-left rounded-lg ${selectedAnswers[currentQuestion] === index
              ? 'bg-purple-600 text-white'
              : 'bg-white text-purple-900'
              }`}
            onClick={() => handleAnswer(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

