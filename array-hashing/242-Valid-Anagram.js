`use strict`
var isAnagram = function (s, t) {
  //BRUTE 
  //OPTION 1 O(n log n)
  return [...s].sort().join('') === [...t].sort().join('') ? true : false;
  //OPTION 2 O(n log n)
  return s.split('').sort().join('') == t.split('').sort().join('');

  // OPTIMIZED O(n) + Space O(n)
  if (s.length !== t.length) {
    return false;
  }
  // CREATE HASHMAP WITH FREQ
  const counterS = new Map();
  const counterT = new Map();

  for (const i of s) {
    counterS.set(i, (counterS.get(i) || 0) + 1);
  }
  for (const i of t) {
    counterT.set(i, (counterT.get(i) || 0) + 1);

  }

  for (const [key] of counterS) {
    
    console.log(`if`, key, counterS.get(key), counterT.get(key));
    if (counterS.get(key) !== counterT.get(key) || 0) {
      return false;
    }
  }
  return true;

};

console.log(
  isAnagram('catt', 'caat'));