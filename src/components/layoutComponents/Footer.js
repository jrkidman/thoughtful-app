import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      bgcolor="#a9b386"
      width="100%"
      p="40px"
      position="relative"
      bottom="0px"
    >
      <Typography
        fontWeight="bold"
        align="center"
        color="white"
        fontFamily="Oswald"

      >Be Thoughtful </Typography>

    </Box>
  );
}

export default Footer;