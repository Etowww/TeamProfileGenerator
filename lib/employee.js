// Employee Class
// This will serve as the parent class for the other classes

// It recieves as properties Name / ID / Email
// It also has the methods getName() / getID() / getEmail() / getRole()
class Employee {

    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName () {
        return this.name;
    };

    getId () {
        return this.id;
    };

    getEmail () {
        return this.email;
    };

    getRole () {
        return 'Employee'
    };
}


module.exports = Employee;