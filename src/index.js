module.exports = function toReadable (number) {
    let newArr = number.toString().split('');
    let i =newArr.lenght;
    let obj = {0: "zero", 1: "one", 2: "two", 3 :"three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 
   10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 
   18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "hundred"}
    
   if(newArr.length == 1){
       return obj[number];
   } else if(newArr.length == 2 && newArr[0] == 1){
     for(let i in obj){
       if(number == i){
         return obj[i];
       }
     }
   } else if(newArr.length == 2 ){
     for(let i in obj){
       if(newArr[1] > 0){
         return obj[newArr[0] * 10] + ' ' + obj[newArr[1]];
       } else if (newArr[1] == 0) {
        return obj[number];
       }
     }
   } else if(newArr.length == 3 && newArr[1] == 1){
        for(let i in obj){
       if(newArr[1].concat(newArr[2]) == i){
         return obj[newArr[0]] + ' '+  obj[100]+ ' '  +  obj[i];
       }
     }
   } else if(newArr.length == 3 && newArr[1] > 1){
           if(newArr[2] === '0'){
               return obj[newArr[0]] + ' ' + obj[100] + ' ' + obj[parseInt(newArr[1]) * 10];
           } else {
              return obj[newArr[0]] + ' ' + obj[100] + ' ' + obj[parseInt(newArr[1]) * 10] + ' ' + obj[newArr[2]];
           }  
           
       } else if(newArr.length == 3 && newArr[1] == 0){
        if(newArr[2] === '0') {
          return obj[newArr[0]] + ' ' + obj[100];
        } else if(newArr[2] !==0){
          return obj[newArr[0]] + ' ' + obj[100] + ' ' + obj[newArr[2]]
        }
      }
}
