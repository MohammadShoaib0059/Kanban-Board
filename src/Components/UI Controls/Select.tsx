import React, { forwardRef } from 'react';
import MuiSelect, { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';

interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  labelId: string;
  id: string;
  value: string | string[];
  onChange: (event: SelectChangeEvent<unknown>) => void;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ labelId, id, value, onChange, children, ...rest }, ref) => {
    return (
      <MuiSelect
        ref={ref}
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {children}
      </MuiSelect>
    );
  }
);

export default Select;
