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
  let pairCounter = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && ((i * j) % k) === 0) {
        pairCounter.push([nums[i], nums[j], i * j]);
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
