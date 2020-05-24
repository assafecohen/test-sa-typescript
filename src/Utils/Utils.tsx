import React from 'react';
import GridCell from '../components/TableGrid/GridCell/GridCell';

//Building & filling grid with GridCell components
export const buildGrid = (gridSize: number): JSX.Element[][] | undefined => {
  let newGrid: JSX.Element[][] = [[]];
  for (let i = 0; i < gridSize; i++) {
    newGrid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      newGrid[i][j] = <GridCell lifeStatus={generateRandomLife()} />;
    }
  }
  return newGrid;
};

//Generate Random number with 15% for true(Alive Status)
export const generateRandomLife = () => {
  return Math.random() >= 0.85;
};

//Creating newGeneration base on prev one
export const nextGeneration = (
  prevGeneration: JSX.Element[][] | undefined
): JSX.Element[][] => {
  const updatedGeneration = prevGeneration!.map((column, i) => {
    return column.map((cell, j) => {
      let { lifeStatus } = cell.props;
      const aliveCounter = getAliveNeighbors(i, j, prevGeneration!);
      if (lifeStatus) {
        lifeStatus = newAliveCellStatus(aliveCounter);
      } else {
        lifeStatus = newDeadCellStatus(aliveCounter);
      }
      return <GridCell lifeStatus={lifeStatus} key={`${i}${j}`} />;
    });
  });
  return updatedGeneration;
};
//Return the amount of live neighbors for each cell
export const getAliveNeighbors = (
  i: number,
  j: number,
  grid: JSX.Element[][]
): number => {
  let aliveCounter: number = 0;
  aliveCounter += grid[i - 1] ? checkCellStatus(grid[i - 1][j - 1]) : 0;
  aliveCounter += grid[i - 1] ? checkCellStatus(grid[i - 1][j]) : 0;
  aliveCounter += grid[i - 1] ? checkCellStatus(grid[i - 1][j + 1]) : 0;
  aliveCounter += grid[i] ? checkCellStatus(grid[i][j - 1]) : 0;
  aliveCounter += grid[i] ? checkCellStatus(grid[i][j + 1]) : 0;
  aliveCounter += grid[i + 1] ? checkCellStatus(grid[i + 1][j - 1]) : 0;
  aliveCounter += grid[i + 1] ? checkCellStatus(grid[i + 1][j]) : 0;
  aliveCounter += grid[i + 1] ? checkCellStatus(grid[i + 1][j + 1]) : 0;
  return aliveCounter;
};

//Checking live cell with the rules inside the assignment
export const newAliveCellStatus = (aliveNeighbors: number): boolean => {
  switch (aliveNeighbors) {
    case 0:
    case 1:
      return false;
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
};
//Checking dead with when the rulew                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             inside the assignment
export const newDeadCellStatus = (aliveNeighbors: number): boolean => {
  const status = aliveNeighbors === 3 ? true : false;
  return status;
};

// Recive Cell , Return Cell Status
export const checkCellStatus = (cell: JSX.Element): number => {
  if (!cell || !cell.props.lifeStatus) return 0;
  return 1;
};
