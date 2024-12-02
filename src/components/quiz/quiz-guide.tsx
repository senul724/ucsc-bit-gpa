'use client'

import { TiTicket } from "react-icons/ti";
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from "react";

export default function Guidelines({
  name,
  setName,
  email,
  setEmail,
  handleStartQuiz
}: {
  name: string,
  setName: Dispatch<SetStateAction<string>>,
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  handleStartQuiz: () => void
}
) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-purple-900 py-12 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl border shadow-xl p-10 bg-white rounded-xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800 flex items-center justify-center">
          IT Career Quiz Guidelines
        </h1>
        <div className="space-y-6">
          <p className="TiTickettext-lg">Welcome to our IT Career Quiz! Here's what you need to know:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>You will be asked 3 questions about IT careers.</li>
            <li>For each correct answer, you'll receive one raffle ticket.</li>
          </ul>
          <div className="space-y-4">
            <div className="flex items-center">
              <p>1 correct answer = 1 raffle ticket</p>
              <TiTicket className="text-yellow-500 mr-3" size={25} />
            </div>
            <div className="flex items-center">
              <p>2 correct answers = 2 raffle tickets</p>
              <TiTicket className="text-yellow-500 mr-3" size={25} />
              <TiTicket className="text-yellow-500 mr-3" size={25} />
            </div>
            <div className="flex items-center">
              <p>3 correct answers = 3 raffle tickets</p>
              <TiTicket className="text-yellow-500 mr-3" size={25} />
              <TiTicket className="text-yellow-500 mr-3" size={25} />
              <TiTicket className="text-yellow-500 mr-3" size={25} />
            </div>
          </div>
          <p className="text-lg font-semibold">
            Your raffle tickets will be sent to your email after completing the quiz so, enter a valid email address.
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-700">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-700">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-md text-sm shadow-sm placeholder-purple-400
                    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
          <motion.button
            className="w-full mt-8 bg-purple-600 text-white font-bold py-3 px-4 rounded text-lg shadow-lg"
            onClick={handleStartQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Quiz
          </motion.button>
          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-center font-bold flex items-center justify-center">
              Prize Distribution
            </p>
            <p className="text-center mt-2">January 5th, 2025</p>
            <p className="text-center mt-2">Bambalapitiya</p>
            <p className="text-center mt-2">During the Free Career Guidance Event</p>
            <p className="text-center text-sm mt-2">42 random winners will be selected to receive prizes!</p>
          </div>
        </div>
      </div>
    </div>

  )
}
