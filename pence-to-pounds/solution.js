function convertFromPenceToPounds(pence) {
  let pounds = pence / 100;
  return `£${Math.round(pounds)}`; // Format to two decimal places
}

module.exports = { convertFromPenceToPounds };

console.log(convertFromPenceToPounds(1299)); // should return "£12.99"
