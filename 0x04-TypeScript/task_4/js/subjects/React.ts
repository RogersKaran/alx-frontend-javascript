// Import Teacher interface from Teacher.ts
import { Subjects } from "./Teacher";

// Merge additional attribute to Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React class in Subjects namespace
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

