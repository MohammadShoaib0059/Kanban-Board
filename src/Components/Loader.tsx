import React from 'react';
import { CircularProgress } from '@mui/material';
import {Controls} from '../Common/imports';

const Loader: React.FC = () => {
  return (
    <Controls.Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Controls.Typography ><CircularProgress size={70} /></Controls.Typography>
    </Controls.Box>
  );
};

export default Loader;
