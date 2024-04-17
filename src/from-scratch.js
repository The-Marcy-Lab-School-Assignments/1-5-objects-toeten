/** FEEDBACK: Great job! You have all test cases passing! */
const coolGreeting = (person) => {
  const { name } = person
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

const listHobbies = (person) => {
  const { name, age, hobbies } = person
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${name} likes ${person.hobbies[i]}.`);
  }
  return;
};

const getNextOpponent = (fighters) => {
  if (fighters.matches.length === 0) {
    return null;
  }
  const { matches } = fighters;
  return matches[0].teamName
};
// console.log(getNextOpponent(fighters));

const listAllKeys = (objecto) => {
  return Object.keys(objecto)
};

const listAllValues = (objecta) => {
  return Object.values(objecta)
};

const convertToMatrix = (arrOfObj) => {
  if (arrOfObj.length === 0) {
    return [];
  }
  const keys = Object.keys(arrOfObj[0])
  return [keys, ...arrOfObj.map(obj => keys.map(key => obj[key]))]
}

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
