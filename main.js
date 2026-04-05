/**
 * Function for converting between binary and decimal systems 
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
// Main function for converting between binary and decimal systems
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // Binary to Binary or Decimal to Decimal
  if (inputNumberSystem === outputNumberSystem) {
    return inputNumber;
  }
  // Decimal to Binary
  else if (inputNumberSystem === 10 && outputNumberSystem === 2) {
    return dec2bin(inputNumber);
  }
  // Binary to Decimal
  else if (inputNumberSystem === 2 && outputNumberSystem === 10) {
    return bin2dec(inputNumber);
  }
  // Not Binary or Decimal
  else {
    return "Unsupported number system conversion.";
  }
}
// Function for converting from decimal system to binary system
function dec2bin(inputNumber) {
  // Check if the input number is valid for decimal system
  for (let i = 0; i < inputNumber.length; i++) {
    // Check if the current character is not a digit between 0 and 9
    if (inputNumber[i] < "0" || inputNumber[i] > "9") {
      return "Invalid input for decimal system";
    }
  }
  // Convert string to number and initialize binary string
  let n = +inputNumber;
  let bin = "";
  if (n === 0) {
    bin = "0";
  }
  else {
    while (n > 0) {
      bin = (n % 2) + bin;
      n = Math.floor(n / 2);
    }
  }
  return bin;
}
// Function for converting from binary system to decimal system
function bin2dec(inputNumber) {
  let dec = 0;
  // Check if the input number is valid for binary system
  for (let i = 0; i < inputNumber.length; i++) {
    if (inputNumber[i] !== "0" && inputNumber[i] !== "1") {
      return "Invalid input for binary system";
    }
    dec = (dec * 2) + +inputNumber[i];
  }
  return "" + dec;
}
// Function to return decimal and binary systems as permitted input systems
export function permittedInputSystems() {
  return [10, 2];
}
// Function to return decimal and binary systems as permitted output systems
export function permittedOutputSystems() {
  return [10, 2];
}