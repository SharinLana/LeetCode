/* MEDIUM */

// ! =============== Pure Arrays ===================

// * 1. Watering Plants ---------------------
// You want to water n plants in your garden with a watering can.
// The plants are arranged in a row and are labeled from 0 to n - 1
// from left to right where the ith plant is located at x = i.
// There is a river at x = -1 that you can refill your watering can at.
// Each plant needs a specific amount of water.
// You will water the plants in the following way:
// Water the plants in order from left to right.
// After watering the current plant,
// if you do not have enough water to completely water the next plant,
// return to the river to fully refill the watering can.
// You cannot refill the watering can early.

// You are initially at the river (i.e., x = -1).
// It takes one step to move one unit on the x-axis.

// Given a 0-indexed integer array plants of n integers,
// where plants[i] is the amount of water the ith plant needs,
// and an integer capacity representing the watering can capacity,
// return the number of steps needed to water all the plants.

// Input: plants = [2,2,3,3], capacity = 5
// Output: 14
// Explanation: Start at the river with a full watering can:
// - Walk to plant 0 (1 step) and water it. Watering can has 3 units of water.
// - Walk to plant 1 (1 step) and water it. Watering can has 1 unit of water.
// - Since you cannot completely water plant 2, walk back to the river to refill (2 steps).
// - Walk to plant 2 (3 steps) and water it. Watering can has 2 units of water.
// - Since you cannot completely water plant 3, walk back to the river to refill (3 steps).
// - Walk to plant 3 (4 steps) and water it.
// Steps needed = 1 + 1 + 2 + 3 + 3 + 4 = 14.

// O(N)
var wateringPlants = function (plants, capacity) {
  // Save the original capacity for refilling the can
  let originalCapacity = capacity;

  // Set the necessary steps
  let totalSteps = 0;
  let stepsToTheRiverAndBack = 0;

  // Iterate through the array of plants starting from the river (index -1)
  for (let i = -1; i < plants.length - 1; i++) {
    // If the upcoming plant is larger than the water capacity,
    // step back to -1, then return and calculate the total steps made
    if (plants[i + 1] > capacity) {
      stepsToTheRiverAndBack = (i + 1) * 2;
      totalSteps = totalSteps + stepsToTheRiverAndBack;

      // refill the watering can
      capacity = originalCapacity;
    }
    // Make a step toward the next plant
    totalSteps += 1;
    // Calculate the remaining water based on the next plant size
    capacity = capacity - plants[i + 1];
  }

  return totalSteps;
};

console.log(wateringPlants([2, 2, 3, 3], 5)); // 14
console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4)); // 30
console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)); // 49

// * 2. Number of Times Binary String is Prefix-Aligned ---------------------
// You have a 1-indexed binary string of length n where all the bits are 0 initially.
// We will flip all the bits of this binary string
// (i.e., change them from 0 to 1) one by one.
// You are given a 1-indexed integer array flips
// where flips[i] indicates that the bit at index i will be flipped in the ith step.

// A binary string is prefix-aligned if, after the ith step,
// all the bits in the inclusive range [1, i] are ones
// and all the other bits are zeros.
// Return the number of times the binary string is prefix-aligned during the flipping process.

// Example:
// Input: flips = [4,1,2,3]
// Output: 1
// Explanation: The binary string is initially "0000".
// After applying step 1: The string becomes "0001", which is not prefix-aligned.
// After applying step 2: The string becomes "1001", which is not prefix-aligned.
// After applying step 3: The string becomes "1101", which is not prefix-aligned.
// After applying step 4: The string becomes "1111", which is prefix-aligned.
// We can see that the string was prefix-aligned 1 time, so we return 1.

var numTimesAllBlue = function (flips) {
  let end = 0;
  let count = 0;
  let result = 0;

  for (let flip of flips) {
    end = Math.max(end, flip); // based on the first test: (end = 0, flip = 3), (end = 3, flip = 2), (end = 3, flip = 4), (end = 4, flip = 1), (end = 4, flip = 5),
    count += 1; // 1 // 2 // 3 // 4 // 5 (compare these numbers to the values of end above)
    if (end !== count) continue;
    // when end === count, increase result by 1
    result += 1;
  }
  return result;
};

console.log(numTimesAllBlue([3, 2, 4, 1, 5])); // 2
console.log(numTimesAllBlue([4, 1, 2, 3])); // 1
console.log(numTimesAllBlue([1])); // 1
