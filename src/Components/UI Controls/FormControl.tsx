import React from 'react';
import MuiFormControl from '@mui/material/FormControl';

interface FormControlProps {
  variant?: 'outlined' | 'filled' | 'standard';
  className?: string;
  children: React.ReactNode;
  sx?:object;
  // Add other props as needed
}

const FormControl: React.FC<FormControlProps> = ({
  variant = 'outlined',
  className,
  sx,
  children,
}) => {
  return (
    <MuiFormControl variant={variant} className={className} sx={sx}>
      {children}
    </MuiFormControl>
  );
};

export default FormControl;
