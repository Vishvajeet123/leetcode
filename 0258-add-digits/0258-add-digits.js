/**
 * @param {number} num
 * @return {number}
 */


 let sum =(num)=>{

let last_digit =0;

while (num>0){

    last_digit += num%10;
    num= Math.floor(num/10);
    
}  
return last_digit;
 }
var addDigits = function(num) {

  let x =sum(num);
if(x>9){
   return addDigits(x);
}

return x ;

};