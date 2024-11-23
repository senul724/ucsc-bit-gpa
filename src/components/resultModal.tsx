"use client"

import { SemSummary } from '@/data/utils/gpa'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function ResultModal({
  isModalOpen,
  closeModal,
  gpaSummary,
}: {
  isModalOpen: boolean
  closeModal: () => void
  gpaSummary: { [year: number]: { [sem: string]: SemSummary } }|null
}) {
  if(!gpaSummary){
    return <></>
  }
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-2 top-2">
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex w-full">
                  <div className="w-2/5 pr-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">GPA Results</h3>
                    <div className="space-y-6">
                      {Object.entries(gpaSummary).map(([year, semesters]) => (
                        <div key={year} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Year {year}</span>
                            <span className="font-semibold text-yellow-800">
                              GPA: 0 | Credits: 0
                            </span>
                          </div>
                          <div className="space-y-2">
                            {Object.entries(semesters).map(([sem,summary]) => (
                              <div key={sem} className="flex justify-between text-sm">
                                <span>{sem}</span>
                                <span className="text-gray-600">
                                  GPA: {summary.gpa.toFixed(2)} | Credits: {summary.totalCredits}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold text-lg mt-4 p-2 bg-yellow-50 rounded">
                        <span>Overall GPA:</span>
                        <span>{0}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg p-2 bg-yellow-50 rounded">
                        <span>Total Credits:</span>
                        <span>{0}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5 pl-6 border-l">
                    <div className="space-y-4">
                      <h4 className="font-semibold mb-2">Minimum Requirements:</h4>
                      <ul className="list-disc list-inside">
                        <li>Maintain a GPA of 2.0 or higher</li>
                        <li>Pass all non-GPA subjects</li>
                        <li>Complete at least 24 credits per academic year</li>
                      </ul>
                      <div>
                        <h4 className="font-semibold mb-2">Result Review:</h4>
                        <p>
                          You are meeting the minimum requirements and performing well. Keep up the good
                          work!
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm">
                          Matrix Institute of Information Technology offers additional resources to help
                          you maintain and improve your academic performance.
                        </p>
                        <button
                          className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
                          type="button"
                        >
                          Explore Resources
                        </button>
                      </div>
                    </div>
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

