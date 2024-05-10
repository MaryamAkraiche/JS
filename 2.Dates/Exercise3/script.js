  // Part1

let currentDate = new Date();

const futureTimestamp = currentDate.getTime() + (80000 * 60 * 60 * 1000);

var futureDate = new Date(futureTimestamp).toLocaleString();
console.log(futureDate);
  
  // Part2

function futureDateCounter(){
    let currentDate = new Date();
};