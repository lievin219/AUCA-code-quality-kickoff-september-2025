/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function hasFood(items) {
  c(!Array.isArray(items)) 
  return [];

  return items.filter(item => item && item.type === "Food");
}

export default function getFoodObjects(objects) {
  const foods = []
  for (const object of objects) {
    if (object.type === "Food") foods.push(object)
  }

  return foods
}
