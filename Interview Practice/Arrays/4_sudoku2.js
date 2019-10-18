//  Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers
// in such a way that each column, each row, and each of the nine 3 × 3 sub-grids
// that compose the grid all contain all of the numbers from 1 to 9 one time.
// 
// Implement an algorithm that will check whether the given grid of numbers 
//  represents a valid Sudoku puzzle according to the
//  layout rules described above. Note that the puzzle represented
//  by grid does not have to be solvable.

function sudoku2(grid) {
  return (
    validateRows(grid) &&
    validateRows(rotateGrid(grid)) &&
    validateSubGrids(grid)
  );
}

function validateRows(grid) {
  let valid = true;

  for (const row of grid) {
    if (!valid) {
      break;
    }

    let dict = {};

    row.filter(item => item !== ".").forEach(item => {
      if (dict[item]) {
        valid = false;
      } else {
        dict[item] = 1;
      }
    });
  }

  return valid;
}

function rotateGrid(grid) {
  return grid.map((inArr, i) => {
    const newArr = [];

    for (const arr of grid) {
      newArr.push(arr[i]);
    }

    return newArr.reverse();
  });
}

function validateSubGrids(grid) {
  const subGrids = [];
  const getSubGridRow = function(grid, curRow, curCol) {
    const currentSubGrid = [];

    for (let row = curRow; row < curRow + 3; row++) {
      for (let col = curCol; col < curCol + 3; col++) {
        currentSubGrid.push(grid[row][col]);
      }
    }
    return currentSubGrid;
  };

  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid.length; j += 3) {
      subGrids.push(getSubGridRow(grid, i, j));
    }
  }

  return validateRows(subGrids);
}