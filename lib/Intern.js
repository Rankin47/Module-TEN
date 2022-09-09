class Intern {
    constructor(internName, ID, Email){
        this.internName = internName;
        this.id = ID;
        this.email = Email;
    }
    
}


const emp = new Intern('Sam', 10, 'sam@email.com');

console.log(emp);
console.log(emp.internName);
console.log(emp.id);
console.log(emp.email);