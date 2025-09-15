 function includeCommas(number){
      if (!Number.isInteger(number)){  
            return ('this is not a number as well')
            }
  
       
      
       return number.toLocaleString('en-US')
 } 

 console.log(includeCommas(2000))
  