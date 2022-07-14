abstract class Department {

    static fiscalYear = 2022;
    protected employees: string[] = [];

    constructor( protected id: string, public name : string ) {
       // this.name = n;
    }
    abstract describe( this: Department): void;

    static createEmployee( name: string){
        return {name: name}
    }
    addEmployee(employee :string){
        this.employees.push(employee)
    }
    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor( id:string, public admins:string[] ){
        super(id, 'IT');
        this.admins = admins;
    }
    describe(){
        console.log(`IT Department -ID: ${this.id}`)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        } 
        throw new Error('No report found.')
    }
    set mostRecentReport( value: string ){
        if(!value){
            throw new Error('Empty report.')
        }
        this.addReport(value);
    }
    private constructor(id : string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe(){
        `Accounting Department -ID: ${this.id}`
    }
    addEmployee(name :string){
        if(name === 'Jhoana'){
            return;
        }
        this.employees.push(name)
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports(){
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Jhoana');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Jhoana']);

 it.addEmployee('Jhoana');
 it.addEmployee('Gerardo');
 it.describe();
 it.printEmployeeInfo();

console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Report 1';

accounting.addReport('Something went wrong!');

accounting.addEmployee('Jhoana')
accounting.addEmployee('Israel')

console.log(accounting.mostRecentReport)

accounting.describe();