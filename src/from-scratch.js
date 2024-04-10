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

const becomeSecretAgent = () => {
};

const carMaker = () => {
};

const weAreNotFriends = () => {
};

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
