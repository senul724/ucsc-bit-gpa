'use client'

import React, { useState } from 'react'
import { FaCalculator, FaGraduationCap, FaBook, FaCalendarAlt, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { InitialValues, initialValues, subjects } from '@/data/subjects'
import { gpaGrades, nonGPAGrades } from '@/data/grades'
import { Field, Form, Formik } from "formik";


export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const getResultReview = (gpa: number) => {
  //   if (gpa >= 3.7) return "Excellent performance! Keep up the great work!"
  //   if (gpa >= 3.0) return "Good job! You're doing well, but there's room for improvement."
  //   if (gpa >= 2.0) return "You're meeting the minimum requirements, but consider seeking additional support to improve your grades."
  //   return "Your current GPA is below the minimum requirement. Please seek academic advice as soon as possible."
  // }

  const onSubmit = (values: InitialValues) => {
    console.log(values);
    Object.entries(values).forEach(([sem, subs]) => {
      let broke = false
      Object.entries(subs).forEach(([_, grade]) => {
        if (grade !== "Did Not Sit") {
          console.log(sem, "true", _)
          broke = true
          return;
        }
      })
      if (!broke) {
        console.log(sem, "false")
      }
    })
    setIsModalOpen(true)

  }
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <Image
            src="/logo.png"
            alt="Matrix Institute Logo"
            width={150}
            height={75}
            className="mb-8"
          />
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            <FaGraduationCap className="inline-block mr-2 text-yellow-600" />
            BIT University of Colombo (UCSC) - GPA Calculator
          </h1>
          <p className="text-lg text-gray-600 text-center mb-4">
            Provided by Matrix Institute of Information Technology
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(subjects).map(([year, semesters], yearIndex) => (
                <div key={year} className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <FaBook className="mr-2 text-yellow-600" /> Year {yearIndex + 1}
                  </h2>
                  {Object.entries(semesters).map(([semester, subjectList], semesterIndex) => (
                    <div key={semester} className="bg-white p-6 rounded-lg shadow-md border border-yellow-300">
                      <h3 className="text-xl font-medium mb-4 text-yellow-600 flex items-center">
                        <FaCalendarAlt className="mr-2" /> Semester {semesterIndex + (yearIndex * 2) + 1}
                      </h3>
                      {subjectList.map((subject) => (
                        <div key={subject.name} className="mb-4 last:mb-0">
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`${year}-${semester}-${subject.name}`}>
                            {subject.name}
                          </label>
                          <Field
                            as="select"
                            name={`${semester}.${subject.id}`}
                            id={`${year}-${semester}-${subject.name}`}
                            className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          >
                            {subject.isNonGPA ? (
                              nonGPAGrades.map(grade => (
                                <option key={grade} value={grade}>{grade}</option>
                              ))
                            ) : (
                              gpaGrades.map(grade => (
                                <option key={grade} value={grade}>{grade}</option>
                              ))
                            )}
                          </Field>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button
              type='submit'
              className="fixed bottom-4 right-4 bg-yellow-600 text-white px-6 py-3 rounded-full flex items-center shadow-lg hover:bg-yellow-700 transition-colors"
            >
              <FaCalculator className="mr-2" />
              Calculate GPA
            </button>
          </Form>
        </Formik>
        <ResultModal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      </div>
    </div>
  )
}

const ResultModal = ({ isModalOpen, closeModal }: { isModalOpen: boolean; closeModal: () => void; }) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  GPA Results
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FaTimes />
                  </button>
                </Dialog.Title>
                <div className="mt-2 space-y-4">
                  <div className="flex justify-between">
                    <span>Year 1 GPA:</span>
                    <span className="font-semibold">{0.24}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 2 GPA:</span>
                    <span className="font-semibold">{0.24}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 3 GPA:</span>
                    <span className="font-semibold">{0.24}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Overall GPA:</span>
                    <span>{1.24}</span>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Minimum Requirements:</h4>
                    <ul className="list-disc list-inside">
                      <li>Maintain a GPA of 2.0 or higher</li>
                      <li>Pass all non-GPA subjects</li>
                      <li>Complete at least 24 credits per academic year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result Review:</h4>
                    <p>You are meeting the minimum requirements, but consider seeking additional support to improve your grades.</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <p className="text-sm">
                      Matrix Institute of Information Technology can help you improve your academic performance through personalized tutoring, study groups, and additional resources.
                    </p>
                    <button className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors" type='button'>
                      Get Help for Free Now
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>

  )
}
