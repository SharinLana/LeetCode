// * 1.  ------------------------------------------
// Given a 2D grid of characters representing a map where:

// '1' represents land, and
// '0' represents water,
// an island is defined as a group of connected '1's (land)
// connected horizontally or vertically (not diagonally).
// The task is to count the total number of distinct islands in the grid.

// The grid is surrounded by water outside its boundaries.
// Each cell can be visited only once to avoid recounting.

// Example 1:
// grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"]
// ]
// Output: 3

// Example 2:
// grid = [
//   ["1", "0", "0", "1"],
//   ["0", "0", "1", "0"],
//   ["1", "1", "0", "0"],
//   ["0", "0", "1", "1"]
// ]
// Output: 5

const getIslandsNumber = (grid) => {
  if (!grid || !grid.length) return 0;

  let islands = 0;

  // Convert grid[i][j] and all the adjacent cells to 0's
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    // make grid[i][j] = 0 to avoid repeated computation
    grid[i][j] = "0";

    // Repeat the zeroing process for the adjacent cells
    dfs(i + 1, j); // top
    dfs(i - 1, j); // bottom
    dfs(i, j + 1); // right
    dfs(i, j - 1); // left
  };

  // Traverse the grid, and if a cell === 1
  // check all its adjacent cells, transform them into 0's
  // and add 1 to the counter.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islands += 1;
        dfs(i, j); // zero out the current cell and all the adjacent cells
      }
    }
  }

  return islands;
};

console.log(
  getIslandsNumber([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3

console.log(
  getIslandsNumber([
    ["1", "0", "0", "1"],
    ["0", "0", "1", "0"],
    ["1", "1", "0", "0"],
    ["0", "0", "1", "1"],
  ])
); // 5

// * 2.  ------------------------------------------

// * 3.  ------------------------------------------

// * 4.  ------------------------------------------

// * 5.  ------------------------------------------

// * 6.  ------------------------------------------

// * 7.  ------------------------------------------

// * 8.  ------------------------------------------
