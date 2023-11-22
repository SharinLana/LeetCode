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
