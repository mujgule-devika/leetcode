`use strict`

var containsDuplicate = function (nums) {
  const numsSetSize = new Set(nums).size;
  // nums arry len > unique set length
  return nums.length > numsSetSize ? true : false;
};
const test1 = [1, 1, 1, 1, 2, 2, 2]
containsDuplicate(test1);

console.log(`result`, containsDuplicate(test1));


