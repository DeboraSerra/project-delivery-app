import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export function StatusMessages({ message, type }) {
  return (
    <Box marginBottom={4}>
      <Typography
        variant="body2"
        sx={{
          color: `${type}.main`,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}

StatusMessages.propTypes = {
  message: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
