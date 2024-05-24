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

// * 11. Replace Elements With Greatest Element on Right Side ---------------------
// Given an array arr, replace every element in that array
// with the greatest element among the elements to its right,
// and replace the last element with -1.
// After doing so, return the array.

// Example:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      let max = Math.max.apply(null, arr.slice(i + 1));
      arr[i] = max;
    }
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]

// * 12. Valid Mountain Array ---------------------
// Given an array of integers arr,
// return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let increasing = false;
  let decreasing = false;

  // If we decreasing before increasing, return false
  // If we start from decreasing, return false

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      // If decreasing before increasing
      if (decreasing) {
        return false;
      }
      increasing = true;
    } else if (arr[i] > arr[i + 1]) {
      decreasing = true;
    } else if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  if ((decreasing && !increasing) || (increasing && !decreasing)) return false;
  return true;
};

console.log(validMountainArray([2, 1])); // false (only decreasing numbers)
console.log(validMountainArray([3, 5, 5])); // false (increasing, then plato)
console.log(validMountainArray([0, 3, 2, 1])); // true (increasing, then decreasing)
console.log(validMountainArray([2, 0, 2])); // false (decreasing, then increasing)
console.log(validMountainArray([0, 1, 2, 4, 2, 1])); // true
console.log(validMountainArray([0, 1, 2, 1, 2])); // false

// * 13. Max Value of an Order Triplet ---------------------
// You are given a 0-indexed integer array nums.
// Return the maximum value over ALL POSSIBLE triplets of indices (i, j, k)
// such that i < j < k.
// If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

// Example:
// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices
// with a value greater than 77.

var maximumTripletValue = function (nums) {
  let res = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      count = (nums[i] - nums[j]) * Math.max(...nums.slice(j + 1)); // * METHOD!!!
      if (count > res) res = count;
    }
  }
  return res;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7])); // 77
console.log(maximumTripletValue([1, 10, 3, 4, 19])); // 133
console.log(maximumTripletValue([1, 2, 3])); // 0
console.log(maximumTripletValue([1000000, 1, 1000000])); // 999999000000

// * 14. Find Nearest Point That Has the Same X or Y Coordinate ---------------------
// You are given two integers, x and y,
// which represent your current location on a Cartesian grid: (x, y).
// You are also given an array points where each points[i] = [ai, bi] represents
// that a point exists at (ai, bi).
// A point is valid if it shares the same x-coordinate
// or the same y-coordinate as your location.
// Return the index (0-indexed) of the valid point
// with the smallest Manhattan distance from your current location.
// If there are multiple, return the valid point with the smallest index.
// If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2)
// is abs(x1 - x2) + abs(y1 - y2).

// Example :
// Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
// Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid.
// Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location,
// with a distance of 1.
// [2,4] has the smallest index, so return 2.

var nearestValidPoint = function (x, y, points) {
  let smallestManhattanDistance;
  let smallestIndex;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      let distance = getManhattanDistance(x, y, points[i][0], points[i][1]);

      if (
        smallestManhattanDistance === undefined ||
        distance < smallestManhattanDistance
      ) {
        smallestManhattanDistance = distance;
        smallestIndex = i;
      }
    }
  }

  return smallestIndex !== undefined ? smallestIndex : -1;
};

function getManhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
); // 2
console.log(nearestValidPoint(3, 4, [[3, 4]])); // 0
console.log(nearestValidPoint(3, 4, [[2, 3]])); // -1

// * 15. Find All K-Distant Indices in an Array ---------------------
// You are given a 0-indexed integer array nums and two integers key and k.
// A k-distant index is an index i of nums for which there exists at least one index j
// such that |i - j| <= k and nums[j] == key.
// |i-j| means the same thing as abs(i-j).
// Return a list of all k-distant indices sorted in increasing order.

// Example:
// Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
// Output: [1,2,3,4,5,6]
// Explanation: Here, nums[2] == key and nums[5] == key.
// - For index 0, abs|0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
// - For index 1, abs|1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
// - For index 2, abs|2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
// - For index 3, abs|3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
// - For index 4, abs|4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
// - For index 5, abs|5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
// - For index 6, abs|6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
// Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.

// O(N * M)
var findKDistantIndices = function (nums, key, k) {
  let output = new Set();

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      for (let i = 0; i < nums.length; i++) {
        if (Math.abs(i - j) <= k) {
          output.add(i);
        }
      }
    }
  }

  return [...output];
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)); // [1,2,3,4,5,6]
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)); // [0,1,2,3,4]

// * 16. Defuse the Bomb (circular array) ---------------------
// You have a bomb to defuse, and your time is running out!
// Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number.
// All the numbers are replaced simultaneously.
// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0],
// and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k,
// return the decrypted code to defuse the bomb!

// Example :
// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation:
// Each number is replaced by the sum of the next 3 numbers.
// The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1].
// Notice that the numbers wrap around.

var decrypt = function (code, k) {
  let sum = 0;
  let arr = [];

  for (let i = 0; i < code.length; i++) {
    for (let j = 1; j <= Math.abs(k); j++) {
      if (k > 0) {
        sum += code[(i + j) % code.length]; // Circle the array from left to right
      } else if (k < 0) {
        sum += code[Math.abs((i + (code.length - j)) % code.length)]; // Circle the array from right to left
      } else {
        code[i] = 0;
        return code;
      }
    }

    arr.push(sum);
    sum = 0;
  }
  return arr;
};

console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]

// * 17. Minimum Sum of Mountain Triplets ---------------------
// You are given a 0-indexed array nums of integers.

// A triplet of indices (i, j, k) is a mountain if:
// i < j < k
// nums[i] < nums[j] and nums[k] < nums[j]
// Return the minimum possible sum of a mountain triplet of nums.
// If no such triplet exists, return -1.

// Example:
// Input: nums = [8,6,1,5,3]
// Output: 9

// Explanation:
// Triplet (2, 3, 4) is a mountain triplet of sum 9 since:
// - 2 < 3 < 4
// - nums[2] < nums[3] and nums[4] < nums[3]
// And the sum of this triplet is nums[2] + nums[3] + nums[4] = 9.
// It can be shown that there are no mountain triplets with a sum of less than 9.

var minimumSum = function (nums) {
  let sum = Infinity;

  for (let j = 1; j < nums.length - 1; j++) {
    let a = nums[0];
    let b = nums[j + 1];

    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        a = Math.min(a, nums[i]);
      }
    }

    for (let i = j + 1; i < nums.length; i++) {
      if (nums[i] < nums[j]) {
        b = Math.min(b, nums[i]);
      }
    }

    if (a < nums[j] && nums[j] > b) {
      sum = Math.min(sum, a + nums[j] + b);
    }
  }
  if (sum === Infinity) {
    return -1;
  }

  return sum;
};
console.log(minimumSum([8, 6, 1, 5, 3])); // 9
console.log(minimumSum([5, 4, 8, 7, 10, 2])); // 13
console.log(minimumSum([6, 5, 4, 3, 4, 5])); // -1
console.log(minimumSum([1, 2, 1])); // 4
console.log(minimumSum([1, 1, 2, 1])); // 4
console.log(minimumSum([1, 2, 3, 2])); // 6
console.log(minimumSum([1, 2, 4, 3])); // 8

// * 18. Three Consecutive Odds ---------------------
// Given an integer array arr,
// return true if there are three consecutive odd numbers in the array.
// Otherwise, return false.

