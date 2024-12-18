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

// * 37. (283) Move Zeroes ----------------------------------------------------
// Given an integer array nums,
// move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

let moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]

// * 38. (26) Remove Duplicates from Sorted Array ----------------------------------------------------
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = function (nums) {
  let current, next;
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    current = nums[i];
    next = nums[j];

    if (next === current) {
      nums.splice(j, 1);
    } else {
      i = j;
      j++;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// * 39. (27) Remove Element ----------------------------------------------------
// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements
// which are not equal to val. The remaining elements of nums are not important
// as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

// * 40. (35) Search Insert Position ----------------------------------------------------
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (
        nums[i] < target &&
        (nums[i + 1] > target || nums[i + 1] === undefined)
      ) {
        return i + 1;
      } else if (nums[i] > target && nums[i - 1] === undefined) {
        return i;
      }
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4

// * 41. (66) Plus One ----------------------------------------------------
// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

const plusOne = function (digits) {
  let stringNum = digits.join("");
  let incrementedNumber = BigInt(stringNum) + BigInt(1); // BigInt to handle a string with more that 16 digits
  let convertedToStringArray = incrementedNumber.toString().split("");

  return convertedToStringArray.map(Number);
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// * 42. (448) Find All Numbers Disappeared in an Array ----------------------------------------------------
// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

let findDisappearedNumbers = function (nums) {
  let sortedNoDuplicates = Array.from(new Set(nums.sort((a, b) => a - b)));
  let result = [];

  if (sortedNoDuplicates.length !== nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (sortedNoDuplicates[i] !== i + 1) {
        result.push(i + 1);
        // Add the missing number to sortedNoDuplicates to keep checking
        // the rest of the numbers
        sortedNoDuplicates.splice(i, 0, i + 1);
      }
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
console.log(findDisappearedNumbers([2, 2])); // [1]
console.log(findDisappearedNumbers([2, 1])); // []
console.log(findDisappearedNumbers([1, 1, 2, 2])); // [3, 4]

// * 43. (643) Maximum Average Subarray I ----------------------------------------------------
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

const findMaxAverage = function (nums, k) {
  if (k === 1) return nums.sort((a, b) => a - b).pop();

  let start = 0;
  let end = k;
  // Calculate sum of the first k elements:
  let sum = nums.slice(0, k).reduce((acc, el) => acc + el, 0);
  let temp = sum;

  // Start adding to the temp the next element from the array
  // and subtracting the first one and compare the result to the sum
  while (end < nums.length) {
    temp = temp - nums[start++] + nums[end++];
    sum = Math.max(sum, temp);
  }

  return sum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000
console.log(findMaxAverage([0, 1, 1, 3, 3], 4)); // 2.00000
console.log(findMaxAverage([4, 2, 1, 3, 3], 2)); // 3.00000

// * 44. (717) Maximum Average Subarray I ----------------------------------------------------
// We have two special characters:

// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character
// must be a one-bit character.

// Example 1:
// Input: bits = [1,0,0]
// Output: true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.

// Example 2:
// Input: bits = [1,1,1,0]
// Output: false
// Explanation: The only way to decode it is two-bit character and two-bit character.
// So the last character is not one-bit character.

const isOneBitCharacter = function (bits) {
  if (bits.length === 1) {
    return true;
  }
  if (bits.length === 0) {
    return false;
  }

  for (let i = 0; i < bits.length; i++) {
    // if there's 1, then cut the segment from the beginning of the array to i+1
    // and start checking the rest of the array for 1's
    if (bits[i] === 1) {
      return isOneBitCharacter(bits.slice(i + 2));
    } else {
      // if only 0's are in the array
      if (!bits.includes(1)) {
        return true;
      }
    }
  }
};

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
console.log(isOneBitCharacter([0, 0])); // true
console.log(isOneBitCharacter([1, 0])); // false
console.log(isOneBitCharacter([1, 0, 1, 0, 0])); // true

// * 45. (744) Find Smallest Letter Greater Than Target ----------------------------------------------------
// You are given an array of characters letters that is sorted in non-decreasing order,
// and a character target.
// There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target.
// If such a character does not exist, return the first character in letters.

// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// Example 3:
// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z'
// so we return letters[0].

const nextGreatestLetter = function (letters, target) {
  let set = Array.from(new Set(letters));

  if (set[set.length - 1] <= target) {
    return set.shift();
  } else {
    for (let elem of set) {
      if (elem > target) return elem;
    }
  }
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // "x"

// * 46. (888). Fair Candy Swap ------------------------------------------
// Alice and Bob have a different total number of candies.
// You are given two integer arrays aliceSizes and bobSizes
// where aliceSizes[i] is the number of candies of the ith box of candy
// that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each
// so that after the exchange, they both have the same total amount of candy.
// The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box
// that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange.
// If there are multiple answers, you may return any one of them.
// It is guaranteed that at least one answer exists.

// Example 1:
// Input: aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]

// Example 2:
// Input: aliceSizes = [1,2], bobSizes = [2,3]
// Output: [1,2]

// Example 3:
// Input: aliceSizes = [2], bobSizes = [1,3]
// Output: [2,3]

const fairCandySwap = function (aliceSizes, bobSizes) {
  let fairShare = getCandySum(aliceSizes.concat(bobSizes)) / 2;
  let aliceCandies = getCandySum(aliceSizes);

  for (let i = 0; i < aliceSizes.length; i++) {
    let numberToExchange = fairShare - (aliceCandies - aliceSizes[i]);

    if (bobSizes.includes(numberToExchange)) {
      return [aliceSizes[i], numberToExchange];
    }
  }

  return [];
};

const getCandySum = (arr) => {
  return arr.reduce((acc, cand) => acc + cand, 0);
};

console.log(fairCandySwap([1, 1], [2, 2])); // [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1, 2]
console.log(fairCandySwap([2], [1, 3])); // [2, 3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); // [5, 4]

// * 47. (989). Add to Array-Form of Integer ------------------------------------------
// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k,
// return the array-form of the integer num + k.

// Example 1:
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:
// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// Example 3:
// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

const addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  return sum
    .toString()
    .split("")
    .map((elem) => +elem);
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1,0,2,1]
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

// * 48. (1046). Last Stone Weight ------------------------------------------
// You are given an array of integers stones where stones[i]
// is the weight of the ith stone.

// We are playing a game with the stones. On each turn,
// we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y.
// The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed,
// and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1

const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    let firstMax = Math.max.apply(null, stones);
    stones.splice(stones.indexOf(firstMax), 1);

    let secondMax = Math.max.apply(null, stones);
    stones.splice(stones.indexOf(secondMax), 1);

    let diff = firstMax - secondMax;
    stones.push(diff);
  }
  return stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1])); // 1

// * 49. (1089). Duplicate Zeroes ------------------------------------------
// Given a fixed-length integer array arr, duplicate each occurrence of zero, 
// shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. 
// Do the above modifications to the input array in place and do not return anything.

 

// Example 1:
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:
// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

const duplicateZeros = function (arr) {
  if (!arr.includes(0)) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])); // [1,2,3]

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

// * 38. (26) Remove Duplicates from Sorted Array ----------------------------------------------------

// * 2. Number of Employees Who Met the Target ---------------------
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

// * 9 (2899). Last Visited Integers ----------------------------------------------------
// Given an integer array nums where nums[i] is either a positive integer or -1.
// We need to find for each -1 the respective positive integer,
// which we call the last visited integer.

// To achieve this goal, let's define two empty arrays: seen and ans.

// Start iterating from the beginning of the array nums.

// If a positive integer is encountered, prepend it to the front of seen.
// If -1 is encountered, let k be the number of consecutive -1s seen so far (including the current -1),
// If k is less than or equal to the length of seen, append the k-th element of seen to ans.
// If k is strictly greater than the length of seen, append -1 to ans.
// Return the array ans.

// Example 1:
// Input: nums = [1,2,-1,-1,-1]
// Output: [2,1,-1]
// Explanation:
// Start with seen = [] and ans = [].

// Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
// Process nums[1]: The next element is 2. We prepend it to the front of seen. Now, seen == [2, 1].
// Process nums[2]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen. We append 2 to ans. Now, ans == [2].
// Process nums[3]: Another -1. This is the second consecutive -1, so k == 2. The second element in seen is 1, so we append 1 to ans. Now, ans == [2, 1].
// Process nums[4]: Another -1, the third in a row, making k = 3. However, seen only has two elements ([2, 1]). Since k is greater than the number of elements in seen, we append -1 to ans. Finally, ans == [2, 1, -1].

// Example 2:
// Input: nums = [1,-1,2,-1,-1]
// Output: [1,2,1]
// Explanation:
// Start with seen = [] and ans = [].

// Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
// Process nums[1]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen, which is 1. Append 1 to ans. Now, ans == [1].
// Process nums[2]: The next element is 2. Prepend this to the front of seen. Now, seen == [2, 1].
// Process nums[3]: The next element is -1. This -1 is not consecutive to the first -1 since 2 was in between. Thus, k resets to 1. The first element in seen is 2, so append 2 to ans. Now, ans == [1, 2].
// Process nums[4]: Another -1. This is consecutive to the previous -1, so k == 2. The second element in seen is 1, append 1 to ans. Finally, ans == [1, 2, 1].

