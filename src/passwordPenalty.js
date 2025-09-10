function penaltyPoints(password) {
  if (typeof password !== "string" || password.length === 0) {
    return 0;
  }
    let penalty = 0;
    let count = 1;
  
    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) {

        count++;
      } else 
      {
        
        if (count === 2) penalty += 1;
        else if (count >= 3) penalty += 2;
        count = 1;
      }
    }
  

    if (count === 2) penalty += 1;
    else if (count >= 3) penalty += 2;
  
    return penalty;

   
  }

   export default penaltyPoints