// Example:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 2] !== undefined) {
      // checking the next 2 numbers
      if (arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false

// * 19. Find Indices With Index and Value Difference ---------------------
// You are given a 0-indexed integer array nums having length n,
// an integer indexDifference, and an integer valueDifference.
// Your task is to find two indices i and j, both in the range [0, n - 1],
// that satisfy the following conditions:

// abs(i - j) >= indexDifference, and
// abs(nums[i] - nums[j]) >= valueDifference
// Return an integer array answer, where answer = [i, j] if there are two such indices,
// and answer = [-1, -1] otherwise.
// If there are multiple choices for the two indices, return any of them.

// Note: i and j may be equal.

// Example :
// Input: nums = [5,1,4,1], indexDifference = 2, valueDifference = 4
// Output: [0,3]
// Explanation: In this example, i = 0 and j = 3 can be selected.
// abs(0 - 3) >= 2 and abs(nums[0] - nums[3]) >= 4.
// Hence, a valid answer is [0,3].
// [3,0] is also a valid answer.

// O(n^2)
var findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = indexDifference; j < nums.length; j++) {
      if (
        Math.abs(nums[i] - nums[j]) >= valueDifference &&
        Math.abs(i - j) >= indexDifference
      ) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4)); // [0,3]
console.log(findIndices([2, 1], 0, 0)); // [0,0]
console.log(findIndices([1, 2, 3], 2, 4)); // [-1,-1]
console.log(findIndices([0], 0, 0)); // [0, 0]
console.log(findIndices([5, 10], 1, 2)); // [0,1]

// * 20. Maximum Ascending Subarray Sum ---------------------
// Given an array of positive integers nums,
// return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending
// if for all i where l <= i < r, nums[i]  < nums[i+1].
// Note that a subarray of size 1 is ascending.

// Example :
// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// O(N)
var maxAscendingSum = function (nums) {
  let sum = 0;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];

    if (nums[i + 1] <= nums[i] || i === nums.length - 1) {
      // (i === nums.length - 1) => without this expression the new round of iteration will not run
      sum < temp ? (sum = temp) : sum;
      temp = 0;
    }
  }

  return sum;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // 65
// console.log(maxAscendingSum([10, 20, 30, 40, 50])); // 150
// console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // 33

// * 21. Monotonic Array ---------------------
// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
// An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic,
// or false otherwise.

var isMonotonic = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[0] === min) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    } else if (nums[0] === max) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    // if the first element is neither max, no min
    else {
      return false;
    }
  }
  return true;
};

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false
console.log(isMonotonic([2, 2, 2, 1, 4, 5])); // false
console.log(isMonotonic([2, 2, 2, 1, 4, 5])); // false

// * 22. Element Appearing More Than 25% in Sorted Array ---------------------
// Given an integer array sorted in non-decreasing order,
// there is exactly one integer in the array that occurs more than 25% of the time,
// return that integer.

var findSpecialInteger = function (arr) {
  let quarter = Math.ceil((25 * arr.length) / 100);
  let counter = {};

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] ? (counter[arr[i]] += 1) : (counter[arr[i]] = 1);
  }

  // looking for the biggest value in the counter hashTable
  const max = Object.keys(counter).reduce(
    (a, key) => Math.max(a, counter[key]),
    -Infinity // initial max value
  );

  if (max >= quarter) {
    const result = Object.keys(counter).filter((v) => counter[v] === max);
    return Number(result);
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
console.log(findSpecialInteger([1, 1])); // 1
console.log(findSpecialInteger([6700, 8858, 8858, 8858, 8858])); // 8858

// * 23. Count Hills and Valleys in an Array ---------------------
// You are given a 0-indexed integer array nums.
// An index i is part of a hill in nums if the closest non-equal neighbors of i
// are smaller than nums[i].
// Similarly, an index i is part of a valley in nums
// if the closest non-equal neighbors of i are larger than nums[i].
// Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].
// Note that for an index to be part of a hill or valley,
// it must have a non-equal neighbor on both the left and right of the index.
// Return the number of hills and valleys in nums.

// Example:
// Input: nums = [2,4,1,1,6,5]
// Output: 3
// Explanation:
// At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
// At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill.
// At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
// At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley,
// but note that it is part of the same valley as index 2.
// At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
// At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley.
// There are 3 hills and valleys so we return 3.

// O(N + M)
var countHillValley = function (nums) {
  let arr = [];
  let counter = 0;

  for (elem of nums) {
    if (arr[arr.length - 1] !== elem) {
      arr.push(elem);
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
    ) {
      counter++;
    }
  }

  return counter;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5])); // 3
console.log(countHillValley([6, 6, 5, 5, 4, 1])); // 0
console.log(countHillValley([21, 21, 21, 2, 2, 2, 2, 21, 21, 45])); // 1
console.log(countHillValley([5, 7, 7, 1, 7])); // 2

// * 24. Check if All 1's Are at Least Length K Places Away ---------------------
// Given a binary array nums and an integer k,
// return true if all 1's are at least k places away from each other,
// otherwise return false.

// Example
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

var kLengthApart = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      for (let j = i + 1; j <= i + k; j++) {
        if (nums[j] === 1) {
          return false;
        }
      }
      i += k;
    }
  }
  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false

// * 25. Max Consecutive Ones ---------------------
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    // Reset current if value at current index is zero, increment otherwise.
    current = nums[i] === 0 ? 0 : current + 1;

    // Store current max to max, if current iteration found max consecutive 1s.
    max = current > max ? current : max;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2

// * 26. Minimum Right Shifts to Sort the Array ---------------------
// You are given a 0-indexed array nums of length n containing distinct positive integers.
// Return the minimum number of right shifts required to sort nums
// and -1 if this is not possible.
// A right shift is defined as shifting the element at index i to index (i + 1) % n,
// for all indices.

// Example:
// Input: nums = [3,4,5,1,2]
// Output: 2
// Explanation:
// After the first right shift, nums = [2,3,4,5,1].
// After the second right shift, nums = [1,2,3,4,5].
// Now nums is sorted; therefore the answer is 2.

var minimumRightShifts = function (nums) {
  // If the input array is sorted, return 0, if not, start the right move
  if (isSorted(nums)) return 0;

  let last = nums[nums.length - 1];
  let first = nums[0];
  let counter = 0;

  while (last < first) {
    nums.unshift(last);
    nums.pop();
    last = nums[nums.length - 1];
    first = nums[0];
    counter++;

    if (isSorted(nums)) {
      return counter;
    }
  }

  if (last > first && !isSorted(nums)) return -1;
};

function isSorted(arr) {
  let sorted = true;
  // Check if the input array is already sorted
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
    }
  }
  return sorted;
}

console.log(minimumRightShifts([3, 4, 5, 1, 2])); // 2
console.log(minimumRightShifts([1, 3, 5])); // 0
console.log(minimumRightShifts([2, 1, 4])); // -1
console.log(minimumRightShifts([63, 51, 65, 87, 6, 17, 32, 14, 42, 46])); // -1

// * 27. Minimum Distance to the Target Element ---------------------
// Given an integer array nums (0-indexed) and two integers target and start,
// find an index i such that nums[i] == target and abs(i - start) is minimized.
// Note that abs(x) is the absolute value of x.
// Return abs(i - start).
// It is guaranteed that target exists in nums.

