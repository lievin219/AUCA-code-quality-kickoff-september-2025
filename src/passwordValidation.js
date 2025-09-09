function isValidPassword(password) {
    const forbiddenPasswords = ["1234567890", "password", "aaaaaaaaaa", "BBBccc1111"];
  
   
    if (password.length !== 10) {
      return false;
    }
  
   
    for (let char of password) {
      if (!isLetterOrNumber(char)) {
        return false;
      }
    }
  
 
    let hasUpper = false;
    let hasLower = false;
    for (let char of password) {
      if (char >= "A" && char <= "Z") hasUpper = true;
      if (char >= "a" && char <= "z") hasLower = true;
    }  
    if (!hasUpper || !hasLower) {
      return false;
    }
  
    
    if (forbiddenPasswords.includes(password)) {
      return false;
    }
  
    
    let uniqueChars = [];
    for (let char of password) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    if (uniqueChars.length < 4) {
      return false;
    }
  

    if (hasSequentialNumbers(password)) {
      return false;
    }
  
  
    return true;
  }
  
  function isLetterOrNumber(char) {
    return (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    );
  }
  

  function hasSequentialNumbers(password) {
    let digits = password.split("").map(c => parseInt(c, 10));
    for (let i = 0; i < digits.length - 2; i++) {
      if (isNaN(digits[i])) continue;
  
      let first = digits[i];
      let second = digits[i + 1];
      let third = digits[i + 2];
  

      if (second === first + 1 && third === first + 2) return true;
  
      if (second === first - 1 && third === first - 2) return true;
    }
    return false;
  }
  
  export default isValidPassword;
  