let lastVisitedIntegers = function (nums) {
  let seen = [];
  let ans = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      seen.unshift(nums[i]);
    } else {
      if (counter < seen.length) {
        ans.push(seen[counter]);
      } else {
        ans.push(-1);
      }

      if (nums[i + 1] === -1) {
        counter++;
      } else {
        counter = 0;
      }
    }
  }
  return ans;
};

console.log(lastVisitedIntegers([1, -1, 2, -1, -1])); // [1,2,1]
console.log(lastVisitedIntegers([1, 2, -1, -1, -1])); // [2,1,-1]
console.log(lastVisitedIntegers([-1, -1, -1, 52, -1])); // [-1,-1,-1,52]

// * 10 (495). Teemo Attacking ----------------------------------------------------
// Our hero Teemo is attacking an enemy Ashe with poison attacks!
// When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds.
// More formally, an attack at second t will mean Ashe is poisoned
// during the inclusive time interval [t, t + duration - 1].
// If Teemo attacks again before the poison effect ends,
// the timer for it is reset, and the poison effect will end duration seconds
// after the new attack.

// You are given a non-decreasing integer array timeSeries,
// where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i],
// and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

// Example 1:
// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

// Example 2:
// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer.
// Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

const findPoisonedDuration = function (timeSeries, duration) {
  let counter = duration;

  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] > timeSeries[i - 1] + (duration - 1)) {
      counter += duration;
    } else {
      counter += timeSeries[i] - timeSeries[i - 1];
    }
  }

  return counter;
};

console.log(findPoisonedDuration([1, 4], 2)); // 4
console.log(findPoisonedDuration([1, 2], 2)); // 3
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 13

// * 11. (682). Baseball Game ----------------------------------------------------
// You are keeping the scores for a baseball game with strange rules.
// At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i]
// is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit
// in a 32-bit integer and that all operations are valid.

// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

const calPoints = function (operations) {
  let result = [];

  for (let i = 0; i < operations.length; i++) {
    if (isNaN(operations[i])) {
      if (operations[i] === "C") result.pop();
      if (operations[i] === "D") result.push(result[result.length - 1] * 2);
      if (operations[i] === "+")
        result.push(result[result.length - 1] + result[result.length - 2]);
    } else {
      result.push(+operations[i]);
    }
  }

  return result.reduce((acc, el) => acc + el, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoints(["1", "C"])); // 0

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

// * 8. Smallest Range I -----------------------------------
// You are given an integer array nums and an integer k.
// In one operation, you can choose any index i where 0 <= i < nums.length
// and change nums[i] to nums[i] + x where x is an integer from the range [-k, k].
// You can apply this operation at most once for each index i.
// The score of nums is the difference between the maximum and minimum elements in nums.
// Return the minimum score of nums after applying the mentioned operation
// at most once for each index in it.

// You just need to add k to min value of the array
// and subtract k from max value of the array
// and finally subtract those values to find the difference.
// If the difference is negative return zero else return the difference value

// Example 1:
// Input: nums = [1], k = 0
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// Example 2:
// Input: nums = [0,10], k = 2
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

const smallestRangeI = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b);
  let smallest = sorted[0];
  let biggest = sorted[sorted.length - 1];

  let result = biggest - k - (smallest + k);

  return result < 0 ? 0 : result;
};

console.log(smallestRangeI([1], 0)); // 0
console.log(smallestRangeI([0, 10], 2)); // 6
console.log(smallestRangeI([1, 3, 6], 3)); // 0

// * 9. (812) Largest Triangle Area -----------------------------------
// Given an array of points on the X-Y plane points where points[i] = [xi, yi],
// return the area of the largest triangle that can be formed by any three different points.
// Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.

// Example 2:
// Input: points = [[1,0],[0,0],[0,1]]
// Output: 0.50000

const largestTriangleArea = function (points) {
  // S = (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) * 0.5;
  let result = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let area =
          0.5 *
          Math.abs(
            points[i][0] * (points[j][1] - points[k][1]) +
              points[j][0] * (points[k][1] - points[i][1]) +
              points[k][0] * (points[i][1] - points[j][1])
          );

        result.push(area);
      }
    }
  }

  return Math.max(...result);
};

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
); // 2.00000
console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
); // 0.50000
console.log(
  largestTriangleArea([
    [4, 6],
    [6, 5],
    [3, 1],
  ])
); // 5.50000

// * 10. (1037). Valid Boomerang ------------------------------------------
// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane,
// return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

// Example 1:
// Input: points = [[1,1],[2,3],[3,2]]
// Output: true

// Example 2:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: false

const isBoomerang = function (points) {
  // if the three points forms a triangle, then it's a boomerang.
  // otherwise, return false.
  // To understand, if it's a triangle or not, we have to try to find the area of the figure.
  // if the area is not equal 0, then we return true.

  // Formula for determining the area of the figure:
  //0.5 * [x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)]

  let area =
    0.5 *
    [
      points[0][0] * (points[1][1] - points[2][1]) +
        points[1][0] * (points[2][1] - points[0][1]) +
        points[2][0] * (points[0][1] - points[1][1]),
    ];

  return area !== 0 ? true : false;
};

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
); // true
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
); // false
console.log(
  isBoomerang([
    [0, 0],
    [1, 0],
    [2, 2],
  ])
); // true

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

// * 9. (2506) Count Pairs Of Similar Strings ------------------------------------------
// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
// For example, "abca" and "cba" are similar since both consist of characters
// 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist
// of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1
// and the two strings words[i] and words[j] are similar.

// Example:
// Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'.

let similarPairs = function (words) {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      ifTheSame(words[i], words[j]) ? (counter += 1) : counter;
    }
  }
  return counter;
};

const ifTheSame = (word1, word2) => {
  for (let char of word1) {
    if (!word2.includes(char)) return false;
  }
  for (let char of word2) {
    if (!word1.includes(char)) return false;
  }

  return true;
};

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
console.log(similarPairs(["aabb", "ab", "ba"])); // 3
console.log(similarPairs(["nba", "cba", "dba"])); // 0

// * 10. (1408)  String Matching in an Array ------------------------------------------
// Given an array of string words, return all strings in words
// that is a substring of another word. You can return the answer in any order.
// A substring is a contiguous sequence of characters within a string

// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

let stringMatching = function (words) {
  let result = [];
  words = words.sort((a, b) => b.length - a.length);

  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = i + 1; j < words.length; j++) {
      if (current.includes(words[j])) {
        if (!result.includes(words[j])) result.push(words[j]);
      }
    }
  }

  return result;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"])); // ["as","hero"]
console.log(stringMatching(["leetcode", "et", "code"])); // ["et","code"]
console.log(stringMatching(["blue", "green", "bu"])); // []
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"])); // ["leetcode","od","am"]

// * 11. (3042)  Count Prefix and Suffix Pairs  ------------------------------------------
// You are given a 0-indexed string array words.
// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:

// isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix and a suffix of str2,
// and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true
// because "aba" is a prefix of "ababa" and also a suffix,
// but isPrefixAndSuffix("abc", "abcd") is false.

// Return an integer denoting the number of index pairs (i, j) such that i < j,
// and isPrefixAndSuffix(words[i], words[j]) is true.

// Example 1:
// Input: words = ["a","aba","ababa","aa"]
// Output: 4
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
// i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
// i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
// i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
// Therefore, the answer is 4.

// Example 2:
// Input: words = ["pa","papa","ma","mama"]
// Output: 2
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("pa", "papa") is true.
// i = 2 and j = 3 because isPrefixAndSuffix("ma", "mama") is true.
// Therefore, the answer is 2.

let countPrefixSuffixPairs = function (words) {
  let pairs = 0;

  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = i + 1; j < words.length; j++) {
      let prefix = words[j].slice(0, current.length);
      let suffix = words[j].slice(-current.length);

      if (current === prefix && current === suffix) {
        pairs++;
      }
    }
  }

  return pairs;
};

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])); // 4
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"])); // 2
console.log(countPrefixSuffixPairs(["abab", "ab"])); // 0

// * 12. (599). Minimum Index Sum of Two Lists  ------------------------------------------
// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that
// if it appeared at list1[i] and list2[j] then i + j should be the minimum value
// among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:
// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

let findRestaurant = function (list1, list2) {
  let result = [];
  let shorterArray, longerArray;
  let sumIdx = Infinity;

  shorterArray = list1.length <= list2.length ? list1 : list2;
  longerArray = list1.length > list2.length ? list1 : list2;

  for (let i = 0; i < shorterArray.length; i++) {
    if (longerArray.indexOf(shorterArray[i]) !== -1) {
      let sum = i + longerArray.indexOf(shorterArray[i]);

      if (sum < sumIdx) {
        console.log("SUM: " + sum, "SumIdx: " + sumIdx);
        sumIdx = sum;
        result = [];
        result.push(shorterArray[i]);
      } else if (sum === sumIdx) {
        sumIdx = sum;
        result.push(shorterArray[i]);
      }
    }
  }

  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
); // ["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
); // ["Shogun"]
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); // ["sad","happy"]
console.log(findRestaurant(["S", "TEXP", "BK", "KFC"], ["KFC", "BK", "S"])); // ["S"]

