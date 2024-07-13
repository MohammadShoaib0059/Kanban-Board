import React from 'react';
import MuiModal from '@mui/material/Modal';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  sx?: object;
  // Add other props as needed
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, sx }) => {
  return (
    <MuiModal open={open} onClose={onClose} sx={sx}>
      <div>
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
