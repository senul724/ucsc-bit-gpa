'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaTrophy, FaArrowRight, FaCheckCircle, FaLaptopCode, FaRocket } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Unlock Your{' '}
            <span className="text-pink-500 bg-clip-text">
              IT Career Potential
            </span>
          </h1>
          <p className="text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Join our Career Guidance Event & Win Amazing Prizes!
          </p>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <FaCalendarAlt className="text-3xl text-purple-600" />
            <span className="text-2xl font-semibold text-gray-800">January 5th, 2024</span>
          </div>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/quiz/start"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-2xl rounded-full hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Start the Quiz Now
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <p className="mt-4 text-sm text-gray-600">
            Answer all questions correctly to qualify for the raffle draw!
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-600 flex items-center justify-center">
            <FaTrophy className="mr-3 text-yellow-500" />
            Prizes Worth Over Rs. 125,000 and 42 winners!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
              <Image
                src="/quiz/idealz.png"
                alt="iDealz"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full bg-white p-2 shadow-sm"
              />
              <p className="font-bold text-2xl text-purple-700">6 x Rs. 5,000</p>
              <p className="text-lg text-gray-700">iDealz Gift Cards</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
              <Image
                src="/quiz/pizzahut.png"
                alt="Pizza Hut"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full bg-white p-2 shadow-sm"
              />
              <p className="font-bold text-2xl text-purple-700">12 x Rs. 2,000</p>
              <p className="text-lg text-gray-700">Pizza Hut Gift Cards</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
              <Image
                src="/quiz/kuku.jpg"
                alt="Kuku Clothing"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full bg-white p-2 shadow-sm"
              />
              <p className="font-bold text-2xl text-purple-700">24 x Rs. 3,000</p>
              <p className="text-lg text-gray-700">Kuku Clothing Gift Cards</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-500 flex items-center">
              <FaRocket className="mr-3" />
              How to Enter?
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
              <li>Complete our quick IT knowledge quiz</li>
              <li>Get automatically entered into the raffle draw!</li>
            </ol>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center">
              <FaLaptopCode className="mr-3" />
              Event Highlights
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <FaCheckCircle className="mr-3 text-green-500 flex-shrink-0" />
                <span>Expert-led IT career guidance sessions</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheckCircle className="mr-3 text-green-500 flex-shrink-0" />
                <span>Networking with industry professionals</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <FaCheckCircle className="mr-3 text-green-500 flex-shrink-0" />
                <span>Hands-on workshops on cutting-edge technologies</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/cover.jpeg"
            alt="IT Career Event"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Shape Your Future in Tech</h3>
            <p className="text-xl max-w-2xl mx-auto">Learn from industry experts and kickstart your IT career journey with hands-on experience and valuable insights</p>
          </div>
        </motion.div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-600">Don't Miss This Opportunity!</h2>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-2xl rounded-full hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Take the Quiz Now
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
