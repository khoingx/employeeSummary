class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {};
    getRole() {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, title)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee{
    constructor(github) {
        super(name, id, title)
        this.github = github;
    }
    getGithub() {};
    getRole(){
        return 'Engineer';
    };
}

class Intern extends Employee{
    constructor(school){
        super(name, id, title);
        this.school = school;
    }
    getSchool() {};
    getRole() {
        return 'Intern';
    }
    
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};