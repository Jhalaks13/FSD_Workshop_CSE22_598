
const fs = require('fs');

const fileName = 'attendance.txt';

function addStudent(name) {
    fs.appendFileSync(fileName, name + '\n');
    console.log(name + " added successfully.");
}


function showStudents() {
    if (!fs.existsSync(fileName)) {
        console.log("No attendance records found.");
        return;
    }

    const data = fs.readFileSync(fileName, 'utf8');
    console.log("Student Attendance List:\n" + data);
}

function updateStudent(oldName, newName) {
    if (!fs.existsSync(fileName)) {
        console.log("Attendance file not found.");
        return;
    }

    let data = fs.readFileSync(fileName, 'utf8');
    let names = data.split('\n');

    if (!names.includes(oldName)) {
        console.log("Student not found.");
        return;
    }

    names = names.map(name =>
        name === oldName ? newName : name
    );

    fs.writeFileSync(fileName, names.join('\n'));
    console.log("Name updated successfully.");
}

function deleteStudent(name) {
    if (!fs.existsSync(fileName)) {
        console.log("Attendance file not found.");
        return;
    }

    let data = fs.readFileSync(fileName, 'utf8');
    let names = data.split('\n');

    if (!names.includes(name)) {
        console.log("Student not found.");
        return;
    }

    names = names.filter(student => student !== name);

    fs.writeFileSync(fileName, names.join('\n'));
    console.log(name + " deleted successfully.");
}

addStudent("Krishna");
addStudent("Rahul");
addStudent("Aman");

showStudents();

updateStudent("Rahul", "Rohit");

showStudents();

deleteStudent("Aman");

showStudents();
