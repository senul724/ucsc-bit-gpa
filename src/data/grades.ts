export type Grade = 'Did Not Sit' | 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'E'
export type NonGPAGrade = 'Did Not Sit' | 'PASS' | 'FAIL'

export const gpaGrades = ['Did Not Sit', 'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E']
export const nonGPAGrades = ['Did Not Sit', 'PASS', 'FAIL']

export const gradePoints: Record<Grade, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'E': 0, 'Did Not Sit': 0
}

export const subjectCredits: Record<string, number> = {
  'EN1106': 2,
  'IT1106': 4,
  'IT1206': 4,
  'IT1306': 3,
  'IT1406': 4,
  'EN2106': 2,
  'IT2106': 3,
  'IT2206': 4,
  'IT2306': 4,
  'IT2406': 4,
  'EN3106': 2,
  'IT3106': 3,
  'IT3206': 3,
  'IT3306': 3,
  'IT3406': 4,
  'IT4106': 3,
  'IT4206': 4,
  'IT4306': 3,
  'IT4406': 4,
  'IT4506': 3,
  'EN5106': 2,
  'IT5106': 8,
  'IT5206': 3,
  'IT5306': 3,
  'IT5406': 3,
  'IT5506': 3,
  'EN6106': 2,
  'IT6206': 3,
  'IT6306': 4,
  'IT6406': 3,
  'IT6506': 3,
}
