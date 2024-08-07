import * as React from "react";
import {
  BoardForm,
  TaskForm,
  Modal,
  Box,
  CloseIcon,
} from "../../Common/imports";
import { SelectorContext } from "../../Context/SelectorContext";
import { CustomModalProps } from "../../Common/Common";

const CustomModal: React.FC<CustomModalProps> = () => {
  const context = React.useContext(SelectorContext);

  if (!context) {
    throw new Error(
      "CustomModal must be used within a SelectorContext.Provider"
    );
  }

  const { handleClose, open, isNewBoard } = context;

  const handleModalClose = () => {
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{margin:"40px"}}
      >
        <Box
          className="modal-content"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Responsive width
            maxWidth: 600, // Maximum width
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={handleModalClose}
          >
            <CloseIcon />
          </Box>
          {isNewBoard ? (
            <BoardForm handleModalClose={handleModalClose} />
          ) : (
            <TaskForm handleModalClose={handleModalClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
