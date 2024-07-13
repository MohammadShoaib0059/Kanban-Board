import React, { forwardRef } from 'react';
import MuiGrid from '@mui/material/Grid';
import { SxProps, Theme } from '@mui/system';

interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: boolean | 'auto' | number;
  sm?: boolean | 'auto' | number;
  md?: boolean | 'auto' | number;
  lg?: boolean | 'auto' | number;
  xl?: boolean | 'auto' | number;
  spacing?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  sx?: SxProps<Theme>;
  ref?: React.Ref<any>;
  // Add other props as needed
}

const Grid = forwardRef<HTMLElement, GridProps>((props, ref) => {
  return <MuiGrid ref={ref} {...props}>{props.children}</MuiGrid>;
});

export default Grid;
