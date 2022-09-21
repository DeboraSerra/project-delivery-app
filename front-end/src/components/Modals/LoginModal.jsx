import { useState } from 'react';
import {
  Backdrop, Box, Modal, Fade, Button, Typography,
} from '@mui/material';
import { loginModalStyle } from './LoginModal.style';

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        component="a"
        size="large"
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={loginModalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Login
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Error: Not Implemented.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
