import React from 'react';
import './GridCell.css';

interface CellProps {
  lifeStatus: boolean;
}

const GridCell: React.FC<CellProps> = ({ lifeStatus }) => {
  return <div className={`child ${lifeStatus ? 'alive' : ''}`}></div>;
};

export default GridCell;
