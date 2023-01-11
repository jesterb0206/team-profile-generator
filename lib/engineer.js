// Import Employee Constructor

const Employee = require('./employee');

// The Engineer Constructor Extends The Employee Constructor

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Here We Call The Employee Constructor

    super(name, id, email);

    this.github = github;
  }

  // Returns The Engineer's GitHub From The Inquirer Input They Give

  getGithub() {
    return this.github;
  }

  // Override The Employee Role Type To Return Engineer Instead

  getRole() {
    return 'Engineer';
  }
}

// Export Engineer Constructor

module.exports = Engineer;
