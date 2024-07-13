import React from 'react';
import MuiCard from '@mui/material/Card';

interface CardProps {
  id: string;
  title: string;
  dueDate: string;
  assignees: string[];
}

const Card: React.FC<CardProps> = ({ id, title, dueDate, assignees }) => {
  return (
    <MuiCard>
      <div>{title}</div>
      <div>{dueDate}</div>
      <div>{assignees.join(', ')}</div>
    </MuiCard>
  );
};

export default Card;
