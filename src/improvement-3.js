/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
// export default function findLargestNumber(numbers) {
//   let largest = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }
//   return largest;
// }

// const findLargestNumber = numbers => Math.max(...numbers);
export default function findLargestNumber(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error("Input must be a non-empty array of numbers");
    }
    return Math.max(...numbers);
  }
  