// import { styled } from '@mui/material/styles';

// export const BoardContainer = styled('div')({
//   padding: '10px',
//   width: '80%',
//   display: 'flex',
//   flexDirection: 'column',
//   '.scroll-container': {
//     display: 'flex',
//     flexWrap: 'wrap',
//     overflowX: 'auto',
//     overflowY: 'hidden',
//     height: '100%',
//     '@media (max-width: 600px)': {
//       flexDirection: 'column',
//       overflowX: 'hidden',
//     },
//   },
// });

// export const AddBucketContainer = styled('div')({
//   textAlign: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: '10px',
//   height: '100%',
//   whiteSpace: 'nowrap',
//   '@media (max-width: 600px)': {
//     flexDirection: 'column',
//   },
// });

// export const TooltipContainer = styled('div')({
//   position: 'fixed',
//   bottom: '140px',
//   right: '50px',
//   background: 'white',
//   padding: '10px',
//   boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
//   borderRadius: '4px',
//   display: 'flex',
//   alignItems: 'center',
// });

// export const FixedFabContainer = styled('div')({
//   position: 'fixed',
//   bottom: '80px',
//   right: '50px',
// });
import { styled } from '@mui/material/styles';

export const BoardContainer = styled('div')(({ theme }) => ({
  padding: '10px',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  '.scroll-container': {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflowX: 'hidden',
    },
  },
}));

export const AddBucketContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  height: '100%',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const TooltipContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: '140px',
  right: '50px',
  background: 'white',
  padding: '10px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    right: '10px',
  },
}));

export const FixedFabContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: '80px',
  right: '50px',
  [theme.breakpoints.down('sm')]: {
    right: '10px',
  },
}));


export const BoardForm = styled('div')(({ theme }) => ({
  padding: '16px',
  marginTop: '16px',
  [theme.breakpoints.down('md')]: {
    padding: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
}));

export const BoardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const FormGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const CreateButton = styled('button')({
  marginTop: '16px',
});

export const CancelButton = styled('button')({
  marginTop: '16px',
});

