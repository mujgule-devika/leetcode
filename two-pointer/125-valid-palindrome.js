`use strict`
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  //make lower case + remove spl chars regex 
let lowerS = s.replace(/[^0-9a-zA-Z]/g,'').toLocaleLowerCase();

  //remove spl chars 
  console.log(`s`, lowerS);
  //split into array and check reverse == s ? 
 let reversedS =  [...lowerS].reverse().join('');
 console.log(`reversed s`, reversedS);

 return lowerS === reversedS ? true : false;
 
};

console.log(`final`, isPalindrome(''));
