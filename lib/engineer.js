// Employee Parent Class
const Employee = require("./employee");

// Engineer Sub class extends employee by adding a office number property
// getRole() method gets overwritten to say manager instead of employee

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };


};


module.exports = Engineer;