// Example :
// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

var getMinDistance = function (nums, target, start) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr.push(Math.abs(i - start));
    }
  }
  return Math.min(...arr);
};

console.log(getMinDistance([1, 2, 5, 4, 5], 5, 3)); // 1
console.log(getMinDistance([1], 1, 0)); // 0
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)); // 0

// * 28. Maximum Difference Between Increasing Elements ---------------------
// Given a 0-indexed integer array nums of size n,
// find the maximum difference between nums[i] and nums[j]
// (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference. If no such i and j exists, return -1.

// Example:
// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2,
// nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6,
// but i > j, so it is not valid.

// O(N) id the array is sorted and O(N^2) if the array is unsorted
var maximumDifference = function (nums) {
  let max = -Infinity;

  // If the input array is sorted in descending order,
  // then there's no chance to find the positive max diff, so return -1
  let descending = isDescending(nums);
  if (descending) return -1;

  // If the input array is sorted in ascending order,
  // then the max difference will be between its 1st and last elements
  let ascending = isAscending(nums);
  if (ascending) return nums[nums.length - 1] - nums[0];

  // If the array is unsorted, then use the nested loop
  // to calculate the max difference
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];
      max = max > diff ? max : diff;
    }
  }

  return max;
};

function isDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function isAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9
console.log(
  maximumDifference([
    999, 997, 980, 976, 948, 940, 938, 928, 924, 917, 907, 907, 881, 878, 864,
    862, 859, 857, 848, 840, 824, 824, 824, 805, 802, 798, 788, 777, 775, 766,
    755, 748, 735, 732, 727, 705, 700, 697, 693, 679, 676, 644, 634, 624, 599,
    596, 588, 583, 562, 558, 553, 539, 537, 536, 509, 491, 485, 483, 454, 449,
    438, 425, 403, 368, 345, 327, 287, 285, 270, 263, 255, 248, 235, 234, 224,
    221, 201, 189, 187, 183, 179, 168, 155, 153, 150, 144, 107, 102, 102, 87,
    80, 57, 55, 49, 48, 45, 26, 26, 23, 15,
  ])
); // -1

// * 29. Distance Between Stops (circular array) ---------------------
// A bus has n stops numbered from 0 to n - 1 that form a circle.
// We know the distance between all pairs of neighboring stops
// where distance[i] is the distance between the stops number i and (i + 1) % n.
// The bus goes along both directions i.e. clockwise and counterclockwise.
// Return the shortest distance between the given start and destination stops.

// Example:
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

var distanceBetweenBusStops = function (distance, start, destination) {
  let result = 0;
  let result2 = 0;

  if (start > destination) {
    [start, destination] = [destination, start];
  }

  result = clockWise(distance, start, destination);
  result2 = counterClockWise(distance, result);

  const output = result > result2 ? result2 : result; // picking the lowest
  return output;
};

const clockWise = (distance, start, destination) => {
  let result = 0;
  for (let i = start; i < destination; i++) {
    result += distance[i];
  }

  return result;
};

const counterClockWise = (distance, result) => {
  let sum = 0;
  let result2;

  for (let j = 0; j < distance.length; j++) {
    sum += distance[j];
  }

  result2 = sum - result;
  return result2;
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2)); // 17

// * 30. Check if array is sorted and rotated ---------------------
// Given an array nums, return true if the array was originally sorted in non-decreasing order,
// then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length
// such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// Example 2:
// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.

// Example 3:
// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

var check = function (nums) {
  let counter = 0;

  // Count each case when the current numbers > than the next one
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) counter++;
  }

  if (counter > 1 || (counter == 1 && nums[0] < nums[nums.length - 1])) {
    return false;
  }
  return true;
};

console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([2, 1, 3, 4])); // false
console.log(check([1, 2, 3])); // true

// * 31. Summary ranges ---------------------
// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
// That is, each element of nums is covered by exactly one of the ranges,
// and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Example:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// O(N)
var summaryRanges = function (nums) {
  let result = [];
  let startNum = nums[0];
  let endNum;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      endNum = nums[i];

      if (startNum === endNum) {
        result.push(`${endNum}`);
      } else {
        result.push(`${startNum}->${endNum}`);
      }

      startNum = nums[i + 1];
    }
  }
  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]

// * 32. Longest Increasing Continuous Subsequence ---------------------
// Given an unsorted array of integers nums,
// return the LENGTH of the longest continuous increasing subsequence (i.e. subarray).
// The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r)
// such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]
// and for each l <= i < r, nums[i] < nums[i + 1].

// Example:
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence,
// it is not continuous as elements 5 and 7 are separated by element 4.

var findLengthOfLCIS = function (nums) {
  let counter = 0;

  if (isSame(nums)) {
    return 1;
  } else {
    for (let i = 0, j = 1; i < nums.length; i++) {
      if (nums[i] < nums[i + 1]) {
        j++;
      } else {
        counter = counter < j ? j : counter;
        j = 1;
      }
    }
  }
  return counter;
};

function isSame(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])); // 4
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4])); // 3
console.log(findLengthOfLCIS([1, 1, 2])); // 2

// * 33. The Employee That Worked on the Longest Task ---------------------
// There are n employees, each with a unique id from 0 to n - 1.
// You are given a 2D integer array logs where logs[i] = [id[i], leaveTime[i]] where:

// id[i] is the id of the employee that worked on the ith task, and
// leaveTime[i] is the time at which the employee finished the ith task.
// All the values leaveTime[i] are unique.
// Note that the ith task starts the moment right after the (i - 1)th task ends,
// and the 0th task starts at time 0.

// Return the id of the employee that worked the task with the longest time.
// If there is a tie between two or more employees, return the smallest id among them.

// Example:
// Input: n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
// Output: 1
// Explanation:
// Task 0 started at 0 and ended at 3 with 3 units of times.
// Task 1 started at 3 and ended at 5 with 2 units of times.
// Task 2 started at 5 and ended at 9 with 4 units of times.
// Task 3 started at 9 and ended at 15 with 6 units of times.
// The task with the longest time is task 3 and the employee with id 1
// is the one that worked on it, so we return 1.

var hardestWorker = function (n, logs) {
  let maxDiff = logs[0][1]; // store the number of units of time of the firs log
  let employeeId = logs[0][0];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i + 1]) {
      let diff = Math.abs(logs[i][1] - logs[i + 1][1]);
      if (maxDiff < diff) {
        employeeId = logs[i + 1][0];
        maxDiff = diff;
      } else if (maxDiff === diff) {
        employeeId = employeeId < logs[i + 1][0] ? employeeId : logs[i + 1][0];
      }
    }
  }

  return employeeId;
};

console.log(
  hardestWorker(10, [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ])
); // 1
console.log(
  hardestWorker(26, [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ])
); // 3
console.log(
  hardestWorker(2, [
    [0, 10],
    [1, 20],
  ])
); // 0 (Task 0 started at 0 and ended at 10 with 10 units of times.
// Task 1 started at 10 and ended at 20 with 10 units of times.
// The tasks with the longest time are tasks 0 and 1.
//The employees that worked on them are 0 and 1, so we return the smallest id 0.)
console.log(
  hardestWorker(2, [
    [114, 5],
    [115, 7],
    [50, 9],
    [105, 11],
    [18, 13],
    [47, 16],
    [48, 18],
    [39, 19],
  ])
); // 114