// * 13. (2446). Determine if Two Events Have Conflict  ------------------------------------------
// You are given two arrays of strings that represent two inclusive events
// that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection
// (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.

// Example 1:
// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.

// Example 2:
// Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.

// Example 3:
// Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// Output: false
// Explanation: The two events do not intersect.

const haveConflict = function (event1, event2) {
  let newArray1 = transformArray(event1);
  let newArray2 = transformArray(event2);

  let a = newArray1[0];
  let b = newArray1[1];
  let c = newArray2[0];
  let d = newArray2[1];

  if ((c >= a && c <= b) || (a >= c && a <= d)) return true;
  return false;
};

const transformArray = (arr) => {
  let result = [];

  for (let elem of arr) {
    let newElem = elem.split(":").join("");
    result.push(parseInt(newElem));
  }

  return result;
};

console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])); // true
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"])); // true
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])); // false

// * 14. (806). Number of Lines To Write String ------------------------------------------
// You are given a string s of lowercase English letters and an array widths
// denoting how many pixels wide each lowercase English letter is. Specifically,
// widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels.
// Starting at the beginning of s, write as many letters on the first line
// such that the total width does not exceed 100 pixels. Then, from where you stopped in s,
// continue writing as many letters as you can on the second line.
// Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.

// Example 1:
// Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
// Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.

// Example 2:
// Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
// Output: [2,4]
// Explanation: You can write s as follows:
// bbbcccdddaa  // 98 pixels wide
// a            // 4 pixels wide
// There are a total of 2 lines, and the last line is 4 pixels wide.

const numberOfLines = function (widths, s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  let lines = 1;

  for (let i = 0; i < s.length; i++) {
    let charIdx = alphabet.indexOf(s[i]);

    if (counter + widths[charIdx] > 100) {
      lines++;
      counter = 0;
    }
    counter += widths[charIdx];
  }

  return [lines, counter];
};

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
); // [3,60]
console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
); // [2,4]

// * 15. (819). Most Common Word ------------------------------------------
// Given a string paragraph and a string array of the banned words banned,
// return the most frequent word that is not banned.
// It is guaranteed there is at least one word that is not banned,
// and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does),
// so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"

const mostCommonWord = function (paragraph, banned) {
  let hashTable = {};

  // add space between characters separated by a punctuation mark
  // eg. to make this string: "a, a, a, a, b,b,b,c, c" look like this: "a, a, a, a, b, b, b, c, c"
  paragraph = paragraph.replace(/[!?',;.](\S)/g, ", $1"); // $1 refers to the captured character after the punctuation mark
  // remove all of the punctuation marks => "a a a a b b b c c"
  paragraph = paragraph.replace(/[!?',;.]/gu, ""); // Unicode flag, to enable Unicode support in the regular expression.
  paragraph = paragraph.toLowerCase();

  let array = paragraph.split(" ");

  // filter out the banned words from the paragraph
  if (banned.length) {
    for (let word of banned) {
      array = array.filter((w) => w !== word);
    }
  }

  // store the words in a hashTable and count them
  for (let word of array) {
    hashTable[word] ? (hashTable[word] += 1) : (hashTable[word] = 1);
  }

  // find the largest value in the hashTable
  let maxVal = Object.keys(hashTable).reduce(
    (acc, key) => Math.max(acc, hashTable[key]),
    -Infinity
  );
  // filter hashTable keys by the maxVal
  let keys = Object.keys(hashTable).filter((key) => hashTable[key] === maxVal);

  return keys[0];
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
); // "ball"
console.log(mostCommonWord("a.", [])); // "a"
console.log(mostCommonWord("Bob", [])); // bob
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])); // b

// * 16. (942). DI String Match ------------------------------------------
// A permutation perm of n + 1 integers of all the integers in the range [0, n]
// can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it.
// If there are multiple valid permutations perm, return any of them.

// Example 1:
// Input: s = "IDID"
// Output: [0,4,1,3,2]

// Example 2:
// Input: s = "III"
// Output: [0,1,2,3]

// Example 3:
// Input: s = "DDI"
// Output: [3,2,0,1]
const diStringMatch = function (s) {
  let iCounter = 0;
  let dCounter = 0;

  for (let elem of s) {
    if (elem === "I") {
      iCounter++;
    } else {
      dCounter++;
    }
  }

  let iArr = [];
  let dArr = [];

  for (let i = 0; i <= s.length; i++) {
    if (i <= iCounter) {
      iArr.push(i);
    } else {
      dArr.push(i);
    }
  }

  let result = [];

  for (let elem of s) {
    if (elem === "I") {
      result.push(iArr.shift());
    } else {
      result.push(dArr.pop());
    }
  }

  result.push(iArr.shift());
  return result;
};

console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]
console.log(diStringMatch("DDI")); // [3,2,0,1]

// * 17. (944). Delete Columns to Make Sorted ------------------------------------------
// You are given an array of n strings strs, all of the same length.
// The strings can be arranged such that there is one on each line, making a grid.
// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically.
// In the above example (0-indexed), columns 0 ('a', 'b', 'c')
// and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not,
// so you would delete column 1.
// Return the number of columns that you will delete.

// Example 1:
// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
const minDeletionSize = function (strs) {
  let counter = 0;
  let i = 0;
  let j = 0;

  while (strs[i + 1] !== undefined && j < strs[i].length) {
    if (strs[i][j] > strs[i + 1][j]) {
      counter++;
      i = 0;
      j++;
    } else {
      i++;
      if (i >= strs.length - 1) {
        i = 0;
        j++;
      }
    }
  }

  return counter;
};
console.log(minDeletionSize(["cba", "daf", "ghi"])); // 1
console.log(minDeletionSize(["a", "b"])); // 0
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // 3

// * 18. (953). Verifying an Alien Dictionary ------------------------------------------
// In an alien language, surprisingly, they also use English lowercase letters,
// but possibly in a different order.
// The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1],
// hence the sequence is unsorted.

const isAlienSorted = function (words, order) {
  // Assign each letter of the order string to a unique number
  let hashTable = {};
  for (let i = 0; i < order.length; i++) {
    hashTable[order[i]] = i + 1;
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === words[i + 1][j]) continue;
      if (words[i + 1][j] === undefined) return false;
      if (hashTable[words[i][j]] > hashTable[words[i + 1][j]]) return false;
      break;
    }
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
); // false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false
console.log(isAlienSorted(["l", "h"], "xkbwnqozvterhpjifgualycmds")); // false
console.log(isAlienSorted(["apap", "app"], "abcdefghijklmnopqrstuvwxyz")); // true
console.log(isAlienSorted(["hello", "hello"], "abcdefghijklmnopqrstuvwxyz")); // true

// * 19. (1002). Find Common Characters ------------------------------------------
// Given a string array words, return an array of all characters
// that show up in all strings within the words (including duplicates).
// You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

const commonChars = function (words) {
  let result = [];
  let firstString = words[0];

  for (let char of firstString) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return result;
};

console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]

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

// * 10 (500). Keyboard Row ------------------------------------------
// Given an array of strings words, return the words
// that can be typed using letters of the alphabet on only one row
// of American keyboard like the image below.

// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:
// Input: words = ["omk"]
// Output: []

// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

let findWords = function (words) {
  let hashTbl = {
    row1: "qwertyuiop",
    row2: "asdfghjkl",
    row3: "zxcvbnm",
  };
  let result = [];

  for (let word of words) {
    for (let key in hashTbl) {
      if (hashTbl[key].includes(word[0].toLowerCase())) {
        let response = compareStrings(hashTbl[key], word.toLowerCase());
        if (response) {
          result.push(word);
        }
      }
    }
  }
  return result;
};

const compareStrings = (keyboardRow, word) => {
  for (let letter of word) {
    if (!keyboardRow.includes(letter)) {
      return false;
    }
  }
  return true;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]

// * 11 (2248). Intersection of Multiple Arrays ------------------------------------------
// Given a 2D integer array nums where nums[i] is a non-empty array
// of distinct positive integers, return the list of integers that are present
// in each array of nums sorted in ascending order.

// Example 1:
// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5],
// nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4,
// so we return [3,4].

// Example 2:
// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1],
// so we return an empty list [].

