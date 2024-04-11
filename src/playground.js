const fighters = {
    name: 'Fighters',
    sport: 'basketball',
    wins: 3,
    location: {
        city: 'Bridgeport',
        state: 'CT',
    },
    matches: [
        {
            teamName: 'Dunkaroos',
            skill: 9,
            wins: 12,
        },
        {
            teamName: 'Space Jammers',
            skill: 10,
            wins: 16,
        },
        {
            teamName: 'Mustangs',
            skill: 6,
            wins: 10,
        },
    ]
}
const getNextOpponent = (fighters) => {
    const { matches } = fighters;
    if (matches.length > 0) {
        return matches.shift().teamName;
    } else {
        return null;
    }
}
console.log(getNextOpponent(fighters));

/* const getNextOpponent = (fighters) => {
    const { name, sport, wins, location, matches } = fighters;
    for (let i = 0; i < fighters.matches.length; i++) {
        Object.values(fighters.matches[i].teamName).join("")
    }
    return;
}
console.log(getNextOpponent(fighters)); */



/* const convertToMatrix = (arrOfObj) => {
  return arrOfObj.map(obj => Object.entries(obj));
} */

