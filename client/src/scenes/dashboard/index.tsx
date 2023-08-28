import { useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Typography, useTheme } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const { palette } = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box height="120%" display="flex" flexDirection="column">
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
    <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="1rem"
        color={palette.grey[300]}
    >
      <CopyrightIcon sx={{ fontSize: 16, marginRight: "0.5rem" }} />
      <Typography >
        Made by Vishwas Saini and Ujjwal Shaw
      </Typography>
    </Box>
    </Box>
  );
};

export default Dashboard;
