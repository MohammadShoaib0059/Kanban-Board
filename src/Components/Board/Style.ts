import { styled } from '@mui/material/styles';

export const BoardContainer = styled('div')({
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
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      overflowX: 'hidden',
    },
  },
});

export const AddBucketContainer = styled('div')({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  height: '100%',
  whiteSpace: 'nowrap',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

export const TooltipContainer = styled('div')({
  position: 'fixed',
  bottom: '140px',
  right: '50px',
  background: 'white',
  padding: '10px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
});

export const FixedFabContainer = styled('div')({
  position: 'fixed',
  bottom: '80px',
  right: '50px',
});
