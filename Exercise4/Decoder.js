function decoding(romans) {
    const values = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let LastValue = romans.length - 1; // start from the end
    let total = 0;
  
    while (LastValue >= 0) {
      let currentValue = values[romans[LastValue]];
      let prevValue = LastValue > 0 ? values[romans[LastValue - 1]] : 0;
  
      if (LastValue > 0 && prevValue < currentValue) {
        total += currentValue - prevValue;
        LastValue -= 2; // skip both characters
      } else {
        total += currentValue;
        LastValue--; // move one position left
      }
    }
  
    return total;
  }
  
  // Tests
  console.log(decoding("MM"));       // 2000
  console.log(decoding("MDCLXVI"));  // 1666
  console.log(decoding("M"));        // 1000
  console.log(decoding("CD"));       // 400
  console.log(decoding("XC"));       // 90
  console.log(decoding("XL"));       // 40
  console.log(decoding("I"));        // 1
  