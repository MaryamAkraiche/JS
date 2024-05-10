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