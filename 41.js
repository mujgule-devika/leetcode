`use strict`

var firstMissingPositive = function (nums) {
  const seqMapped = new Map();
  const sortedNums = nums.sort();
  let maxValue = Math.max(...nums, 0);

  console.log(`max val`, maxValue);
  console.log(sortedNums);


  for (let i = 0; i < sortedNums.length; i++) {
    seqMapped.set( sortedNums[i], true);
    console.log(`map`, seqMapped);
  }

  for (let i = 1; i < maxValue; i++) {
    console.log(`i`, i);
    console.log(`has`, seqMapped.has(i));
    if (!seqMapped.has(i)) {
      return i;
    }
  }

  return maxValue < 0 ? 1 : maxValue + 1;
};



const test1 = [1, 2, 0];
const test2 = [3, 4, -1, 1];
firstMissingPositive(test2)
