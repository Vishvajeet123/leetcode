//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.getSecondLargest(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// } Driver Code Ends


class Solution {
    getSecondLargest(arr) {
       
       
       let max=arr[0];
    
    
    for(let i=0;i<arr.length;i++){
        
        max = Math.max(arr[i] , max);
    }

let second_max =-1;

        for(let i=0;i<arr.length;i++){
            
            
           if(arr[i]==max){
               continue;
           }
           
           second_max= Math.max(arr[i], second_max);
            
            
        }
       
       
      
        return second_max
    }
}