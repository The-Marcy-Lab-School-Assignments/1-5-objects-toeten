const coolGreeting = (person) => {
  const { name, bio, age, isCool } = person
  if (person.isCool === true) {
    return `What is UP ${name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};
//before i had line 16 say person.name = spyHandle and
//it was only replacing the property (look at tests; we need to replace key AND property.)

const carMaker = (name, maker, year) => {
  let coolCar = {
    name,
    year,
    maker,
    needsOilChange: false
  }
  return coolCar
};
//we can use a boolean as the property
//remember, booleans are just values!

const weAreNotFriends = (person) => {
  return person.friends.pop()
};
//used this before: delete person.friends.length - 1; 
//no idea how to return the deleted value that way

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
