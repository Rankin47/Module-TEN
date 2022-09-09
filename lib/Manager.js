class Manager {
    constructor(managereName, ID, Email){
        this.managerName = managerName;
        this.id = ID;
        this.email = Email;
    }
    
}


const emp = new Manager('Sam', 10, 'sam@email.com');

console.log(emp);
console.log(emp.managerName);
console.log(emp.id);
console.log(emp.email);

module.exports = Manager