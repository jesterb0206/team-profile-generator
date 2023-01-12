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
