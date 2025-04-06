import { Box, Grid } from "@mui/material";
import React from "react";

interface MainLayoutProps {
  selectedLayout: number
}

const MainLayout = ({ selectedLayout }: MainLayoutProps) => {
  return (
    <Box>
      <Grid container direction="column" justifyContent="flex-start">
        <Grid>
          PART 1
        </Grid>
        <Grid>PART 2</Grid>
        <Grid>PART 3</Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
