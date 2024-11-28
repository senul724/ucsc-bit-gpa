'use client'

import React, { useState } from 'react'
import { FaCalculator, FaGraduationCap, FaBook, FaCalendarAlt } from 'react-icons/fa'
import { InitialValues, initialValues, semYear, subjects } from '@/data/subjects'
import { gpaGrades, nonGPAGrades } from '@/data/grades'
import { Field, Form, Formik } from "formik";
import { calculateSemGpa, SemSummary } from '@/data/utils/gpa'
import ResultModal from '@/components/resultModal'

export type ResultSummary = {
  [year: number]: {
    sems: { [sem: string]: SemSummary },
    totalGPA: number,
    totalCompleted: number,
    totalCredits: number
  }
}

export type FullResultSummary = {
  summary: ResultSummary,
      credits:number,
      semsEntered:number;
      gpa:number;
}

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<FullResultSummary | null>(null)


  const onSubmit = (values: InitialValues) => {
    try {
      let val: ResultSummary = {};
      let semsEntered = 0 
      let finalGPA = 0 
      let credits = 0 

      {
        // to get the semesters entered by the user
        Object.entries(values).forEach(([sem, subs]) => {
          const year = semYear[sem]
          let filled = false

          Object.entries(subs).forEach(([_, grade]) => {
            if (grade !== "Did Not Sit") {
              filled = true
              return;
            }
          })
          if (filled) {
            if (!val[year]) {
              val[year] = {
                sems: {},
                totalCredits: 0,
                totalGPA: 0,
                totalCompleted: 0
              }
            }
            const summary = calculateSemGpa(values[sem])

            semsEntered += 1
            finalGPA += summary.gpa
            credits += summary.totalCredits

            val[year].sems[sem] = summary
            val[year].totalCompleted += 1
            val[year].totalGPA += summary.gpa
            val[year].totalCredits += summary.totalCredits
          }
        })
        setResult({
          summary:val,
          gpa:finalGPA,
          credits, 
          semsEntered
        })
      }

      console.log(values)
      console.log("results summary: ", result)
      setIsModalOpen(true)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-12">
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
                          name={`${semester}.${subject.code}`}
                          id={`${year}-${semester}-${subject.name}`}
                          className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        >
                          {subject.isGPA ? (
                            gpaGrades.map(grade => (
                              <option key={grade} value={grade}>{grade}</option>
                            ))
                          ) : (
                            nonGPAGrades.map(grade => (
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
      <ResultModal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} gpaSummary={result} />
    </>
  )
}
