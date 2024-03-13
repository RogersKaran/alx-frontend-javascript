// Import necessary classes from subjects namespace
import { Subjects } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Create and export a constant cpp for Cpp Subjects
export const cpp = new Subjects.Cpp();

// Create and export a constant java for Java Subjects
export const java = new Subjects.Java();

// Create and export a constant react for React Subjects
export const react = new Subjects.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("C++:");
// Set cTeacher as the teacher
cpp.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava:");
// Set cTeacher as the teacher
java.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact:");
// Set cTeacher as the teacher
react.setTeacher(cTeacher);
// Call the two methods getRequirements and getAvailableTeacher and print the strings they return
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

