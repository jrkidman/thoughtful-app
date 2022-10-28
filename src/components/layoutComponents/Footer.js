import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      bgcolor="#a9b386"
      width="100%"
      height="80px"
      // p="40px"
      position="relative"
      bottom="0px"
      sx={{ flexGrow: 1 }}
    >
      <Typography
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        alignContent="center"

        // textAlign="center"
        color="white"
        fontFamily="Oswald"
      >Be Thoughtful </Typography>

    </Box>
  );
}

export default Footer;