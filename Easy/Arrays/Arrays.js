/* EASY */

// ! =============== Pure Arrays ===================

// * 1. Concatenation of Array -----------------------------------------------
// Given an integer array nums of length n,
// you want to create an array ans of length 2n
// where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// O(N)
var getConcatenation = function (nums) {
  let ans = [];
  // Iterate over the input array and push each number to the ans array
  for (let num of nums) {
    ans.push(num);
  }
  // Concatenate the arrays
  ans = ans.concat(nums.map((item) => item));
  return ans;
};

console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]

// * 2. Shuffle the Array ----------------------------------------------------
// Given the array nums consisting of 2n elements in the form
// [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Explanation:
// Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// O(N)
var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    result.push(nums[i], nums[n]);
    n++;
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); //  [2, 3, 5, 4, 1, 7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1, 4, 2, 3, 3, 2, 4, 1]
console.log(shuffle([1, 1, 2, 2], 2)); //  [1, 2, 1, 2]

// * 3. Kids With the Greatest Number of Candies ------------------------------
// There are n kids with candies.
// You are given an integer array candies,
// where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n,
// where result[i] is true if, after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.
// Explanation:
//  If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

var kidsWithCandies = function (candies, extraCandies) {
  let greatest = Math.max.apply(null, candies); // find the current greatest value
  let result = [];

  // Iterate through the array of candies
  for (let candy of candies) {
    let totalNumberOfCandies = candy + extraCandies;
    // and compare the increased number of candies to the current greatest
    if (totalNumberOfCandies >= greatest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //  [true, true, true, false, true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]
console.log(kidsWithCandies([12, 1, 12], 10)); //  [true, false, true]

// * 4. Decompress Run-Length Encoded List -----------------------------------
// We are given a list nums of integers representing a list compressed
// with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist.
//Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.
// Explanation:
// The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// O(N * M)
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 1; j <= nums[i]; j++) {
      result.push(nums[i + 1]);
    }
  }

  return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3])); // [1,3,3]

// * 5. Count Equal and Divisible Pairs in an Array ------------------------------
// Given a 0-indexed integer array nums of length n and an integer k,
// return the number of pairs (i, j) where 0 <= i < j < n,
// such that nums[i] == nums[j] and (i * j) is divisible by k.
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

var countPairs = function (nums, k) {
  let pairCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        pairCounter++;
      }
    }
  }

  return pairCounter;
};

console.log(countPairs([1, 2, 3, 4], 1)); // 0
console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2)); // 4
console.log(
  countPairs([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7)
); // 18

// * 6. Number of Rectangles That Can Form The Largest Square ---------------------
// You are given an array of rectangles
// where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
// You can cut the ith rectangle to form a square with a side length of k
// if both k <= li and k <= wi.
// For example, if you have a rectangle [4,6],
// you can cut it to get a square with a side length of at most 4.
// Let maxLen be the side length of the largest square you can obtain
// from any of the given rectangles.
// Return the number of rectangles that can make a square with a side length of maxLen.
// Explanation:
// The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.

// O(2N)
var countGoodRectangles = function (rectangles) {
  let maxLen = 0;
  let result = 0;

  // Find the largest of the smallest numbers from the sub-arrays
  for (let subArr of rectangles) {
    let smallest = Math.min.apply(null, subArr);
    maxLen = maxLen < smallest ? smallest : maxLen;
  }

  // Count how many squares can be made with this length out of the entered rectangle
  for (let i = 0; i < rectangles.length; i++) {
    if (rectangles[i][0] >= maxLen && rectangles[i][1] >= maxLen) {
      result++;
    }
  }

  return result;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
); // 3
console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
); // 3

// * 7. Find Numbers With Even Number of Digits ---------------------
// Given an array nums of integers, return how many of them contain an even number of digits.
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// O(N)
var findNumbers = function (nums) {
  let counter = 0;

  for (let elem of nums) {
    if (elem.toString().length % 2 === 0) {
      counter++;
    } else {
      continue;
    }
  }

  return counter;

  // RECURSIVE SOLUTION (not that efficient as the previous one)
  // Add counter=0 as a second parameter to the findNumbers function
  if (nums.length === 0) return counter;
  let length = nums[0].toString().length;
  length % 2 === 0 ? (counter += 1) : counter;

  return findNumbers(nums.slice(1), counter);
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1

// * 8. Number of Students Doing Homework at a Given Time ---------------------
// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i]
// and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime.
// More formally, return the number of students
// where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation:
// We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

// O(N + M)
var busyStudent = function (startTime, endTime, queryTime) {
  let numberOfStudents = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      numberOfStudents++;
    }
  }
  return numberOfStudents;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); // 1
console.log(busyStudent([4], [4], 4)); // 1

// * 9. Smallest Index With Equal Value ---------------------
// Given a 0-indexed integer array nums,
// return the smallest index i of nums such that i mod 10 == nums[i],
// or -1 if such index does not exist.
// x mod y denotes the remainder when x is divided by y.

