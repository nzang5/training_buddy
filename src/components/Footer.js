import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="100px" bgcolor="#4C6793">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" >
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="20px" textAlign="center" pb="20px">Made & Designed with 🖤 by Nash Zangio</Typography>
  </Box>
);

export default Footer;