// * 34. Find the Maximum Divisibility Score ---------------------
// You are given two 0-indexed integer arrays nums and divisors.

// The divisibility score of divisors[i] is the number of indices j
// such that nums[j] is divisible by divisors[i].

// Return the integer divisors[i] with the maximum divisibility score.
// If there is more than one integer with the maximum score, return the minimum of them.

// Example:
// Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
// Since divisors[2] has the maximum divisibility score, we return it.

var maxDivScore = function (nums, divisors) {
  let maxScore = 0;
  let result = divisors[0];

  for (let d of divisors) {
    let score = 0;

    for (let num of nums) {
      if (num % d === 0) {
        score++;
      }
    }

    if (score === maxScore) {
      result = Math.min(result, d);
    }
    if (score > maxScore) {
      maxScore = score;
      result = d;
    }
  }
  return result;
};

console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3])); // 3
console.log(maxDivScore([20, 14, 21, 10], [5, 7, 5])); // 5
console.log(maxDivScore([12], [10, 16])); // 10
console.log(maxDivScore([73, 13, 20, 6], [56, 75, 83, 26, 24, 53, 56, 61])); // 24
console.log(
  maxDivScore(
    [39, 70, 33],
    [
      27, 73, 37, 31, 28, 82, 96, 12, 31, 77, 17, 83, 19, 46, 7, 4, 74, 70, 66,
      73, 25, 50, 79,
    ]
  )
); // 7

// * 35. Binary Prefix Divisible by 5 ---------------------
// You are given a binary array nums (0-indexed).
// We define x[i] as the number whose binary representation is the subarray nums[0..i]
// (from most-significant-bit to least-significant-bit).
// For example, if nums = [1,0,1], then x[0] = 1, x[1] = 2, and x[2] = 5.
// Return an array of booleans answer where answer[i] is true if x[i] is divisible by 5.

// Example:
// Input: nums = [0,1,1]
// Output: [true,false,false]
// Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
// Only the first number is divisible by 5, so answer[0] is true.

var prefixesDivBy5 = function (nums) {
  const answer = new Array(nums.length).fill(false);
  let cur = 0;

  for (let i = 0; i < nums.length; i++) {
    cur = cur * 2 + nums[i];
    if (cur % 5 === 0) answer[i] = true;
    cur %= 5;
  }

  return answer;
};

console.log(prefixesDivBy5([0, 1, 1])); // [true,false,false]
console.log(prefixesDivBy5([1, 1, 1])); // [false,false,false]

// * 36. Count Pairs Whose Sum is Less Than Target ----------------------------------------------------
// Given a 0-indexed integer array nums of length n and an integer target,
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// Example:
// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
// - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.

// 0(n^2)
var countPairs = function (nums, target) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) counter++;
    }
  }
  return counter;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // 10

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

// * 36. Number of Employees Who Met the Target ---------------------
// There are n employees in a company, numbered from 0 to n - 1.
// Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n
// and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.

// Example:
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.

// 0(n)
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let counter = 0;

  for (let elem of hours) {
    if (elem >= target) counter++;
  }

  return counter;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)); // 3
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)); // 0

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

// * 3. Create Target Array in the Given Order ----------------------------------------------------
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i],
// insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.

// Example:
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < index.length; i++) {
    if (target[index[i]] !== undefined) {
      target.splice(index[i], 0, nums[i]);
    } else {
      target[index[i]] = nums[i];
    }
  }
  return target;
};

console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // [0,1,2,3,4]
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
console.log(createTargetArray([0, 1, 0], [0, 1, 0])); // [0,0,1]

// * 4. Count Tested Devices After Test Operations ----------------------------------------------------
// You are given a 0-indexed integer array batteryPercentages having length n,
// denoting the battery percentages of n 0-indexed devices.
// Your task is to test each device i in order from 0 to n - 1,
// by performing the following test operations:

// If batteryPercentages[i] is greater than 0:
// Increment the count of tested devices.
// Decrease the battery percentage of all devices with indices j in the range [i + 1, n - 1] by 1, ensuring their battery percentage never goes below 0, i.e, batteryPercentages[j] = max(0, batteryPercentages[j] - 1).
// Move to the next device.
// Otherwise, move to the next device without performing any test.
// Return an integer denoting the number of devices that will be tested after performing the test operations in order.

// Example:
// Input: batteryPercentages = [1,1,2,1,3]
// Output: 3
// Explanation: Performing the test operations in order starting from device 0:
// At device 0, batteryPercentages[0] > 0, so there is now 1 tested device, and batteryPercentages becomes [1,0,1,0,2].
// At device 1, batteryPercentages[1] == 0, so we move to the next device without testing.
// At device 2, batteryPercentages[2] > 0, so there are now 2 tested devices, and batteryPercentages becomes [1,0,1,0,1].
// At device 3, batteryPercentages[3] == 0, so we move to the next device without testing.
// At device 4, batteryPercentages[4] > 0, so there are now 3 tested devices, and batteryPercentages stays the same.
// So, the answer is 3.

var countTestedDevices = function (batteryPercentages) {
  let counter = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      counter++;
      for (let j = i + 1; j < batteryPercentages.length; j++)
        batteryPercentages[j]--;
    }
  }
  return counter;
};

console.log(countTestedDevices([1, 1, 2, 1, 3])); // 3
console.log(countTestedDevices([0, 1, 2])); // 2

// * 5. Sum of Squares of Special Elements ----------------------------------------------------
// You are given a 1-indexed integer array nums of length n.
// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.
// Return the sum of the squares of all special elements of nums.

// Example:
// Input: nums = [1,2,3,4]
// Output: 21
// Explanation: There are exactly 3 special elements in nums:
// nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4.
// Hence, the sum of the squares of all special elements of nums is
// nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.

var sumOfSquares = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) {
      sum += nums[i] ** 2;
    }
  }
  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4])); // 21
console.log(sumOfSquares([2, 7, 1, 19, 18, 3])); // 63

// * 6. Separate the Digits in an Array ----------------------------------------------------
// Given an array of positive integers nums,
// return an array answer that consists of the digits of each integer in nums
// after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.
// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

// Example:
// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation:
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

var separateDigits = function (nums) {
  let answer = [];
  for (let elem of nums) {
    elem = elem.toString().split("");

    for (let str of elem) {
      answer.push(Number(str));
    }
  }

  return answer;
};

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]

// * 7. Apply Operations to an Array ----------------------------------------------------
// You are given a 0-indexed array nums of size n consisting of non-negative integers.
// You need to apply n - 1 operations to this array where, in the ith operation (0-indexed),
// you will apply the following on the ith element of nums:
// If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0.
// Otherwise, you skip this operation.
// After performing all the operations, shift all the 0's to the end of the array.
// For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
// Return the resulting array.
// Note that the operations are applied sequentially, not all at once.

// Example :
// Input: nums = [1,2,2,1,1,0]
// Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
// - i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// - i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// - i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// - i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// - i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
// After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].

var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] && nums[i] == nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  const zeros = nums.filter((el) => el === 0);
  const notZeros = nums.filter((el) => el !== 0);

  return notZeros.concat(zeros);
};

