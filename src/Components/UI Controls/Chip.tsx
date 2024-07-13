import React from 'react';
import MuiChip from '@mui/material/Chip';

interface ChipProps {
  label: string;
  avatar: React.ReactElement;
  key: string;
  // Add other props as needed
}

const Chip: React.FC<ChipProps> = ({ label, avatar, key }) => {
  return <MuiChip label={label} avatar={avatar} key={key} />;
};

export default Chip;
