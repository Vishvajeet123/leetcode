/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result =[];
    let NUllresult =[-1,-1];

   for (let i=0;i<nums.length;i++)
   {
    
    for(let j=i+1;j<nums.length;j++)
    {

        if(nums[i] + nums[j]== target){
            result.push(i);
            result.push(j);

            return result ;

        }


   } 

   }

return Nullresult;

    
};