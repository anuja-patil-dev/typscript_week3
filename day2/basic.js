import { members, Details } from './data/members.js';
import {} from './models/team-member.js';
//task 1
console.log(members);
//task 2
class Team {
    Members;
    name;
    constructor(Members, name) {
        this.Members = Members;
        this.name = name;
    }
    add(teamMember) {
        this.Members.push(teamMember);
        return this.Members;
    }
    remove(id) {
        return this.Members.filter(value => value.id !== id);
    }
    byRole(role) {
        return this.Members.filter(value => value.role === role);
    }
    size() {
        return this.Members.length;
    }
}
const t = new Team(members, "TeamMember");
console.log(t.add({ id: 1, name: "abc", role: "admin", status: "failed" }));
console.log(t.remove(3));
console.log(t.byRole('admin'));
console.log(t.size());
console.log(t.name);
class Teammates {
    constructor() {
        console.log("These is TeamMate class");
    }
    describe() {
        return 'describe method';
    }
}
const team = new Teammates();
console.log(team.describe());
//task 4
function findById(items, id) {
    return items.find(member => member.id === id);
}
console.log(findById(members, 2));
console.log(findById(Details, 3));
//task 5
function Fetchapi() {
    return new Promise(resolve => {
        setTimeout(() => resolve(members), 500);
    });
}
async function load() {
    const data = await Fetchapi();
    return data;
}
console.log(load());
//# sourceMappingURL=basic.js.map