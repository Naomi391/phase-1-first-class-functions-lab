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

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
  return selectorFunction(arrayOfDrivers);
}
