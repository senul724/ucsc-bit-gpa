type Subject = {
  id:string;
  name:string;
  isNonGPA:boolean;
}

type Semesters = Record<string, Subject[]>

export const subjects:Record<string, Semesters> = {
  year1: {
    sem1: [
      { id:"1", name: 'Information Systems & Technology', isNonGPA: false },
      { id:"2", name: 'Programming', isNonGPA: false },
      { id:"3", name: 'Computer Systems I', isNonGPA: false },
      { id:"4", name: 'Personal Computing', isNonGPA: false },
      { id:"5", name: 'Introductory Mathematics', isNonGPA: true }
    ],
    sem2: [
      {id:"1", name: 'Database Systems', isNonGPA: false },
      {id:"2", name: 'Web Application Development I', isNonGPA: false },
      {id:"3",  name: 'Mathematics for Computing I', isNonGPA: false },
      {id:"4",  name: 'Software Engineering', isNonGPA: false },
      {id:"5",  name: 'Communication Skills 1', isNonGPA: true }
    ]
  },
  year2: {
    sem3: [
      {id:"1", name: 'Data Structures & Algorithms', isNonGPA: false },
      {id:"2", name: 'Web Application Development II', isNonGPA: false },
      {id:"3", name: 'Data Management Systems', isNonGPA: false },
      {id:"4", name: 'Object Oriented Analysis & Design', isNonGPA: false },
      {id:"5", name: 'Communication Skills 2', isNonGPA: true }
    ],
    sem4: [
      {id:"1", name: 'Agile Software Development', isNonGPA: false },
      {id:"2", name: 'Computer Networks', isNonGPA: false },
      {id:"3", name: 'IT Project Management', isNonGPA: false },
      {id:"4", name: 'Enterprise Application Development', isNonGPA: false },
      {id:"5", name: 'User Experience Design', isNonGPA: true }
    ]
  },
  year3: {
    sem5: [
      {id:"1", name: 'Professional Practice', isNonGPA: false },
      {id:"2", name: 'Principles of Information Security', isNonGPA: false },
      {id:"3", name: 'Systems & Network Administration', isNonGPA: false },
      {id:"4", name: 'e-Business Technologies', isNonGPA: false },
      {id:"5", name: 'Fundamentals of Management & Entrepreneurship', isNonGPA: true }
    ],
    sem6: [
      {id:"1", name: 'Software Quality Assurance', isNonGPA: false },
      {id:"2", name: 'Application Development for Mobile Environments', isNonGPA: false },
      {id:"3", name: 'Network Security & Audit', isNonGPA: false },
      {id:"4", name: 'Software Development Project', isNonGPA: false },
      {id:"5", name: 'Mathematics for Computing II', isNonGPA: true }
    ]
  }
}

export const initialValues = {
  sem1:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
  sem2:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
  sem3:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
  sem4:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
  sem5:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
  sem6:{
    '1':'Did Not Sit',
    '2':'Did Not Sit',
    '3':'Did Not Sit',
    '4':'Did Not Sit',
    '5':'Did Not Sit'
  },
}
