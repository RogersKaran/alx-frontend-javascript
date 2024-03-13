// Import Teacher interface from Teacher.ts
import { Subjects } from "./Teacher";

// Merge additional attribute to Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Cpp class extending from Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

