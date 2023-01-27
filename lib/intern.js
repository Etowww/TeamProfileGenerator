// Employee Parent Class
const Employee = require("./employee");

// Intern Sub class extends employee by adding a school property
// getRole() method gets overwritten to say Intern instead of employee

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };


};


module.exports = Intern;