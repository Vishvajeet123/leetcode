/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
  if(n<1){
    return false ;
  }


  while (n>1){
    if(n%2==1){
        return false ;
    }
    n=n/2;

  }

return true ;

};