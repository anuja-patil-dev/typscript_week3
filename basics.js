"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type annotation
let names = "abc";
console.log("name", names);
let count = 0;
console.log("number:", count);
let isactive = true;
console.log("boolean", isactive);
let numbers = [10, 20, 30, 40];
let student1 = {
    id: 1,
    name: "Abc",
    age: 22,
    email: "abc@gmail.com"
};
console.log(student1.age);
let student2 = {
    id: 1,
    name: "Abc",
    age: 22,
};
let emp = {
    name: "Rahul",
    age: 25,
    salary: 50000,
    department: "IT"
};
const employee1 = {
    id: 101,
    name: "abc",
    age: 25
};
console.log(employee1.id);
let emp1 = {
    name: "Rahul",
    age: 25,
    salary: 50000,
    department: "IT"
};
const members = [
    { id: 1,
        name: "abc",
        role: "admin",
        status: "failed"
    },
    { id: 2,
        name: "abc",
        role: "admin",
        status: "failed"
    }, { id: 3,
        name: "abc",
        role: "admin",
        status: "failed"
    },
    { id: 4,
        name: "abc",
        role: "admin",
        status: "failed"
    },
    { id: 5,
        name: "abc",
        role: "admin",
        status: "failed"
    },
];
console.log(members);
// task 4
const countByRole = (members, role) => {
    return members.filter(member => member.role === role).length;
};
const activeNames = (members) => {
    return members
        .filter(member => member.status === "completed")
        .map(member => member.name);
};
const statusText = (status) => {
    return `Current status: ${status}`;
};
const action = 'active';
switch (action) {
    case 'count':
        console.log(countByRole(members, 'admin'));
        break;
    case 'active':
        console.log(activeNames(members));
        break;
    case 'status':
        console.log(statusText('failed'));
        break;
    default:
        console.log("Invalid action");
}
// task 5
const formatContact = (value) => {
    if (typeof value === "number") {
        return value.toString();
    }
    else {
        return value.trim();
    }
};
console.log(formatContact('abc@gmail.com'));
//# sourceMappingURL=basics.js.map