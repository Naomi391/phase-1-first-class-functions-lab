// Code your solution in this file!
/*
const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]];
};
*/

const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
  return function (fare) {
    return multiply * fare;
  };
};
//const thingToReturn = createFareMultiplier(multiply); - Assign it to a new variable
//console.log(thingToReturn()); - use this to see what is in the function

const fareDoubler = createFareMultiplier(2);
//console.log(fareDoubler()); - To see the details inside the function

const fareTripler = createFareMultiplier(3);
//console.log(fareTripler()); - To see what's on the inside of the function

function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
  return selectorFunction(arrayOfDrivers);
}
