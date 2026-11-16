let message: string = "Hello TypeScript";

console.log(message);

console.log("encapsulation")

class Account{
    private balance:number=1000;
    deposite(amount:number){
        if(amount>0){
            this.balance=this.balance + amount;
        }
        else{
            console.log("enter your correct amount")
        }
    }

    withdraw(amount:number){
        if(amount>0 && this.balance>0){
            this.balance -=amount;
        }
        else{
             console.log("Insufficient balance");
        }
    }

    showBalance(){
        return this.balance;
    }
} 
 
const a= new Account();
a.deposite(1000);
a.withdraw(500);
console.log(a.showBalance())

console.log("inheritance")

class Addition{
    total:number=0;
    add(num1:number,num2:number){
      this.total=num1 +num2;
      return this.total;
    }
}
class Substraction extends Addition{
    total: number=0;
    sub(num1:number,num2:number){
        this.total=num2-num1;
        return this.total;
    }
}
const s=new Substraction();
console.log(s.sub(30,10))
console.log(s.add(30,10))


console.log("polymorphism")
class Mathematics {
    total: number = 0;

    add(num1: number, num2: number, num3?: number) {
        this.total = num1 + num2 + (num3 ?? 0);
        console.log(this.total);
    }
}

class Three extends Mathematics {
    override add(num1: number, num2: number, num3?: number) {
        this.total = num1 + num2 + (num3 ?? 0);
        console.log(this.total);
    }
}

const th: Mathematics = new Three();

th.add(10, 20);       
th.add(10, 20, 30);

console.log('method overloading');


class Multiplication {
    total: number = 0;


    mul(num1: number, num2: number): void;
    mul(num1: number, num2: number, num3: number): void;

    
    mul(num1: number, num2: number, num3?: number): void {
        if (num3 !== undefined) {
            this.total = num1 * num2 * num3;
        } else {
            this.total = num1 * num2;
        }

        console.log(this.total);
    }
}

const m = new Multiplication();

m.mul(2, 2);       
m.mul(2, 2, 2);    



abstract class Vehicle {

    abstract start(): void;

    stop() {
        console.log("Vehicle stopped");
    }
}

class Car extends Vehicle {

    start() {
        console.log("Car starts with a key");
    }
}

class Bike extends Vehicle {

    start() {
        console.log("Bike starts with a button");
    }
}

const car = new Car();
car.start(); 
car.stop();  

const bike = new Bike();
bike.start(); 

console.log("enum")
enum OrderStatus {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

let statu: OrderStatus = OrderStatus.Pending;
console.log(statu)

enum direction{
    south=10,
    west,
    north
}
console.log(direction.north)


console.log("multiple inheritance")
interface Camera {
    takePhoto(): void;
}

interface Phone {
    makeCall(): void;
}

interface Music {
    playMusic(): void;
}


interface SmartDevice extends Camera, Phone, Music {
}
class SmartPhone implements SmartDevice {

    takePhoto() {
        console.log("Taking photo");
    }

    makeCall() {
        console.log("Making call");
    }

    playMusic() {
        console.log("Playing music");
    }
}

const mobile = new SmartPhone();

mobile.takePhoto();
mobile.makeCall();
mobile.playMusic();


let userId: number | string;
userId=122;
console.log(userId)
userId="user123"
console.log(userId)


type Status = "Pending" | "Processing" | "Delivered";
let orderStatus: Status = "Pending";
orderStatus = "Delivered";
console.log(orderStatus);
