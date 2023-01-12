// Import Engineer Constructor

const Engineer = require('../lib/Engineer');

// Creates An Engineer Object

test('Creates an Engineer Object', () => {
  const engineer = new Engineer(
    'Bradley',
    7,
    'jesterb@seattleu.edu',
    'jesterb0206'
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// Gets GitHub From getGithub()

test('Gets Engineer GitHub Account', () => {
  const engineer = new Engineer(
    'Bradley',
    7,
    'jesterb@seattleu.edu',
    'jesterb0206'
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// Gets Role From getRole ()

test('Gets Role of Employee', () => {
  const engineer = new Engineer(
    'Bradley',
    7,
    'jesterb@seattleu.edu',
    'jesterb0206'
  );

  expect(engineer.getRole()).toEqual('Engineer');
});
