import { Grade, gradePoints, NonGPAGrade, subjectCredits} from "../grades";

export type SemResult = Record<string, Grade|NonGPAGrade> 
export type SemSummary = {
      gpa:number;
    enPass:boolean,
    totalCredits:number,
    personalCredits:number
}

export const calculateSemGpa = (results:SemResult):SemSummary=>{
  let enPass = true;
  let creditScore = 0;
  let totalCredits = 0;
  let personalCredits = 0;

  Object.entries(results).forEach(([subject, grade])=>{
    if(subject.startsWith("EN")){
      enPass = (grade =="PASS")
      return
    }

    const subjectCredit = subjectCredits[subject] 
    const gradePoint  = gradePoints[grade as Grade] 

    totalCredits += subjectCredit;
    personalCredits += gradePoint;
    creditScore += (subjectCredit * gradePoint)
  })

  return {
    gpa:creditScore/totalCredits,
    enPass,
    totalCredits,
    personalCredits
  }
}
