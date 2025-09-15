function decoding(romans){
      const values={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      }

     let LastValue=romans.length-1
       let total=0
         while(LastValue>=0){
             let currentValue=LastValue[values[LastValue]]
              let prevValue=LastValue[values[LastValue-1]]

               if(LastValue<0 && prevValue<currentValue){
total +=currentValue-prevValue
LastValue-=2
               }else{
                 total=currentValue
                 LastValue=LastValue--
               }


         }
     return total
}

 console.log(decoding('MM'))