// Input: nums = [0,1,2]
// Output: 0
// Explanation:
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.

// O(N) in the worst case
var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) {
      return i;
    }
  }
  return -1;
};

console.log(smallestEqual([0, 1, 2])); // 0
console.log(smallestEqual([4, 3, 2, 1])); // 2
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -1

// * 10. Remove One Element to Make the Array Strictly Increasing ---------------------
// Given a 0-indexed integer array nums,
// return true if it can be made strictly increasing after removing exactly one element,
// or false otherwise.
// If the array is already strictly increasing, return true.
// The array nums is strictly increasing if nums[i - 1] < nums[i]
// for each index (1 <= i < nums.length).

// Input: nums = [2,3,1,2]
// Output: false
// Explanation:
// [3,1,2] is the result of removing the element at index 0.
// [2,1,2] is the result of removing the element at index 1.
// [2,3,2] is the result of removing the element at index 2.
// [2,3,1] is the result of removing the element at index 3.
// No resulting array is strictly increasing, so return false.

function canBeIncreasing(nums) {
  // Cases:
  // 1. Array has only 2 elements = true, (if we delete 1 elem, it will be arranged in a perfect order)
  // 2. All elements are the same = false
  // 3. Array is already in a perfect increasing order = true
  // 4. If the highest element is the first in the array:
  //    a. If 2 following elements are in the increasing order = true
  //    b. If not, compare the current element to the n+2 element:
  //      - If the current element is lower than the n+2 element = true
  //      - else = false;
  // 5. If the lowest element is the last in the array = true;
  // 6. Middle cases (when n-1 and n+2 are available):
  //    a. Check if the rest of the array is sorted properly. If not, return false
  //    b. If n-1 is lower than n+1 = true
  //    c. If not, compare the current element to the n + 2 element:
  //        - if the current element is lower than the n+2 = true

  if (nums.length === 2) return true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      // Check if the rest of the array is sorted properly
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] >= nums[j + 1]) {
          return false;
        }
      }
      // If the rest of the array is sorted properly:
      // The first element case:
      if (i === 0) {
        if (nums[i + 1] < nums[i + 2]) {
          return true;
        } else {
          if (nums[i] < nums[i + 2]) {
            return true;
          }
        }
      }
      // The last element case:
      else if (i + 1 === nums.length - 1) {
        return true;
      }
      // Middle case:
      else {
        if (nums[i - 1] < nums[i + 1]) {
          return true;
        } else {
          if (nums[i] < nums[i + 2]) {
            return true;
          }
        }
      }
    } else {
      continue;
    }

    return false;
  }

  return true;
}

console.log(canBeIncreasing([13, 205, 553, 527, 790, 238])); // false
console.log(canBeIncreasing([89, 384, 691, 680, 111, 756])); // false
console.log(canBeIncreasing([2, 3, 1, 2])); // false
console.log(canBeIncreasing([1, 1, 1])); // false
console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true
console.log(canBeIncreasing([1, 2, 3])); // true
console.log(canBeIncreasing([1, 1])); // true
console.log(canBeIncreasing([100, 21, 100])); // true
console.log(canBeIncreasing([105, 924, 32, 968])); // true
console.log(canBeIncreasing([512, 867, 904, 997, 403])); // true

// ! =============== Simulation Problems ===================

// * 1. Build Array From Permutation -----------------------------------------
// Given a zero-based permutation nums (0-indexed),
// build an array ans of the same length where ans[i] = nums[nums[i]]
// for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers
// from 0 to nums.length - 1 (inclusive).

// O(N)
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0, 1, 2, 4, 5, 3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); //  [4, 5, 0, 1, 2, 3]

// * 2. Final Value of Variable After Performing Operations ----------------------------------------------------
// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations,
// return the final value of X after performing all the operations.
// Explanation:
// The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// O(N)
var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let elem of operations) {
    elem === "++X" || elem === "X++" ? (x += 1) : (x -= 1);
  }
  return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0

// ! =============== Math / Counting Problems ===================

// * 1. Number of Good Pairs ----------------------------------------------------
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// O(N^2)
var numIdenticalPairs = function (nums) {
  let goodPairCounter = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        goodPairCounter.push([i, j]);
      }
    }
  }
  return goodPairCounter.length;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0

// ! =============== Enumeration ===================

// ! =============== Hash Table ====================

// ! =============== Array of Strings ==============

// ! =============== Array of Strings ==============

// ! =================== Matrix ====================

// ! =============== Two Pointers ==============

// ! =============== Sorting ==============

// ! =============== Prefix Sum ==============

// ! =============== Bit Manipulation ==============

// ! =============== Greedy Algorithm ==============

// ! =============== Backtracking ==============

// ! =============== Heap (Priority Queue) ==============

// ! =============== Search (Binary) ==============

// ! =============== Stack ==============

// ! =============== Dynamic Programming ==============

// ! =============== Divide and Conquer ==============

// ! =============== Trees ==============

// ! =============== Linked List ==============

// ! =============== DFS, BFS ==============