let intersection = function (nums) {
  let hashTable = {};
  let result = [];

  for (let subArr of nums) {
    for (let i = 0; i < subArr.length; i++) {
      hashTable[subArr[i]]
        ? (hashTable[subArr[i]] += 1)
        : (hashTable[subArr[i]] = 1);
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] === nums.length) {
      result.push(key);
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
); // [3,4]
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // []

// * 12 (575). Distribute Candies ------------------------------------------
// Alice has n candies, where the ith candy is of type candyType[i].
// Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has
// (n is always even). Alice likes her candies very much,
// and she wants to eat the maximum number of different types of candies
// while still following the doctor's advice.

// Given the integer array candyType of length n,
// return the maximum number of different types of candies she can eat
// if she only eats n / 2 of them.

// Example 1:
// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

// Example 2:
// Input: candyType = [1,1,2,3]
// Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies.
// Whether she eats types [1,2], [1,3], or [2,3],
// she still can only eat 2 different types.

let distributeCandies = function (candyType) {
  let uniqueTypes = new Set(candyType);
  // let halfPortion = candyType.length / 2;

  if (candyType.length / 2 === uniqueTypes.size) {
    return uniqueTypes.size;
  } else {
    if (candyType.length / 2 < uniqueTypes.size) {
      return candyType.length / 2;
    } else {
      return uniqueTypes.size;
    }
  }
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(distributeCandies([1, 1, 2, 3])); // 2
console.log(distributeCandies([6, 6, 6, 6])); // 1

// * 13 (929). Unique Email Addresses ------------------------------------------
// Every valid email consists of a local name and a domain name, separated by the '@' sign.
// Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name,
// and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address,
// mail sent there will be forwarded to the same address without dots in the local name.
// Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored.
// This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

// Example 1:
// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Example 2:
// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3

let numUniqueEmails = function (emails) {
  let result = [];

  for (let email of emails) {
    // Find the local name of the email
    let localName = email.split("@")[0];
    // Find the + symbol
    let plusSymbolIdx = localName.indexOf("+");
    // Modify the local name by removing everything after the + symbol
    if (plusSymbolIdx !== -1) {
      localName = localName.slice(0, plusSymbolIdx);
    }
    // Remove all the "." characters
    localName = localName.split(".").join("");
    // Restore the full email name
    email = localName + "@" + email.split("@")[1];
    // Save the unique email in the result array
    if (!result.includes(email)) result.push(email);
  }
  // Return the length of the result array
  return result.length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
); // 2
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
); // 3
console.log(
  numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"])
); // 1

// * 14 (169). Majority Element ------------------------------------------
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let majorityElement = function (nums) {
  let hashTable = {};

  for (let num of nums) {
    hashTable[num] ? (hashTable[num] += 1) : (hashTable[num] = 1);
    if (hashTable[num] > nums.length / 2) return num;
  }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

// * 15 (496). Next Greater Element I ------------------------------------------
// The next greater element of some element x in an array is the first greater element
// that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2,
// where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
// and determine the next greater element of nums2[j] in nums2. If there is no next greater element,
// then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element
// as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
const nextGreaterElement = function (nums1, nums2) {
  let hashTable = {};
  let i = 0;
  let result = [];

  while (i < nums2.length - 1) {
    let current = nums2[i];
    // Save each element in the hashTable with a value of the next greater element
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > current) {
        hashTable[current] = nums2[j];
        break;
      } else {
        continue;
      }
    }
    i++;
  }

  for (let elem of nums1) {
    if (hashTable[elem]) {
      result.push(hashTable[elem]);
    } else {
      result.push(-1);
    }
  }

  return result;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]

// * 16. (697). Degree of an Array ------------------------------------------
// Given a non-empty array of non-negative integers nums, the degree of this array is defined
// as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums,
// that has the same degree as nums.

// Example 1:
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

const findShortestSubArray = function (nums) {
  let hashTable = {};
  // store the elements in the hashTable
  for (let elem of nums) {
    hashTable[elem] ? (hashTable[elem] += 1) : (hashTable[elem] = 1);
  }
  // get the biggest values from the hashTable
  const maxVal = Object.keys(hashTable).reduce(
    (acc, key) => Math.max(acc, hashTable[key]),
    -Infinity
  );
  const keysWithMaxValue = Object.keys(hashTable).filter(
    (key) => hashTable[key] === maxVal
  );

  // find the first and last elements with such values in nums
  // and calculate the minLength of that subarray
  let startIdx, endIdx;
  let minLength = Infinity;

  for (let i = 0; i < keysWithMaxValue.length; i++) {
    startIdx = nums.indexOf(+keysWithMaxValue[i]);
    endIdx = nums.lastIndexOf(+keysWithMaxValue[i]);
    minLength = Math.min(minLength, endIdx - startIdx + 1);
  }

  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6

// * 17. (748). Shortest Completing Word ------------------------------------------
// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate,
// and treat letters as case insensitive. If a letter appears more than once in licensePlate,
// then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case),
// and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists.
// If there are multiple shortest completing words, return the first one that occurs in words.

const shortestCompletingWord = function (licensePlate, words) {
  licensePlate = licensePlate.toLowerCase();
  let hashTable = {};
  let idx = 0;
  let wordLength = Infinity;

  // Store the letters in the hash table
  for (let elem of licensePlate) {
    if (isNaN(parseInt(elem)) && elem !== " ") {
      hashTable[elem] ? (hashTable[elem] += 1) : (hashTable[elem] = 1);
    }
  }

  // Create a copy of the hashTable object
  // that can be modified without affecting the initial hashTable
  // We need to make such a copy to repeatedly empty its values for every word
  // in words array and fill it back after each iteration
  let tempHash = Object.assign({}, hashTable);

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // If there's a match, subtract the value from the tempHash
      if (tempHash[words[i][j]]) {
        tempHash[words[i][j]]--;
      }
    }

    // Check if the tempHash property values are still bigger than 0...
    let arr = Object.keys(tempHash).filter((key) => tempHash[key] > 0);

    // ...if they are not, that means we found a matching string
    if (arr.length <= 0) {
      // find the shortest matching string and its index
      if (words[i].length < wordLength) {
        wordLength = words[i].length;
        idx = i;
      }
    }
    // Fill tempHash back out for the next iteration
    tempHash = Object.assign({}, hashTable);
  }

  return words[idx];
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
); // "steps"
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
); // "pest"

// * 18. (914). X of a Kind in a Deck of Cards ------------------------------------------
// You are given an integer array deck
// where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

const hasGroupsSizeX = function (deck) {
  let hashTable = {};
  // Fill out hashTable
  for (elem of deck) {
    hashTable[elem] ? (hashTable[elem] += 1) : (hashTable[elem] = 1);
  }

  // find the lowest value in the hashTable
  const lowestVal = Object.keys(hashTable).reduce(
    (acc, key) => Math.min(acc, hashTable[key]),
    Infinity
  );
  if (lowestVal <= 1) return false;

  let leftovers = [];

  // Chcek if hashtable values can be divided by the lowest value without a remainder
  leftovers = Object.keys(hashTable).filter(
    (key) => hashTable[key] % lowestVal !== 0
  );

  // If they can't:
  if (leftovers.length > 0) {
    // Odd and even numbers can be divided by 3 without a remainder
    leftovers = Object.keys(hashTable).filter(
      (key) => hashTable[key] % 3 !== 0
    );
    // If it's not the case, and the lowestVal is an even number,
    // then try to divide them by 2
    if (leftovers.length > 0 && lowestVal % 2 === 0) {
      leftovers = Object.keys(hashTable).filter(
        (key) => hashTable[key] % 2 !== 0
      );
    }
    // If it's not the case, and the lowestVal is an odd number,
    // try to divide values in hashTable by 5
    if (leftovers.length > 0 && lowestVal % 5 === 0) {
      leftovers = Object.keys(hashTable).filter(
        (key) => hashTable[key] % 5 !== 0
      );
    }
  }

  // If we still have some keys left in the leftovers array, return false
  return leftovers.length ? false : true;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
console.log(hasGroupsSizeX([1])); // false
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])); // true

// * 19. (961). N-Repeated Element in Size 2N Array ------------------------------------------
// You are given an integer array nums with the following properties:
// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Example 1:
// Input: nums = [1,2,3,3]
// Output: 3

// Example 2:
// Input: nums = [2,1,2,5,3,2]
// Output: 2

// Example 3:
// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5

const repeatedNTimes = function (nums) {
  let hashTbl = {};

  for (let elem of nums) {
    hashTbl[elem] ? (hashTbl[elem] += 1) : (hashTbl[elem] = 1);
  }

  const result = Object.keys(hashTbl).filter(
    (key) => hashTbl[key] === nums.length / 2
  );

  return +result[0];
};

console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5

// * 20. (997). Find the Town Judge -----------------------------------------
// In a town, there are n people labeled from 1 to n.
// There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing
// that the person labeled ai trusts the person labeled bi.
// If a trust relationship does not exist in trust array,
// then such a trust relationship does not exist.

// Return the label of the town judge if the town judge exists
// and can be identified, or return -1 otherwise.

// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

const findJudge = function (n, trust) {
  // If there are several people in town and anybody trusts nobody:
  if (n > 1 && !trust.length) return -1;
  // If there's only 1 person in a town, and he does not trust anyone
  if (n === 1 && !trust.length) return n;

  let trustedBy = {};
  let trustsSomeone = {};

  trust.map((arr) => {
    // Count persons in whom others trust
    trustedBy[arr[1]] ? (trustedBy[arr[1]] += 1) : (trustedBy[arr[1]] = 1);

    // Mark persons who trust somebody as true
    trustsSomeone[arr[0]] = true;
    // If there is a person who doesn't trust anyone, mark him as false
    if (!trustsSomeone[arr[1]]) trustsSomeone[arr[1]] = false;
  });

  // Find a person who doesn't trust anyone (marked as false in the trustsSomeone hash table)
  let potentialJudge = Object.keys(trustsSomeone).filter(
    (key) => trustsSomeone[key] === false
  );

  // If there's no such a person, or if its value in the trustedBy hash table !== n - 1:
  if (!potentialJudge.length || trustedBy[potentialJudge[0]] !== n - 1) {
    return -1;
  }
  // else:
  return +potentialJudge[0];
};

