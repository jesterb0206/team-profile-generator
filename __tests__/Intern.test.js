// Import Intern Constructor

const Intern = require('../lib/Intern');

// Creates An Intern Object

test('Creates an Intern Object', () => {
  const intern = new Intern('Bradley', 7, 'jesterb@seattleu.edu', 'UW');

  expect(intern.school).toEqual(expect.any(String));
});

// Gets School From getSchool()

test('Gets Intern School', () => {
  const intern = new Intern('Bradley', 7, 'jesterb@seattleu.edu', 'UW');

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// Gets Role From getRole()

test('Gets Role of Employee', () => {
  const intern = new Intern('Bradley', 7, 'jesterb@seattleu.edu', 'UW');

  expect(intern.getRole()).toEqual('Intern');
});
