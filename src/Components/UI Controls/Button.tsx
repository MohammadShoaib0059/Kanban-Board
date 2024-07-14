import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'inherit' | 'default' | 'error' | 'info' | 'success' | 'warning';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  sx?: object;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  onClick,
  type = 'button',
  fullWidth = false,
  sx,
  children,
}) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      sx={sx}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