console.log(findJudge(2, [[1, 2]])); // 2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // 3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
); // -1

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
  let hashTable = {};

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
  const max = Object.keys(hashTable).reduce(
    (acc, key) => Math.max(acc, hashTable[key]),
    -Infinity
  );
  const team = Object.keys(hashTable).filter((key) => hashTable[key] === max);
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

// * 3. (766). Toeplitz Matrix ------------------------------------------
// Given an m x n matrix, return true if the matrix is Toeplitz.
// Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top-left
// to bottom-right has the same elements.

// Example 1:
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// Example 2:
// Input: matrix = [[1,2],[2,2]]
// Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.

let isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < matrix.length - 1 && j < matrix[i].length - 1) {
        // console.log(matrix[i][j], matrix[i+1][j+1]);
        if (matrix[i][j] !== matrix[i + 1][j + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
); // true
console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
); // false

// * 4. (999). Available Captures for Rook ------------------------------------------
// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B',
// black pawns 'p', and empty squares '.'.
// When the rook moves, it chooses one of four cardinal directions
// (north, east, south, or west),
// then moves in that direction until it chooses to stop,
// reaches the edge of the board, captures a black pawn, or is blocked by a white bishop.
// A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn.
// The number of available captures for the white rook is the number of pawns
// that the rook is attacking.
// Return the number of available captures for the white rook.

// Example 1:
// Input: board = [
// [".",".",".",".",".",".",".","."],
// [".",".",".","p",".",".",".","."],
// [".",".",".","R",".",".",".","p"],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".","p",".",".",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: In this example, the rook is attacking all the pawns.

// Example 2:
// Input: board = [
// [".",".",".",".",".",".",".","."],
// [".","p","p","p","p","p",".","."],
// [".","p","p","B","p","p",".","."],
// [".","p","B","R","B","p",".","."],
// [".","p","p","B","p","p",".","."],
// [".","p","p","p","p","p",".","."],
// [".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".","."]]
// Output: 0
// Explanation: The bishops are blocking the rook from attacking any of the pawns.

let numRookCaptures = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "R") {
        count += upCheck(i, j, board) ? 1 : 0;
        count += downCheck(i, j, board) ? 1 : 0;
        count += rightCheck(i, j, board) ? 1 : 0;
        count += leftCheck(i, j, board) ? 1 : 0;
      }
    }
  }
  return count;
};

let upCheck = function (m, n, board) {
  for (let i = m; i >= 0; i--) {
    if (board[i][n] == "p") {
      return true;
    } else if (board[i][n] == "B") {
      return false;
    }
  }
  return false;
};
let downCheck = function (m, n, board) {
  for (let i = m; i < 8; i++) {
    if (board[i][n] == "p") {
      return true;
    } else if (board[i][n] == "B") {
      return false;
    }
  }
  return false;
};
let leftCheck = function (m, n, board) {
  for (let i = n; i >= 0; i--) {
    if (board[m][i] == "p") {
      return true;
    } else if (board[m][i] == "B") {
      return false;
    }
  }
  return false;
};
let rightCheck = function (m, n, board) {
  for (let i = n; i < 8; i++) {
    if (board[m][i] == "p") {
      return true;
    } else if (board[m][i] == "B") {
      return false;
    }
  }
  return false;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 3
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 0
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 3
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", "p", "B", "R", "p", "B", "p", "."],
    [".", ".", ".", "p", "p", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 2

// * 5. (3033). Modify the Matrix ------------------------------------------
// Given a 0-indexed m x n integer matrix matrix,
// create a new 0-indexed matrix called answer.
// Make answer equal to matrix, then replace each element with the value -1
// with the maximum element in its respective column.
// Return the matrix answer.

// Example 1:
// Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
// Output: [[1,2,9],[4,8,6],[7,8,9]]
// Explanation: The diagram above shows the elements that are changed (in blue).
// - We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
// - We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.

// Example 2:
// Input: matrix = [[3,-1],[5,2]]
// Output: [[3,2],[5,2]]
// Explanation: The diagram above shows the elements that are changed (in blue).

let modifiedMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = getMaxNum(matrix, j);
      }
    }
  }
  return matrix;
};

const getMaxNum = (matrix, col) => {
  let maxNum = 0;

  for (let i = 0; i < matrix.length; i++) {
    maxNum = Math.max(maxNum, matrix[i][col]);
  }
  return maxNum;
};

console.log(
  modifiedMatrix([
    [1, 2, -1],
    [4, -1, 6],
    [7, 8, 9],
  ])
); // [[1,2,9],[4,8,6],[7,8,9]]
console.log(
  modifiedMatrix([
    [3, -1],
    [5, 2],
  ])
); // [[3,2],[5,2]]

// * 6. (867). Transpose Matrix ------------------------------------------
// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal,
// switching the matrix's row and column indices.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

let transpose = function (matrix) {
  let result = Array.from({ length: matrix[0].length }, () => []);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[1,4,7],[2,5,8],[3,6,9]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [[1,4],[2,5],[3,6]]

// * 7. (566). Reshape the Matrix ------------------------------------------
// In MATLAB, there is a handy function called reshape
// which can reshape an m x n matrix into a new one with a different size r x c
// keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing
// the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix
// in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal,
// output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

let matrixReshape = function (mat, r, c) {
  // Validate r and c:
  let totalNumberOfCells = mat[0].length * mat.length;
  if (r * c !== totalNumberOfCells) return mat;

  let flattenedMat = mat.flat();
  let result = Array.from({ length: r }, () => Array.from({ length: c }));

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = flattenedMat.shift();
    }
  }

  return result;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
); // [[1,2,3,4]]
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
); // [[1,2],[3,4]]
console.log(
  matrixReshape(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ],
    3,
    4
  )
);

// * 8. (2946). Matrix Similarity After Cyclic Shifts ------------------------------------------

// You are given an m x n integer matrix mat and an integer k. The matrix rows are 0-indexed.
// The following proccess happens k times:
// Even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left.

// Odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right.
// Return true if the final modified matrix after k steps is identical to the original matrix, and false otherwise.

// Example 1:
// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4
// Output: false
// Explanation:
// In each step left shift is applied to rows 0 and 2 (even indices), and right shift to row 1 (odd index).

// Example 2:
// Input: mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2
// Output: true

let areSimilar = function (mat, k) {
  for (let row of mat) {
    let newRow;

    if (k === row.length || k === 0) {
      return true;
    } else if (k > row.length) {
      k = k % row.length;
    }

    newRow = shiftNums(row, k);
    if (newRow.join("") !== row.join("")) return false;
  }
  return true;
};

const shiftNums = (arr, idx) => {
  let result = arr.slice(idx).concat(arr.slice(0, idx));
  return result;
};

console.log(
  areSimilar(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4
  )
); // false
console.log(
  areSimilar(
    [
      [1, 2, 1, 2],
      [5, 5, 5, 5],
      [6, 3, 6, 3],
    ],
    2
  )
); // true
console.log(
  areSimilar(
    [
      [2, 2],
      [2, 2],
    ],
    3
  )
); // true

console.log(
  areSimilar(
    [
      [4, 6],
      [10, 1],
      [8, 8],
      [10, 9],
      [9, 10],
    ],
    9
  )
); // false

// * 9. (1275). Find Winner on a Tic Tac Toe Game ------------------------------------------
// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters,
// while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row,
// column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates
// that the ith move will be played on grid[rowi][coli].
// Return the winner of the game if it exists (A or B).
// In case the game ends in a draw return "Draw".
// If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe),
// the grid is initially empty, and A will play first.

// Example 1:
// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: A wins, they always play first.

// Example 2:
// Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// Output: "B"
// Explanation: B wins.

// Example 3:
// Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.

let tictactoe = function (moves) {
  let rows = [0, 0, 0];
  let cols = [0, 0, 0];
  let diagonal = 0;
  let antiDiagonal = 0;
  let currentPlayer = 0; // if it's a player A. then it's 1, and player B = -1

  for (let [row, column] of moves) {
    // Define, who is playing during the current move; A (1) or B (-1)
    let value = currentPlayer % 2 === 0 ? 1 : -1;
    rows[row] += value; // sum up each step of the currentPlayer
    cols[column] += value;

    // If row === column, we are on the main diagonal
    if (row === column) {
      diagonal += value;
    }

    // If row + column === 2, we are on the anti diagonal
    if (row + column === 2) {
      antiDiagonal += value;
    }

    // Check if we have a result already
    if ([rows[row], cols[column], antiDiagonal, diagonal].includes(3)) {
      return "A";
    } else if ([rows[row], cols[column], antiDiagonal, diagonal].includes(-3)) {
      return "B";
    }

    // Proceed to the next player
    currentPlayer++;
  }

  // Handling the "Pending" case: if we don't have the winner by now
  // and there are empty cells in the table then it's a "Pending" case
  if (currentPlayer < 9) {
    return "Pending";
  }

  return "Draw";
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
); // "A"
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
); // "B"
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
); // "Draw"

