export const findMax = (arr) => {
  let max = arr[0]; // start with first number

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // update max if bigger number is found
    }
  }

  return max; // return the largest number
};
