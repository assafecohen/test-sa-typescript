import React, { useState, useEffect, Fragment } from 'react';
import { buildGrid, nextGeneration } from '../../Utils/Utils';
import './TableGrid.css';

const TableGrid: React.FC = (): JSX.Element => {
  const [grid, setGrid] = useState<JSX.Element[][] | undefined>(undefined);
  useEffect(() => {
    const initGrid = buildGrid(50);
    setGrid(initGrid);

    setInterval(() => {
      setGrid((grid) => nextGeneration(grid));
    }, 400);
  }, []);
  if (grid === undefined) {
    return <div>Loading</div>;
  } else {
    return <div className={'parent'}>{grid}</div>;
  }
};

export default TableGrid;
