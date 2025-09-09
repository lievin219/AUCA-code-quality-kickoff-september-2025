/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function findingR(ls) {
  if (!Array.isArray(ls)) return 0; 

  return ls.filter(item => item === "R").length;
}

export default function countRsFromString(string = "") {
  return string.split('').filter(character => character === "R").length
}