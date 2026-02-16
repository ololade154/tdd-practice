export const reverseString = (str) => {
  let reversed = ''; // empty string to store reversed word

  // go through the string from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed; // return the reversed string
};
