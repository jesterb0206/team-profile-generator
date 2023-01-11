// Import Employee Constructor

const Employee = require('./employee');

// The Manager Constructor Extends The Employee Constructor

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Here We Call The Employee Constructor

    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // Override The Employee Role Type To Return Manager Instead

  getRole() {
    return 'Manager';
  }
}

// Export Manager Constructor

module.exports = Manager;
