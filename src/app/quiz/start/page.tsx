'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaGraduationCap, FaPhone, FaStar, FaTrophy, FaUser } from 'react-icons/fa'
import { PiConfettiDuotone } from 'react-icons/pi'
import { questions } from '@/data/quiz/questions'

export default function StartPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

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

  const renderQuestion = () => (
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
            className={`w-full p-3 text-left rounded-lg ${
              selectedAnswers[currentQuestion] === index
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

  return (
    <>
        {!quizCompleted ? (
    <div className="min-h-screen bg-gradient-to-b from-pink-100  text-white py-12 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-xl border shadow-xl p-10 bg-gradient-to-b from-pink-500 to-purple-600 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">IT Career Quiz</h1>
            {renderQuestion()}
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
    ):(
          <QuizResult totalQuestions={questions.length} score={score}/>

    )}
    </>
  )
}
function QuizResult({ score, totalQuestions }:{score:number; totalQuestions:number}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your server
    console.log('Submitted:', { name, email, phone, score })
    setSubmitted(true)
  }

  const inputClasses = "block w-full pl-10 pr-3 py-2 border-2 border-purple-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-purple-800 drop-shadow-sm">
            Quiz Completed!
          </h1>
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaTrophy className="text-7xl text-yellow-500 mr-4 drop-shadow-md" />
            <div>
              <p className="text-2xl font-bold text-purple-700">Your Score</p>
              <p className="text-6xl font-bold text-purple-900 drop-shadow-sm">{score} / {totalQuestions}</p>
            </div>
          </motion.div>
          <AnimatePresence>
            <motion.p 
              className="text-xl mb-6 text-purple-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {score === totalQuestions ? (
                <span className="flex items-center justify-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  Congratulations! You've achieved a perfect score!
                  <FaStar className="text-yellow-500 ml-2" />
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FaGraduationCap className="text-purple-600 mr-2" />
                  Great job! You're on your way to becoming an IT expert.
                </span>
              )}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Enter the Raffle Draw</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-700">
                  Full Name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-purple-500" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-700">
                  Email Address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-purple-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="mt-1 text-sm text-purple-600">Please provide a valid email address. We'll send the raffle ticket to this email.</p>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-purple-700">
                  Phone Number
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-purple-500" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className={inputClasses}
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
                >
                  Submit and Enter Raffle
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2 text-purple-800">Thank you for participating!</h2>
              <p className="text-xl text-purple-700">Your entry has been submitted for the raffle draw.</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <PiConfettiDuotone className="text-5xl text-yellow-500 mx-auto mt-4" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-purple-800">Contact Us</h2>
          <p className="text-center mb-6 text-purple-700">If you have any questions, feel free to reach out:</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:info@example.com" className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors duration-200 group">
              <FaEnvelope className="mr-2 group-hover:animate-bounce" />
              info@example.com
            </a>
            <a href="tel:+15551234567" className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors duration-200 group">
              <FaPhone className="mr-2 group-hover:animate-bounce" />
              +1 (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

