//https://leetcode.com/problems/two-sum/


// var twoSum = function(nums, target) {
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         if (map.hasOwnProperty(complement)) {
//             return [map[complement], i];

//         }
//         map[nums[i]] = i;
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9));  
// console.log(twoSum([3, 2, 4], 6)); 

///////////////////////////////

//https://leetcode.com/problems/palindrome-number/

// var isPalindrome = function(x) {
//     const turnToString = x.toString();
//     for (let i = 0; i < turnToString.length / 2; i++) { //only need to loop halfway through the string because at halfway point it avoids redundant comparison since if its palindrome mirrors at the middle
//         if (turnToString[i] !== turnToString[turnToString.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true
//     };

//     console.log(isPalindrome(121));
//     console.log(isPalindrome(122));

////////////////////////

//https://leetcode.com/problems/longest-common-prefix/

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return ""; //edge case: empty array
//     let prefix = strs[0]; //assume the first string is a prefix

//     for (let i = 1; i < strs.length; i++) { //compare starting from second string
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1); //shorten prefix by removing the last character
//             if (prefix === "") return "";// no common prefix
//         }
//     }
//     return prefix;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["test", "test", "test"]));

//////////////////////

//https://leetcode.com/problems/roman-to-integer/


var romanToInt = function (s) {
    //map of roman numeral to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let i = 0;

    while (i < s.length) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];
    

    //if current value is less than the next value then subtract it
    if (nextVal && currentVal < nextVal) {
        result += nextVal - currentVal;
        i += 2; //skipthe next character since its already been processed
    } else {
        result += currentVal;
        i += 1;
    }
}
return result;

};