// * 10. (463). Island Perimeter ------------------------------------------
// You are given row x col grid representing a map where grid[i][j] = 1
// represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally).
// The grid is completely surrounded by water,
// and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected
// o the water around the island. One cell is a square with side length 1.
// The grid is rectangular, width and height don't exceed 100.
// Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4

const islandPerimeter = function (grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // Counting top and bottom segments
        if (i === 0) counter++;
        if (i === grid.length - 1) counter++;

        // Counting side segments
        if (j === 0) counter++;
        if (j === grid[i].length - 1) counter++;

        // Counting top and bottom segments that connected to 0's
        if (i - 1 !== -1 && grid[i - 1][j] === 0) counter++;
        if (i + 1 !== grid.length && grid[i + 1][j] === 0) counter++;

        // Counting right and left segments on the open sides of 1's
        if (grid[i][j - 1] === 0) counter++;
        if (grid[i][j + 1] === 0) counter++;
      }
    }
  }

  return counter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 0]])); // 4

// * 11. (598). Range Addition II ------------------------------------------
// You are given an m x n matrix M initialized with all 0's
// and an array of operations ops,
// where ops[i] = [ai, bi] means M[x][y] should be incremented by one
// for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix
// after performing all the operations.

// Example 1:
// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

// Example 2:
// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4

// Example 3:
// Input: m = 3, n = 3, ops = []
// Output: 9

var maxCount = function (m, n, ops) {
  // You have to find the smallest x in the range and the smallest y
  // and get their product
  let smallestX = Infinity;
  let smallestY = Infinity;

  if (!ops.length) {
    return m * n;
  } else {
    ops.map((arr) => {
      smallestX = Math.min(smallestX, arr[0]);
      smallestY = Math.min(smallestY, arr[1]);
    });

    return smallestX * smallestY;
  }
};

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
  ])
); // 4
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ])
); // 4
console.log(maxCount(3, 3, [])); // 9
console.log(
  maxCount(26, 17, [
    [20, 10],
    [26, 11],
    [2, 11],
    [4, 16],
    [2, 3],
    [23, 13],
    [7, 15],
    [11, 11],
    [25, 13],
    [11, 13],
    [13, 11],
    [13, 16],
    [26, 17],
  ])
); // 6

// * 12. (661). Image Smoother ------------------------------------------
// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image
// by rounding down the average of the cell and the eight surrounding cells
// (i.e., the average of the nine cells in the blue smoother).
// If one or more of the surrounding cells of a cell is not present,
// we do not consider it in the average (i.e., the average of the four cells in the red smoother).

// Given an m x n integer matrix img representing the grayscale of an image,
// return the image after applying the smoother on each cell of it.

// Example 1:
// Input: img = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[0,0,0],[0,0,0],[0,0,0]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0

// Example 2:
// Input: img = [[100,200,100],[200,50,200],[100,200,100]]
// Output: [[137,141,137],[141,138,141],[137,141,137]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138

const imageSmoother = function (img) {
  let result = [];

  for (let i = 0; i < img.length; i++) {
    result[i] = [];
    for (let j = 0; j < img[i].length; j++) {
      const numbers = [
        img[i - 1]?.[j - 1],
        img[i - 1]?.[j],
        img[i - 1]?.[j + 1],
        img[i]?.[j - 1],
        img[i]?.[j],
        img[i]?.[j + 1],
        img[i + 1]?.[j - 1],
        img[i + 1]?.[j],
        img[i + 1]?.[j + 1],
      ];

      const filtered = numbers.filter((el) => el !== undefined);
      const avg = Math.floor(
        filtered.reduce((acc, el) => acc + el, 0) / filtered.length
      );

      result[i][j] = avg;
    }
  }

  return result;
};

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // [[0,0,0],[0,0,0],[0,0,0]]
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
); // [[137,141,137],[141,138,141],[137,141,137]]

// * 13. (733). Food Fill ------------------------------------------
// You are given an image represented by an m x n grid of integers image,
// where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color.
// Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:
// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent
// (pixels that share a side with the original pixel, either horizontally or vertically)
// and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels
// and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation:
// From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel),
// all pixels connected by a path of the same color as the starting pixel
// (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2,
// because it is not horizontally or vertically connected to the starting pixel.

// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation:
// The starting pixel is already colored with 0,
// which is the same as the target color.
// Therefore, no changes are made to the image.

const floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) {
    return image;
  } else {
    let oldColor = image[sr][sc];
    image[sr][sc] = color;
    dfs(image, sr, sc, oldColor, color);
    return image;
  }
};

const dfs = (matrix, row, col, oldColor, newColor) => {
  let adjacentCells = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  let matrixLength = matrix.length;
  let rowLength = matrix[0].length;

  for (let i = 0; i < adjacentCells.length; i++) {
    let cellValue = adjacentCells[i];

    // Calculate the row and column indexes of the adjacent cells
    let r = row + cellValue[0];
    let c = col + cellValue[1];

    // If the adjacent cell is within the bounds of the
    // matrix and has the same value as the starting cell
    if (
      r < matrixLength &&
      r >= 0 &&
      c < rowLength &&
      c >= 0 &&
      matrix[r][c] === oldColor
    ) {
      matrix[r][c] = newColor;

      // pass the new indexes to the function and recalculate
      dfs(matrix, r, c, oldColor, newColor);
    }
  }
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[0,0,0],[0,0,0]]

// * 14. (832). Flipping an Image ------------------------------------------
// Given an n x n binary matrix image, flip the image horizontally, then invert it,
// and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

const flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let reversed = image[i].reverse();
    for (let j = 0; j < reversed.length; j++) {
      reversed[j] = reversed[j] === 0 ? 1 : 0;
    }
  }
  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// * 15. (883).  Projection Area of 3D Shapes ------------------------------------------
// You are given an n x n grid where we place some 1 x 1 x 1 cubes
// that are axis-aligned with the x, y, and z axes.
// Each value v = grid[i][j] represents a tower of v cubes
// placed on top of the cell (i, j).
// We view the projection of these cubes onto the xy, yz, and zx planes.
// A projection is like a shadow, that maps our 3-dimensional figure
// to a 2-dimensional plane.
// We are viewing the "shadow" when looking at the cubes from the top,
// the front, and the side.

// Return the total area of all three projections.

// Example 1:
// Input: grid = [[1,2],[3,4]]
// Output: 17
// Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.

// Example 2:
// Input: grid = [[2]]
// Output: 5

// Example 3:
// Input: grid = [[1,0],[0,2]]
// Output: 8

var projectionArea = function (grid) {
  // Area of the shadow (view from the top): count all the digits in the grid that are > than 0;
  // Area of the shadow (front view): sum up the biggest values of each row
  // Area of the shadow (side view): sum up biggest values of each column

  let topArea = grid.flat().filter((el) => el !== 0).length;
  let frontArea = 0;
  let sideArea = 0;
  let i = 0;
  let j = 0;
  let biggestColValue = -Infinity;

  // Calculating the biggest value of each row
  for (let i = 0; i < grid.length; i++) {
    frontArea += Math.max(...grid[i]);
  }

  // Calculating the biggest value of each column
  while (j < grid[0].length) {
    biggestColValue = Math.max(biggestColValue, grid[i][j]);
    i++;

    if (i > grid.length - 1) {
      sideArea += biggestColValue;
      i = 0;
      j++;
      biggestColValue = -Infinity;
    }
  }

  return topArea + frontArea + sideArea;
};

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ])
); // 17
console.log(projectionArea([[2]])); // 5
console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ])
); // 8
console.log(
  projectionArea([
    [1, 4],
    [1, 1],
  ])
); // 14

// * 16. (892). Surface Area of 3D Shapes ------------------------------------------
// You are given an n x n grid where you have placed some 1 x 1 x 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).
// After placing these cubes, you have decided to glue any directly adjacent cubes to each other,
// forming several irregular 3D shapes.
// Return the total surface area of the resulting shapes.
// Note: The bottom face of each shape counts toward its surface area.

// Example 1:
// Input: grid = [[1,2],[3,4]]
// Output: 34

// Example 2:
// Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
// Output: 32

// Example 3:
// Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
// Output: 46

const surfaceArea = function (grid) {
  let height = grid.length;
  let width = grid[0].length;
  let sum = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // Step 1: calculate surface area of each cube
      if (grid[i][j] !== 0) sum += grid[i][j] * 4 + 2;
      // eg.: if cube value = 2 that means its height = 2 and width is always 1, so the area of this particular cube is:
      // (cube height "2" * cube width "1") * 4 (for 4 sides)
      // add 1 (area of the top for each cube)
      // add 1 (area of the bottom for each cube)
      // so the total for this particular segment will be (2 * 1) * 4 + 1 + 1 or 2 * 4 + 2

      // Step 2: subtract all the adjacent sides from the sum:
      if (i > 0) sum -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
      // if we have a lower value while analyzing the grid vertically,
      // we need to subtract it from the sum twice
      // since the lower cube touches 2 faces of the adjacent cubes
      if (j > 0) sum -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
      // same thing for checking horizontally
    }
  }
  return sum;
};

console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ])
); // 34
console.log(
  surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // 32
console.log(
  surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ])
); // 46

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

