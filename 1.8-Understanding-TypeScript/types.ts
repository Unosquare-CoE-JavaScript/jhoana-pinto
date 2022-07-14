type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jhoana',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function add(a:number, b:number) : number;  // This is a function overload
function add(a:string, b:string) : string; // This too
function add(a:string, b:number) : string;  // This too
function add(a:number, b:string) : string; // This too

function add(a:Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString() + b.toString();
    }
    return +a + +b;
}

const res = add('Jhoana', 'Pinto');
res.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Jhoana',
    job: { title : 'Developer', description: 'Writes cool code' }
}

console.log(fetchedUserData?.job?.title);

const userInput = null;
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo( emp: UnknownEmployee ){
    console.log(`Name: ${emp.name}`);
    if('privileges' in emp){

        console.log(`Privileges: ${emp.privileges}`)
    }
    if('startDate' in emp){

        console.log(`StartDate: ${emp.startDate}`)
    }
}

printEmployeeInfo(e1)

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }
    loadCargo( amount : number ){
        console.log(`Loading ${amount} of cargo...`)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle( vehicle : Vehicle ){
    vehicle.drive();
    //if('loadCargo' in vehicle){
    if(vehicle instanceof Truck){
        vehicle.loadCargo(500);
    }
    
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal : Animal){
    
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving with ${speed} of speed!`);
    
}

moveAnimal({type: 'horse', runningSpeed : 500})

//const textInput = <HTMLInputElement>document.getElementById('input')!;
const textInput = <HTMLInputElement>document.getElementById('input')! as HTMLInputElement;

textInput.value = 'Hi!'

interface ErrorContainer {
    [prop: string]: string; // This is an index Type
}

const errorBag: ErrorContainer = { username : 'User not found!' };

