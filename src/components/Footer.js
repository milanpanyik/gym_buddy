import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/gymbuddy-logo.png";

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="#fff3f4" width="100%" p="0">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made With 💪🏼 By Milan Panyik
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
