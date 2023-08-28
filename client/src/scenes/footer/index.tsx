import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

type Props = {};

const Footer = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="1rem"
    >
      <CopyrightIcon sx={{ fontSize: 16, marginRight: "0.5rem" }} />
      <Typography>
        Made by Vishwas Saini and Ujjwal Shaw
      </Typography>
    </Box>
  );
};

export default Footer;
