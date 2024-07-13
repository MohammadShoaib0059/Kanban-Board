import React from 'react';
import MuiInputLabel from '@mui/material/InputLabel';

interface InputLabelProps {
  id: string;
  children: React.ReactNode;
  // Add other props as needed
}

const InputLabel: React.FC<InputLabelProps> = ({ id, children }) => {
  return (
    <MuiInputLabel id={id}>
      {children}
    </MuiInputLabel>
  );
};

export default InputLabel;
