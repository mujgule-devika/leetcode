`use strict`
// Top k frequent - 347
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const freqArray = new Array(nums.length + 1).fill(0);
  ans = [];

  console.log(nums, freqArray);

  for (let i = 0; i < nums.length; i++) {
    console.log(freqMap.has(nums[i]));

    if (freqMap.has(nums[i])) {
      console.log(`has freqMap.has(nums[i])`);
      let value = freqMap.get(nums[i])
      freqMap.set(nums[i], (freqMap.get(nums[i]) + 1));
      console.log('inside if: ', freqMap);
    } else {
      console.log(`inside else`, nums[i]);
      freqMap.set(nums[i], 1);
    }
  }

  freqMap.forEach((v, k) => {
    console.log('freqarry', freqArray[v]);
    
    const tempArry = freqArray[v] || [];
    tempArry.push(k);
    freqArray[v] = tempArry;

    console.log(tempArry);
    console.log(freqArray);

  });

  // freqArray.forEach((element, index) => console.log(`element: ${element}, index: ${index}`));

  freqArray.reverse();
  for (let element of freqArray) {
    if (k < 1) break;
    if (element) {
      for (let elem2 of element) {
        ans.push(elem2);
        k--;
      }
    }
  }

  return ans;

};

console.log(topKFrequent([1, 2, 2, 3, 3, 4]));
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let finalArray = new Array();
// console.log(`inside funtion`);

//   if (nums.length > 1) {

//     console.log(`inside if numbs > 1`);

//     for (let i = 0; i < nums.length; i++) {
//       console.log(`i value ${i}`);

//       for (let j = i + 1; j < nums.length; j++) {
//         console.log(`j value ${j}`);

//         if (nums[i] + nums[j] === target) {
//           console.log(`inside if`);

//           finalArray.push(i);
//           finalArray.push(j);
//           return finalArray;
//         } 
//       }
//     }
//   } else {
//     return []
//   }

// };
var twoSum = function (nums, target) {
  let finalArray = new Array();

  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      let checkNumber = target - nums[i];
      console.log(`check number ${checkNumber}`);

      let idx_checkNumber = nums.indexOf(checkNumber);
      console.log(`idx check number ${idx_checkNumber}`);

      if (idx_checkNumber !== nums[i]) {
         return finalArray.push(i, idx_checkNumber);
      }

    }
  } else {
    return []
  }

};
console.log(twoSum([3, 1, 4, 5], 9));

