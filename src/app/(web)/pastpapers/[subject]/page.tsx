import React from 'react'
import { FaDownload, FaFilePdf } from 'react-icons/fa'
import { SubjectName } from '@/data/subjects'

const years = Array.from({ length: 25 }, (_, i) => 2024 - i)

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string; }>;
}) {
  const subject = (await params).subject
  const subjectName = SubjectName[subject]

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          {subjectName} Past Papers
        </h1>
        <p className="text-lg text-gray-600 text-center mb-4">
          BIT University of Colombo (UCSC)
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <button
          className="bg-yellow-600 text-white px-4 py-2 flex items-center hover:bg-yellow-700 transition-colors"
        >
          <FaDownload className="mr-2" />
          Download All Papers
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {years.map((year) => (
          <div key={year} className="bg-white shadow-md border border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">{year}</span>
              <div
                className="bg-yellow-600 text-white px-3 py-1 flex items-center hover:bg-yellow-700 transition-colors"
              >
                <FaFilePdf className="mr-1" />
                Download
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
