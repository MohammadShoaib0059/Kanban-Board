import React from 'react';
import MuiTextField from '@mui/material/TextField';

interface TextFieldProps {
  label: string;
  variant?: 'outlined' | 'filled' | 'standard';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: object;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  // Add other props as needed
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  variant = 'outlined',
  value,
  onChange,
  sx,
  onBlur,
  error,
  helperText,
  fullWidth,
  multiline,
  rows,
}) => {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      sx={sx}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
    />
  );
};

export default TextField;
