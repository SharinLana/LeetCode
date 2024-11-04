// * 1. Find the Longest Substring  ------------------------------------------
// The task is to find the length of the longest substring within a given string
// that does not contain any repeating characters.
// A substring is a contiguous sequence of characters within the string,
// and it should be as long as possible while ensuring no character appears more than once.

const longestSubstringOfString = (string) => {
  if (!string.length) return 0;
  if (string.length === 1) return 1;

  let start = 0;
  let end = start + 1;
  let counter = 1;
  let result = 0;

  while (end < string.length) {
    if (!string.slice(start, end).includes(string[end])) {
      counter++;
      end++;
    } else {
      counter = 1;
      start++;
      end = start + 1;
    }
    result = Math.max(result, counter);
  }
  return result;
};

console.log(longestSubstringOfString("abcabcbb")); // 3
console.log(longestSubstringOfString("bbbbb")); // 1
console.log(longestSubstringOfString("pwwkew")); // 3
console.log(longestSubstringOfString("")); // 0
console.log(longestSubstringOfString("abba")); // 2

// * 2. Validate Brackets ------------------------------------------

// Given a string containing only the characters (, ), {, }, [ and ],
// determine if the input string is valid. A string is considered valid if:

// Each opening bracket has a corresponding closing bracket of the same type.
// The brackets are correctly nested,
// meaning every closing bracket matches the most recent unmatched opening bracket.

const isInputStringValid = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      if (!stack.length) {
        return false;
      } else if (
        (str[i] === ")" && stack[stack.length - 1] !== "(") ||
        (str[i] === "}" && stack[stack.length - 1] !== "{") ||
        (str[i] === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return !stack.length ? true : false;
};
console.log(isInputStringValid("()")); // true
console.log(isInputStringValid("()[]{}")); // true
console.log(isInputStringValid("(]")); // false
console.log(isInputStringValid("([{}])")); // true
console.log(isInputStringValid("([)]")); // false

// * 3. Group Anagrams ------------------------------------------

// Given an array of strings, group the strings that are anagrams of each other.
// Anagrams are words that contain the same characters in the same frequency
// but in different orders. The function should return a list of groups,
// where each group contains anagrams from the input array.

const groupAnagrams = (arr) => {
  let result = [];

  let sortedStrings = arr.map((string) => string.split("").sort().join(""));

  for (let i = 0; i < sortedStrings.length; i++) {
    let subArr = [];
    if (result.flat().includes(arr[i])) {
      continue;
    } else {
      subArr.push(arr[i]);

      for (let j = i + 1; j < sortedStrings.length; j++) {
        if (sortedStrings[i] === sortedStrings[j]) {
          subArr.push(arr[j]);
        }
      }
      result.push(subArr);
    }
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
console.log(
  groupAnagrams(["listen", "silent", "enlist", "inlets", "google", "gogole"])
); // [["listen", "silent", "enlist", "inlets"], ["google", "gogole"]]

// * 4.  ------------------------------------------

// * 5.  ------------------------------------------

// * 6.  ------------------------------------------

// * 7.  ------------------------------------------

// * 8.  ------------------------------------------
