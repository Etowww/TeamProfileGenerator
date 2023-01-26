// Employee Parent Class
const Employee = require("./employee");

// Manager Sub class extends employee by adding a office number property
// getRole() method gets overwritten to say manager instead of employee

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };


};


module.exports = Manager;