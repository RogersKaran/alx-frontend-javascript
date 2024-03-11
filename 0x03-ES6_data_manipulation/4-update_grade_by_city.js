function updateStudentGradeByCity(students, city, newGrades) {
  // Filter out the students in the specified city
  const filteredStudent = students.filter(student => student.location === city);
  // Map the grades to the correct student
  filteredStudent.map( student => {
    const gradeObj = newGrade.find(grade => grade.StudentId === studentId);
    const grade = gradeObj ? gradeObj.grade: "N/A";
    return { ...students, grade};
  };
}

export default updateStudentGradeByCity;
