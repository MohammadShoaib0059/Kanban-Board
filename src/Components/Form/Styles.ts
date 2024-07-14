import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

export const TaskFormContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  padding: '16px',
}));

export const FormGroup = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const FullWidthFormGroup = styled(FormGroup)({
  gridColumn: 'span 3',
});

export const SubmitButton = styled(Button)({
  padding: '12px 20px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

export const ResponsiveTaskFormContainer = styled(TaskFormContainer)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    '& .full-width': {
      gridColumn: 'span 1',
    },
  },
}));
