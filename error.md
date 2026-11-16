basics.ts:3:1 - error TS2322: Type 'number' is not assignable to type 'string'. 

3 names=123;
  ~~~~~


Found 1 error in basics.ts:3

; name: string; age: number; }' but required in type 'student'.

26 let student2:student={
       ~~~~~~~~

  basics.ts:16:4 - 'email' is declared here.
    16    email:string;
          ~~~~~


Found 1 error in basics.ts:26

PS C:\Users\admin\Desktop\demo\ts-practice> npx tsc --noEmit
PS C:\Users\admin\Desktop\demo\ts-practice> npx tsc --noEmit
basics.ts:4:1 - error TS2322: Type 'number' is not assignable to type 'string'. 

4 names=123
  ~~~~~

basics.ts:16:7 - error TS2322: Type '(a: number, b: number) => string' is not assignable to type 'Add'.
  Type 'string' is not assignable to type 'number'.

16 const addition: Add = (a, b) => {
         ~~~~~~~~
 
basics.ts:30:5 - error TS2741: Property 'age' is missing in type '{ id: number; 
name: string; email: string; }' but required in type 'student'.

30 let student1:student={
       ~~~~~~~~

  basics.ts:26:4 - 'age' is declared here.
    26    age:number;
          ~~~


Found 3 errors in the same file, starting at: basics.ts:4