console.log(applyOperations([1, 2, 2, 1, 1, 0])); // [1,4,2,0,0,0]
console.log(applyOperations([0, 1])); // [1,0]
console.log(
  applyOperations([
    847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272,
  ])
); // [1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]
console.log(
  applyOperations([
    971, 0, 0, 0, 0, 614, 236, 236, 0, 503, 503, 0, 105, 0, 891, 579, 579, 270,
    0, 0, 422, 938, 938, 171, 171, 171, 671, 671, 671, 671, 721, 721, 0, 0, 0,
    0, 0, 0, 524, 524, 970, 361, 20, 20, 863, 847, 847, 0, 490, 17, 159, 965,
    396, 971, 971, 971, 971, 971, 971, 910,
  ])
); // [971,614,472,1006,105,891,1158,270,422,1876,342,171,1342,1342,1442,1048,970,361,40,863,1694,490,17,159,965,396,1942,1942,1942,910,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// * 8. Min Max Game ----------------------------------------------------
// You are given a 0-indexed integer array nums whose length is a power of 2.

// Apply the following algorithm on nums:

// Let n be the length of nums. If n == 1, end the process.
// Otherwise, create a new 0-indexed integer array newNums of length n / 2.
// For every even index i where 0 <= i < n / 2,
// assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
// For every odd index i where 0 <= i < n / 2,
// assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the last number that remains in nums after applying the algorithm.

// Example:
// Input: nums = [1,3,5,2,4,8,2,2]
// Output: 1
// Explanation: The following arrays are the results of applying the algorithm repeatedly.
// First: nums = [1,5,4,2]
// Second: nums = [1,4]
// Third: nums = [1]
// 1 is the last remaining number, so we return 1.

var minMaxGame = function (nums, newNums = [], i = 0) {
  // If length === 1, end the process
  if (nums.length === 1) return nums[0];

  while (nums.length > 0) {
    if (i % 2 === 0) {
      newNums.push(Math.min(nums[0], nums[1]));
    } else {
      newNums.push(Math.max(nums[0], nums[1]));
    }

    nums = nums.slice(2);
    i++;
  }

  return minMaxGame((nums = newNums), (newNums = []), (i = 0));
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1
console.log(minMaxGame([3])); // 3

// ! =============== Math / Counting Problems ===================!==undefinedundefined

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

// * 2. Difference Between Element Sum and digit Sum of an Array -----------------------------------
// You are given a positive integer array nums.
// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Example:
// Input: nums = [1,15,6,3]
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

// O(N)
var differenceOfSum = function (nums) {
  // find the sum of all elements:
  let sum = nums.reduce((acc, elem) => (acc += elem), 0);
  // find the sum of digits
  let sumOfDigits = nums
    .join("")
    .split("")
    .reduce((acc, elem) => (acc += Number(elem)), 0);

  return Math.abs(sum - sumOfDigits);
};

console.log(differenceOfSum([1, 15, 6, 3])); // 9
console.log(differenceOfSum([1, 2, 3, 4])); // 0

// * 3. Sum of All Odd Length Subarrays -----------------------------------
// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
// A subarray is a contiguous subsequence of the array.

// Example:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  // Traversing the array
  for (let i = 0; i < arr.length; i++) {
    // Defining every third element of the array
    for (let j = i; j < arr.length; j += 2) {
      // Traversing the subarray (each element from i to j)
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66

// * 4. Maximum Product Difference Between 2 Pairs -----------------------------------
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z
// such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

// Example:
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7)
// and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

var maxProductDifference = function (nums) {
  // Finding the biggest elements and removing them from the input array
  const { biggest: biggestOne, arr: arrOne } = calculateMax(nums);
  const { biggest: biggestTwo, arr: arrTwo } = calculateMax(arrOne);

  // Finding the smallest elements and removing them from the input array
  const { smallest: smallestOne, arr: arrThree } = calculateMin(arrTwo);
  const { smallest: smallestTwo } = calculateMin(arrThree);

  let diff = biggestOne * biggestTwo - smallestOne * smallestTwo;

  return diff;
};

const calculateMax = (arr) => {
  let biggest = Math.max.apply(null, arr);
  let indexOfBiggest = arr.indexOf(biggest);
  // Removing  elem from the nums
  arr.splice(indexOfBiggest, 1);
  return { biggest, arr };
};

const calculateMin = (arr) => {
  let smallest = Math.min.apply(null, arr);
  let indexOfSmallest = arr.indexOf(smallest);
  // Removing  elem from the nums
  arr.splice(indexOfSmallest, 1);
  return { smallest, arr };
};

console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64

// * 5. Minimum Time Visiting All points -----------------------------------
// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:

// Input: points = [[3,2],[-2,2]]
// Output: 5

var minTimeToVisitAllPoints = function (points) {
  let sum = 0;

  for (let i = 0; i < points.length; i++) {
    if (points[i + 1] !== undefined) {
      let diffX = Math.abs(points[i][0] - points[i + 1][0]);
      let diffY = Math.abs(points[i][1] - points[i + 1][1]);

      if (diffX >= diffY) {
        sum += diffX;
      } else {
        sum += diffY;
      }
    }
  }
  return sum;
};

console.log(
  "minTimeToVisitAllPoints: " +
    minTimeToVisitAllPoints([
      [1, 1],
      [3, 4],
      [-1, 0],
    ])
); // 7
console.log(
  "minTimeToVisitAllPoints: " +
    minTimeToVisitAllPoints([
      [3, 2],
      [-2, 2],
    ])
); // 5

// * 6. Find Unique Integers Sum up to Zero -----------------------------------
// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

let sumZero = function (n) {
  let result = [];
  let sum = 0;

  for (let i = n - 1; i >= 1; i--) {
    result.push(-i);
    sum += -i;
  }
  result.push(Math.abs(sum));
  return result;
};

console.log(sumZero(5)); // [-4, -3, -2, -1, 10]
console.log(sumZero(3)); // [-2, -1, 3]
console.log(sumZero(1)); // [0]

// * 7. Maximum Count of Positive Integer and Negative Integer -----------------------------------
// Given an array nums sorted in non-decreasing order,
// return the maximum between the number of positive integers
// and the number of negative integers.

// In other words, if the number of positive integers in nums
// is pos and the number of negative integers is neg,
// then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
// The maximum count among them is 3.

// Example 2:
// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers.
// The maximum count among them is 4.

const maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;

  for (let elem of nums) {
    if (elem !== 0 && elem < 0) {
      neg++;
    } else if (elem !== 0 && elem > 0) {
      pos++;
    }
  }

  return Math.max(pos, neg);
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4

// ! =============== Array of Strings ===================

// * 1. Find Words Containing Character ----------------------------------------------------
// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

// Example:
// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

// 0(2N)
var findWordsContaining = function (words, x) {
  let output = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      output.push(i);
    }
  }

  return output;
};

console.log(findWordsContaining(["leet", "code"], "e")); // [0,1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); // [0,2]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")); // []

// * 2. Maximum Number of Words Found in Sentences ------------------------------------------
// A sentence is a list of words that are separated by a single space
// with no leading or trailing spaces.
// You are given an array of strings sentences,
// where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

// Example:
// Input: sentences = ["alice and bob love leetcode", "i think so too",
// "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes
// from the third sentence, which has 6 words.

var mostWordsFound = function (sentences) {
  let max = 0;
  let i = 0;

  while (i < sentences.length) {
    let numOfWords = sentences[i].split(" ").length;
    max = Math.max(max, numOfWords);
    i++;
  }

  return max;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
); // 6
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
); // 3

