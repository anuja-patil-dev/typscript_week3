export type Role='admin' | 'user';
 export type Status= 'pending' | 'failed'  | 'completed'
export interface TeamMember{
    readonly id :number;
    readonly name:string;
    role:Role;
    status:Status;
    email?:string;

}
export type project={
    id:number,
    title:string,
    objectives:string
}