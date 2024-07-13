import React, { forwardRef } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

interface PaperProps extends MuiPaperProps {
  children: React.ReactNode;
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(({ children, ...rest }, ref) => {
  return (
    <MuiPaper ref={ref} {...rest}>
      {children}
    </MuiPaper>
  );
});

export default Paper;
