// Import Employee Constructor

const Employee = require('./employee');

// The Intern Constructor Extends The Employee Constructor

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Here We Call The Employee Constructor

    super(name, id, email);

    this.school = school;
  }

  // Returns The Intern's School From The Inquirer Input They Give

  getSchool() {
    return this.school;
  }

  // Override The Employee Role Type To Return Intern Instead

  getRole() {
    return 'Intern';
  }
}

// Export Intern Constructor

module.exports = Intern;
