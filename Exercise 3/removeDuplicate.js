function removeDuplicate(array){
     let result=[]

     if (!Array.isArray(array)){

         return 'this is not an array !'
     }
     for (const item of array){
        if(!result.includes(item)){
            result.push(item)
        }
    }
      return result
     
}


