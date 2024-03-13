// Import Teacher interface from Teacher.ts
import { Subjects } from "./Teacher";

// Subject class in Subjects namespace
namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    constructor() {
      this.teacher = {} as Teacher;
    }

    // Setter method to set teacher
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