// * 2. (350) Intersection of Two Arrays II ----------------------------------------------------
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = function (nums1, nums2) {
  let result = [];
  let sortedNums1 = nums1.sort((a, b) => a - b);
  let sortedNums2 = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;

  while (i < sortedNums1.length && j < sortedNums2.length) {
    if (sortedNums1[i] === sortedNums2[j]) {
      result.push(sortedNums1[i]);
      i++;
      j++;
    } else if (sortedNums1[i] < sortedNums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]

// * 3. (821). Shortest Distance to a Character ----------------------------------------------------
// Given a string s and a character c that occurs in s,
// return an array of integers answer where answer.length == s.length
// and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Example 1:
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

// Example 2:
// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]

const shortestToChar = function (s, c) {
  let result = [];
  let start = 0;
  let prevEnd;
  let end = 0;

  while (start < s.length) {
    if (end < s.length) {
      if (s[end] !== c) {
        end++;
      } else {
        while (start !== end) {
          if (
            prevEnd !== undefined &&
            Math.abs(prevEnd - start) < end - start
          ) {
            result.push(Math.abs(prevEnd - start));
          } else {
            result.push(end - start);
          }
          start++;
        }
        prevEnd = end;
        result.push(0);
        start++;
        end++;
      }
    } else {
      if (start <= s.length && prevEnd !== undefined) {
        result.push(Math.abs(prevEnd - start));
        start++;
      }
    }
  }

  return result;
};

console.log(shortestToChar("loveleetcode", "e")); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar("aaab", "b")); // [3,2,1,0]
console.log(shortestToChar("aaba", "b")); // [2,1,0,1]

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

// * 2. (217). Contains Duplicate ---------------------------------
// Given an integer array nums, return true
// if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

let containsDuplicate = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

// * 3. (88). Merge Sorted Array ---------------------------------
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
//  but instead be stored inside the array nums1.
//  To accommodate this, nums1 has a length of m + n,
//  where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored.
//  nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1.
// The 0 is only there to ensure the merge result can fit in nums1.

const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m] = nums2[i];
    m++;
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]

// * 4. (88). Third Maximum Number ---------------------------------
// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

let thirdMax = function (nums) {
  let sortedDistinctNums = Array.from(new Set(nums)).sort((a, b) => b - a);

  if (sortedDistinctNums[2] !== undefined) {
    return sortedDistinctNums[2];
  } else {
    return Math.max.apply(null, sortedDistinctNums);
  }
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1

// * 5. (506). Relative Ranks ---------------------------------
// You are given an integer array score of size n,
// where score[i] is the score of the ith athlete in a competition.
// All the scores are guaranteed to be unique.

// The athletes are placed based on their scores,
// where the 1st place athlete has the highest score,
// the 2nd place athlete has the 2nd highest score, and so on.
// The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number
// (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

const findRelativeRanks = function (score) {
  let hashTbl = {};
  let counter = 4;
  let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  let sortedScore = [...score].sort((a, b) => b - a);

  for (let i = 0; i < sortedScore.length; i++) {
    if (medals[i] !== undefined) {
      hashTbl[sortedScore[i]] = medals[i];
    } else {
      hashTbl[sortedScore[i]] = counter.toString();
      counter++;
    }
  }

  return score.map((el) => hashTbl[el]);
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

// * 6. (561). Array Partition ---------------------------------
// Given an integer array nums of 2n integers, group these integers into n pairs
// (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
// Return the maximized sum.

// Example 1:
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

const arrayPairSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0, j = 1; j < sorted.length; i += 2, j += 2) {
    result += Math.min(sorted[i], sorted[j]);
  }
  return result;
};

console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9

// * 7. (628). Maximum Product of Three Numbers ---------------------------------
// Given an integer array nums, find three numbers whose product is maximum
// and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

const maximumProduct = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  // If the array is filled with only negative or only positive integers
  let product1 =
    sorted[sorted.length - 1] *
    sorted[sorted.length - 2] *
    sorted[sorted.length - 3];
  // If the array is filled with mixed integers: positive and negative
  let product2 = sorted[0] * sorted[1] * sorted[sorted.length - 1];

  return product1 > product2 ? product1 : product2;
};

console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, -2, -3])); // -6
console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); // 39200

// * 8. (645). Set Mismatch ------------------------------------------
// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated
// to another number in the set,
// which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them
// in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]

const findErrorNums = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      // push the duplicated number into the result array
      result.push(sorted[i]);
      // check the missing number in the range from 1 to sorted[i]
      for (let j = 1; j < sorted[i]; j++) {
        if (!sorted.includes(j)) {
          result.push(j);
        }
      }
      //  check the missing number in the range from sorted[i] to the sorted.length
      for (let k = sorted[i]; k <= sorted.length; k++) {
        if (!sorted.includes(k)) {
          result.push(k);
        }
      }
    }
  }

  return result;
};

console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
console.log(findErrorNums([1, 1])); // [1, 2]
console.log(findErrorNums([2, 2])); // [2, 1]
console.log(findErrorNums([3, 2, 3, 4, 6, 5])); // [3,1]
console.log(findErrorNums([1, 2, 3, 3, 5])); // [3, 4]

// * 9. (747). Largest Number At Least Twice of Others ------------------------------------------
// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice
// as much as every other number in the array.
// If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

var dominantIndex = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);

  let largest = sorted.pop();
  let secondLargest = sorted.pop();
  let diff = largest - secondLargest;

  return diff >= secondLargest ? nums.indexOf(largest) : -1;
};

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1

// * 10. (905). Sort Array By Parity ------------------------------------------
// Given an integer array nums, move all the even integers at the beginning of the array
// followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:
// Input: nums = [0]
// Output: [0]

const sortArrayByParity = function (nums) {
  let result = [];

  for (let elem of nums) {
    if (elem % 2 === 0) {
      result.unshift(elem);
    } else {
      result.push(elem);
    }
  }
  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1] (or [4,2,3,1], or [2,4,1,3], or [4,2,1,3])
console.log(sortArrayByParity([0])); // [0]

// * 11. (922). Sort Array By Parity II ------------------------------------------
// Given an array of integers nums, half of the integers in nums are odd,
// and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd,
// and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example 1:
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Example 2:
// Input: nums = [2,3]
// Output: [2,3]

const sortArrayByParityII = function (nums) {
  let oddNums = [];
  let evenNums = [];

  for (let elem of nums) {
    if (elem % 2 === 0) {
      evenNums.push(elem);
    } else {
      oddNums.push(elem);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = evenNums.shift();
    } else {
      nums[i] = oddNums.shift();
    }
  }

  return nums;
};

console.log(sortArrayByParityII([4, 2, 5, 7])); // [4,5,2,7]
console.log(sortArrayByParityII([2, 3])); // [2, 3]

// * 12. (977). Squares of a Sorted Array ------------------------------------------
// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = function (nums) {
  return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map((num) => num * num);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]

// * 13. (1051). Height Checker ------------------------------------------
// A school is trying to take an annual photo of all the students.
// The students are asked to stand in a single file line in non-decreasing order by height.
// Let this ordering be represented by the integer array expected where expected[i]
// is the expected height of the ith student in line.

// You are given an integer array heights representing the current order
// that the students are standing in.
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

var heightChecker = function (heights) {
  // slice() creates a shallow copy of the input array,
  // so the input array remains the same
  let expected = heights.slice().sort((a, b) => a - b);
  let counter = 0;
  console.log(heights);
  console.log(expected);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) counter++;
  }

  return counter;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); // 0

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

// * 4. 724. Find Pivot Index ---------------------------------
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left
// of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0
// because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const pivotIndex = function (nums) {
  let leftSum, rightSum;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      leftSum = calculateSum(nums.slice(0, i));
    } else {
      leftSum = 0;
    }

    if (i < nums.length - 1) {
      rightSum = calculateSum(nums.slice(i + 1));
    } else {
      rightSum = 0;
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

const calculateSum = (arr) => {
  return arr.reduce((acc, el) => acc + el, 0);
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([-1, -1, 0, 0, -1, -1])); // 2

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

// * 4. Check if Bitwise OR Has Trailing Zeros -----------------------------------
// You are given an array of positive integers nums.
// You have to check if it is possible to select two or more elements in the array
// such that the bitwise OR of the selected elements
// has at least one trailing zero in its binary representation.

// For example, the binary representation of 5,
// which is "101", does not have any trailing zeros,
// whereas the binary representation of 4, which is "100",
// has two trailing zeros.

// Return true if it is possible to select two or more elements
// whose bitwise OR has trailing zeros, return false otherwise.

// Example:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: If we select the elements 2 and 4, their bitwise OR is 6,
// which has the binary representation "110" with one trailing zero.

const hasTrailingZeros = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let binaryOR = (nums[i] | nums[j]).toString(2);

      if (binaryOR[binaryOR.length - 1] === "0") return true;
    }
  }

  return false;
};

console.log(hasTrailingZeros([1, 2, 3, 4, 5])); // true
console.log(hasTrailingZeros([2, 4, 8, 16])); // true
console.log(hasTrailingZeros([1, 3, 5, 7, 9])); // false

// * 5 . (1018). Binary Prefix Divisible By 5 ------------------------------------------
// You are given a binary array nums (0-indexed).
// We define xi as the number whose binary representation
// is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

// For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
// Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

