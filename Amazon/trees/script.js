// * 1. Breadth First Search, Level Order ------------------------------------------
// Given the root of a binary tree, return its level order traversal.
// In a level order traversal, nodes are visited level by level from left to right.
// This means we visit all nodes at depth 0 first, followed by all nodes at depth 1,
// and so on, moving from left to right within each level.

const bfsLevelOrder = (root) => {
  if (!root) return [];

  let data = [];
  let queue = [root];

  while (queue.length) {
    let level = [];
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    data.push(level);
  }
  return data;
};

// * 2. The Lowest Common Ancestor of Two Nodes ------------------------------------------
// Given a binary search tree (BST) and two node values,
// find the Lowest Common Ancestor (LCA) of these two nodes.
// The LCA of two nodes in a BST is the deepest node that has both nodes as descendants.

// In a BST, for any given node:
// - The left subtree contains values smaller than the node’s value.
// - The right subtree contains values larger than the node’s value.
/*
        6
       / \
      2   8
     / \ / \
    0  4 7  9
      / \
     3   5
*/
// Finding LCA of 2 and 8:
// - Start at 6: p = 2, q = 8
// - Both p and q are on different sides of 6, so 6 is the LCA.

const lowestCommonAncestor = (root, p, q) => {
  let current = root;

  while (current !== null) {
    if (p < current.val && q < current.val) {
      current = current.left;
    } else if (p > current.val && q > current.val) {
      current = current.right;
    } else {
      return current.val;
    }
  }

  return null;
};

// * 3.  ------------------------------------------
// Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST).
// A binary tree is considered a valid BST if:

// - The left subtree of a node only contains nodes with values less than the node’s value.
// - The right subtree of a node only contains nodes with values greater than the node’s value.
// - Both the left and right subtrees must also be valid BSTs.

/* 

        10
       /  \
      5   15
         /  \
        6   20

Will return false

*/

const isValidBST = (root, min = -Infiity, max = Infinity) => {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );

  /*
  Explanation:

  isValidBST(10, -Infinity, Infinity) 
    -Infinity < 10 < Infinity // * valid
  
  * Checking the left side of the tree
  isValidBST(5, -Infinity, 10) 
    -Infinity < 5 < 10 // * valid
  
  isValidBST(null, -Infinity, 5) 
    if root === null return true // * valid

  isValidBST(null, 5, Infinity) 
    if root === null return true // * valid

  * Checking the right side of the tree
  isValidBST(15, 10, Infinity) 
    10 < 15 < Infinity // * valid
  
  isValidBST(6, 10, 15) //* checking the LEFT side of the root 15 (10 is inherited from the previous step)
    10 < 6 < 15 // ! false
  */
};

// * 4.  ------------------------------------------

// * 5.  ------------------------------------------

// * 6.  ------------------------------------------

// * 7.  ------------------------------------------

// * 8.  ------------------------------------------
