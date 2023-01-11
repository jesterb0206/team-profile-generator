// Employee Constructor

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Returns The Employee's Name From The Inquirer Input They Give

  getName() {
    return this.name;
  }

  // Returns The Employee's ID From The Inquirer Input They Give

  getId() {
    return this.id;
  }

  // Returns The Employee's Email From The Inquirer Input They Give

  getEmail() {
    return this.email;
  }

  // Returns The Role Type Employee

  getRole() {
    return 'Employee';
  }
}

// Export Employee Constructor

module.exports = Employee;
