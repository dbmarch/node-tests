const expect = require ('expect');
const utils = require('./utils');

it ('should add two numbers', () => {
   var res = utils.add(33,11);
   expect (res).toBe(44).toBeA('number');

//    if (res !== 44) {
//       throw new Error (`Expected 44, but received ${res}`);
//    }
});


it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
    // if (res != 9) {
    //     throw new Error (`Expected 9, received ${res}`);
    // }
});

it('should expect some values', () => {
    //expect(12).toNotBe(11);
    expect ({name: "Dave"}).toEqual({name: "Dave"});
});

it ('should include', () => {
    expect ([2,3,4]).toInclude(3);
});


it ('should include object', () => {
    expect ({ name: 'Dave',
    age:30,
    location : 'St. Louis'}).toInclude ({ age: 30 });
});

it('verify first and last name', () => {
    // verify first and last names are set.
    // assert first and last name with proper values
    const name = "John Boat";
    var user = {};

    console.log ("Calling SetName:", name);
    var res = utils.setName(user, name);
    console.log (user);
    expect(user).toBeA('object');
    expect(user).toIncludeKeys(['firstName', 'lastName']);
    expect(user.firstName).toBeA('string');
    expect(user.lastName).toBeA('string');

    console.log ("RESULT", res);
    expect(res).toInclude({firstName: 'John', lastName: 'Boat'});
});