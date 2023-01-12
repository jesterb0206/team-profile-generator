// Import Manager Constructor

const Manager = require('../lib/manager');

// Creates A Manager Object

test('Creates a Manager Object', () => {
  const manager = new Manager('Bradley', 7, 'jesterb@seattleu.edu', 11);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets Role From getRole()

test('Gets Role of Employee', () => {
  const manager = new Manager('Bradley', 7, 'jesterb@seattleu.edu', 11);

  expect(manager.getRole()).toEqual('Manager');
});
