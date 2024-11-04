// * 1. Merge Two Sorted Lists  ------------------------------------------
// Given the heads of two sorted linked lists, merge them into a single, sorted linked list.
// The new list should contain all the nodes from both input lists in sorted order.
// Return the head of the merged linked list.

const mergeTwoSortedLists = (list1, list2) => {
  let head = new ListNode(0);
  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next; // move further in the list1
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // check if we have a node left in the list 1 or list2
  current.next = list1 !== null ? list1 : list2;
  return head.next; // return the head of the merged list
};

console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4]
console.log(mergeTwoSortedLists([], [])); // []
console.log(mergeTwoSortedLists([], [0])); // [0]
console.log(mergeTwoSortedLists([2, 3, 6], [1, 4, 5])); // [1, 2, 3, 4, 5, 6]
console.log(mergeTwoSortedLists([5, 10, 15], [2, 6, 8, 20])); // [2, 5, 6, 8, 10, 15, 20]

// * 2. If the List Contains a Cycle  ------------------------------------------
// Given the head of a linked list, determine if the list contains a cycle.
// A cycle occurs if a node in the list points back to a previous node, forming a loop.
// If there is a cycle, return true; otherwise, return false.

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow pointer by 1 step
    fast = fast.next.next; // Move fast pointer by 2 steps

    if (slow === fast) {
      // If they meet, there's a cycle
      return true;
    }
  }

  return false;
};

// * 3. Reverse a Singly Linked List ------------------------------------------
// Given the head of a singly linked list, reverse the list so that the last node becomes the first,
// the second-to-last becomes the second, and so on. Return the new head of the reversed list.

const reverseLinkedList = (head) => {
  let prev = null; // Previous node starts as null (end of the reversed list)
  let current = head; // Current node starts as the head of the original list

  while (current !== null) {
    let next = current.next; // Temporarily store the next node
    current.next = prev; // Reverse the pointer of the current node
    prev = current; // Move `prev` forward to the current node
    current = next; // Move `current` forward to the next node
  }

  return prev; // `prev` is the new head of the reversed list
};

// * 4.  ------------------------------------------

// * 5.  ------------------------------------------

// * 6.  ------------------------------------------

// * 7.  ------------------------------------------

// * 8.  ------------------------------------------
