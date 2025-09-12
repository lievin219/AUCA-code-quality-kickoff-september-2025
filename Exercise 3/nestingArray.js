// Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.

 const nestedArray=[1,2,[3,4],[5]]

  function getNestedArray(newArray){

     if(!Array.isArray(newArray)){
        return 0
     }

  let  depth=1;
       for ( const item  of newArray ){
        if(!Array.isArray(item)){
             return 0
        }

         depth =Math.max(1,getNestedArray(item))
       }
        return depth
  }

   function flatteningArray(newArray){

     let result=[]
      for (const item of newArray){
         if (Array.isArray(item)){
            result.push(...flatteningArray(item))
         }
         else{
             result.push(item)
         }
      }
       return result
      

   }