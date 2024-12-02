'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { questions } from '@/data/quiz/questions'
import Guidelines from '@/components/quiz/quiz-guide'
import QuizResult from '@/components/quiz/result'
import Questions from '@/components/quiz/questions'

export default function StartPage() {
  const [showGuidelines, setShowGuidelines] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleAnswer = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const newScore = selectedAnswers.reduce((acc, answer, index) => {
        return answer === questions[index].correctAnswer ? acc + 1 : acc
      }, 0)
      setScore(newScore)
      setQuizCompleted(true)
    }
  }

  const handleStartQuiz = () => {
    console.log("clicked")
    if (email && name) {
      setShowGuidelines(false)
    }
  }


  return (
    <>
      {showGuidelines ? (
        <Guidelines
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          handleStartQuiz={handleStartQuiz}
        />
      )
        :
        (<>
          {!quizCompleted ? (
            <div className="min-h-screen bg-gradient-to-b from-pink-100  text-white py-12 px-4 flex items-center justify-center">
              <div className="container mx-auto max-w-xl border shadow-xl p-10 bg-gradient-to-b from-pink-500 to-purple-600 rounded-xl">
                <h1 className="text-3xl font-bold text-center mb-8">IT Career Quiz</h1>
                <Questions
                  questions={questions}
                  selectedAnswers={selectedAnswers}
                  currentQuestion={currentQuestion}
                  handleAnswer={handleAnswer}
                />
                <div className='w-full flex items-center justify-center'>
                  <motion.button
                    className="w-4/5 mt-12 text-white font-bold py-3 px-4 rounded border border-2 text-lg drop-shadow-lg"
                    onClick={handleNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={selectedAnswers[currentQuestion] === undefined}
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </motion.button>
                </div>
                <div className="mt-4 text-center drop-shadow-xl text-lg">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            </div>
          ) : (
            <QuizResult totalQuestions={questions.length} score={score} setEmail={setEmail} name={name} email={email} />
          )}
        </>
        )}
    </>
  )
}

