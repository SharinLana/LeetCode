// * 1. Product of Array Numbers Except Self ------------------------------------------
const productOfArrayExceptSelf = (arr) => {
  const length = arr.length;
  const result = new Array(length).fill(1);

  // Calculate products of elements to the left of each index
  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }

  // Calculate products of elements to the right of each index
  let rightProduct = 1;
  for (let j = length - 1; j >= 0; j--) {
    result[j] *= rightProduct;
    rightProduct *= arr[j];
  }

  return result;
};

console.log(productOfArrayExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productOfArrayExceptSelf([5, 6, 2])); // [12, 10, 30]
console.log(productOfArrayExceptSelf([2, 0, 4, 5])); // [0, 40, 0, 0]

// * 2. Rotate Array to the Right ------------------------------------------
// Given an array of integers, nums, and an integer k,
// your task is to rotate the array to the right by k steps.
// This means that the elements of the array will shift to the right,
// and the elements that go beyond the last index of the array will wrap around
// to the beginning of the array.
// The rotation should be done in-place, meaning you must modify the original array
// without using an additional array.

const rotateArrToTheRight = (nums, k) => {
  // In case k is larger than the length of the array, we use modulo to optimize.
  k = k % nums.length;

  // Helper function to reverse a portion of the array.
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  };

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the rest of the elements
  reverse(nums, k, nums.length - 1);
};

console.log(rotateArrToTheRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2]
console.log(rotateArrToTheRight([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
console.log(rotateArrToTheRight([1, 2], 3)); // [2, 1]

// * 3.  ------------------------------------------

// * 4.  ------------------------------------------

// * 5.  ------------------------------------------

// * 6.  ------------------------------------------

// * 7.  ------------------------------------------

// * 8.  ------------------------------------------
