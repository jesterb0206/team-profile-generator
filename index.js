// Link to Template Helper Code

const generateHTML = require('./src/generateHTML');

// Team Profile Constructors

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Node Modules

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team Array

const teamArray = [];

// Manager Inquirer Prompts

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the manager!',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the name of the manager!'
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter the ID of the manager!',
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log(
              'Not a valid response! Please enter the ID of the manager!'
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address of the manager!',
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the email address of the manager!'
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the office number of the manager!',
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log(
              'Not a valid response! Please enter the office number of the manager!'
            );
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

// Employee Inquirer Prompts

const addEmployee = () => {
  console.log('Adding employees to the team!');

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Please select the role of the employee you wish to add!',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee!',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the name of the employee!'
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter the ID of the employee!',
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log(
              'Not a valid response! Please enter the ID of the employee!'
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address of the employee!',
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the email address of the employee!'
            );
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter the GitHub username of the engineer!',
        when: (input) => input.role === 'Engineer',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the GitHub username of the engineer!'
            );
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the school of the intern!',
        when: (input) => input.role === 'Intern',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              'Not a valid response! Please enter the school of the intern!'
            );
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more members to your team?',
        default: false,
      },
    ])
    .then((employeeData) => {
      // Data For Each Of The Employee Types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
