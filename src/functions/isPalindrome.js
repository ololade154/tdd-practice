export const isPalindrome = (str) => {
  let reversed = ''; // empty string to store reversed word

  // go through the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  // check if original word is same as reversed
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
};