// * 3. Check If Two String Arrays are Equivalent ------------------------------------------
// Given two string arrays word1 and word2,
// return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated
// in order forms the string.

// Example:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("") ? true : false;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); // true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); // true

// * 4. Count Items Matching a Rule ------------------------------------------
// You are given an array items, where each items[i] = [typei, colori, namei]
// describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],
// ["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule,
// which is ["computer","silver","lenovo"].

var countMatches = function (items, ruleKey, ruleValue) {
  let i = 0;
  let count = 0;

  while (i < items.length) {
    if (ruleKey === "type") {
      validate(items[i], 0, ruleValue) ? count++ : count;
    } else if (ruleKey === "color") {
      validate(items[i], 1, ruleValue) ? count++ : count;
    } else if (ruleKey === "name") {
      validate(items[i], 2, ruleValue) ? count++ : count;
    } else {
      return 0;
    }
    i++;
  }
  return count;
};

const validate = (arr, idx, value) => {
  return arr[idx] === value ? true : false;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
); // 1
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
); // 2
console.log(
  countMatches(
    [
      ["ii", "iiiiiii", "ii"],
      ["iiiiiii", "iiiiiii", "ii"],
      ["ii", "iiiiiii", "iiiiiii"],
    ],
    "color",
    "ii"
  )
);

// * 5. Shuffle String ------------------------------------------
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character
// at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Example:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// O(N)
var restoreString = function (s, indices) {
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // "leetcode"
console.log(restoreString("abc", [0, 1, 2])); // "abc"

// * 6. Truncate Sentence ------------------------------------------
// A sentence is a list of words that are separated by a single space
// with no leading or trailing spaces. Each of the words consists
// of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​.
// You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words.
// Return s​​​​​​ after truncating it.

// Example:
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// O(N) because of the slice method
var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  return arr.slice(0, k).join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4)); // "Hello how are you"
console.log(truncateSentence("What is the solution to this problem", 4)); // "What is the solution"
console.log(truncateSentence("chopper is not a tanuki", 5)); // "chopper is not a tanuki"

// * 7. Check if a string is an Acronym of Words ------------------------------------------
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words
// if it can be formed by concatenating the first character of each string in words in order.
// For example, "ab" can be formed from ["apple", "banana"],
// but it can't be formed from ["bear", "aardvark"].
// Return true if s is an acronym of words, and false otherwise.

// Example:
// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob",
// and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.

var isAcronym = function (words, s) {
  if (words.length !== s.length) return false;
  let i = 0;

  while (i < words.length) {
    if (words[i][0] === s[i]) {
      i++;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log("isAcronym: " + isAcronym(["alice", "bob", "charlie"], "abc")); // true
console.log("isAcronym: " + isAcronym(["an", "apple"], "a")); // false
console.log(
  "isAcronym: " +
    isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")
); // true
console.log("isAcronym: " + isAcronym(["a", "b", "c"], "abcd")); // false

// * 8. Maximum Value of a String in an Array ------------------------------------------
// The value of an alphanumeric string can be defined as:
// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings,
// return the maximum value of any string in strs.

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

// Example 2:

// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation:
// Each string in the array has value 1. Hence, we return 1.

const maximumValue = function (strs) {
  let maxValue = 0;

  for (let i = 0; i < strs.length; i++) {
    if (isNaN(+strs[i])) {
      maxValue = Math.max(maxValue, strs[i].length);
    } else {
      maxValue = Math.max(maxValue, +strs[i]);
    }
  }
  return maxValue;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); // 5
console.log(maximumValue(["1", "01", "001", "0001"])); // 1
console.log(maximumValue(["3glko", "1"])); // 5

// ! =============== Enumeration ===================

// ! =============== Hash Table ====================

// * 1. How Many Numbers Are Smaller Than the Current Number ---------------------------------
// Given the array nums, for each nums[i] find out
// how many numbers in the array are smaller than it. T
// hat is, for each nums[i] you have to count the number
// of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// 0(N^2)
var smallerNumbersThanCurrent = function (nums) {
  let counter = 0;
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        if (nums[j] < nums[i]) {
          counter++;
        }
      }
    }

    output.push(counter);
    counter = 0;
  }
  return output;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]

// * 2. Count Number of Pairs With Absolute Difference K ------------------------------------------
// Given an integer array nums and an integer k,
// return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

// Example:
// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

var countKDifference = function (nums, k) {
  let count = 0;
  let hashTable = {};

  for (let num of nums) {
    if (hashTable[num]) count += hashTable[num];

    hashTable[num + k] ? (hashTable[num + k] += 1) : (hashTable[num + k] = 1);
    hashTable[num - k] ? (hashTable[num - k] += 1) : (hashTable[num - k] = 1);
  }
  return count;
};

console.log("countKDifference: " + countKDifference([1, 2, 2, 1], 1)); // 4
console.log("countKDifference: " + countKDifference([1, 3], 3)); // 0
console.log("countKDifference: " + countKDifference([3, 2, 1, 5, 4], 2)); // 3
console.log(
  "countKDifference: " + countKDifference([10, 2, 10, 9, 1, 6, 8, 9, 2, 8], 5)
); // 1

// * 3. Unique Morse Code Words ------------------------------------------
// International Morse Code defines a standard encoding
// where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet
// is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written
// as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...",
// which is the concatenation of "-.-.", ".-", and "-...".
// We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

var uniqueMorseRepresentations = function (words) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const hashMap = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    hashMap.set(alphabet[i], morseCode[i]);
  }

  let count = 0;
  let encodedWord = "";
  let arr = [];

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      encodedWord += hashMap.get(word[i]);
    }
    if (!arr.includes(encodedWord)) {
      arr.push(encodedWord);
      count++;
    }
    encodedWord = "";
  }

  return count;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
console.log(uniqueMorseRepresentations(["a"])); // 1

// * 4. Subarrays Distinct Elements Sum of Squares I ------------------------------------------
// You are given a 0-indexed integer array nums.
// The distinct count of a subarray of nums is defined as:

// Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].
// Return the sum of the squares of distinct counts of all subarrays of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example:

// Input: nums = [1,2,1]
// Output: 15
// Explanation: Six possible subarrays are:
// [1]: 1 distinct value
// [2]: 1 distinct value
// [1]: 1 distinct value
// [1,2]: 2 distinct values
// [2,1]: 2 distinct values
// [1,2,1]: 2 distinct values
// The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.

var sumCounts = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let arr = new Set([nums[i]]);
    for (let j = i; j < nums.length; j++) {
      arr.add(nums[j]);
      sum += arr.size ** 2;
    }
  }

  return sum;
};

console.log(sumCounts([1, 2, 1])); // 15
console.log(sumCounts([1, 1])); // 3

// * 5. Find the Distinct Difference Array ------------------------------------------
// You are given a 0-indexed array nums of length n.
// The distinct difference array of nums is an array diff of length n
// such that diff[i] is equal to the number of distinct elements
// in the suffix nums[i + 1, ..., n - 1] subtracted
// from the number of distinct elements in the prefix nums[0, ..., i].
// Return the distinct difference array of nums.
// Note that nums[i, ..., j] denotes the subarray of nums starting at index i
// and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j]
// denotes an empty subarray.

