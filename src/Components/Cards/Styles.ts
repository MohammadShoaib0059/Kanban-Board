import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
// import Paper from '../../Components/Controls/Paper';

export const ColumnContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
}));

export const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ColumnHeader = styled('div')({
  fontWeight: 'bold',
});
