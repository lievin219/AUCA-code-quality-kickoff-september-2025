function Encoder(num) {
   
    const symbols = [
      "M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    const values = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
  
    let result = "";
    let i = 0;
  
    while (num > 0) {
      if (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      } else {
        i++; 
      }
    }
  
    return result;
  }

   console.log(Encoder(20))
  
 