// Example:
// Input: nums = [1,2,3,4,5]
// Output: [-3,-1,1,3,5]
// Explanation: For index i = 0, there is 1 element in the prefix and 4 distinct elements in the suffix. Thus, diff[0] = 1 - 4 = -3.
// For index i = 1, there are 2 distinct elements in the prefix and 3 distinct elements in the suffix. Thus, diff[1] = 2 - 3 = -1.
// For index i = 2, there are 3 distinct elements in the prefix and 2 distinct elements in the suffix. Thus, diff[2] = 3 - 2 = 1.
// For index i = 3, there are 4 distinct elements in the prefix and 1 distinct element in the suffix. Thus, diff[3] = 4 - 1 = 3.
// For index i = 4, there are 5 distinct elements in the prefix and no elements in the suffix. Thus, diff[4] = 5 - 0 = 5.

var distinctDifferenceArray = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    output[i] =
      new Set(nums.slice(0, i + 1)).size - new Set(nums.slice(i + 1)).size;
  }

  return output;
};

console.log(
  "distinctDifferenceArray" + distinctDifferenceArray([1, 2, 3, 4, 5])
); // [-3,-1,1,3,5]
console.log(
  "distinctDifferenceArray" + distinctDifferenceArray([3, 2, 3, 4, 2])
); // [-2,-1,0,2,3]

// * 6. Two Out of Three ------------------------------------------
// Given three integer arrays nums1, nums2, and nums3,
// return a distinct array containing all the values that are present
// in at least two out of the three arrays.
// You may return the values in any order.

// Example:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.

let twoOutOfThree = function (nums1, nums2, nums3) {
  let argumentsArray = Array.from(arguments);
  let hashTable = {};
  let result = [];

  for (let elem of argumentsArray) {
    elem = new Set(elem);

    for (let subElem of elem) {
      hashTable[subElem] ? (hashTable[subElem] += 1) : (hashTable[subElem] = 1);
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] > 1) {
      result.push(+key);
    }
  }
  return result;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2,3,1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []

// * 7. Points That Intersect With Cars ------------------------------------------
// You are given a 0-indexed 2D integer array nums representing the coordinates
// of the cars parking on a number line.
// For any index i, nums[i] = [starti, endi]
// where start i is the starting point of the ith car
// and end i is the ending point of the ith car.
// Return the number of integer points on the line that are covered with any part of a car.

// Example:

// Input: nums = [[3,6],[1,5],[4,7]]
// Output: 7
// Explanation: All the points from 1 to 7 intersect at least one car, therefore the answer would be 7.

const numberOfPoints = function (nums) {
  let result = new Set();

  for (let elem of nums) {
    for (let i = elem[0]; i <= elem[1]; i++) {
      result.add(i);
    }
  }
  return result.size;
};

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ])
); //
console.log(
  numberOfPoints([
    [1, 3],
    [5, 8],
  ])
); //

// * 8. Merge Two 2D Arrays by Summing Values ------------------------------------------
// You are given two 2D integer arrays nums1 and nums2.

// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id,
// respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id
// in the two arrays. If the id does not exist in one of the two arrays then its value in that array
// is considered to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.

// Example:

// Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.

const mergeArrays = function (nums1, nums2) {
  let hashTable = {};

  for (let [key, val] of nums1) {
    hashTable[key] = val;
  }

  for (let [key, val] of nums2) {
    hashTable[key] ? (hashTable[key] += val) : (hashTable[key] = val);
  }

  // Transform the hashTable into the 2D array:
  let result = [];

  for (let key in hashTable) {
    result.push([+key, hashTable[key]]);
  }

  return result;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
); // [[1,6],[2,3],[3,2],[4,6]]
console.log(
  mergeArrays(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
); // [[1,3],[2,4],[3,6],[4,3],[5,5]]

// * 9. Make Two Arrays Equal by Reversing Subarrays ------------------------------------------
// You are given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty subarray of arr and reverse it.
// You are allowed to make any number of steps.
// Return true if you can make arr equal to target or false otherwise.

// Example:

// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

const canBeEqual = function (target, arr) {
  let hashTable1 = {};
  let hashTable2 = {};

  for (let elem of target) {
    hashTable1[elem] ? (hashTable1[elem] += 1) : (hashTable1[elem] = 1);
  }

  for (let elem of arr) {
    hashTable2[elem] ? (hashTable2[elem] += 1) : (hashTable2[elem] = 1);
  }

  for (let key in hashTable1) {
    if (!hashTable2.hasOwnProperty(key) || hashTable2[key] !== hashTable1[key])
      return false;
  }
  return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false
console.log(canBeEqual([5, 5, 2, 2], [6, 6, 1, 1])); // false

// ! =================== Matrix ====================

// * 1. Matrix Cells in Distance Order ------------------------------------------
// You are given four integers row, cols, rCenter, and cCenter.
// There is a rows x cols matrix and you are on the cell
// with the coordinates (rCenter, cCenter).

// Return the coordinates of all cells in the matrix,
// sorted by their distance from (rCenter, cCenter)
// from the smallest distance to the largest distance.
// You may return the answer in any order that satisfies this condition.

// The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.

// Example:

// Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
// Output: [[0,0],[0,1]]
// Explanation: The distances from (0, 0) to other cells are: [0,1]

const allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const buckets = [];
  const result = [];

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      const dis = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      if (buckets[dis] === undefined) buckets[dis] = [];
      buckets[dis].push([i, j]);
    }
  }
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  return result;
};

console.log(allCellsDistOrder(1, 2, 0, 0)); // [[0,0],[0,1]]
console.log(allCellsDistOrder(2, 2, 0, 1)); // [[0,1],[0,0],[1,1],[1,0]]
console.log(allCellsDistOrder(2, 3, 1, 2)); // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]

// * 2. Find Champion I ------------------------------------------
// There are n teams numbered from 0 to n - 1 in a tournament.
// Given a 0-indexed 2D boolean matrix grid of size n * n. 
// For all i, j that 0 <= i, j <= n - 1 and i != j team i is stronger than team j if grid[i][j] == 1, 
// otherwise, team j is stronger than team i.
// Team a will be the champion of the tournament if there is no team b that is stronger than team a.

// Return the team that will be the champion of the tournament.

// Example 1:
// Input: grid = [[0,1],[0,0]]
// Output: 0
// Explanation: There are two teams in this tournament.
// grid[0][1] == 1 means that team 0 is stronger than team 1. So team 0 will be the champion.

// Example 2:
// Input: grid = [[0,0,1],[1,0,1],[0,0,0]]
// Output: 1
// Explanation: There are three teams in this tournament.
// grid[1][0] == 1 means that team 1 is stronger than team 0.
// grid[1][2] == 1 means that team 1 is stronger than team 2.
// So team 1 will be the champion.

const findChampion = function (grid) {
  let score = 0;
  let hashTable = {}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j !== i && grid[i][j] === 1) {
        score++;
      }
    }
    hashTable[i] = score;
    score = 0;
  }
  
  // Get a key with the max value from the hashTable
  const max = Object.keys(hashTable).reduce((acc, key) => Math.max(acc, hashTable[key]), -Infinity);
  const team = Object.keys(hashTable).filter(key => hashTable[key] === max);
  return Number(team[0]);
};

