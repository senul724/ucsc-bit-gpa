export const questions = [
  {
    id:1,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "None of the above"],
    correctAnswer: 0
  },
  {
    id:2,
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Ruby on Rails"],
    correctAnswer: 2
  },
  {
    id:4,
    question: "Which of these is not a programming language?",
    options: ["Python", "Java", "C++", "HTML"],
    correctAnswer: 3
  },
  {
    id:3,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 2
  },
  {
    id:5,
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Interface", "Application Process Integration"],
    correctAnswer: 0
  }
]

export type QuestionType= {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}
