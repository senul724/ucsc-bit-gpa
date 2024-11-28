type Subject = {
  code: string;
  name: string;
  isGPA: boolean;
  credits: number;
}

type Semesters = Record<string, Subject[]>

export const subjects: Record<string, Semesters> = {
  year1: {
    sem1: [
      { code: "EN1106", name: "Introductory Mathematics", credits: 2, isGPA: false },
      { code: "IT1106", name: "Information Systems", credits: 4, isGPA: true },
      { code: "IT1206", name: "Computer Systems", credits: 4, isGPA: true },
      { code: "IT1306", name: "Free and Open Source Software for\nPersonal Computing", credits: 3, isGPA: true },
      { code: "IT1406", name: "Introduction to Programming", credits: 4, isGPA: true }
    ],
    sem2: [
      { code: "EN2106", name: "Communication Skills I", credits: 2, isGPA: false },
      { code: "IT2106", name: "Mathematics for Computing I", credits: 3, isGPA: true },
      { code: "IT2206", name: "Fundamentals of Software\nEngineering", credits: 4, isGPA: true },
      { code: "IT2306", name: "Database Systems", credits: 4, isGPA: true },
      { code: "IT2406", name: "Web Application Development I", credits: 4, isGPA: true }
    ],
  },
  year2: {
    sem3: [
      { code: "EN3106", name: 'Communication Skills 2', isGPA: false, credits: 2 },
      { code: "IT3106", name: 'Object Oriented Analysis & Design', isGPA: true, credits: 3 },
      { code: "IT3206", name: 'Data Structures & Algorithms', isGPA: true, credits: 3 },
      { code: "IT3306", name: 'Data Management Systems', isGPA: true, credits: 3 },
      { code: "IT3406", name: 'Web Application Development II', isGPA: true, credits: 4 },
    ],
    sem4: [
      { code: "IT4106", name: 'User Experience Design', isGPA: true, credits: 3 },
      { code: "IT4206", name: 'Enterprise Application Development', isGPA: true, credits: 4 },
      { code: "IT4306", name: 'IT Project Management', isGPA: true, credits: 3 },
      { code: "IT4406", name: 'Agile Software Development', isGPA: true, credits: 4 },
      { code: "IT4506", name: 'Computer Networks', isGPA: true, credits: 3 },
    ]
  },
  year3: {
    sem5: [
      { code: "EN5106", name: "Fundamentals of\nManagement &\nEntrepreneurship", credits: 2, isGPA: false },
      { code: "IT5206", name: "Professional Practice", credits: 3, isGPA: true },
      { code: "IT5306", name: "Principles of Information\nSecurity", credits: 3, isGPA: true },
      { code: "IT5406", name: "Systems & Network\nAdministration", credits: 3, isGPA: true },
      { code: "IT5506", name: "e-Business Technologies", credits: 3, isGPA: true }
    ],
    sem6: [
      { code: "EN6106", name: "Advanced Concepts in\nInformation Technology", credits: 2, isGPA: false },
      { code: "IT6206", name: "Software Quality\nAssurance", credits: 3, isGPA: true },
      { code: "IT6306", name: "Application Development\nfor Mobile Environments", credits: 4, isGPA: true },
      { code: "IT6406", name: "Network Security and\nAudit", credits: 3, isGPA: true },
      { code: "IT6506", name: "Mathematics for\nComputing II", credits: 3, isGPA: true },
      { code: "IT5106", name: "Software Development\nProject", credits: 8, isGPA: true },
    ]
  }
}

export const initialValues = {
  sem1: {
    'EN1106': 'Did Not Sit',
    'IT1106': 'Did Not Sit',
    'IT1206': 'Did Not Sit',
    'IT1306': 'Did Not Sit',
    'IT1406': 'Did Not Sit',
  },
  sem2: {
    'EN2106': 'Did Not Sit',
    'IT2106': 'Did Not Sit',
    'IT2206': 'Did Not Sit',
    'IT2306': 'Did Not Sit',
    'IT2406': 'Did Not Sit',
  },
  sem3: {
    'EN3106': 'Did Not Sit',
    'IT3106': 'Did Not Sit',
    'IT3206': 'Did Not Sit',
    'IT3306': 'Did Not Sit',
    'IT3406': 'Did Not Sit',
  },
  sem4: {
    'IT4106': 'Did Not Sit',
    'IT4206': 'Did Not Sit',
    'IT4306': 'Did Not Sit',
    'IT4406': 'Did Not Sit',
    'IT4506': 'Did Not Sit',
  },
  sem5: {
    'EN5106': 'Did Not Sit',
    'IT5106': 'Did Not Sit',
    'IT5206': 'Did Not Sit',
    'IT5306': 'Did Not Sit',
    'IT5406': 'Did Not Sit',
    'IT5506': 'Did Not Sit',
  },
  sem6: {
    'EN6106': 'Did Not Sit',
    'IT6206': 'Did Not Sit',
    'IT6306': 'Did Not Sit',
    'IT6406': 'Did Not Sit',
    'IT6506': 'Did Not Sit',
  },
}

export const semYear: Record<string, number> = {
  "sem1": 1,
  "sem2": 1,
  "sem3": 2,
  "sem4": 2,
  "sem5": 3,
  "sem6": 3,
}

export type InitialValues = typeof initialValues

export const SubjectName: Record<string, string> = {
 "EN1106": "Introductory Mathematics",
 "IT1106": "Information Systems",
 "IT1206": "Computer Systems",
 "IT1306": "Free and Open Source Software for\nPersonal Computing",
 "IT1406": "Introduction to Programming",
 "EN2106": "Communication Skills I",
 "IT2106": "Mathematics for Computing I",
 "IT2206": "Fundamentals of Software\nEngineering",
 "IT2306": "Database Systems",
 "IT2406": "Web Application Development I",
 "EN3106": 'Communication Skills 2',
 "IT3106": 'Object Oriented Analysis & Design',
 "IT3206": 'Data Structures & Algorithms',
 "IT3306": 'Data Management Systems',
 "IT3406": 'Web Application Development II',
 "IT4106": 'User Experience Design',
 "IT4206": 'Enterprise Application Development',
 "IT4306": 'IT Project Management',
 "IT4406": 'Agile Software Development',
 "IT4506": 'Computer Networks',
 "EN5106": "Fundamentals of\nManagement &\nEntrepreneurship",
 "IT5106": "Software Development\nProject",
 "IT5206": "Professional Practice",
 "IT5306": "Principles of Information\nSecurity",
 "IT5406": "Systems & Network\nAdministration",
 "IT5506": "e-Business Technologies",
 "EN6106": "Advanced Concepts in\nInformation Technology",
 "IT6206": "Software Quality\nAssurance",
 "IT6306": "Application Development\nfor Mobile Environments",
 "IT6406": "Network Security and\nAudit",
 "IT6506": "Mathematics for\nComputing II",
}
