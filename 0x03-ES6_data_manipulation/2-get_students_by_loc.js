function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === "San Francisco");
}

export default getStudentsByLocation;

