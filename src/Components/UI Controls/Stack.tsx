import React from 'react';
import MuiStack from '@mui/material/Stack';

interface StackProps {
  children: React.ReactNode;
  spacing?: number;
}

const Stack: React.FC<StackProps> = ({ children, spacing }) => {
  return <MuiStack spacing={spacing}>{children}</MuiStack>;
};

export default Stack;
