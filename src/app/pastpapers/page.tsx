"use client";

import { useState } from "react";
import {
	FaGraduationCap,
	FaBook,
	FaCalendarAlt,
	FaEye,
	FaChevronDown,
	FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";
import { subjects } from "@/data/subjects";

export default function Component() {
	const [expandedSemesters, setExpandedSemesters] = useState<
		Record<string, boolean>
	>({});

	const toggleSemester = (semester: string) => {
		setExpandedSemesters((prev) => ({
			...prev,
			[semester]: !prev[semester],
		}));
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center mb-12">
				<h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
					<FaGraduationCap className="inline-block mr-2 text-yellow-600" />
					BIT University of Colombo (UCSC) - Past Papers
				</h1>
				<p className="text-lg text-gray-600 text-center mb-4">
					Provided by one of your fellow student
				</p>
			</div>

			<div className="space-y-6">
				{Object.entries(subjects).map(([year, semesters], yearIndex) => (
					<div key={year} className="space-y-4">
						<h2 className="text-2xl font-semibold text-gray-800 flex items-center">
							<FaBook className="mr-2 text-yellow-600" /> Year {yearIndex + 1}
						</h2>
						{Object.entries(semesters).map(
							([semester, subjectList], semesterIndex) => (
								<div
									key={semester}
									className="bg-white shadow-md border border-gray-200"
								>
									<button
										className="w-full p-4 text-left focus:outline-none"
										onClick={() => toggleSemester(semester)}
									>
										<h3 className="text-xl font-medium text-yellow-600 flex items-center justify-between">
											<span className="flex items-center">
												<FaCalendarAlt className="mr-2" /> Semester{" "}
												{semesterIndex + yearIndex * 2 + 1}
											</span>
											{expandedSemesters[semester] ? (
												<FaChevronUp className="text-yellow-600" />
											) : (
												<FaChevronDown className="text-yellow-600" />
											)}
										</h3>
									</button>
									{expandedSemesters[semester] && (
										<div className="p-4 border-t border-gray-200">
											{subjectList.map((subject) => (
												<div key={subject.name} className="mb-4 last:mb-0">
													<div className="flex justify-between items-center">
														<span className="text-sm font-medium text-gray-700">
															{subject.name}
														</span>
														<Link
															href={`/pastpapers/${subject.code}`}
															className="bg-yellow-600 text-white px-3 py-1 text-sm flex items-center hover:bg-yellow-700 transition-colors"
														>
															<FaEye className="mr-1" />
															View Papers
														</Link>
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							),
						)}
					</div>
				))}
			</div>
		</>
	);
}
