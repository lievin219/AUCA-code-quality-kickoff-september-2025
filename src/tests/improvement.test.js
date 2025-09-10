import findingR from "../improvement-1";
// import countRsFromString from "../improvement-2";
import findLargestNumber from "../improvement-3";

const items = [
  {name: 'Carrot', type: 'Food'},
  {name: 'Mercedes', type: 'Car'},
  {name: 'Tomato', type: 'Food'},
  {name: 'Corn', type: 'Food'},
  {name: 'BMW', type: 'Car'}
]

const values = [2, 45, 6, 78, 25];

describe("IMPROVEMENT", () => {
  test("function 1 should still work", () => {
    expect(findingR("abcdefRRR1234")).toBe(3);
    expect(findingR("abcdefrRR1234")).toBe(2);
  });

  // test("function 2 should still work", () => {
  //   expect(countRsFromString(items).length).toBe(3);
  //   expect(countRsFromString(items)).toStrictEqual([
  //     {name: 'Carrot', type: 'Food'},  
  //     {name: 'Tomato', type: 'Food'},
  //     {name: 'Corn', type: 'Food'}
  //   ]);
  // });

  test("function 3 should still work", () => {
    expect(findLargestNumber(values)).toBe(78);
  });
});
