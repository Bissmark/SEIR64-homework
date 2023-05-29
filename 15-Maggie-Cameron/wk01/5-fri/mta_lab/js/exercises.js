
// MTA Lab
// Objectives:

//     Apply your knowledge of Ruby to solve a real world problem.
//     Get really good at array manipulation.

// Activity

//     Create a program that models a simple subway system.

//     The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

// # `puts` shows output similar to this:
// # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// # "Change at Union Square."
// # "Your journey continues through the following stops: 23rd, 28th, 33rd."
// # "7 stops in total."

//     There are 3 subway lines:
//         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, 8th
//         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//         All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:

//     Work out how you would do it on paper first! Then start to explain that process in Ruby.
//     Get the program to work for a single line before trying to tackle multiple lines.
//     Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
//     Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//     The key to the lab is finding the index positions of each stop. (hint: index)
//     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


const nLine = ['Times Square', '34th', '28th N', '23rd N', 'Union Square','8th'];
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const sixLine = ['Grand Central', '33rd', '28th six', '23rd six', 'Union Square','Astor Place'];

const planTrip = function (firstLine, startingStation, destination, secondLine) {
   const firstLineForLog = [];
   if (firstLine === nLine)
      firstLineForLog.push("N");
   if (firstLine === lLine)
      firstLineForLog.push("L");
   if (firstLine === sixLine)
      firstLineForLog.push("Six");

   const secondLineForLog = [];
   if (secondLine === nLine)
      secondLineForLog.push("N");
   if (secondLine === lLine)
      secondLineForLog.push("L");
   if (secondLine === sixLine)
      secondLineForLog.push("Six");

   const firstStops = [];
   const secondStops = [];
   const startIndex = firstLine.indexOf(startingStation);
   const endIndex = firstLine.indexOf(destination);
   const unionIndex = firstLine.indexOf("Union Square");
   let stopCount = '';

   if (endIndex !== -1) {
      
      if (startIndex < endIndex) {
         for (let i = startIndex; i <= endIndex; i++) {
            firstStops.push(firstLine[i]);
            stopCount++;
         };
      };
      
      if (startIndex > endIndex) {
         for (let i = startIndex; i >= endIndex; i--) {
            firstStops.push(firstLine[i]);
            stopCount++;
         }; 
      };

      const firstStopsString = firstStops.join(', ');
      console.log( `You must travel through the following stops on the ${ firstLineForLog } line: ${ firstStopsString }. A total of ${ stopCount } stops.` ); 

   } else {

      if (startIndex < endIndex) {
         for (let i = startIndex; i <= unionIndex; i++) {
            firstStops.push(firstLine[i]);
            stopCount++;
         };
      };
      
      if (startIndex > endIndex) {
         for (let i = startIndex; i >= unionIndex; i--) {
            firstStops.push(firstLine[i]);
            stopCount++;
         }; 
      };

      const secondEndIndex = secondLine.indexOf(destination);
      
      if (unionIndex < secondEndIndex) {
         console.log(secondEndIndex);
         for (let i = unionIndex; i <= secondEndIndex; i++) {
            secondStops.push(secondLine[i]);
            stopCount++;
         };
      };

      if (unionIndex > secondEndIndex) {
         for (let i = unionIndex; i >= secondEndIndex; i--) {
            secondStops.push(secondLine[i]);
            stopCount++;
         };
      };

      const firstStopsString = firstStops.join(', ');
      const secondStopsString = secondStops.join(', ');

      console.log( `You must travel through the following stops on the ${ firstLineForLog } line: ${ firstStopsString }.` );
      console.log( `Change at Union Square.` );
      console.log( `Your journey continues through the following stops on the ${ secondLineForLog } line: ${ secondStopsString }. A total of ${ stopCount } stops` );
   };
};

planTrip(nLine, "28th N", "Union Square");
planTrip(lLine, "3rd", "Times Square", nLine);
planTrip(sixLine, "Astor Place", "Grand Central");


