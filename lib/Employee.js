class Employee {
    constructor(employeeName, ID, Email){
        this.employeeName = employeeName;
        this.id = ID;
        this.email = Email;
    }
    
}

getName();{
    return this.name;
}
getId();{
    return this.id;
}
getName();{
    return this.email;
}



const emp = new Employee('Sam', 10, 'sam@email.com');

console.log(emp);
console.log(emp.employeeName);
console.log(emp.id);
console.log(emp.email);

module.exports = Employee;