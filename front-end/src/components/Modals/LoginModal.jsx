import { useState } from 'react';
import {
  Backdrop, Box, Modal, Fade, Button,
} from '@mui/material';
import { LoginForm } from 'components/Forms';
import { loginModalStyle } from './LoginModal.style';

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
            <LoginForm />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
