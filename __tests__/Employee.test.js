// Import Employee Constructor

const Employee = require('../lib/employee');

// Creates An Employee Object

test('Creates an Employee Object', () => {
  const employee = new Employee('Bradley', 7, 'jesterb@seattleu.edu');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Gets Name from getName()

test('Gets Employee Name', () => {
  const employee = new Employee('Bradley', 7, 'jesterb@seattleu.edu');

  expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID from getID()

test('Gets Employee ID', () => {
  const employee = new Employee('Bradley', 7, 'jesterb@seattleu.edu');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets Email From getEmail()

test('Gets Employee Email', () => {
  const employee = new Employee('Bradley', 7, 'jesterb@seattleu.edu');

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Gets Role from getRole()

test('Gets Role of Employee', () => {
  const employee = new Employee('Bradley', 7, 'jesterb@seattleu.edu');

  expect(employee.getRole()).toEqual('Employee');
});
