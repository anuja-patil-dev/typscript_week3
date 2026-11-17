import { members,Details} from './data/members.js'
import { type TeamMember,type Role,type project } from './models/team-member.js';

//task 1
console.log(members);


//task 2
class Team{
    
    constructor(private Members:TeamMember[],readonly name:string){
      
    }
    add(teamMember:TeamMember):TeamMember[]{
        this.Members.push(teamMember)
        return this.Members;
    }
    remove(id:number):TeamMember[]{
        return this.Members.filter(value => value.id !== id);
    }
    byRole(role:Role):TeamMember[]{
        return this.Members.filter(value => value.role === role);
    }
    size():number{
        return this.Members.length;
    }
}
const t=new Team(members,"TeamMember");
console.log(t.add({id:1,name:"abc",role:"admin", status:"failed"}))
console.log(t.remove(3));
console.log(t.byRole('admin'))
console.log(t.size())
console.log(t.name)


//task 3
interface Describable{
    describe(): string
}
class Teammates implements Describable{
    constructor(){
        console.log("These is TeamMate class")
    }
    describe() {
        return 'describe method'
    }
}
const team=new Teammates()
console.log(team.describe())

//task 4
function findById <T extends {id:number}>(items : T[],id:number):T| undefined{
return items.find(member => member.id ===id);
}
console.log(findById(members,2))
console.log(findById(Details,3))

//task 5
function Fetchapi():Promise<TeamMember[]>{
return new Promise(resolve=>{
setTimeout(() => resolve(members), 500);
})
}
 async function load():Promise<TeamMember[]>{
 const data=await Fetchapi();
 return data;
 }
load().then(data=> console.log(data));