// Example 1:
// Input: nums = [0,1,1]
// Output: [true,false,false]
// Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
// Only the first number is divisible by 5, so answer[0] is true.

// Example 2:
// Input: nums = [1,1,1]
// Output: [false,false,false]

const prefixDivBy5 = function (nums) {
  let result = [];
  let currentNum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentNum = (currentNum * 2 + nums[i]) % 5;
    result.push(currentNum === 0);
  }
  return result;
};

console.log(prefixDivBy5([0, 1, 1])); // [true,false,false]
console.log(prefixDivBy5([1, 1, 1])); // [false,false,false]

// ! =============== Greedy Algorithm ==============

// * 1. (976). Largest Perimeter Triangle

// Given an integer array nums,
// return the largest perimeter of a triangle with a non-zero area,
// formed from three of these lengths.
// If it is impossible to form any triangle of a non-zero area,
// return 0.
// The sum of any two sides greater than third side

// Example 1:
// Input: nums = [2,1,2]
// Output: 5
// Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

// Example 2:
// Input: nums = [1,2,1,10]
// Output: 0
// Explanation:
// You cannot use the side lengths 1, 1, and 2 to form a triangle.
// You cannot use the side lengths 1, 1, and 10 to form a triangle.
// You cannot use the side lengths 1, 2, and 10 to form a triangle.
// As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

var largestPerimeter = function (nums, sorted = false) {
  if (nums.length === 0) return 0;

  if (nums.includes(0) || !sorted) {
    nums = nums.filter((el) => el !== 0).sort((a, b) => a - b);
    sorted = true;
  }

  let firstIdx = nums.length - 1;
  let secondIdx = nums.length - 2;
  let thirdIdx = nums.length - 3;

  let firstSide = nums[firstIdx];
  let secondSide = nums[secondIdx];
  let thirdSide = nums[thirdIdx];

  // validation
  if (thirdSide + secondSide > firstSide) {
    return firstSide + secondSide + thirdSide;
  } else {
    // remove the last elem
    return largestPerimeter(nums.slice(0, nums.length - 1), sorted);
  }
};

console.log(largestPerimeter([2, 1, 2])); // 5
console.log(largestPerimeter([1, 2, 1, 10])); //  0
console.log(largestPerimeter([3, 6, 2, 3])); // 8

// * 2. (594). Longest Harmonious Subsequence
// We define a harmonious array as an array where the difference
// between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array
// by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2

// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0

let findLHS = function (nums) {
  let hashTable = {};
  let maxLength = 0;

  for (let num of nums) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  for (const [key, val] of Object.entries(hashTable)) {
    if (hashTable[key - 1]) {
      maxLength = Math.max(maxLength, hashTable[key - 1] + val);
    }
  }
  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0

// * 3. (605). Can Place Flowers ---------------------------------
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's,
// where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed
// without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = function (flowerbed, n) {
  let counter = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined) &&
      counter > 0
    ) {
      counter--;
      flowerbed[i] = 1;
    }

    if (counter === 0) return true;
  }

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)); // true

// * 4. (860). Lemonade Change ---------------------------------
// At a lemonade stand, each lemonade costs $5.
// Customers are standing in a queue to buy from you and order one at a time
// (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer
// so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays,
// return true if you can provide every customer with the correct change, or false otherwise.

// Example 1:
// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.

const lemonadeChange = function (bills) {
  let collectedFives = 0;
  let collectedTens = 0;

  for (let elem of bills) {
    if (elem === 5) {
      collectedFives += 1;
    } else if (elem === 10) {
      if (collectedFives <= 0) {
        return false;
      } else if (collectedFives > 0) {
        collectedFives -= 1;
        collectedTens += 1;
      }
    } else {
      if (collectedFives <= 0) {
        return false;
      } else {
        if (collectedTens > 0 && collectedFives >= 1) {
          collectedTens -= 1;
          collectedFives -= 1;
        } else if (collectedTens <= 0 && collectedFives >= 3) {
          collectedFives -= 3;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false

// * 5. (1005). Maximize Sum Of Array After K Negations ------------------------------------------
// Given an integer array nums and an integer k,
// modify the array in the following way:
// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times.
// You may choose the same index i multiple times.
// Return the largest possible sum of the array after modifying it in this way.

// Example 1:
// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].

// Example 2:
// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].

// Example 3:
// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].

const largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let counter = 0;
  let i = 0;

  while (counter !== k) {
    nums[i] *= -1;
    counter++;
    if (nums[i + 1] > 0 || nums[i + 1] === undefined) {
      if (nums[i + 1] > nums[i] || nums[i + 1] === undefined) {
        i--;
      }
    }
    i++;
  }

  return nums.reduce((acc, elem) => acc + elem, 0);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1)); // 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // 6
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // 13
console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3)); // 11
console.log(largestSumAfterKNegations([8, -7, -3, -9, 1, 9, -6, -9, 3], 8)); // 53
console.log(largestSumAfterKNegations([-4, -2, -3], 4)); // 5

// * 6. (1013). Partition Array Into Three Parts With Equal Sum ------------------------------------------
// Given an array of integers arr, return true if we can partition the array
// into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes
// i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:
// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// Example 2:
// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false

// Example 3:
// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

const canThreePartsEqualSum = function (arr) {
  let totalSum = arr.reduce((acc, el) => acc + el, 0);
  if (totalSum % 3 !== 0) return false;

  let goal = Math.floor(totalSum / 3);
  let sum = 0;
  let parts = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === goal) {
      sum = 0;
      parts++;
    }

    if (parts === 3) return true;
  }
  return false;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // true
console.log(canThreePartsEqualSum([18, 12, -18, 18, -19, -1, 10, 10])); // true
console.log(canThreePartsEqualSum([12, -4, 16, -5, 9, -3, 3, 8, 0])); // true
console.log(
  canThreePartsEqualSum([10, -7, 13, -14, 30, 16, -3, -16, -27, 27, 19])
); // true
console.log(canThreePartsEqualSum([1, -1, 1, -1])); // false
console.log(canThreePartsEqualSum([0, 0, 0, 0])); // true
console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10])); // true

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

// ! =============== Binary Search ==============
// * 1. (704) Binary Search -----------------------------------
// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 4)); // -1
console.log(search([5], 5)); // 0

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

// * 2. Pascal's Triangle II -----------------------------------
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

const getRow = function (rowIndex) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];
    // Filling out first and last elements
    row[0] = 1;
    row[i] = 1;

    // Filling out numbers in the middle of a row
    for (let j = 1; j < i; j++) {
      let leftVal = result[i - 1][j - 1];
      let rightVal = result[i - 1][j];
      row[j] = leftVal + rightVal;
    }

    result.push(row);
    counter++;
  }

  if (counter === rowIndex + 1) return result[rowIndex];
};

console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1, 1]

// * 3. (121) Best Time to Buy and Sell Stock -----------------------------------
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxDiff = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxDiff = Math.max(maxDiff, prices[i] - minPrice);
    }
  }

  return maxDiff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// * 4. (746) Min Cost Climbing Stairs -----------------------------------
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

const minCostClimbingStairs = function (cost) {
  // start looping from the 3re element to the end go to the beginning
  // change the value of each element by summing it up
  // with the lowest cost[i+1], cost [i+2] element
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6

// ! =============== Design ==============

// * 1. (303). Range Sum Query - Immutable -----------------------------------
// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive
// where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums
// between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:
// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

let NumArray = function (nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function (left, right) {
  let slicedArr = this.nums.slice(left, right + 1);
  return slicedArr.reduce((acc, el) => (acc += el), 0);
};

// * 2. (705). Design HashSet ------------------------------------------
// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet.
// If key does not exist in the HashSet, do nothing.

// Example 1:
// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation:
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)
var MyHashSet = function () {
  this.hashSet = new Set([]);
};

MyHashSet.prototype.add = function (key) {
  this.hashSet.add(key);
};

MyHashSet.prototype.remove = function (key) {
  this.hashSet.delete(key);
};

MyHashSet.prototype.contains = function (key) {
  return this.hashSet.has(key);
};

// * 3. (706). Design HashMap ------------------------------------------
// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:
// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap.
// If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1
// if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value
// if the map contains the mapping for the key.

// Example 1:
// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

const MyHashMap = function () {
  this.hashMap = new Map([]);
};

MyHashMap.prototype.put = function (key, value) {
  this.hashMap.set(key, value);
};

MyHashMap.prototype.get = function (key) {
  return this.hashMap.has(key) ? this.hashMap.get(key) : -1;
};

MyHashMap.prototype.remove = function (key) {
  this.hashMap.delete(key);
};

// ! =============== Divide and Conquer ==============

// * 1. (108). Convert Sorted Array to Binary Search Tree ------------------------------------------
// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;
  const mid = Math.floor((left + right) / 2);
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums, left, mid - 1), // here, right will eventually become < left
    sortedArrayToBST(nums, mid + 1, right) //
  );
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); //  [0,-3,9,-10,null,5] or [0,-10,5,null,-3,null,9]
console.log(sortedArrayToBST([1, 3])); // [3,1] or [3,1], or [1,null,3]

// ! =============== Trees ==============

// ! =============== Linked List ==============

// ! =============== DFS, BFS ==============

