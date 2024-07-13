import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const TaskTitle = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
}));

export const CardHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '5px',
  marginBottom: '15px',
});

export const TaskDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '15px',
});

export const TaskDueDate = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const TaskAssignees = styled('div')({
  display: 'flex',
  gap: '8px',
});
