function calculatePercentageChange(original, newAmount) {

  // when there is a difference, the program returns percentage
  if (newAmount - original !== 0){                          

  const difference = newAmount - original;
  let percentageDifference = (difference/ original) * 100;
  return parseInt((percentageDifference.toFixed()));

  //If there is no difference, program returns zero

  } else {
    return 0
  }
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(50, 40)); // should return -20 as there's been a 20% decrease from 50 to 40
