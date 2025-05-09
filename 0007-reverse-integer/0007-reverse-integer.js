/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

let reverse_num =0;
let lastdigit=0;
    let negative = x < 0;
  if (negative) {
        x = x * -1;
    }

    while (x>0){

    lastdigit = x%10;
    x=Math.floor(x/10);

    reverse_num = reverse_num *10  + lastdigit;

    }


 if (reverse_num > 2 ** 31 - 1) {
        return 0; 
    }


    if (!negative){

      return reverse_num;

    }
    return reverse_num*-1;

};