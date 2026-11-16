// type annotation
let names:string="abc";
console.log("name",names)
let count:number=0
console.log("number:",count);
let isactive:boolean=true;
console.log("boolean",isactive);
let numbers:number[]=[10,20,30,40]

// type interface

interface student{
    id:number;
    name:string;
   age:number;
   email?:string;
}

let student1:student={
    id:1,
    name:"Abc",
    age:22,
    email:"abc@gmail.com"
}
console.log(student1.age)
let student2:student={
    id:1,
    name:"Abc",
    age:22,
}

// interface with extends
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    salary: number;
    department: string;
}

let emp: Employee = {
    name: "Rahul",
    age: 25,
    salary: 50000,
    department: "IT"
};

//type aliases
type employee={
    id:number,
    name:string,
    age:number
}
const employee1:employee={
    id:101,
    name:"abc",
    age:25
}
console.log(employee1.id)

type Person1 = {
    name: string;
    age: number;
};

type Employee1 = Person1 & {
    salary: number;
    department: string;
};

let emp1: Employee1 = {
    name: "Rahul",
    age: 25,
    salary: 50000,
    department: "IT"
};

// task:3
type Role='admin' | 'user';
type Status= 'pending' | 'failed'  | 'completed'
interface TeamMember{
    readonly id :number;
    name:string;
    role:Role;
    status:Status;
    email?:string;

}
const members:TeamMember[]=[
    {id:1,
        name:"abc",
        role:"admin",
        status:"failed"

    },
     {id:2,
        name:"abc",
        role:"admin",
        status:"failed"

    }, {id:3,
        name:"abc",
        role:"admin",
        status:"failed"

    },
     {id:4,
        name:"abc",
        role:"admin",
        status:"failed"

    },
     {id:5,
        name:"abc",
        role:"admin",
        status:"failed"

    },
]
console.log(members)

// task 4


const countByRole = (
    members: TeamMember[],
    role: Role
): number => {
    return members.filter(member => member.role === role).length;
};
const activeNames = (members: TeamMember[]): string[] => {
    return members
        .filter(member => member.status === "completed")
        .map(member => member.name);
};

const statusText = (status: Status): string => {
    return `Current status: ${status}`;
};
type Action = 'count' | 'active' | 'status';

const action: Action = 'active';

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
const formatContact=(value: string | number): string => {
 if(typeof value === "number"){
    return value.toString()
 }
 else{
    return value.trim();
 }
}
 console.log(formatContact('abc@gmail.com'))