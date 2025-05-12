import React, { useRef } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const ConfirmModal = ({ onConfirm, onCancel }) => {
  const modal = useRef();

  const handleBackdropClick = (e) => {
    if (e.target === modal.current) {
      onCancel();
    }
  };

  return (
    <Modal
      open={true}
      onClose={onCancel}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(3px)",
      }}
    >
      <Box
        ref={modal}
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          width: 300,
          boxShadow: 24,
        }}
        onClick={handleBackdropClick}
      >
        <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
          Delete contact?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            color="success"
            onClick={onConfirm}
            sx={{
              textTransform: "none",
            }}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={onCancel}
            sx={{
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
