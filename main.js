#!/usr/bin/env node
import inquirer from "inquirer";
let students = [];
let staff = [];
function addStudent(name) {
    if (!students.includes(name)) {
        students.push(name);
        console.log(`Welcome, ${name}!`);
    }
    else {
        console.log(`Welcome back, ${name}! Nice to see you again.`);
    }
}
function addStaff(name) {
    if (!staff.includes(name)) {
        staff.push(name);
        console.log(`Welcome aboard, ${name}!`);
    }
    else {
        console.log(`Welcome back, ${name}! Nice to see you again.`);
    }
}
const program = async () => {
    console.log("Welcome");
    while (true) {
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Who would you like to connect with?",
                choices: ["student", "staff", "exit"],
            },
        ]);
        if (ans.select === "staff") {
            const staffAns = await inquirer.prompt([
                {
                    name: "staff",
                    type: "input",
                    message: "Enter the staff name you would like to talk to:",
                },
            ]);
            const staffMember = staff.find((s) => s === staffAns.staff);
            if (staffMember) {
                console.log(`Welcome back, ${staffMember}! Nice to see you again.`);
            }
            else {
                console.log("New staff member, adding to the list.");
                addStaff(staffAns.staff);
            }
        }
        else if (ans.select === "student") {
            const studentAns = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Enter the student name you would like to talk to:",
                },
            ]);
            const student = students.find((s) => s === studentAns.student);
            if (student) {
                console.log(`Welcome back, ${student}! Nice to see you again.`);
            }
            else {
                console.log("New student, adding to the list.");
                addStudent(studentAns.student);
            }
        }
        else if (ans.select === "exit") {
            console.log("Exiting the program.");
            break;
        }
    }
};
program();
