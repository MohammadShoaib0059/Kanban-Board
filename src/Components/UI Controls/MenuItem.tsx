import React from 'react';
import MuiMenuItem from '@mui/material/MenuItem';

interface MenuItemProps {
  value?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?:object

  // Add other props as needed
}

const MenuItem: React.FC<MenuItemProps> = ({ value,onClick, children }) => {
  return <MuiMenuItem value={value} onClick={onClick}>{children}</MuiMenuItem>;
};

export default MenuItem;
