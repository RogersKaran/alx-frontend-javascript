interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearOfExpertise?: number;
    location: string;
    [key : string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

interface Directors extends Teachers {
    numberOfReports: number;
}

const director!: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName, lastName) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const firstName = "John";
const lastName = "Doe";
console.log(printTeacher(firstName, lastName));

interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements studentClass {
    constructor(private firstName: string lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

}
