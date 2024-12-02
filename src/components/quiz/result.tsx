'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaGraduationCap, FaPhone, FaRedo, FaStar, FaTrophy } from 'react-icons/fa';
import { PiConfettiDuotone } from 'react-icons/pi';
import { TiTicket } from 'react-icons/ti';

export default function QuizResult({ score, totalQuestions }: { score: number; totalQuestions: number }) {
  const [showEmailForm, setShowEmailForm] = useState(true)
  const [showPhoneForm, setShowPhoneForm] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    setShowEmailForm(false)
    setShowPhoneForm(true)
  }

  const handlePhoneSubmit = (e: React.FormEvent) => {
    setShowPhoneForm(false)
    setRegistrationComplete(true)
  }

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
              ) : score === 0 ? (
                <span className="flex items-center justify-center">
                  <FaRedo className="text-purple-600 mr-2" />
                  Don't worry! Everyone starts somewhere. Want to try again?
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FaGraduationCap className="text-purple-600 mr-2" />
                  Great job! You're on your way to becoming an IT expert.
                </span>
              )}
            </motion.p>
          </AnimatePresence>
          {score === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/quiz">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
                >
                  Try Again
                  <FaRedo className="inline-block ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {score > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >


              {showEmailForm && (
                <form onSubmit={handleEmailSubmit} className="mt-4">
                  <div className="flex items-center justify-center text-2xl text-yellow-600 mb-4 drop-shadow-xl font-semibold">
                    <TiTicket className="mr-2" />
                    <span>You have earned {score} ticket{score > 1 ? 's' : ''}!</span>
                    <TiTicket className="ml-2" />
                  </div>
                  <p className="text-lg text-purple-700 mb-2">Receive your tickets via email:</p>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full max-w-md px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full max-w-md bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
                    >
                      Receive Tickets
                    </button>
                  </div>
                </form>
              )}

              {showPhoneForm && (
                <form onSubmit={handlePhoneSubmit} className="mt-4">
                  <div className="flex items-center justify-center text-2xl text-yellow-600 mb-4 drop-shadow-xl font-semibold">
                    <TiTicket className="mr-2" />
                    <span>You are just one step away to win!</span>
                    <TiTicket className="ml-2" />
                  </div>
                  <p className="text-lg text-purple-700 mb-2">Enter a valid mobile number to register<br /> for the free IT career guidance event and claim your prize:</p>
                  <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full max-w-md px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full max-w-md bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
                    >
                      Finish
                    </button>
                  </div>
                </form>

              )}


              {registrationComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-2 text-purple-800">Thank you for participating!</h2>

                  You're all set!
                  <PiConfettiDuotone className="text-5xl text-yellow-500 mx-auto mt-4" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

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
