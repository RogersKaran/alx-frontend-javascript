interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student: Student = {
    firstName: "Morio",
    lastName: "Ngori",
    age: 23,
    location: "Mafichoni",
}

const student1: Student = {
    firstName: "Msupa",
    lastName: "S",
    age: 18,
    location: "Wheels",
}

const studentList: Student[] = [student1, student2];

function studentTable() {
    const table = document.createElement("table");
    studentList.forEach((student) => {
        const row = document.createElement("tr");
	const firstNameCall = document.createElement("td");
	firstNameCall.textContent = student.firstName;
	const locationcall = document.createElement("td");
	locationCall.textContent = student.location;
	row.appendChild(firstNameCall);
	row.appendChild(locationcall);
	table.appendChild(row);
    });
    document.body,appendChild(table);
}
 
renderTable();

