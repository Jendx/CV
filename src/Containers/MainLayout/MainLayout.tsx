import MAIN_LAYOUTS, { KeysOfMainLayout } from "@Constants/mainLayouts";
import CvLayout from "@Containers/CvLayout";
import { Box, Grid } from "@mui/material";
import React from "react";

interface MainLayoutProps {
  selectedLayout: KeysOfMainLayout
}

const LAYOUTS: Record<KeysOfMainLayout, React.FC> = {
  [MAIN_LAYOUTS.CV]: CvLayout,
  [MAIN_LAYOUTS.Home]: Grid, // TEMP
  [MAIN_LAYOUTS.Referals]: Grid // TEMP
}

const MainLayout = ({ selectedLayout }: MainLayoutProps) => {
  const ActiveLayout = LAYOUTS[selectedLayout]

  return (
    <Box>
      <Grid container direction="column" justifyContent="flex-start">
        <Grid>
          <ActiveLayout/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
