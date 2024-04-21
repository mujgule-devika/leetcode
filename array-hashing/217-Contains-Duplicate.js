`use strict`
//OPTIMIZED
// DS - Array, Set
var containsDuplicate = function (nums) {
  const numsSetSize = new Set(nums).size;
  // nums arry len > unique set length
  return nums.length > numsSetSize ? true : false;
 
};
const test1 = [1, 2, 3, 1]
containsDuplicate(test1);
console.log(`result`, containsDuplicate(test1));

 //APPROACH 2 //BRUTE - O(n^2)

//  for (let i = 0; i < nums.length; i++) {
//   console.log(`nums i`, nums[i]);

//   for (let j = i + 1; j < nums.length; j++) {
//     console.log(`nums j`, nums[j]);

//     if (nums[i] === nums[j]) {
//       // console.log(`false`);
//       return true
//     }
//   }
// }
// return false;

// APPROACH 3
//NOT THE BEST BUT WORKS 
// nums.sort();
//  for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === nums[i +1]) {
//         return true
//       };
//     }

//   return false