console.log(
  findChampion([
    [0, 1],
    [0, 0],
  ])
); // 0
console.log(
  findChampion([
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // 1

// ! =============== Two Pointers ==============

// * 1. Number of Arithmetic Triplets ------------------------------------------
// You are given a 0-indexed, strictly increasing integer array nums
// and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet
// if the following conditions are met:
// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// Example:
// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

var arithmeticTriplets = function (nums, diff) {
  let counter = 0;
  let diff2 = diff * 2;

  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + diff2))
      counter++;
  }
  return counter;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2

// ! =============== Sorting ==============

// * 1. Find Target Indices after Sorting Array ---------------------------------
// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order.
// If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order.

// Example:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

let targetIndices = function (nums, target) {
  let result = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
  }
  return result;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2)); //
console.log(targetIndices([1, 2, 5, 2, 3], 3)); //
console.log(targetIndices([1, 2, 5, 2, 3], 5)); //

// ! =============== Prefix Sum ==============

// * 1. Running Sum of 1d Array ---------------------------------
// Given an array nums. We define a running sum of an array
// as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// O(n)
var runningSum = function (nums) {
  let sum = 0;
  let i = 0;

  while (i < nums.length) {
    sum += nums[i];
    nums[i] = sum;
    i++;
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]

// * 2. Left and Right Sum Differences ---------------------------------
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums.
// If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums.
// If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example:
// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

var leftRightDifference = function (nums) {
  // 1. create 2 empty arrays rightSum and leftSum
  // 2. loop through the nums and fill out the empty arrays with the sum of elements
  // 3. create an empty array result
  // 4. loop through the left array and calculate the result elements using the given formula
  // 5. return the result

  let leftArr = [];
  let leftSum = 0;
  let rightArr = [];
  let rightSum = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    rightArr.push(rightSum);
    rightSum = 0;

    for (let k = i - 1; k < i; k++) {
      if (nums[k] === undefined) nums[k] = 0;
      leftSum += nums[k];
    }
    leftArr.push(leftSum);
  }

  for (let i = 0; i < leftArr.length; i++) {
    result.push(Math.abs(leftArr[i] - rightArr[i]));
  }
  return result;
};

console.log(leftRightDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRightDifference([1])); // [0]

// * 3. Find the Highest Altitude ---------------------------------
// There is a biker going on a road trip.
// The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i]
// is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
// Return the highest altitude of a point.

// Example:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

var largestAltitude = function (gain) {
  let arr = [0];

  for (let i = 0; i < gain.length; i++) {
    arr.push(arr[arr.length - 1] + gain[i]);
  }

  return Math.max.apply(null, arr);
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0

// ! =============== Bit Manipulation ==============

// * 1. Sum of Values at Indices With K Set Bits -----------------------------------
// You are given a 0-indexed integer array nums and an integer k.
// Return an integer that denotes the sum of elements in nums
// whose corresponding indices have exactly k set bits in their binary representation.
// The set bits in an integer are the 1's present when it is written in binary.
// For example, the binary representation of 21 is 10101, which has 3 set bits.

// Example:
// Input: nums = [5,10,1,5,2], k = 1
// Output: 13
// Explanation: The binary representation of the indices are:
// 0 = 0002
// 1 = 0012
// 2 = 0102
// 3 = 0112
// 4 = 1002
// Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
// Hence, the answer is nums[1] + nums[2] + nums[4] = 13.

// O(2N)
var sumIndicesWithKSetBits = function (nums, k) {
  // 1. Transform the indices to binary (binary = index.toString(2))
  // 2. split --> create a counter variable --> count the 1s
  // 3. Create a sum variable
  // 4. if the index has the exact number of 1s, then get the element and add it to the sum
  // 5. Nullify the counter after each binary iteration
  // 6. Return the sum
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let binary = i.toString(2).split("");

    for (let char of binary) {
      if (char === "1") counter++;
    }
    if (counter === k) sum += nums[i];
    counter = 0;
  }
  return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)); // 13
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2)); // 1

// * 2. Decode XORed Array -----------------------------------
// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1,
// such that encoded[i] = arr[i] XOR arr[i + 1].
// For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first,
// that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.

// Example:
// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

var decode = function (encoded, first) {
  // 1. Create an empty array to store the result
  // 2. Push the "first" into the empty array
  // 3. Loop through the "encoded" and calculate the XOR for each number
  // by comparing it to the last number in the empty array
  // 4. Push the result into an empty array.
  // 5. Return the result array

  let arr = [];
  arr.push(first);

  for (let elem of encoded) {
    arr.push(arr[arr.length - 1] ^ elem); // ^ xor operator in JS
  }
  return arr;
};

console.log(decode([1, 2, 3], 1)); // [1,0,2,1]
console.log(decode([6, 2, 7, 3], 4)); // [4,2,0,7,4]

// * 3. Single Number -----------------------------------------
// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example:

// Input: nums = [2,2,1]
// Output: 1

const singleNumber = function (nums) {
  let hashTable = {};

  for (let elem of nums) {
    hashTable[elem] ? (hashTable[elem] += 1) : (hashTable[elem] = 1);
  }

  for (let key in hashTable) {
    if (hashTable[key] === 1) return key;
  }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// ! =============== Greedy Algorithm ==============

// ! =============== Backtracking ==============

// ! =============== Heap (Priority Queue) ==============

// * 1. Minimum Number Game -----------------------------------
// You are given a 0-indexed integer array nums of even length
// and there is also an empty array arr.
// Alice and Bob decided to play a game
// where in every round Alice and Bob will do one move.
// The rules of the game are as follows:

// Every round, first Alice will remove the minimum element from nums,
// and then Bob does the same.
// Now, first Bob will append the removed element in the array arr,
// and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.

// Example:
// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
// Explanation: In round one, first Alice removes 2 and then Bob removes 3.
// Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
// At the begining of round two, nums = [5,4].
// Now, first Alice removes 4 and then Bob removes 5.
// Then both append in arr which becomes [3,2,5,4].

var numberGame = function (nums) {
  let result = [];

  while (nums.length > 0) {
    let aliceMinNum = getMin(nums);
    let bobMinNum = getMin(nums);
    result.push(bobMinNum);
    result.push(aliceMinNum);
  }
  return result;
};

const getMin = (arr) => {
  let minNum = Math.min(...arr);
  let idx = arr.indexOf(minNum);
  arr.splice(idx, 1);
  return minNum;
};

console.log(numberGame([5, 4, 2, 3])); // [3,2,5,4]
console.log(numberGame([2, 5])); // [5,2]

// ! =============== Search (Binary) ==============

// ! =============== Stack ==============

// ! =============== Dynamic Programming ==============

// * 1. Pascal's Triangle -----------------------------------
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const generate = function (numRows) {
  // Initialize the result array to store Pascal's triangle
  let result = [];

  // Iterate over each row of the triangle
  for (let i = 0; i < numRows; i++) {
    let row = [];

    // Set the first and last elements of each row to 1
    row[0] = 1; // First element
    row[i] = 1; // Last element (index equals the row number)

    // Iterate over each element in the row (except the first and last)
    // to calculate its value based on the previous row
    for (let j = 1; j < i; j++) {
      // Calculating the value of the current elements
      // by defining the value of elements in the previous row
      const leftVal = result[i - 1][j - 1];
      const rightVal = result[i - 1][j];
      row[j] = leftVal + rightVal;
    }

    // Push the newly generated row into the Pascal's triangle
    result.push(row);
  }

  // Return the generated Pascal's triangle
  return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]

// ! =============== Divide and Conquer ==============

// ! =============== Trees ==============

// ! =============== Linked List ==============

// ! =============== DFS, BFS ==============
