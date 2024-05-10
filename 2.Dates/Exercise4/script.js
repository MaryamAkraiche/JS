// EXERCICE 1

let now = new Date();

const brusselsTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Europe/Brussels'});

const anchorageTime = new Date().toLocaleString('fr-BE',{ timeZone: 'America/Anchorage'});

const reykjavikTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Atlantic/Reykjavik'});

const stPetersburgTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Europe/Moscow'});

// console.log("anchorage Time: "anchorageTime, "brussels Time: ", brusselsTime);
// console.log("Reykjavik Time: ", "brussels Time: ", brusselsTime);
// console.log("Saint-Petersburg Time: ", "brussels Time: ", brusselsTime);


// EXERCICE 2

  // Part1
const currentTimestamp = Date.now();

const birthTimestamp = new Date('2001-07-07').getTime();

const timeDifference = currentTimestamp - birthTimestamp;

const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// console.log("I am", daysPassed, "days old");


  // Part2
  
function daysCounter(dateString){

    let currentDate = new Date();

    let inputDate = new Date(dateString);

    const timeDifference = currentDate.getTime() - inputDate.getTime();

    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysPassed;
}
  // Test
// const inputDate = '2019-06-19';
// const days = daysCounter(inputDate);
// console.log("It's been ", days, "days");