import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

type FormAttributes = React.FormHTMLAttributes<HTMLFormElement>;

interface BoxBaseProps {
  component?: React.ElementType;
  className?: string;
  sx?: object;
  children: React.ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}

type BoxProps = BoxBaseProps & MuiBoxProps & FormAttributes;

const Box: React.FC<BoxProps> = ({
  component = 'div',
  className,
  sx,
  children,
  onSubmit,
  noValidate,
  autoComplete,
  ...rest
}) => {
  return (
    <MuiBox
      component={component}
      className={className}
      sx={sx}
      onSubmit={onSubmit}
      noValidate={noValidate}
      autoComplete={autoComplete}
      {...rest}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
